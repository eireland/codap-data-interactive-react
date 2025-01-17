
/*
==========================================================================

 * Created by tim on 8/22/19.


 ==========================================================================
noaa-cdo in noaa-cdo

Author:   Tim Erickson

Copyright (c) 2018 by The Concord Consortium, Inc. All rights reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
==========================================================================

*/
import {dataTypes} from './noaaDataTypes.js';

const noaaNCEIConnect = {

    state: null,

    constants: null,

    beforeFetchHandler: null,
    fetchSuccessHandler: null,
    fetchErrorHandler: null,

    initialize: function (state, constants, handlers) {
        this.state = state;
        this.constants = constants;
        this.beforeFetchHandler = handlers.beforeFetchHandler;
        this.fetchSuccessHandler = handlers.fetchSuccessHandler;
        this.fetchErrorHandler = handlers.fetchErrorHandler;
    },

    composeURL: function() {
        const format = 'YYYY-MM-DD';

        // noinspection JSPotentiallyInvalidConstructorUsage
        const startDate = new dayjs(this.state.startDate).format(
            format);
        // noinspection JSPotentiallyInvalidConstructorUsage
        const endDate = new dayjs(this.state.endDate).format(
            format);
        if (new Date(startDate) <= new Date(endDate)) {
            // const typeNames = this.getSelectedDataTypes().map(function (dataType) {
            //     return dataType.name;
            // })
            const tDatasetIDClause = `dataset=${this.state.database}`;
            const tStationIDClause = `stations=${this.getSelectedStations().join()}`;
            const dataTypes = this.state.selectedDataTypes.filter(
                function (dt) {
                    return dt !== 'all-datatypes';
                });
            const tDataTypeIDClause = `dataTypes=${dataTypes.join()}`;
            const tstartDateClause = `startDate=${startDate}`;
            const tEndDateClause = `endDate=${endDate}`;
            const tUnitClause = `units=${this.state.unitSystem}`;
            const tFormatClause = 'format=json';

            let tURL = [this.constants.nceiBaseURL, [tDatasetIDClause, tStationIDClause, tstartDateClause, tEndDateClause, tFormatClause, tDataTypeIDClause, tUnitClause].join(
                '&')].join('?');
            console.log(`Fetching: ${tURL}`);
            return tURL
        }
    },
    doGetHandler: async function (ev) {

        noaaNCEIConnect.beforeFetchHandler();

        let tURL = noaaNCEIConnect.composeURL();

        // let tHeaders = new Headers();
        // tHeaders.append("token", noaaNCEIConnect.constants.noaaToken);
        //
        const tRequest = new Request(tURL/*, {headers: tHeaders}*/);

        try {
            if (tURL) {
                const tResult = await fetch(tRequest);
                if (tResult.ok) {
                    const theJSON = await tResult.json();
                    noaaNCEIConnect.fetchSuccessHandler(theJSON);
                } else {
                    let result = await tResult.text();
                    noaaNCEIConnect.fetchErrorHandler(tResult.statusText, result);
                }
            } else {
                noaaNCEIConnect.fetchErrorHandler('End date must be on or after start date');
            }
        } catch (msg) {
            noaaNCEIConnect.fetchErrorHandler(msg);
        }
        ev.preventDefault();
        ev.target && ev.target.blur();
        return true;
    },

    convertNOAARecordToValue: function (iRecord) {
        let out = {};
        Object.keys(iRecord).forEach(function (key) {
            let value = iRecord[key];
            let dataTypeName;
            switch (key) {
                case 'DATE':
                    dataTypeName = 'when';
                    break;
                case 'STATION':
                    dataTypeName = 'where';
                    value = this.state.selectedStation.name;
                    out.station = this.state.selectedStation;
                    break;
                default:
                    dataTypeName = dataTypes[key] && dataTypes[key].name;
            }
            if (dataTypeName) {
                out[dataTypeName] = noaaNCEIConnect.decodeData(key, value);
            }
        }.bind(this));
        return out;
    },

    getSelectedStations: function () {
        return [this.state.selectedStation && this.state.selectedStation.id];
    },

    decodeData: function (iField, iValue) {
        let result = null;
        switch (iField) {
            case "STATION":
            // const station = findStation(iValue);
            // result = station?station.name: null;
            // break;
            case "AWND":
            case "TMAX":
            case "TMIN":
            case "TAVG":
            case "SNOW":
            case "EVAP":
            case "PRCP":
                const decoder = dataTypes[iField] && dataTypes[iField].decode && dataTypes[iField].decode[this.state.database];
                result = decoder ? decoder(iValue) : iValue;
                break;
        }
        return result || iValue;
    }
};

export {noaaNCEIConnect}
