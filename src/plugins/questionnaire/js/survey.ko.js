(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("knockout"));
	else if(typeof define === 'function' && define.amd)
		define("Survey", ["knockout"], factory);
	else if(typeof exports === 'object')
		exports["Survey"] = factory(require("knockout"));
	else
		root["Survey"] = factory(root["ko"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_5__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 95);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __assign; });
/* harmony export (immutable) */ __webpack_exports__["b"] = __extends;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __decorate; });
var __assign = Object["assign"] || function (target) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
                target[p] = s[p];
    }
    return target;
};
function __extends(thisClass, baseClass) {
    for (var p in baseClass)
        if (baseClass.hasOwnProperty(p))
            thisClass[p] = baseClass[p];
    function __() { this.constructor = thisClass; }
    thisClass.prototype = baseClass === null ? Object.create(baseClass) : (__.prototype = baseClass.prototype, new __());
}
;
var __decorate = function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return JsonObjectProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return JsonMetadataClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return JsonMetadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return JsonError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return JsonUnknownPropertyError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return JsonMissingTypeErrorBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return JsonMissingTypeError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return JsonIncorrectTypeError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return JsonRequiredPropertyError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JsonObject; });

var JsonObjectProperty = (function () {
    function JsonObjectProperty(name) {
        this.name = name;
        this.typeValue = null;
        this.choicesValue = null;
        this.choicesfunc = null;
        this.className = null;
        this.alternativeName = null;
        this.classNamePart = null;
        this.baseClassName = null;
        this.defaultValue = null;
        this.readOnly = false;
        this.visible = true;
        this.serializationProperty = null;
        this.onGetValue = null;
    }
    Object.defineProperty(JsonObjectProperty.prototype, "type", {
        get: function () { return this.typeValue ? this.typeValue : "string"; },
        set: function (value) { this.typeValue = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JsonObjectProperty.prototype, "hasToUseGetValue", {
        get: function () { return this.onGetValue; },
        enumerable: true,
        configurable: true
    });
    JsonObjectProperty.prototype.isDefaultValue = function (value) {
        return (this.defaultValue) ? (this.defaultValue == value) : !(value);
    };
    JsonObjectProperty.prototype.getValue = function (obj) {
        if (this.onGetValue)
            return this.onGetValue(obj);
        if (this.serializationProperty)
            return obj[this.serializationProperty].getJson();
        return obj[this.name];
    };
    Object.defineProperty(JsonObjectProperty.prototype, "hasToUseSetValue", {
        get: function () { return this.onSetValue || this.serializationProperty; },
        enumerable: true,
        configurable: true
    });
    JsonObjectProperty.prototype.setValue = function (obj, value, jsonConv) {
        if (this.onSetValue) {
            this.onSetValue(obj, value, jsonConv);
        }
        else {
            if (this.serializationProperty)
                obj[this.serializationProperty].setJson(value);
            else
                obj[this.name] = value;
        }
    };
    JsonObjectProperty.prototype.getObjType = function (objType) {
        if (!this.classNamePart)
            return objType;
        return objType.replace(this.classNamePart, "");
    };
    JsonObjectProperty.prototype.getClassName = function (className) {
        return (this.classNamePart && className.indexOf(this.classNamePart) < 0) ? className + this.classNamePart : className;
    };
    Object.defineProperty(JsonObjectProperty.prototype, "choices", {
        get: function () {
            if (this.choicesValue != null)
                return this.choicesValue;
            if (this.choicesfunc != null)
                return this.choicesfunc();
            return null;
        },
        enumerable: true,
        configurable: true
    });
    JsonObjectProperty.prototype.setChoices = function (value, valueFunc) {
        this.choicesValue = value;
        this.choicesfunc = valueFunc;
    };
    return JsonObjectProperty;
}());

var JsonMetadataClass = (function () {
    function JsonMetadataClass(name, properties, creator, parentName) {
        if (creator === void 0) { creator = null; }
        if (parentName === void 0) { parentName = null; }
        this.name = name;
        this.creator = creator;
        this.parentName = parentName;
        this.properties = null;
        this.requiredProperties = null;
        this.properties = new Array();
        for (var i = 0; i < properties.length; i++) {
            var prop = this.createProperty(properties[i]);
            if (prop) {
                this.properties.push(prop);
            }
        }
    }
    JsonMetadataClass.prototype.find = function (name) {
        for (var i = 0; i < this.properties.length; i++) {
            if (this.properties[i].name == name)
                return this.properties[i];
        }
        return null;
    };
    JsonMetadataClass.prototype.createProperty = function (propInfo) {
        var propertyName = typeof propInfo === "string" ? propInfo : propInfo.name;
        if (!propertyName)
            return;
        var propertyType = null;
        var typeIndex = propertyName.indexOf(JsonMetadataClass.typeSymbol);
        if (typeIndex > -1) {
            propertyType = propertyName.substring(typeIndex + 1);
            propertyName = propertyName.substring(0, typeIndex);
        }
        propertyName = this.getPropertyName(propertyName);
        var prop = new JsonObjectProperty(propertyName);
        if (propertyType) {
            prop.type = propertyType;
        }
        if (typeof propInfo === "object") {
            if (propInfo.type) {
                prop.type = propInfo.type;
            }
            if (propInfo.default) {
                prop.defaultValue = propInfo.default;
            }
            if (propInfo.visible === false) {
                prop.visible = false;
            }
            if (propInfo.isRequired) {
                this.makePropertyRequired(prop.name);
            }
            if (propInfo.choices) {
                var choicesFunc = typeof propInfo.choices === "function" ? propInfo.choices : null;
                var choicesValue = typeof propInfo.choices !== "function" ? propInfo.choices : null;
                prop.setChoices(choicesValue, choicesFunc);
            }
            if (propInfo.onGetValue) {
                prop.onGetValue = propInfo.onGetValue;
            }
            if (propInfo.onSetValue) {
                prop.onSetValue = propInfo.onSetValue;
            }
            if (propInfo.serializationProperty) {
                prop.serializationProperty = propInfo.serializationProperty;
            }
            if (propInfo.className) {
                prop.className = propInfo.className;
            }
            if (propInfo.baseClassName) {
                prop.baseClassName = propInfo.baseClassName;
            }
            if (propInfo.classNamePart) {
                prop.classNamePart = propInfo.classNamePart;
            }
            if (propInfo.alternativeName) {
                prop.alternativeName = propInfo.alternativeName;
            }
        }
        return prop;
    };
    JsonMetadataClass.prototype.getPropertyName = function (propertyName) {
        if (propertyName.length == 0 || propertyName[0] != JsonMetadataClass.requiredSymbol)
            return propertyName;
        propertyName = propertyName.slice(1);
        this.makePropertyRequired(propertyName);
        return propertyName;
    };
    JsonMetadataClass.prototype.makePropertyRequired = function (propertyName) {
        if (!this.requiredProperties) {
            this.requiredProperties = new Array();
        }
        this.requiredProperties.push(propertyName);
    };
    return JsonMetadataClass;
}());

JsonMetadataClass.requiredSymbol = '!';
JsonMetadataClass.typeSymbol = ':';
var JsonMetadata = (function () {
    function JsonMetadata() {
        this.classes = {};
        this.childrenClasses = {};
        this.classProperties = {};
        this.classRequiredProperties = {};
    }
    JsonMetadata.prototype.addClass = function (name, properties, creator, parentName) {
        if (creator === void 0) { creator = null; }
        if (parentName === void 0) { parentName = null; }
        var metaDataClass = new JsonMetadataClass(name, properties, creator, parentName);
        this.classes[name] = metaDataClass;
        if (parentName) {
            var children = this.childrenClasses[parentName];
            if (!children) {
                this.childrenClasses[parentName] = [];
            }
            this.childrenClasses[parentName].push(metaDataClass);
        }
        return metaDataClass;
    };
    JsonMetadata.prototype.overrideClassCreatore = function (name, creator) {
        var metaDataClass = this.findClass(name);
        if (metaDataClass) {
            metaDataClass.creator = creator;
        }
    };
    JsonMetadata.prototype.getProperties = function (className) {
        var properties = this.classProperties[className];
        if (!properties) {
            properties = new Array();
            this.fillProperties(className, properties);
            this.classProperties[className] = properties;
        }
        return properties;
    };
    JsonMetadata.prototype.findProperty = function (className, propertyName) {
        var properties = this.getProperties(className);
        for (var i = 0; i < properties.length; i++) {
            if (properties[i].name == propertyName)
                return properties[i];
        }
        return null;
    };
    JsonMetadata.prototype.createClass = function (name) {
        var metaDataClass = this.findClass(name);
        if (!metaDataClass)
            return null;
        return metaDataClass.creator();
    };
    JsonMetadata.prototype.getChildrenClasses = function (name, canBeCreated) {
        if (canBeCreated === void 0) { canBeCreated = false; }
        var result = [];
        this.fillChildrenClasses(name, canBeCreated, result);
        return result;
    };
    JsonMetadata.prototype.getRequiredProperties = function (name) {
        var properties = this.classRequiredProperties[name];
        if (!properties) {
            properties = new Array();
            this.fillRequiredProperties(name, properties);
            this.classRequiredProperties[name] = properties;
        }
        return properties;
    };
    JsonMetadata.prototype.addProperty = function (className, propertyInfo) {
        var metaDataClass = this.findClass(className);
        if (!metaDataClass)
            return;
        var property = metaDataClass.createProperty(propertyInfo);
        if (property) {
            this.addPropertyToClass(metaDataClass, property);
            this.emptyClassPropertiesHash(metaDataClass);
        }
    };
    JsonMetadata.prototype.removeProperty = function (className, propertyName) {
        var metaDataClass = this.findClass(className);
        if (!metaDataClass)
            return false;
        var property = metaDataClass.find(propertyName);
        if (property) {
            this.removePropertyFromClass(metaDataClass, property);
            this.emptyClassPropertiesHash(metaDataClass);
        }
    };
    JsonMetadata.prototype.addPropertyToClass = function (metaDataClass, property) {
        if (metaDataClass.find(property.name) != null)
            return;
        metaDataClass.properties.push(property);
    };
    JsonMetadata.prototype.removePropertyFromClass = function (metaDataClass, property) {
        var index = metaDataClass.properties.indexOf(property);
        if (index < 0)
            return;
        metaDataClass.properties.splice(index, 1);
        if (metaDataClass.requiredProperties) {
            index = metaDataClass.requiredProperties.indexOf(property.name);
            if (index >= 0) {
                metaDataClass.requiredProperties.splice(index, 1);
            }
        }
    };
    JsonMetadata.prototype.emptyClassPropertiesHash = function (metaDataClass) {
        this.classProperties[metaDataClass.name] = null;
        var childClasses = this.getChildrenClasses(metaDataClass.name);
        for (var i = 0; i < childClasses.length; i++) {
            this.classProperties[childClasses[i].name] = null;
        }
    };
    JsonMetadata.prototype.fillChildrenClasses = function (name, canBeCreated, result) {
        var children = this.childrenClasses[name];
        if (!children)
            return;
        for (var i = 0; i < children.length; i++) {
            if (!canBeCreated || children[i].creator) {
                result.push(children[i]);
            }
            this.fillChildrenClasses(children[i].name, canBeCreated, result);
        }
    };
    JsonMetadata.prototype.findClass = function (name) {
        return this.classes[name];
    };
    JsonMetadata.prototype.fillProperties = function (name, list) {
        var metaDataClass = this.findClass(name);
        if (!metaDataClass)
            return;
        if (metaDataClass.parentName) {
            this.fillProperties(metaDataClass.parentName, list);
        }
        for (var i = 0; i < metaDataClass.properties.length; i++) {
            this.addPropertyCore(metaDataClass.properties[i], list, list.length);
        }
    };
    JsonMetadata.prototype.addPropertyCore = function (property, list, endIndex) {
        var index = -1;
        for (var i = 0; i < endIndex; i++) {
            if (list[i].name == property.name) {
                index = i;
                break;
            }
        }
        if (index < 0) {
            list.push(property);
        }
        else {
            list[index] = property;
        }
    };
    JsonMetadata.prototype.fillRequiredProperties = function (name, list) {
        var metaDataClass = this.findClass(name);
        if (!metaDataClass)
            return;
        if (metaDataClass.requiredProperties) {
            Array.prototype.push.apply(list, metaDataClass.requiredProperties);
        }
        if (metaDataClass.parentName) {
            this.fillRequiredProperties(metaDataClass.parentName, list);
        }
    };
    return JsonMetadata;
}());

var JsonError = (function () {
    function JsonError(type, message) {
        this.type = type;
        this.message = message;
        this.description = "";
        this.at = -1;
    }
    JsonError.prototype.getFullDescription = function () {
        return this.message + (this.description ? "\n" + this.description : "");
    };
    return JsonError;
}());

var JsonUnknownPropertyError = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](JsonUnknownPropertyError, _super);
    function JsonUnknownPropertyError(propertyName, className) {
        var _this = _super.call(this, "unknownproperty", "The property '" + propertyName + "' in class '" + className + "' is unknown.") || this;
        _this.propertyName = propertyName;
        _this.className = className;
        var properties = JsonObject.metaData.getProperties(className);
        if (properties) {
            _this.description = "The list of available properties are: ";
            for (var i = 0; i < properties.length; i++) {
                if (i > 0)
                    _this.description += ", ";
                _this.description += properties[i].name;
            }
            _this.description += '.';
        }
        return _this;
    }
    return JsonUnknownPropertyError;
}(JsonError));

var JsonMissingTypeErrorBase = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](JsonMissingTypeErrorBase, _super);
    function JsonMissingTypeErrorBase(baseClassName, type, message) {
        var _this = _super.call(this, type, message) || this;
        _this.baseClassName = baseClassName;
        _this.type = type;
        _this.message = message;
        _this.description = "The following types are available: ";
        var types = JsonObject.metaData.getChildrenClasses(baseClassName, true);
        for (var i = 0; i < types.length; i++) {
            if (i > 0)
                _this.description += ", ";
            _this.description += "'" + types[i].name + "'";
        }
        _this.description += ".";
        return _this;
    }
    return JsonMissingTypeErrorBase;
}(JsonError));

var JsonMissingTypeError = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](JsonMissingTypeError, _super);
    function JsonMissingTypeError(propertyName, baseClassName) {
        var _this = _super.call(this, baseClassName, "missingtypeproperty", "The property type is missing in the object. Please take a look at property: '" + propertyName + "'.") || this;
        _this.propertyName = propertyName;
        _this.baseClassName = baseClassName;
        return _this;
    }
    return JsonMissingTypeError;
}(JsonMissingTypeErrorBase));

var JsonIncorrectTypeError = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](JsonIncorrectTypeError, _super);
    function JsonIncorrectTypeError(propertyName, baseClassName) {
        var _this = _super.call(this, baseClassName, "incorrecttypeproperty", "The property type is incorrect in the object. Please take a look at property: '" + propertyName + "'.") || this;
        _this.propertyName = propertyName;
        _this.baseClassName = baseClassName;
        return _this;
    }
    return JsonIncorrectTypeError;
}(JsonMissingTypeErrorBase));

var JsonRequiredPropertyError = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](JsonRequiredPropertyError, _super);
    function JsonRequiredPropertyError(propertyName, className) {
        var _this = _super.call(this, "requiredproperty", "The property '" + propertyName + "' is required in class '" + className + "'.") || this;
        _this.propertyName = propertyName;
        _this.className = className;
        return _this;
    }
    return JsonRequiredPropertyError;
}(JsonError));

var JsonObject = (function () {
    function JsonObject() {
        this.errors = new Array();
    }
    Object.defineProperty(JsonObject, "metaData", {
        get: function () { return JsonObject.metaDataValue; },
        enumerable: true,
        configurable: true
    });
    JsonObject.prototype.toJsonObject = function (obj) {
        return this.toJsonObjectCore(obj, null);
    };
    JsonObject.prototype.toObject = function (jsonObj, obj) {
        if (!jsonObj)
            return;
        var properties = null;
        if (obj.getType) {
            properties = JsonObject.metaData.getProperties(obj.getType());
        }
        if (!properties)
            return;
        for (var key in jsonObj) {
            if (key == JsonObject.typePropertyName)
                continue;
            if (key == JsonObject.positionPropertyName) {
                obj[key] = jsonObj[key];
                continue;
            }
            var property = this.findProperty(properties, key);
            if (!property) {
                this.addNewError(new JsonUnknownPropertyError(key.toString(), obj.getType()), jsonObj);
                continue;
            }
            this.valueToObj(jsonObj[key], obj, key, property);
        }
    };
    JsonObject.prototype.toJsonObjectCore = function (obj, property) {
        if (!obj.getType)
            return obj;
        var result = {};
        if (property != null && (!property.className)) {
            result[JsonObject.typePropertyName] = property.getObjType(obj.getType());
        }
        var properties = JsonObject.metaData.getProperties(obj.getType());
        for (var i = 0; i < properties.length; i++) {
            this.valueToJson(obj, result, properties[i]);
        }
        return result;
    };
    JsonObject.prototype.valueToJson = function (obj, result, property) {
        var value = property.getValue(obj);
        if (value === undefined || value === null)
            return;
        if (property.isDefaultValue(value))
            return;
        if (this.isValueArray(value)) {
            var arrValue = [];
            for (var i = 0; i < value.length; i++) {
                arrValue.push(this.toJsonObjectCore(value[i], property));
            }
            value = arrValue.length > 0 ? arrValue : null;
        }
        else {
            value = this.toJsonObjectCore(value, property);
        }
        if (!property.isDefaultValue(value)) {
            result[property.name] = value;
        }
    };
    JsonObject.prototype.valueToObj = function (value, obj, key, property) {
        if (value == null)
            return;
        if (property != null && property.hasToUseSetValue) {
            property.setValue(obj, value, this);
            return;
        }
        if (this.isValueArray(value)) {
            this.valueToArray(value, obj, property.name, property);
            return;
        }
        var newObj = this.createNewObj(value, property);
        if (newObj.newObj) {
            this.toObject(value, newObj.newObj);
            value = newObj.newObj;
        }
        if (!newObj.error) {
            obj[property.name] = value;
        }
    };
    JsonObject.prototype.isValueArray = function (value) { return value && Array.isArray(value); };
    JsonObject.prototype.createNewObj = function (value, property) {
        var result = { newObj: null, error: null };
        var className = value[JsonObject.typePropertyName];
        if (!className && property != null && property.className) {
            className = property.className;
        }
        className = property.getClassName(className);
        result.newObj = (className) ? JsonObject.metaData.createClass(className) : null;
        result.error = this.checkNewObjectOnErrors(result.newObj, value, property, className);
        return result;
    };
    JsonObject.prototype.checkNewObjectOnErrors = function (newObj, value, property, className) {
        var error = null;
        if (newObj) {
            var requiredProperties = JsonObject.metaData.getRequiredProperties(className);
            if (requiredProperties) {
                for (var i = 0; i < requiredProperties.length; i++) {
                    if (!value[requiredProperties[i]]) {
                        error = new JsonRequiredPropertyError(requiredProperties[i], className);
                        break;
                    }
                }
            }
        }
        else {
            if (property.baseClassName) {
                if (!className) {
                    error = new JsonMissingTypeError(property.name, property.baseClassName);
                }
                else {
                    error = new JsonIncorrectTypeError(property.name, property.baseClassName);
                }
            }
        }
        if (error) {
            this.addNewError(error, value);
        }
        return error;
    };
    JsonObject.prototype.addNewError = function (error, jsonObj) {
        if (jsonObj && jsonObj[JsonObject.positionPropertyName]) {
            error.at = jsonObj[JsonObject.positionPropertyName].start;
        }
        this.errors.push(error);
    };
    JsonObject.prototype.valueToArray = function (value, obj, key, property) {
        if (obj[key] && value.length > 0)
            obj[key].splice(0, obj[key].length);
        for (var i = 0; i < value.length; i++) {
            var newValue = this.createNewObj(value[i], property);
            if (newValue.newObj) {
                obj[key].push(newValue.newObj);
                this.toObject(value[i], newValue.newObj);
            }
            else {
                if (!newValue.error) {
                    obj[key].push(value[i]);
                }
            }
        }
    };
    JsonObject.prototype.findProperty = function (properties, key) {
        if (!properties)
            return null;
        for (var i = 0; i < properties.length; i++) {
            var prop = properties[i];
            if (prop.name == key || prop.alternativeName == key)
                return prop;
        }
        return null;
    };
    return JsonObject;
}());

JsonObject.typePropertyName = "type";
JsonObject.positionPropertyName = "pos";
JsonObject.metaDataValue = new JsonMetadata();


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ElementFactory; });
//TODO replace completely with ElementFactory
var QuestionFactory = (function () {
    function QuestionFactory() {
        this.creatorHash = {};
    }
    QuestionFactory.prototype.registerQuestion = function (questionType, questionCreator) {
        this.creatorHash[questionType] = questionCreator;
    };
    QuestionFactory.prototype.clear = function () {
        this.creatorHash = {};
    };
    QuestionFactory.prototype.getAllTypes = function () {
        var result = new Array();
        for (var key in this.creatorHash) {
            result.push(key);
        }
        return result.sort();
    };
    QuestionFactory.prototype.createQuestion = function (questionType, name) {
        var creator = this.creatorHash[questionType];
        if (creator == null)
            return null;
        return creator(name);
    };
    return QuestionFactory;
}());

QuestionFactory.Instance = new QuestionFactory();
QuestionFactory.DefaultChoices = ["1|first item", "2|second item", "3|third item"];
var ElementFactory = (function () {
    function ElementFactory() {
        this.creatorHash = {};
    }
    ElementFactory.prototype.registerElement = function (elementType, elementCreator) {
        this.creatorHash[elementType] = elementCreator;
    };
    ElementFactory.prototype.clear = function () {
        this.creatorHash = {};
    };
    ElementFactory.prototype.getAllTypes = function () {
        var result = QuestionFactory.Instance.getAllTypes();
        for (var key in this.creatorHash) {
            result.push(key);
        }
        return result.sort();
    };
    ElementFactory.prototype.createElement = function (elementType, name) {
        var creator = this.creatorHash[elementType];
        if (creator == null)
            return QuestionFactory.Instance.createQuestion(elementType, name);
        return creator(name);
    };
    return ElementFactory;
}());

ElementFactory.Instance = new ElementFactory();


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return surveyLocalization; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return surveyStrings; });
var surveyLocalization = {
    currentLocale: "",
    locales: {},
    getString: function (strName) {
        var loc = this.currentLocale ? this.locales[this.currentLocale] : surveyStrings;
        if (!loc || !loc[strName])
            loc = surveyStrings;
        return loc[strName];
    },
    getLocales: function () {
        var res = [];
        res.push("");
        for (var key in this.locales) {
            res.push(key);
        }
        res.sort();
        return res;
    }
};
var surveyStrings = {
    pagePrevText: "Previous",
    pageNextText: "Next",
    completeText: "Complete",
    otherItemText: "Other (describe)",
    progressText: "Page {0} of {1}",
    emptySurvey: "There is no visible page or question in the survey.",
    completingSurvey: "Thank you for completing the survey!",
    loadingSurvey: "Survey is loading...",
    optionsCaption: "Choose...",
    requiredError: "Please answer the question.",
    requiredInAllRowsError: "Please answer questions in all rows.",
    numericError: "The value should be numeric.",
    textMinLength: "Please enter at least {0} symbols.",
    textMaxLength: "Please enter less than {0} symbols.",
    textMinMaxLength: "Please enter more than {0} and less than {1} symbols.",
    minRowCountError: "Please fill in at least {0} rows.",
    minSelectError: "Please select at least {0} variants.",
    maxSelectError: "Please select no more than {0} variants.",
    numericMinMax: "The '{0}' should be equal or more than {1} and equal or less than {2}",
    numericMin: "The '{0}' should be equal or more than {1}",
    numericMax: "The '{0}' should be equal or less than {1}",
    invalidEmail: "Please enter a valid e-mail address.",
    urlRequestError: "The request returned error '{0}'. {1}",
    urlGetChoicesError: "The request returned empty data or the 'path' property is incorrect",
    exceedMaxSize: "The file size should not exceed {0}.",
    otherRequiredError: "Please enter the other value.",
    uploadingFile: "Your file is uploading. Please wait several seconds and try again.",
    addRow: "Add row",
    removeRow: "Remove"
};
surveyLocalization.locales["en"] = surveyStrings;
if (!String.prototype["format"]) {
    String.prototype["format"] = function () {
        var args = arguments;
        return this.replace(/{(\d+)}/g, function (match, number) {
            return typeof args[number] != 'undefined'
                ? args[number]
                : match;
        });
    };
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return ItemValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Base; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SurveyError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SurveyPageId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SurveyElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Event; });
var ItemValue = (function () {
    function ItemValue(value, text) {
        if (text === void 0) { text = null; }
        this.text = text;
        this.value = value;
    }
    ItemValue.setData = function (items, values) {
        items.length = 0;
        for (var i = 0; i < values.length; i++) {
            var value = values[i];
            var item = new ItemValue(null);
            if (typeof (value.value) !== 'undefined') {
                var exception = null;
                if (typeof (value.getType) !== 'undefined' && value.getType() == 'itemvalue') {
                    value.itemValue = value.itemValue;
                    item.itemText = value.itemText;
                    exception = ItemValue.itemValueProp;
                }
                ItemValue.copyAttributes(value, item, exception);
            }
            else {
                item.value = value;
            }
            items.push(item);
        }
    };
    ItemValue.getData = function (items) {
        var result = new Array();
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            if (item.hasText) {
                result.push({ value: item.value, text: item.text });
            }
            else {
                result.push(item.value);
            }
        }
        return result;
    };
    ItemValue.getItemByValue = function (items, val) {
        for (var i = 0; i < items.length; i++) {
            if (items[i].value == val)
                return items[i];
        }
        return null;
    };
    ItemValue.copyAttributes = function (src, dest, exceptons) {
        for (var key in src) {
            if ((typeof src[key] == 'function'))
                continue;
            if (exceptons && exceptons.indexOf(key) > -1)
                continue;
            dest[key] = src[key];
        }
    };
    ItemValue.prototype.getType = function () { return "itemvalue"; };
    Object.defineProperty(ItemValue.prototype, "value", {
        get: function () { return this.itemValue; },
        set: function (newValue) {
            this.itemValue = newValue;
            if (!this.itemValue)
                return;
            var str = this.itemValue.toString();
            var index = str.indexOf(ItemValue.Separator);
            if (index > -1) {
                this.itemValue = str.slice(0, index);
                this.text = str.slice(index + 1);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemValue.prototype, "hasText", {
        get: function () { return this.itemText ? true : false; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemValue.prototype, "text", {
        get: function () {
            if (this.hasText)
                return this.itemText;
            if (this.value)
                return this.value.toString();
            return null;
        },
        set: function (newText) {
            this.itemText = newText;
        },
        enumerable: true,
        configurable: true
    });
    return ItemValue;
}());

ItemValue.Separator = '|';
ItemValue.itemValueProp = ["text", "value", "hasText"];
var Base = (function () {
    function Base() {
    }
    Base.prototype.getType = function () {
        throw new Error('This method is abstract');
    };
    Base.prototype.isTwoValueEquals = function (x, y) {
        if (x === y)
            return true;
        if (!(x instanceof Object) || !(y instanceof Object))
            return false;
        for (var p in x) {
            if (!x.hasOwnProperty(p))
                continue;
            if (!y.hasOwnProperty(p))
                return false;
            if (x[p] === y[p])
                continue;
            if (typeof (x[p]) !== "object")
                return false;
            if (!this.isTwoValueEquals(x[p], y[p]))
                return false;
        }
        for (p in y) {
            if (y.hasOwnProperty(p) && !x.hasOwnProperty(p))
                return false;
        }
        return true;
    };
    return Base;
}());

var SurveyError = (function () {
    function SurveyError() {
    }
    SurveyError.prototype.getText = function () {
        throw new Error('This method is abstract');
    };
    return SurveyError;
}());

var SurveyPageId;
SurveyPageId = "sq_page";
var SurveyElement = (function () {
    function SurveyElement() {
    }
    SurveyElement.ScrollElementToTop = function (elementId) {
        if (!elementId)
            return false;
        var el = document.getElementById(elementId);
        if (!el || !el.scrollIntoView)
            return false;
        var elemTop = el.getBoundingClientRect().top;
        if (elemTop < 0)
            el.scrollIntoView();
        return elemTop < 0;
    };
    SurveyElement.GetFirstNonTextElement = function (elements) {
        if (!elements || !elements.length)
            return;
        for (var i = 0; i < elements.length; i++) {
            if (elements[i].nodeName != "#text" && elements[i].nodeName != "#comment")
                return elements[i];
        }
        return null;
    };
    SurveyElement.FocusElement = function (elementId) {
        if (!elementId)
            return false;
        var el = document.getElementById(elementId);
        if (el) {
            el.focus();
            return true;
        }
        return false;
    };
    return SurveyElement;
}());

var Event = (function () {
    function Event() {
    }
    Object.defineProperty(Event.prototype, "isEmpty", {
        get: function () { return this.callbacks == null || this.callbacks.length == 0; },
        enumerable: true,
        configurable: true
    });
    Event.prototype.fire = function (sender, options) {
        if (this.callbacks == null)
            return;
        for (var i = 0; i < this.callbacks.length; i++) {
            var callResult = this.callbacks[i](sender, options);
        }
    };
    Event.prototype.add = function (func) {
        if (this.callbacks == null) {
            this.callbacks = new Array();
        }
        this.callbacks.push(func);
    };
    Event.prototype.remove = function (func) {
        if (this.callbacks == null)
            return;
        var index = this.callbacks.indexOf(func, 0);
        if (index != undefined) {
            this.callbacks.splice(index, 1);
        }
    };
    return Event;
}());



/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__koquestionbase__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionImplementor; });




var QuestionImplementor = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionImplementor, _super);
    function QuestionImplementor(question) {
        var _this = _super.call(this, question) || this;
        _this.question = question;
        _this.isUpdating = false;
        var self = _this;
        question.valueChangedCallback = function () { self.onValueChanged(); };
        question.commentChangedCallback = function () { self.onCommentChanged(); };
        question.errorsChangedCallback = function () { self.onErrorsChanged(); };
        question.titleChangedCallback = function () { self.onVisibleIndexChanged(); };
        question.visibleIndexChangedCallback = function () { self.onVisibleIndexChanged(); };
        _this.koDummy = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](0);
        _this.koValue = _this.createkoValue();
        _this.koComment = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](_this.question.comment);
        _this.koTitle = __WEBPACK_IMPORTED_MODULE_1_knockout__["pureComputed"](function () { self.koDummy(); return self.question.fullTitle; });
        _this.koErrors(_this.question.errors);
        _this.koValue.subscribe(function (newValue) {
            self.updateValue(newValue);
        });
        _this.koComment.subscribe(function (newValue) {
            self.updateComment(newValue);
        });
        _this.question["koValue"] = _this.koValue;
        _this.question["koComment"] = _this.koComment;
        _this.question["koTitle"] = _this.koTitle;
        _this.question["koQuestionAfterRender"] = function (el, con) { self.koQuestionAfterRender(el, con); };
        return _this;
    }
    QuestionImplementor.prototype.updateQuestion = function () {
        this.koDummy(this.koDummy() + 1);
    };
    QuestionImplementor.prototype.onValueChanged = function () {
        if (this.isUpdating)
            return;
        this.setkoValue(this.question.value);
    };
    QuestionImplementor.prototype.onCommentChanged = function () {
        if (this.isUpdating)
            return;
        this.koComment(this.question.comment);
    };
    QuestionImplementor.prototype.onVisibleIndexChanged = function () {
        this.koDummy(this.koDummy() + 1);
    };
    QuestionImplementor.prototype.onErrorsChanged = function () {
        this.koErrors(this.question.errors);
    };
    QuestionImplementor.prototype.createkoValue = function () { return __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](this.question.value); };
    QuestionImplementor.prototype.setkoValue = function (newValue) {
        this.koValue(newValue);
    };
    QuestionImplementor.prototype.updateValue = function (newValue) {
        this.isUpdating = true;
        this.question.value = newValue;
        this.isUpdating = false;
    };
    QuestionImplementor.prototype.updateComment = function (newValue) {
        this.isUpdating = true;
        this.question.comment = newValue;
        this.isUpdating = false;
    };
    QuestionImplementor.prototype.getNo = function () {
        return this.question.visibleIndex > -1 ? this.question.visibleIndex + 1 + ". " : "";
    };
    QuestionImplementor.prototype.koQuestionAfterRender = function (elements, con) {
        var el = __WEBPACK_IMPORTED_MODULE_3__base__["c" /* SurveyElement */].GetFirstNonTextElement(elements);
        var tEl = elements[0];
        if (tEl.nodeName == "#text")
            tEl.data = "";
        tEl = elements[elements.length - 1];
        if (tEl.nodeName == "#text")
            tEl.data = "";
        if (el && this.question.customWidget)
            this.question.customWidget.afterRender(this.question, el);
    };
    return QuestionImplementor;
}(__WEBPACK_IMPORTED_MODULE_2__koquestionbase__["a" /* QuestionImplementorBase */]));



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__surveyStrings__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AnswerRequiredError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return RequreNumericError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ExceedSizeError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomError; });



var AnswerRequiredError = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](AnswerRequiredError, _super);
    function AnswerRequiredError() {
        return _super.call(this) || this;
    }
    AnswerRequiredError.prototype.getText = function () {
        return __WEBPACK_IMPORTED_MODULE_1__surveyStrings__["a" /* surveyLocalization */].getString("requiredError");
    };
    return AnswerRequiredError;
}(__WEBPACK_IMPORTED_MODULE_2__base__["e" /* SurveyError */]));

var RequreNumericError = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](RequreNumericError, _super);
    function RequreNumericError() {
        return _super.call(this) || this;
    }
    RequreNumericError.prototype.getText = function () {
        return __WEBPACK_IMPORTED_MODULE_1__surveyStrings__["a" /* surveyLocalization */].getString("numericError");
    };
    return RequreNumericError;
}(__WEBPACK_IMPORTED_MODULE_2__base__["e" /* SurveyError */]));

var ExceedSizeError = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](ExceedSizeError, _super);
    function ExceedSizeError(maxSize) {
        var _this = _super.call(this) || this;
        _this.maxSize = maxSize;
        return _this;
    }
    ExceedSizeError.prototype.getText = function () {
        return __WEBPACK_IMPORTED_MODULE_1__surveyStrings__["a" /* surveyLocalization */].getString("exceedMaxSize")["format"](this.getTextSize());
    };
    ExceedSizeError.prototype.getTextSize = function () {
        var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        var fixed = [0, 0, 2, 3, 3];
        if (this.maxSize == 0)
            return '0 Byte';
        var i = Math.floor(Math.log(this.maxSize) / Math.log(1024));
        var value = this.maxSize / Math.pow(1024, i);
        return value.toFixed(fixed[i]) + ' ' + sizes[i];
    };
    return ExceedSizeError;
}(__WEBPACK_IMPORTED_MODULE_2__base__["e" /* SurveyError */]));

var CustomError = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](CustomError, _super);
    function CustomError(text) {
        var _this = _super.call(this) || this;
        _this.text = text;
        return _this;
    }
    CustomError.prototype.getText = function () {
        return this.text;
    };
    return CustomError;
}(__WEBPACK_IMPORTED_MODULE_2__base__["e" /* SurveyError */]));



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jsonobject__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__questionbase__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__surveyStrings__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__error__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__validator__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__textPreProcessor__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__localizablestring__ = __webpack_require__(30);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Question; });









var Question = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](Question, _super);
    function Question(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.isRequiredValue = false;
        _this.hasCommentValue = false;
        _this.hasOtherValue = false;
        _this.commentTextValue = "";
        _this.errors = [];
        _this.validators = new Array();
        _this.isvalueChangedCallbackFiring = false;
        _this.isValueChangedInSurvey = false;
        _this.locTitleValue = new __WEBPACK_IMPORTED_MODULE_8__localizablestring__["a" /* LocalizableString */](null);
        return _this;
    }
    Object.defineProperty(Question.prototype, "hasTitle", {
        get: function () { return true; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "hasInput", {
        get: function () { return true; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "inputId", {
        get: function () { return this.id + "i"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "title", {
        get: function () {
            var res = this.locTitle.text;
            return res ? res : this.name;
        },
        set: function (newValue) {
            this.locTitle.text = newValue;
            this.fireCallback(this.titleChangedCallback);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "locTitle", {
        get: function () { return this.locTitleValue; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "processedTitle", {
        get: function () { return this.survey != null ? this.survey.processText(this.title) : this.title; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "fullTitle", {
        get: function () {
            if (this.survey && this.survey.questionTitleTemplate) {
                if (!this.textPreProcessor) {
                    var self = this;
                    this.textPreProcessor = new __WEBPACK_IMPORTED_MODULE_7__textPreProcessor__["a" /* TextPreProcessor */]();
                    this.textPreProcessor.onHasValue = function (name) { return self.canProcessedTextValues(name.toLowerCase()); };
                    this.textPreProcessor.onProcess = function (name) { return self.getProcessedTextValue(name); };
                }
                return this.textPreProcessor.process(this.survey.questionTitleTemplate);
            }
            var requireText = this.requiredText;
            if (requireText)
                requireText += " ";
            var no = this.no;
            if (no)
                no += ". ";
            return no + requireText + this.processedTitle;
        },
        enumerable: true,
        configurable: true
    });
    Question.prototype.focus = function (onError) {
        if (onError === void 0) { onError = false; }
        __WEBPACK_IMPORTED_MODULE_3__base__["c" /* SurveyElement */].ScrollElementToTop(this.id);
        var id = !onError ? this.getFirstInputElementId() : this.getFirstErrorInputElementId();
        if (__WEBPACK_IMPORTED_MODULE_3__base__["c" /* SurveyElement */].FocusElement(id)) {
            this.fireCallback(this.focusCallback);
        }
    };
    Question.prototype.getFirstInputElementId = function () {
        return this.inputId;
    };
    Question.prototype.getFirstErrorInputElementId = function () {
        return this.getFirstInputElementId();
    };
    Question.prototype.canProcessedTextValues = function (name) {
        return name == "no" || name == "title" || name == "require";
    };
    Question.prototype.getProcessedTextValue = function (name) {
        if (name == "no")
            return this.no;
        if (name == "title")
            return this.processedTitle;
        if (name == "require")
            return this.requiredText;
        return null;
    };
    Question.prototype.supportComment = function () { return false; };
    Question.prototype.supportOther = function () { return false; };
    Object.defineProperty(Question.prototype, "isRequired", {
        get: function () { return this.isRequiredValue; },
        set: function (val) {
            if (this.isRequired == val)
                return;
            this.isRequiredValue = val;
            this.fireCallback(this.titleChangedCallback);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "hasComment", {
        get: function () { return this.hasCommentValue; },
        set: function (val) {
            if (!this.supportComment())
                return;
            this.hasCommentValue = val;
            if (this.hasComment)
                this.hasOther = false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "commentText", {
        get: function () { return this.commentTextValue ? this.commentTextValue : __WEBPACK_IMPORTED_MODULE_4__surveyStrings__["a" /* surveyLocalization */].getString("otherItemText"); },
        set: function (value) {
            this.commentTextValue = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "hasOther", {
        get: function () { return this.hasOtherValue; },
        set: function (val) {
            if (!this.supportOther() || this.hasOther == val)
                return;
            this.hasOtherValue = val;
            if (this.hasOther)
                this.hasComment = false;
            this.hasOtherChanged();
        },
        enumerable: true,
        configurable: true
    });
    Question.prototype.hasOtherChanged = function () { };
    Object.defineProperty(Question.prototype, "no", {
        get: function () {
            if (this.visibleIndex < 0)
                return "";
            var startIndex = 1;
            var isNumeric = true;
            var str = "";
            if (this.survey && this.survey.questionStartIndex) {
                str = this.survey.questionStartIndex;
                if (parseInt(str))
                    startIndex = parseInt(str);
                else if (str.length == 1)
                    isNumeric = false;
            }
            if (isNumeric)
                return (this.visibleIndex + startIndex).toString();
            return String.fromCharCode(str.charCodeAt(0) + this.visibleIndex);
        },
        enumerable: true,
        configurable: true
    });
    Question.prototype.onSetData = function () {
        _super.prototype.onSetData.call(this);
        this.locTitle.owner = this.data;
        this.onSurveyValueChanged(this.value);
    };
    Object.defineProperty(Question.prototype, "value", {
        get: function () {
            return this.valueFromData(this.getValueCore());
        },
        set: function (newValue) {
            this.setNewValue(newValue);
            if (this.isvalueChangedCallbackFiring)
                return;
            this.isvalueChangedCallbackFiring = true;
            this.fireCallback(this.valueChangedCallback);
            this.isvalueChangedCallbackFiring = false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "comment", {
        get: function () { return this.getComment(); },
        set: function (newValue) {
            if (this.comment == newValue)
                return;
            this.setComment(newValue);
            this.fireCallback(this.commentChangedCallback);
        },
        enumerable: true,
        configurable: true
    });
    Question.prototype.getComment = function () { return this.data != null ? this.data.getComment(this.name) : this.questionComment; };
    Question.prototype.setComment = function (newValue) {
        this.setNewComment(newValue);
    };
    Question.prototype.isEmpty = function () { return this.value == null; };
    Question.prototype.hasErrors = function (fireCallback) {
        if (fireCallback === void 0) { fireCallback = true; }
        this.checkForErrors(fireCallback);
        return this.errors.length > 0;
    };
    Object.defineProperty(Question.prototype, "currentErrorCount", {
        get: function () { return this.errors.length; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "requiredText", {
        get: function () { return this.survey != null && this.isRequired ? this.survey.requiredText : ""; },
        enumerable: true,
        configurable: true
    });
    Question.prototype.addError = function (error) {
        this.errors.push(error);
        this.fireCallback(this.errorsChangedCallback);
    };
    Question.prototype.checkForErrors = function (fireCallback) {
        var errorLength = this.errors ? this.errors.length : 0;
        this.errors = [];
        this.onCheckForErrors(this.errors);
        if (this.errors.length == 0 && this.value) {
            var error = this.runValidators();
            if (error) {
                this.errors.push(error);
            }
        }
        if (this.survey && this.errors.length == 0) {
            var error = this.survey.validateQuestion(this.name);
            if (error) {
                this.errors.push(error);
            }
        }
        if (fireCallback && (errorLength != this.errors.length || errorLength > 0)) {
            this.fireCallback(this.errorsChangedCallback);
        }
    };
    Question.prototype.onCheckForErrors = function (errors) {
        if (this.hasRequiredError()) {
            this.errors.push(new __WEBPACK_IMPORTED_MODULE_5__error__["b" /* AnswerRequiredError */]());
        }
    };
    Question.prototype.hasRequiredError = function () {
        return this.isRequired && this.isEmpty();
    };
    Question.prototype.runValidators = function () {
        return new __WEBPACK_IMPORTED_MODULE_6__validator__["a" /* ValidatorRunner */]().run(this);
    };
    Question.prototype.setNewValue = function (newValue) {
        this.setNewValueInData(newValue);
        this.onValueChanged();
    };
    Question.prototype.setNewValueInData = function (newValue) {
        if (!this.isValueChangedInSurvey) {
            newValue = this.valueToData(newValue);
            this.setValueCore(newValue);
        }
    };
    Question.prototype.getValueCore = function () {
        return this.data != null ? this.data.getValue(this.name) : this.questionValue;
    };
    Question.prototype.setValueCore = function (newValue) {
        if (this.data != null) {
            this.data.setValue(this.name, newValue);
        }
        else {
            this.questionValue = newValue;
        }
    };
    Question.prototype.valueFromData = function (val) { return val; };
    Question.prototype.valueToData = function (val) { return val; };
    Question.prototype.onValueChanged = function () { };
    Question.prototype.setNewComment = function (newValue) {
        if (this.data != null) {
            this.data.setComment(this.name, newValue);
        }
        else
            this.questionComment = newValue;
    };
    //IQuestion
    Question.prototype.onSurveyValueChanged = function (newValue) {
        this.isValueChangedInSurvey = true;
        this.value = this.valueFromData(newValue);
        this.fireCallback(this.commentChangedCallback);
        this.isValueChangedInSurvey = false;
    };
    //IValidatorOwner
    Question.prototype.getValidatorTitle = function () { return null; };
    return Question;
}(__WEBPACK_IMPORTED_MODULE_2__questionbase__["a" /* QuestionBase */]));

__WEBPACK_IMPORTED_MODULE_1__jsonobject__["a" /* JsonObject */].metaData.addClass("question", [{ name: "title:text", serializationProperty: "locTitle" },
    { name: "commentText", onGetValue: function (obj) { return obj.commentTextValue; } },
    "isRequired:boolean", { name: "validators:validators", baseClassName: "surveyvalidator", classNamePart: "validator" }], null, "questionbase");


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__koquestion__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionSelectBaseImplementor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return QuestionCheckboxBaseImplementor; });



var QuestionSelectBaseImplementor = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionSelectBaseImplementor, _super);
    function QuestionSelectBaseImplementor(question) {
        var _this = _super.call(this, question) || this;
        var self = _this;
        _this.koOtherVisible = __WEBPACK_IMPORTED_MODULE_1_knockout__["computed"](function () { self.koValue(); return self.isOtherSelected; });
        _this.koVisibleChoices = __WEBPACK_IMPORTED_MODULE_1_knockout__["observableArray"](self.question.visibleChoices);
        question.choicesChangedCallback = function () { self.koVisibleChoices(self.question.visibleChoices); };
        _this.question["koOtherVisible"] = _this.koOtherVisible;
        _this.question["koVisibleChoices"] = _this.koVisibleChoices;
        return _this;
    }
    Object.defineProperty(QuestionSelectBaseImplementor.prototype, "isOtherSelected", {
        get: function () {
            return this.question.isOtherSelected;
        },
        enumerable: true,
        configurable: true
    });
    return QuestionSelectBaseImplementor;
}(__WEBPACK_IMPORTED_MODULE_2__koquestion__["a" /* QuestionImplementor */]));

var QuestionCheckboxBaseImplementor = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionCheckboxBaseImplementor, _super);
    function QuestionCheckboxBaseImplementor(question) {
        var _this = _super.call(this, question) || this;
        _this.koWidth = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](_this.colWidth);
        _this.question["koWidth"] = _this.koWidth;
        _this.question["koAfterRender"] = _this.koAfterRender;
        var self = _this;
        _this.question.colCountChangedCallback = function () { self.onColCountChanged(); };
        return _this;
    }
    QuestionCheckboxBaseImplementor.prototype.onColCountChanged = function () {
        this.question["koWidth"] = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](this.colWidth);
    };
    Object.defineProperty(QuestionCheckboxBaseImplementor.prototype, "colWidth", {
        get: function () {
            var colCount = this.question.colCount;
            return colCount > 0 ? (100 / colCount) + '%' : "";
        },
        enumerable: true,
        configurable: true
    });
    QuestionCheckboxBaseImplementor.prototype.koAfterRender = function (el, con) {
        var tEl = el[0];
        if (tEl.nodeName == "#text")
            tEl.data = "";
        tEl = el[el.length - 1];
        if (tEl.nodeName == "#text")
            tEl.data = "";
    };
    return QuestionCheckboxBaseImplementor;
}(QuestionSelectBaseImplementor));



/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jsonobject__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__question__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__surveyStrings__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__error__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__choicesRestfull__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return QuestionSelectBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionCheckboxBase; });







var QuestionSelectBase = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionSelectBase, _super);
    function QuestionSelectBase(name) {
        var _this = _super.call(this, name) || this;
        _this.visibleChoicesCache = null;
        _this.otherItem = new __WEBPACK_IMPORTED_MODULE_3__base__["f" /* ItemValue */]("other", __WEBPACK_IMPORTED_MODULE_4__surveyStrings__["a" /* surveyLocalization */].getString("otherItemText"));
        _this.choicesFromUrl = null;
        _this.cachedValueForUrlRequestion = null;
        _this.choicesValues = new Array();
        _this.otherErrorText = null;
        _this.storeOthersAsComment = true;
        _this.choicesOrderValue = "none";
        _this.isSettingComment = false;
        _this.choicesByUrl = _this.createRestfull();
        var self = _this;
        _this.choicesByUrl.getResultCallback = function (items) { self.onLoadChoicesFromUrl(items); };
        return _this;
    }
    Object.defineProperty(QuestionSelectBase.prototype, "isOtherSelected", {
        get: function () {
            return this.getStoreOthersAsComment() ? this.getHasOther(this.value) : this.getHasOther(this.cachedValue);
        },
        enumerable: true,
        configurable: true
    });
    QuestionSelectBase.prototype.getHasOther = function (val) {
        return val == this.otherItem.value;
    };
    QuestionSelectBase.prototype.createRestfull = function () { return new __WEBPACK_IMPORTED_MODULE_6__choicesRestfull__["a" /* ChoicesRestfull */](); };
    QuestionSelectBase.prototype.getComment = function () {
        if (this.getStoreOthersAsComment())
            return _super.prototype.getComment.call(this);
        return this.commentValue;
    };
    QuestionSelectBase.prototype.setComment = function (newValue) {
        if (this.getStoreOthersAsComment())
            _super.prototype.setComment.call(this, newValue);
        else {
            if (!this.isSettingComment && newValue != this.commentValue) {
                this.isSettingComment = true;
                this.commentValue = newValue;
                if (this.isOtherSelected) {
                    this.setNewValueInData(this.cachedValue);
                }
                this.isSettingComment = false;
            }
        }
    };
    QuestionSelectBase.prototype.setNewValue = function (newValue) {
        if (newValue)
            this.cachedValueForUrlRequestion = newValue;
        _super.prototype.setNewValue.call(this, newValue);
    };
    QuestionSelectBase.prototype.valueFromData = function (val) {
        if (this.getStoreOthersAsComment())
            return _super.prototype.valueFromData.call(this, val);
        this.cachedValue = this.valueFromDataCore(val);
        return this.cachedValue;
    };
    QuestionSelectBase.prototype.valueToData = function (val) {
        if (this.getStoreOthersAsComment())
            return _super.prototype.valueToData.call(this, val);
        this.cachedValue = val;
        return this.valueToDataCore(val);
    };
    QuestionSelectBase.prototype.valueFromDataCore = function (val) {
        if (!this.hasUnknownValue(val))
            return val;
        if (val == this.otherItem.value)
            return val;
        this.comment = val;
        return this.otherItem.value;
    };
    QuestionSelectBase.prototype.valueToDataCore = function (val) {
        if (val == this.otherItem.value && this.getComment()) {
            val = this.getComment();
        }
        return val;
    };
    QuestionSelectBase.prototype.hasUnknownValue = function (val) {
        if (!val)
            return false;
        var items = this.activeChoices;
        for (var i = 0; i < items.length; i++) {
            if (items[i].value == val)
                return false;
        }
        return true;
    };
    Object.defineProperty(QuestionSelectBase.prototype, "choices", {
        get: function () { return this.choicesValues; },
        set: function (newValue) {
            __WEBPACK_IMPORTED_MODULE_3__base__["f" /* ItemValue */].setData(this.choicesValues, newValue);
            this.onVisibleChoicesChanged();
        },
        enumerable: true,
        configurable: true
    });
    QuestionSelectBase.prototype.hasOtherChanged = function () {
        this.onVisibleChoicesChanged();
    };
    Object.defineProperty(QuestionSelectBase.prototype, "choicesOrder", {
        get: function () { return this.choicesOrderValue; },
        set: function (newValue) {
            if (newValue == this.choicesOrderValue)
                return;
            this.choicesOrderValue = newValue;
            this.onVisibleChoicesChanged();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionSelectBase.prototype, "otherText", {
        get: function () { return this.otherItem.text; },
        set: function (value) { this.otherItem.text = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionSelectBase.prototype, "visibleChoices", {
        get: function () {
            if (!this.hasOther && this.choicesOrder == "none")
                return this.activeChoices;
            if (!this.visibleChoicesCache) {
                this.visibleChoicesCache = this.sortVisibleChoices(this.activeChoices.slice());
                if (this.hasOther) {
                    this.visibleChoicesCache.push(this.otherItem);
                }
            }
            return this.visibleChoicesCache;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionSelectBase.prototype, "activeChoices", {
        get: function () { return this.choicesFromUrl ? this.choicesFromUrl : this.choices; },
        enumerable: true,
        configurable: true
    });
    QuestionSelectBase.prototype.supportComment = function () { return true; };
    QuestionSelectBase.prototype.supportOther = function () { return true; };
    QuestionSelectBase.prototype.onCheckForErrors = function (errors) {
        _super.prototype.onCheckForErrors.call(this, errors);
        if (!this.isOtherSelected || this.comment)
            return;
        var text = this.otherErrorText;
        if (!text) {
            text = __WEBPACK_IMPORTED_MODULE_4__surveyStrings__["a" /* surveyLocalization */].getString("otherRequiredError");
        }
        errors.push(new __WEBPACK_IMPORTED_MODULE_5__error__["a" /* CustomError */](text));
    };
    QuestionSelectBase.prototype.getStoreOthersAsComment = function () { return this.storeOthersAsComment && (this.survey != null ? this.survey.storeOthersAsComment : true); };
    QuestionSelectBase.prototype.onSurveyLoad = function () {
        if (this.choicesByUrl)
            this.choicesByUrl.run();
    };
    QuestionSelectBase.prototype.onLoadChoicesFromUrl = function (array) {
        var errorCount = this.errors.length;
        this.errors = [];
        if (this.choicesByUrl && this.choicesByUrl.error) {
            this.errors.push(this.choicesByUrl.error);
        }
        if (errorCount > 0 || this.errors.length > 0) {
            this.fireCallback(this.errorsChangedCallback);
        }
        var newChoices = null;
        if (array && array.length > 0) {
            newChoices = new Array();
            __WEBPACK_IMPORTED_MODULE_3__base__["f" /* ItemValue */].setData(newChoices, array);
        }
        this.choicesFromUrl = newChoices;
        this.onVisibleChoicesChanged();
        if (this.cachedValueForUrlRequestion) {
            this.value = this.cachedValueForUrlRequestion;
        }
    };
    QuestionSelectBase.prototype.onVisibleChoicesChanged = function () {
        this.visibleChoicesCache = null;
        this.fireCallback(this.choicesChangedCallback);
    };
    QuestionSelectBase.prototype.sortVisibleChoices = function (array) {
        var order = this.choicesOrder.toLowerCase();
        if (order == "asc")
            return this.sortArray(array, 1);
        if (order == "desc")
            return this.sortArray(array, -1);
        if (order == "random")
            return this.randomizeArray(array);
        return array;
    };
    QuestionSelectBase.prototype.sortArray = function (array, mult) {
        return array.sort(function (a, b) {
            if (a.text < b.text)
                return -1 * mult;
            if (a.text > b.text)
                return 1 * mult;
            return 0;
        });
    };
    QuestionSelectBase.prototype.randomizeArray = function (array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    };
    QuestionSelectBase.prototype.clearUnusedValues = function () {
        _super.prototype.clearUnusedValues.call(this);
        if (!this.isOtherSelected) {
            this.comment = null;
        }
    };
    return QuestionSelectBase;
}(__WEBPACK_IMPORTED_MODULE_2__question__["a" /* Question */]));

var QuestionCheckboxBase = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionCheckboxBase, _super);
    function QuestionCheckboxBase(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.colCountValue = 1;
        return _this;
    }
    Object.defineProperty(QuestionCheckboxBase.prototype, "colCount", {
        get: function () { return this.colCountValue; },
        set: function (value) {
            if (value < 0 || value > 4)
                return;
            this.colCountValue = value;
            this.fireCallback(this.colCountChangedCallback);
        },
        enumerable: true,
        configurable: true
    });
    return QuestionCheckboxBase;
}(QuestionSelectBase));

__WEBPACK_IMPORTED_MODULE_1__jsonobject__["a" /* JsonObject */].metaData.addClass("selectbase", ["hasComment:boolean", "hasOther:boolean",
    { name: "choices:itemvalues", onGetValue: function (obj) { return __WEBPACK_IMPORTED_MODULE_3__base__["f" /* ItemValue */].getData(obj.choices); }, onSetValue: function (obj, value) { obj.choices = value; } },
    { name: "choicesOrder", default: "none", choices: ["none", "asc", "desc", "random"] },
    { name: "choicesByUrl:restfull", className: "ChoicesRestfull", onGetValue: function (obj) { return obj.choicesByUrl.isEmpty ? null : obj.choicesByUrl; }, onSetValue: function (obj, value) { obj.choicesByUrl.setData(value); } },
    { name: "otherText", default: __WEBPACK_IMPORTED_MODULE_4__surveyStrings__["a" /* surveyLocalization */].getString("otherItemText") }, "otherErrorText",
    { name: "storeOthersAsComment:boolean", default: true }], null, "question");
__WEBPACK_IMPORTED_MODULE_1__jsonobject__["a" /* JsonObject */].metaData.addClass("checkboxbase", [{ name: "colCount:number", default: 1, choices: [0, 1, 2, 3, 4] }], null, "selectbase");


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__survey__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__kopage__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__defaultCss_cssstandard__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__templateText__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__questionCustomWidgets__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Survey; });








__WEBPACK_IMPORTED_MODULE_7__questionCustomWidgets__["a" /* CustomWidgetCollection */].Instance.onCustomWidgetAdded.add(function (customWidget) {
    if (customWidget.widgetJson.isDefaultRender)
        return;
    if (!customWidget.htmlTemplate)
        customWidget.htmlTemplate = "<div>'htmlTemplate' attribute is missed.</div>";
    new __WEBPACK_IMPORTED_MODULE_6__templateText__["a" /* SurveyTemplateText */]().replaceText(customWidget.htmlTemplate, "widget", customWidget.name);
});
var Survey = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](Survey, _super);
    function Survey(jsonObj, renderedElement, css) {
        if (jsonObj === void 0) { jsonObj = null; }
        if (renderedElement === void 0) { renderedElement = null; }
        if (css === void 0) { css = null; }
        var _this = _super.call(this, jsonObj) || this;
        //TODO remove it, since there is onAfterRenderSurvey
        _this.onRendered = new __WEBPACK_IMPORTED_MODULE_3__base__["b" /* Event */]();
        _this.isFirstRender = true;
        if (css) {
            _this.css = css;
        }
        if (renderedElement) {
            _this.renderedElement = renderedElement;
        }
        if (typeof __WEBPACK_IMPORTED_MODULE_1_knockout__ === 'undefined')
            throw new Error('knockoutjs library is not loaded.');
        _this.render(renderedElement);
        return _this;
    }
    Object.defineProperty(Survey, "cssType", {
        get: function () { return __WEBPACK_IMPORTED_MODULE_5__defaultCss_cssstandard__["b" /* surveyCss */].currentType; },
        set: function (value) { __WEBPACK_IMPORTED_MODULE_5__defaultCss_cssstandard__["b" /* surveyCss */].currentType = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Survey.prototype, "cssNavigationComplete", {
        get: function () { return this.getNavigationCss(this.css.navigationButton, this.css.navigation.complete); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Survey.prototype, "cssNavigationPrev", {
        get: function () { return this.getNavigationCss(this.css.navigationButton, this.css.navigation.prev); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Survey.prototype, "cssNavigationNext", {
        get: function () { return this.getNavigationCss(this.css.navigationButton, this.css.navigation.next); },
        enumerable: true,
        configurable: true
    });
    Survey.prototype.getNavigationCss = function (main, btn) {
        var res = "";
        if (main)
            res = main;
        if (btn)
            res += ' ' + btn;
        return res;
    };
    Object.defineProperty(Survey.prototype, "css", {
        get: function () { return __WEBPACK_IMPORTED_MODULE_5__defaultCss_cssstandard__["b" /* surveyCss */].getCss(); },
        set: function (value) {
            this.mergeValues(value, this.css);
        },
        enumerable: true,
        configurable: true
    });
    Survey.prototype.render = function (element) {
        if (element === void 0) { element = null; }
        this.updateCustomWidgets(this.currentPage);
        var self = this;
        if (element && typeof element == "string") {
            element = document.getElementById(element);
        }
        if (element) {
            this.renderedElement = element;
        }
        element = this.renderedElement;
        if (!element)
            return;
        element.innerHTML = this.getTemplate();
        self.applyBinding();
    };
    Survey.prototype.koEventAfterRender = function (element, survey) {
        survey.onRendered.fire(self, {});
        survey.afterRenderSurvey(element);
    };
    Survey.prototype.loadSurveyFromService = function (surveyId, renderedElement) {
        if (surveyId === void 0) { surveyId = null; }
        if (renderedElement === void 0) { renderedElement = null; }
        if (renderedElement) {
            this.renderedElement = renderedElement;
        }
        _super.prototype.loadSurveyFromService.call(this, surveyId);
    };
    Survey.prototype.setCompleted = function () {
        _super.prototype.setCompleted.call(this);
        this.updateKoCurrentPage();
    };
    Survey.prototype.createNewPage = function (name) { return new __WEBPACK_IMPORTED_MODULE_4__kopage__["b" /* Page */](name); };
    Survey.prototype.getTemplate = function () { return __WEBPACK_IMPORTED_MODULE_6__templateText__["b" /* koTemplate */]; };
    Survey.prototype.onBeforeCreating = function () {
        var self = this;
        this.dummyObservable = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](0);
        this.koCurrentPage = __WEBPACK_IMPORTED_MODULE_1_knockout__["computed"](function () { self.dummyObservable(); return self.currentPage; });
        this.koIsNavigationButtonsShowing = __WEBPACK_IMPORTED_MODULE_1_knockout__["computed"](function () { self.dummyObservable(); return self.isNavigationButtonsShowing; });
        this.koIsFirstPage = __WEBPACK_IMPORTED_MODULE_1_knockout__["computed"](function () { self.dummyObservable(); return self.isFirstPage; });
        this.koIsLastPage = __WEBPACK_IMPORTED_MODULE_1_knockout__["computed"](function () { self.dummyObservable(); return self.isLastPage; });
        this.koProgressText = __WEBPACK_IMPORTED_MODULE_1_knockout__["computed"](function () { self.dummyObservable(); return self.progressText; });
        this.koProgress = __WEBPACK_IMPORTED_MODULE_1_knockout__["computed"](function () { self.dummyObservable(); return self.getProgress(); });
        this.koState = __WEBPACK_IMPORTED_MODULE_1_knockout__["computed"](function () { self.dummyObservable(); return self.state; });
        this.koAfterRenderPage = function (elements, con) {
            var el = __WEBPACK_IMPORTED_MODULE_3__base__["c" /* SurveyElement */].GetFirstNonTextElement(elements);
            if (el)
                self.afterRenderPage(el);
        };
    };
    Survey.prototype.currentPageChanged = function (newValue, oldValue) {
        this.updateKoCurrentPage();
        _super.prototype.currentPageChanged.call(this, newValue, oldValue);
        if (!this.isDesignMode && this.focusFirstQuestionAutomatic)
            this.focusFirstQuestion();
    };
    Survey.prototype.pageVisibilityChanged = function (page, newValue) {
        _super.prototype.pageVisibilityChanged.call(this, page, newValue);
        this.updateKoCurrentPage();
    };
    Survey.prototype.onLoadSurveyFromService = function () {
        this.render();
    };
    Survey.prototype.onLoadingSurveyFromService = function () {
        this.render();
    };
    Survey.prototype.applyBinding = function () {
        if (!this.renderedElement)
            return;
        this.updateKoCurrentPage();
        __WEBPACK_IMPORTED_MODULE_1_knockout__["cleanNode"](this.renderedElement);
        if (!this.isFirstRender) {
            this.updateCurrentPageQuestions();
        }
        this.isFirstRender = false;
        __WEBPACK_IMPORTED_MODULE_1_knockout__["applyBindings"](this, this.renderedElement);
    };
    Survey.prototype.updateKoCurrentPage = function () {
        this.dummyObservable(this.dummyObservable() + 1);
    };
    Survey.prototype.updateCurrentPageQuestions = function () {
        var questions = this.currentPage ? this.currentPage.questions : [];
        for (var i = 0; i < questions.length; i++) {
            var q = questions[i];
            if (q.visible)
                q["updateQuestion"]();
        }
    };
    return Survey;
}(__WEBPACK_IMPORTED_MODULE_2__survey__["a" /* SurveyModel */]));

__WEBPACK_IMPORTED_MODULE_1_knockout__["components"].register('survey', {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            var survey = __WEBPACK_IMPORTED_MODULE_1_knockout__["unwrap"](params.survey);
            survey.render();
            return params.survey;
        }
    },
    template: __WEBPACK_IMPORTED_MODULE_6__templateText__["b" /* koTemplate */]
});


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__conditionsParser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__conditionProcessValue__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Condition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ConditionNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConditionRunner; });


var Condition = (function () {
    function Condition() {
        this.opValue = "equal";
    }
    Object.defineProperty(Condition, "operators", {
        get: function () {
            if (Condition.operatorsValue != null)
                return Condition.operatorsValue;
            Condition.operatorsValue = {
                empty: function (left, right) { return !left; },
                notempty: function (left, right) { return !(!left); },
                equal: function (left, right) { return left == right; },
                notequal: function (left, right) { return left != right; },
                contains: function (left, right) { return left && left["indexOf"] && left.indexOf(right) > -1; },
                notcontains: function (left, right) { return !left || !left["indexOf"] || left.indexOf(right) == -1; },
                greater: function (left, right) { return left > right; },
                less: function (left, right) { return left < right; },
                greaterorequal: function (left, right) { return left >= right; },
                lessorequal: function (left, right) { return left <= right; }
            };
            return Condition.operatorsValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Condition.prototype, "operator", {
        get: function () { return this.opValue; },
        set: function (value) {
            if (!value)
                return;
            value = value.toLowerCase();
            if (!Condition.operators[value])
                return;
            this.opValue = value;
        },
        enumerable: true,
        configurable: true
    });
    Condition.prototype.perform = function (left, right) {
        if (left === void 0) { left = null; }
        if (right === void 0) { right = null; }
        if (!left)
            left = this.left;
        if (!right)
            right = this.right;
        return Condition.operators[this.operator](this.getPureValue(left), this.getPureValue(right));
    };
    Condition.prototype.getPureValue = function (val) {
        if (!val || (typeof val != "string"))
            return val;
        var str = "";
        if (val.length > 0 && (val[0] == "'" || val[0] == '"'))
            val = val.substr(1);
        var len = val.length;
        if (len > 0 && (val[len - 1] == "'" || val[len - 1] == '"'))
            val = val.substr(0, len - 1);
        return val;
    };
    return Condition;
}());

Condition.operatorsValue = null;
var ConditionNode = (function () {
    function ConditionNode() {
        this.connectiveValue = "and";
        this.children = [];
    }
    Object.defineProperty(ConditionNode.prototype, "connective", {
        get: function () { return this.connectiveValue; },
        set: function (value) {
            if (!value)
                return;
            value = value.toLowerCase();
            if (value == "&" || value == "&&")
                value = "and";
            if (value == "|" || value == "||")
                value = "or";
            if (value != "and" && value != "or")
                return;
            this.connectiveValue = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConditionNode.prototype, "isEmpty", {
        get: function () { return this.children.length == 0; },
        enumerable: true,
        configurable: true
    });
    ConditionNode.prototype.clear = function () {
        this.children = [];
        this.connective = "and";
    };
    return ConditionNode;
}());

var ConditionRunner = (function () {
    function ConditionRunner(expression) {
        this.root = new ConditionNode();
        this.expression = expression;
        this.processValue = new __WEBPACK_IMPORTED_MODULE_1__conditionProcessValue__["a" /* ProcessValue */]();
    }
    Object.defineProperty(ConditionRunner.prototype, "expression", {
        get: function () { return this.expressionValue; },
        set: function (value) {
            if (this.expression == value)
                return;
            this.expressionValue = value;
            new __WEBPACK_IMPORTED_MODULE_0__conditionsParser__["a" /* ConditionsParser */]().parse(this.expressionValue, this.root);
        },
        enumerable: true,
        configurable: true
    });
    ConditionRunner.prototype.run = function (values) {
        this.values = values;
        return this.runNode(this.root);
    };
    ConditionRunner.prototype.runNode = function (node) {
        var onFirstFail = node.connective == "and";
        for (var i = 0; i < node.children.length; i++) {
            var res = this.runNodeCondition(node.children[i]);
            if (!res && onFirstFail)
                return false;
            if (res && !onFirstFail)
                return true;
        }
        return onFirstFail;
    };
    ConditionRunner.prototype.runNodeCondition = function (value) {
        if (!value)
            return false;
        if (value["children"])
            return this.runNode(value);
        if (value["left"])
            return this.runCondition(value);
        return false;
    };
    ConditionRunner.prototype.runCondition = function (condition) {
        var left = condition.left;
        var name = this.getValueName(left);
        if (name) {
            if (!this.processValue.hasValue(name, this.values))
                return false;
            left = this.processValue.getValue(name, this.values);
        }
        var right = condition.right;
        name = this.getValueName(right);
        if (name) {
            if (!this.processValue.hasValue(name, this.values))
                return false;
            right = this.processValue.getValue(name, this.values);
        }
        return condition.perform(left, right);
    };
    ConditionRunner.prototype.getValueName = function (nodeValue) {
        if (!nodeValue)
            return null;
        if (typeof nodeValue !== 'string')
            return null;
        if (nodeValue.length < 3 || nodeValue[0] != '{' || nodeValue[nodeValue.length - 1] != '}')
            return null;
        return nodeValue.substr(1, nodeValue.length - 2);
    };
    return ConditionRunner;
}());



/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return surveyCss; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return defaultStandardCss; });
var surveyCss = {
    currentType: "",
    getCss: function () {
        var loc = this.currentType ? this[this.currentType] : defaultStandardCss;
        if (!loc)
            loc = defaultStandardCss;
        return loc;
    },
};
var defaultStandardCss = {
    root: "sv_main",
    header: "",
    body: "sv_body",
    footer: "sv_nav",
    navigationButton: "", navigation: { complete: "", prev: "", next: "" },
    progress: "sv_progress", progressBar: "",
    pageTitle: "sv_p_title",
    row: "sv_row",
    question: { root: "sv_q", title: "sv_q_title", comment: "", indent: 20 },
    error: { root: "sv_q_erbox", icon: "", item: "" },
    checkbox: { root: "sv_qcbc", item: "sv_q_checkbox", other: "sv_q_other" },
    comment: "",
    dropdown: { root: "", control: "" },
    matrix: { root: "sv_q_matrix" },
    matrixdropdown: { root: "sv_q_matrix" },
    matrixdynamic: { root: "table", button: "" },
    multipletext: { root: "", itemTitle: "", itemValue: "" },
    radiogroup: { root: "sv_qcbc", item: "sv_q_radiogroup", label: "", other: "sv_q_other" },
    rating: { root: "sv_q_rating", item: "sv_q_rating_item" },
    text: "",
    window: {
        root: "sv_window", body: "sv_window_content",
        header: {
            root: "sv_window_title", title: "", button: "", buttonExpanded: "", buttonCollapsed: ""
        }
    }
};
surveyCss["standard"] = defaultStandardCss;


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_knockout__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_knockout__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionImplementorBase; });

var QuestionImplementorBase = (function () {
    function QuestionImplementorBase(question) {
        this.question = question;
        var self = this;
        question.visibilityChangedCallback = function () { self.onVisibilityChanged(); };
        question.renderWidthChangedCallback = function () { self.onRenderWidthChanged(); };
        this.koTemplateName = __WEBPACK_IMPORTED_MODULE_0_knockout__["pureComputed"](function () { return self.getTemplateName(); });
        this.koVisible = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"](this.question.isVisible);
        this.koRenderWidth = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"](this.question.renderWidth);
        this.koErrors = __WEBPACK_IMPORTED_MODULE_0_knockout__["observableArray"]();
        this.koMarginLeft = __WEBPACK_IMPORTED_MODULE_0_knockout__["pureComputed"](function () { self.koRenderWidth(); return self.getIndentSize(self.question.indent); });
        this.koPaddingRight = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"](self.getIndentSize(self.question.rightIndent));
        this.question["koTemplateName"] = this.koTemplateName;
        this.question["koVisible"] = this.koVisible;
        this.question["koRenderWidth"] = this.koRenderWidth;
        this.question["koErrors"] = this.koErrors;
        this.question["koMarginLeft"] = this.koMarginLeft;
        this.question["koPaddingRight"] = this.koPaddingRight;
        this.question["updateQuestion"] = function () { self.updateQuestion(); };
    }
    QuestionImplementorBase.prototype.updateQuestion = function () { };
    QuestionImplementorBase.prototype.onVisibilityChanged = function () {
        this.koVisible(this.question.isVisible);
    };
    QuestionImplementorBase.prototype.onRenderWidthChanged = function () {
        this.koRenderWidth(this.question.renderWidth);
        this.koPaddingRight(this.getIndentSize(this.question.rightIndent));
    };
    QuestionImplementorBase.prototype.getIndentSize = function (indent) {
        if (indent < 1)
            return "";
        if (!this.question["data"])
            return "";
        var css = this.question["data"]["css"];
        if (!css)
            return "";
        return indent * css.question.indent + "px";
    };
    QuestionImplementorBase.prototype.getTemplateName = function () {
        if (this.question.customWidget && !this.question.customWidget.widgetJson.isDefaultRender)
            return "survey-widget-" + this.question.customWidget.name;
        return "survey-question-" + this.question.getType();
    };
    return QuestionImplementorBase;
}());



/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jsonobject__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__surveyStrings__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__error__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChoicesRestfull; });





var ChoicesRestfull = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](ChoicesRestfull, _super);
    function ChoicesRestfull() {
        var _this = _super.call(this) || this;
        _this.url = "";
        _this.path = "";
        _this.valueName = "";
        _this.titleName = "";
        _this.error = null;
        return _this;
    }
    ChoicesRestfull.prototype.run = function () {
        if (!this.url || !this.getResultCallback)
            return;
        this.error = null;
        var xhr = new XMLHttpRequest();
        xhr.open('GET', this.url);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        var self = this;
        xhr.onload = function () {
            if (xhr.status == 200) {
                self.onLoad(JSON.parse(xhr.response));
            }
            else {
                self.onError(xhr.statusText, xhr.responseText);
            }
        };
        xhr.send();
    };
    ChoicesRestfull.prototype.getType = function () { return "choicesByUrl"; };
    Object.defineProperty(ChoicesRestfull.prototype, "isEmpty", {
        get: function () {
            return !this.url && !this.path && !this.valueName && !this.titleName;
        },
        enumerable: true,
        configurable: true
    });
    ChoicesRestfull.prototype.setData = function (json) {
        this.clear();
        if (json.url)
            this.url = json.url;
        if (json.path)
            this.path = json.path;
        if (json.valueName)
            this.valueName = json.valueName;
        if (json.titleName)
            this.titleName = json.titleName;
    };
    ChoicesRestfull.prototype.clear = function () {
        this.url = "";
        this.path = "";
        this.valueName = "";
        this.titleName = "";
    };
    ChoicesRestfull.prototype.onLoad = function (result) {
        var items = [];
        result = this.getResultAfterPath(result);
        if (result && result["length"]) {
            for (var i = 0; i < result.length; i++) {
                var itemValue = result[i];
                if (!itemValue)
                    continue;
                var value = this.getValue(itemValue);
                var title = this.getTitle(itemValue);
                items.push(new __WEBPACK_IMPORTED_MODULE_1__base__["f" /* ItemValue */](value, title));
            }
        }
        else {
            this.error = new __WEBPACK_IMPORTED_MODULE_4__error__["a" /* CustomError */](__WEBPACK_IMPORTED_MODULE_3__surveyStrings__["a" /* surveyLocalization */].getString("urlGetChoicesError"));
        }
        this.getResultCallback(items);
    };
    ChoicesRestfull.prototype.onError = function (status, response) {
        this.error = new __WEBPACK_IMPORTED_MODULE_4__error__["a" /* CustomError */](__WEBPACK_IMPORTED_MODULE_3__surveyStrings__["a" /* surveyLocalization */].getString("urlRequestError")["format"](status, response));
        this.getResultCallback([]);
    };
    ChoicesRestfull.prototype.getResultAfterPath = function (result) {
        if (!result)
            return result;
        if (!this.path)
            return result;
        var pathes = this.getPathes();
        for (var i = 0; i < pathes.length; i++) {
            result = result[pathes[i]];
            if (!result)
                return null;
        }
        return result;
    };
    ChoicesRestfull.prototype.getPathes = function () {
        var pathes = [];
        if (this.path.indexOf(';') > -1) {
            pathes = this.path.split(';');
        }
        else {
            pathes = this.path.split(',');
        }
        if (pathes.length == 0)
            pathes.push(this.path);
        return pathes;
    };
    ChoicesRestfull.prototype.getValue = function (item) {
        if (this.valueName)
            return item[this.valueName];
        var len = Object.keys(item).length;
        if (len < 1)
            return null;
        return item[Object.keys(item)[0]];
    };
    ChoicesRestfull.prototype.getTitle = function (item) {
        if (!this.titleName)
            return null;
        return item[this.titleName];
    };
    return ChoicesRestfull;
}(__WEBPACK_IMPORTED_MODULE_1__base__["a" /* Base */]));

__WEBPACK_IMPORTED_MODULE_2__jsonobject__["a" /* JsonObject */].metaData.addClass("choicesByUrl", ["url", "path", "valueName", "titleName"], function () { return new ChoicesRestfull(); });


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProcessValue; });
var ProcessValue = (function () {
    function ProcessValue() {
    }
    ProcessValue.prototype.getFirstName = function (text) {
        if (!text)
            return text;
        var res = "";
        for (var i = 0; i < text.length; i++) {
            var ch = text[i];
            if (ch == '.' || ch == '[')
                break;
            res += ch;
        }
        return res;
    };
    ProcessValue.prototype.hasValue = function (text, values) {
        var res = this.getValueCore(text, values);
        return res.hasValue;
    };
    ProcessValue.prototype.getValue = function (text, values) {
        var res = this.getValueCore(text, values);
        return res.value;
    };
    ProcessValue.prototype.getValueCore = function (text, values) {
        var res = { hasValue: false, value: null };
        var curValue = values;
        if (!curValue)
            return res;
        var isFirst = true;
        while (text && text.length > 0) {
            var isArray = !isFirst && text[0] == '[';
            if (!isArray) {
                if (!isFirst)
                    text = text.substr(1);
                var curName = this.getFirstName(text);
                if (!curName)
                    return res;
                if (!curValue[curName])
                    return res;
                curValue = curValue[curName];
                text = text.substr(curName.length);
            }
            else {
                if (!Array.isArray(curValue))
                    return res;
                var index = 1;
                var str = "";
                while (index < text.length && text[index] != ']') {
                    str += text[index];
                    index++;
                }
                text = index < text.length ? text.substr(index + 1) : "";
                index = this.getIntValue(str);
                if (index < 0 || index >= curValue.length)
                    return res;
                curValue = curValue[index];
            }
            isFirst = false;
        }
        res.value = curValue;
        res.hasValue = true;
        return res;
    };
    ProcessValue.prototype.getIntValue = function (str) {
        if (str == "0" || ((str | 0) > 0 && str % 1 == 0))
            return Number(str);
        return -1;
    };
    return ProcessValue;
}());



/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jsonobject__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__panel__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageModel; });




var PageModel = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](PageModel, _super);
    function PageModel(name) {
        if (name === void 0) { name = ""; }
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.numValue = -1;
        _this.navigationButtonsVisibility = "inherit";
        return _this;
    }
    PageModel.prototype.getType = function () { return "page"; };
    Object.defineProperty(PageModel.prototype, "num", {
        get: function () { return this.numValue; },
        set: function (value) {
            if (this.numValue == value)
                return;
            this.numValue = value;
            this.onNumChanged(value);
        },
        enumerable: true,
        configurable: true
    });
    PageModel.prototype.focusFirstQuestion = function () {
        for (var i = 0; i < this.questions.length; i++) {
            var question = this.questions[i];
            if (!question.visible || !question.hasInput)
                continue;
            this.questions[i].focus();
            break;
        }
    };
    PageModel.prototype.focusFirstErrorQuestion = function () {
        for (var i = 0; i < this.questions.length; i++) {
            if (!this.questions[i].visible || this.questions[i].currentErrorCount == 0)
                continue;
            this.questions[i].focus(true);
            break;
        }
    };
    PageModel.prototype.scrollToTop = function () {
        __WEBPACK_IMPORTED_MODULE_2__base__["c" /* SurveyElement */].ScrollElementToTop(__WEBPACK_IMPORTED_MODULE_2__base__["d" /* SurveyPageId */]);
    };
    PageModel.prototype.hasErrors = function (fireCallback, focuseOnFirstError) {
        if (fireCallback === void 0) { fireCallback = true; }
        if (focuseOnFirstError === void 0) { focuseOnFirstError = false; }
        var result = false;
        var firstErrorQuestion = null;
        for (var i = 0; i < this.questions.length; i++) {
            if (this.questions[i].visible && this.questions[i].hasErrors(fireCallback)) {
                if (focuseOnFirstError && firstErrorQuestion == null) {
                    firstErrorQuestion = this.questions[i];
                }
                result = true;
            }
        }
        if (firstErrorQuestion)
            firstErrorQuestion.focus(true);
        return result;
    };
    PageModel.prototype.addQuestionsToList = function (list, visibleOnly) {
        if (visibleOnly === void 0) { visibleOnly = false; }
        if (visibleOnly && !this.visible)
            return;
        var qs = this.questions;
        for (var i = 0; i < qs.length; i++) {
            if (visibleOnly && !qs[i].visible)
                continue;
            list.push(qs[i]);
        }
    };
    PageModel.prototype.onNumChanged = function (value) {
    };
    PageModel.prototype.onVisibleChanged = function () {
        _super.prototype.onVisibleChanged.call(this);
        if (this.data != null) {
            this.data.pageVisibilityChanged(this, this.visible);
        }
    };
    return PageModel;
}(__WEBPACK_IMPORTED_MODULE_3__panel__["a" /* PanelModelBase */]));

__WEBPACK_IMPORTED_MODULE_1__jsonobject__["a" /* JsonObject */].metaData.addClass("page", [{ name: "navigationButtonsVisibility", default: "inherit", choices: ["iherit", "show", "hide"] }], function () { return new PageModel(); }, "panel");


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jsonobject__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__conditions__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__questionfactory__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return QuestionRowModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PanelModelBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return PanelModel; });





var QuestionRowModel = (function () {
    function QuestionRowModel(panel) {
        this.panel = panel;
        this.elements = [];
        this.visibleValue = panel.data && panel.data.isDesignMode;
    }
    Object.defineProperty(QuestionRowModel.prototype, "questions", {
        //TODO remove after updating react and vue
        get: function () { return this.elements; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionRowModel.prototype, "visible", {
        get: function () { return this.visibleValue; },
        set: function (val) {
            if (val == this.visible)
                return;
            this.visibleValue = val;
            this.onVisibleChanged();
        },
        enumerable: true,
        configurable: true
    });
    QuestionRowModel.prototype.updateVisible = function () {
        this.visible = this.calcVisible();
        this.setWidth();
    };
    QuestionRowModel.prototype.addElement = function (q) {
        this.elements.push(q);
        this.updateVisible();
    };
    QuestionRowModel.prototype.onVisibleChanged = function () {
        if (this.visibilityChangedCallback)
            this.visibilityChangedCallback();
    };
    QuestionRowModel.prototype.setWidth = function () {
        var visCount = this.getVisibleCount();
        if (visCount == 0)
            return;
        var counter = 0;
        for (var i = 0; i < this.elements.length; i++)
            if (this.elements[i].isVisible) {
                var q = this.elements[i];
                q.renderWidth = q.width ? q.width : Math.floor(100 / visCount) + '%';
                q.rightIndent = counter < visCount - 1 ? 1 : 0;
                counter++;
            }
    };
    QuestionRowModel.prototype.getVisibleCount = function () {
        var res = 0;
        for (var i = 0; i < this.elements.length; i++) {
            if (this.elements[i].isVisible)
                res++;
        }
        return res;
    };
    QuestionRowModel.prototype.calcVisible = function () { return this.getVisibleCount() > 0; };
    return QuestionRowModel;
}());

var PanelModelBase = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](PanelModelBase, _super);
    function PanelModelBase(name) {
        if (name === void 0) { name = ""; }
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.dataValue = null;
        _this.rowValues = null;
        _this.conditionRunner = null;
        _this.elementsValue = new Array();
        _this.isQuestionsReady = false;
        _this.questionsValue = new Array();
        _this.parent = null;
        _this.visibleIf = "";
        _this.title = "";
        _this.visibleIndex = -1;
        _this.visibleValue = true;
        _this.idValue = PanelModelBase.getPanelId();
        var self = _this;
        _this.elementsValue.push = function (value) { return self.doOnPushElement(this, value); };
        _this.elementsValue.splice = function (start, deleteCount) {
            var items = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                items[_i - 2] = arguments[_i];
            }
            return self.doSpliceElements.apply(self, [this, start, deleteCount].concat(items));
        };
        return _this;
    }
    PanelModelBase.getPanelId = function () {
        return "sp_" + PanelModelBase.panelCounter++;
    };
    Object.defineProperty(PanelModelBase.prototype, "data", {
        get: function () { return this.dataValue; },
        set: function (value) {
            if (this.dataValue === value)
                return;
            this.dataValue = value;
            for (var i = 0; i < this.elements.length; i++) {
                this.elements[i].setData(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PanelModelBase.prototype, "id", {
        get: function () { return this.idValue; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PanelModelBase.prototype, "questions", {
        get: function () {
            if (!this.isQuestionsReady) {
                this.questionsValue = [];
                for (var i = 0; i < this.elements.length; i++) {
                    var el = this.elements[i];
                    if (el.isPanel) {
                        var qs = el.questions;
                        for (var j = 0; j < qs.length; j++) {
                            this.questionsValue.push(qs[j]);
                        }
                    }
                    else {
                        this.questionsValue.push(el);
                    }
                }
                this.isQuestionsReady = true;
            }
            return this.questionsValue;
        },
        enumerable: true,
        configurable: true
    });
    PanelModelBase.prototype.markQuestionListDirty = function () {
        this.isQuestionsReady = false;
        if (this.parent)
            this.parent.markQuestionListDirty();
    };
    Object.defineProperty(PanelModelBase.prototype, "elements", {
        get: function () { return this.elementsValue; },
        enumerable: true,
        configurable: true
    });
    PanelModelBase.prototype.containsElement = function (element) {
        for (var i = 0; i < this.elements.length; i++) {
            var el = this.elements[i];
            if (el == element)
                return true;
            if (el.isPanel) {
                if (el.containsElement(element))
                    return true;
            }
        }
        return false;
    };
    Object.defineProperty(PanelModelBase.prototype, "rows", {
        get: function () {
            if (!this.rowValues) {
                this.rowValues = this.buildRows();
            }
            return this.rowValues;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PanelModelBase.prototype, "isActive", {
        get: function () { return (!this.data) || this.data.currentPage == this.root; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PanelModelBase.prototype, "root", {
        get: function () {
            var res = this;
            while (res.parent)
                res = res.parent;
            return res;
        },
        enumerable: true,
        configurable: true
    });
    PanelModelBase.prototype.createRow = function () { return new QuestionRowModel(this); };
    PanelModelBase.prototype.onSurveyLoad = function () {
        for (var i = 0; i < this.elements.length; i++) {
            this.elements[i].onSurveyLoad();
        }
        if (this.rowsChangedCallback)
            this.rowsChangedCallback();
    };
    Object.defineProperty(PanelModelBase.prototype, "isLoadingFromJson", {
        get: function () { return this.data && this.data.isLoadingFromJson; },
        enumerable: true,
        configurable: true
    });
    PanelModelBase.prototype.onRowsChanged = function () {
        this.rowValues = null;
        if (this.rowsChangedCallback && !this.isLoadingFromJson)
            this.rowsChangedCallback();
    };
    Object.defineProperty(PanelModelBase.prototype, "isDesignMode", {
        get: function () { return this.data && this.data.isDesignMode; },
        enumerable: true,
        configurable: true
    });
    PanelModelBase.prototype.doOnPushElement = function (list, value) {
        var result = Array.prototype.push.call(list, value);
        this.markQuestionListDirty();
        this.onAddElement(value, list.length);
        this.onRowsChanged();
        return result;
    };
    PanelModelBase.prototype.doSpliceElements = function (list, start, deleteCount) {
        var items = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            items[_i - 3] = arguments[_i];
        }
        if (!start)
            start = 0;
        if (!deleteCount)
            deleteCount = 0;
        var deletedQuestions = [];
        for (var i = 0; i < deleteCount; i++) {
            if (i + start >= list.length)
                continue;
            deletedQuestions.push(list[i + start]);
        }
        var result = (_a = Array.prototype.splice).call.apply(_a, [list, start, deleteCount].concat(items));
        this.markQuestionListDirty();
        if (!items)
            items = [];
        for (var i = 0; i < deletedQuestions.length; i++) {
            this.onRemoveElement(deletedQuestions[i]);
        }
        for (var i = 0; i < items.length; i++) {
            this.onAddElement(items[i], start + i);
        }
        this.onRowsChanged();
        return result;
        var _a;
    };
    PanelModelBase.prototype.onAddElement = function (element, index) {
        if (element.isPanel) {
            var p = element;
            p.data = this.data;
            p.parent = this;
            if (this.data) {
                this.data.panelAdded(p, index, this, this.root);
            }
        }
        else {
            if (this.data) {
                var q = element;
                q.setData(this.data);
                this.data.questionAdded(q, index, this, this.root);
            }
        }
        var self = this;
        element.rowVisibilityChangedCallback = function () { self.onElementVisibilityChanged(element); };
        element.startWithNewLineChangedCallback = function () { self.onElementStartWithNewLineChanged(element); };
    };
    PanelModelBase.prototype.onRemoveElement = function (element) {
        if (!element.isPanel) {
            if (this.data)
                this.data.questionRemoved(element);
        }
        else {
            if (this.data)
                this.data.panelRemoved(element);
        }
    };
    PanelModelBase.prototype.onElementVisibilityChanged = function (element) {
        if (this.rowValues) {
            this.updateRowsVisibility(element);
        }
        if (this.parent) {
            this.parent.onElementVisibilityChanged(this);
        }
    };
    PanelModelBase.prototype.onElementStartWithNewLineChanged = function (element) {
        this.onRowsChanged();
    };
    PanelModelBase.prototype.updateRowsVisibility = function (element) {
        for (var i = 0; i < this.rowValues.length; i++) {
            var row = this.rowValues[i];
            if (row.elements.indexOf(element) > -1) {
                row.updateVisible();
                break;
            }
        }
    };
    PanelModelBase.prototype.buildRows = function () {
        var result = new Array();
        var lastRowVisibleIndex = -1;
        var self = this;
        for (var i = 0; i < this.elements.length; i++) {
            var el = this.elements[i];
            var isNewRow = i == 0 || el.startWithNewLine;
            var row = isNewRow ? this.createRow() : result[result.length - 1];
            if (isNewRow)
                result.push(row);
            row.addElement(el);
        }
        for (var i = 0; i < result.length; i++) {
            result[i].updateVisible();
        }
        return result;
    };
    Object.defineProperty(PanelModelBase.prototype, "processedTitle", {
        get: function () { return this.data != null ? this.data.processText(this.title) : this.title; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PanelModelBase.prototype, "visible", {
        get: function () { return this.visibleValue; },
        set: function (value) {
            if (value === this.visible)
                return;
            this.visibleValue = value;
            this.onVisibleChanged();
        },
        enumerable: true,
        configurable: true
    });
    PanelModelBase.prototype.onVisibleChanged = function () {
    };
    Object.defineProperty(PanelModelBase.prototype, "isVisible", {
        get: function () { return (this.data && this.data.isDesignMode) || this.getIsPageVisible(null); },
        enumerable: true,
        configurable: true
    });
    PanelModelBase.prototype.getIsPageVisible = function (exceptionQuestion) {
        if (!this.visible)
            return false;
        for (var i = 0; i < this.questions.length; i++) {
            if (this.questions[i] == exceptionQuestion)
                continue;
            if (this.questions[i].visible)
                return true;
        }
        return false;
    };
    PanelModelBase.prototype.addElement = function (element, index) {
        if (index === void 0) { index = -1; }
        if (element == null)
            return;
        if (index < 0 || index >= this.elements.length) {
            this.elements.push(element);
        }
        else {
            this.elements.splice(index, 0, element);
        }
    };
    PanelModelBase.prototype.addQuestion = function (question, index) {
        if (index === void 0) { index = -1; }
        this.addElement(question, index);
    };
    PanelModelBase.prototype.addPanel = function (panel, index) {
        if (index === void 0) { index = -1; }
        this.addElement(panel, index);
    };
    PanelModelBase.prototype.addNewQuestion = function (questionType, name) {
        var question = __WEBPACK_IMPORTED_MODULE_4__questionfactory__["a" /* QuestionFactory */].Instance.createQuestion(questionType, name);
        this.addQuestion(question);
        return question;
    };
    PanelModelBase.prototype.addNewPanel = function (name) {
        var panel = this.createNewPanel(name);
        this.addPanel(panel);
        return panel;
    };
    PanelModelBase.prototype.createNewPanel = function (name) {
        return new PanelModel(name);
    };
    PanelModelBase.prototype.removeElement = function (element) {
        var index = this.elements.indexOf(element);
        if (index < 0) {
            for (var i = 0; i < this.elements.length; i++) {
                var el = this.elements[i];
                if (el.isPanel && el.removeElement(element))
                    return true;
            }
            return false;
        }
        this.elements.splice(index, 1);
        return true;
    };
    PanelModelBase.prototype.removeQuestion = function (question) {
        this.removeElement(question);
    };
    PanelModelBase.prototype.runCondition = function (values) {
        for (var i = 0; i < this.elements.length; i++) {
            this.elements[i].runCondition(values);
        }
        if (!this.visibleIf)
            return;
        if (!this.conditionRunner)
            this.conditionRunner = new __WEBPACK_IMPORTED_MODULE_3__conditions__["a" /* ConditionRunner */](this.visibleIf);
        this.conditionRunner.expression = this.visibleIf;
        this.visible = this.conditionRunner.run(values);
    };
    return PanelModelBase;
}(__WEBPACK_IMPORTED_MODULE_2__base__["a" /* Base */]));

PanelModelBase.panelCounter = 100;
//export class 
var PanelModel = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](PanelModel, _super);
    function PanelModel(name) {
        if (name === void 0) { name = ""; }
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.innerIndentValue = 0;
        _this.startWithNewLineValue = true;
        return _this;
    }
    PanelModel.prototype.getType = function () { return "panel"; };
    PanelModel.prototype.setData = function (newValue) {
        this.data = newValue;
    };
    Object.defineProperty(PanelModel.prototype, "isPanel", {
        get: function () { return true; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PanelModel.prototype, "innerIndent", {
        get: function () { return this.innerIndentValue; },
        set: function (val) {
            if (val == this.innerIndentValue)
                return;
            this.innerIndentValue = val;
            if (this.renderWidthChangedCallback)
                this.renderWidthChangedCallback();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PanelModel.prototype, "renderWidth", {
        get: function () { return this.renderWidthValue; },
        set: function (val) {
            if (val == this.renderWidth)
                return;
            this.renderWidthValue = val;
            if (this.renderWidthChangedCallback)
                this.renderWidthChangedCallback();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PanelModel.prototype, "startWithNewLine", {
        get: function () { return this.startWithNewLineValue; },
        set: function (value) {
            if (this.startWithNewLine == value)
                return;
            this.startWithNewLineValue = value;
            if (this.startWithNewLineChangedCallback)
                this.startWithNewLineChangedCallback();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PanelModel.prototype, "rightIndent", {
        get: function () { return this.rightIndentValue; },
        set: function (val) {
            if (val == this.rightIndent)
                return;
            this.rightIndentValue = val;
            if (this.renderWidthChangedCallback)
                this.renderWidthChangedCallback();
        },
        enumerable: true,
        configurable: true
    });
    PanelModel.prototype.onVisibleChanged = function () {
        if (this.rowVisibilityChangedCallback)
            this.rowVisibilityChangedCallback();
    };
    return PanelModel;
}(PanelModelBase));

__WEBPACK_IMPORTED_MODULE_1__jsonobject__["a" /* JsonObject */].metaData.addClass("panel", ["name", { name: "elements", alternativeName: "questions", baseClassName: "question", visible: false },
    { name: "visible:boolean", default: true }, "visibleIf:expression", "title",
    { name: "innerIndent:number", default: 0, choices: [0, 1, 2, 3] }], function () { return new PanelModel(); });


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return QuestionCustomWidget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomWidgetCollection; });

var QuestionCustomWidget = (function () {
    function QuestionCustomWidget(name, widgetJson) {
        this.name = name;
        this.widgetJson = widgetJson;
        this.htmlTemplate = widgetJson.htmlTemplate ? widgetJson.htmlTemplate : "";
    }
    QuestionCustomWidget.prototype.afterRender = function (question, el) {
        if (this.widgetJson.afterRender)
            this.widgetJson.afterRender(question, el);
    };
    QuestionCustomWidget.prototype.isFit = function (question) {
        if (this.widgetJson.isFit)
            return this.widgetJson.isFit(question);
        return false;
    };
    return QuestionCustomWidget;
}());

var CustomWidgetCollection = (function () {
    function CustomWidgetCollection() {
        this.widgetsValues = [];
        this.onCustomWidgetAdded = new __WEBPACK_IMPORTED_MODULE_0__base__["b" /* Event */]();
    }
    Object.defineProperty(CustomWidgetCollection.prototype, "widgets", {
        get: function () { return this.widgetsValues; },
        enumerable: true,
        configurable: true
    });
    CustomWidgetCollection.prototype.addCustomWidget = function (widgetJson) {
        var name = widgetJson.name;
        if (!name) {
            name = "widget_" + this.widgets.length + 1;
        }
        var customWidget = new QuestionCustomWidget(name, widgetJson);
        this.widgetsValues.push(customWidget);
        this.onCustomWidgetAdded.fire(customWidget, null);
    };
    CustomWidgetCollection.prototype.clear = function () { this.widgetsValues = []; };
    CustomWidgetCollection.prototype.getCustomWidget = function (question) {
        for (var i = 0; i < this.widgetsValues.length; i++) {
            if (this.widgetsValues[i].isFit(question))
                return this.widgetsValues[i];
        }
        return null;
    };
    return CustomWidgetCollection;
}());

CustomWidgetCollection.Instance = new CustomWidgetCollection();


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jsonobject__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__question__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__surveyStrings__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__question_baseselect__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__choicesRestfull__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__questionfactory__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return MatrixDropdownColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return MatrixDropdownCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatrixDropdownRowModelBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return QuestionMatrixDropdownModelBase; });








var MatrixDropdownColumn = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](MatrixDropdownColumn, _super);
    function MatrixDropdownColumn(name, title) {
        if (title === void 0) { title = null; }
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.choicesValue = [];
        _this.isRequired = false;
        _this.hasOther = false;
        _this.minWidth = "";
        _this.cellType = "default";
        _this.inputType = "text";
        _this.choicesOrder = "none";
        _this.colCountValue = -1;
        _this.choicesByUrl = new __WEBPACK_IMPORTED_MODULE_6__choicesRestfull__["a" /* ChoicesRestfull */]();
        return _this;
    }
    MatrixDropdownColumn.prototype.getType = function () { return "matrixdropdowncolumn"; };
    Object.defineProperty(MatrixDropdownColumn.prototype, "title", {
        get: function () { return this.titleValue ? this.titleValue : this.name; },
        set: function (value) { this.titleValue = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatrixDropdownColumn.prototype, "choices", {
        get: function () { return this.choicesValue; },
        set: function (newValue) {
            __WEBPACK_IMPORTED_MODULE_3__base__["f" /* ItemValue */].setData(this.choicesValue, newValue);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatrixDropdownColumn.prototype, "colCount", {
        get: function () { return this.colCountValue; },
        set: function (value) {
            if (value < -1 || value > 4)
                return;
            this.colCountValue = value;
        },
        enumerable: true,
        configurable: true
    });
    return MatrixDropdownColumn;
}(__WEBPACK_IMPORTED_MODULE_3__base__["a" /* Base */]));

var MatrixDropdownCell = (function () {
    function MatrixDropdownCell(column, row, data) {
        this.column = column;
        this.row = row;
        this.questionValue = data.createQuestion(this.row, this.column);
        this.questionValue.setData(row);
    }
    Object.defineProperty(MatrixDropdownCell.prototype, "question", {
        get: function () { return this.questionValue; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatrixDropdownCell.prototype, "value", {
        get: function () { return this.question.value; },
        set: function (value) {
            this.question.value = value;
        },
        enumerable: true,
        configurable: true
    });
    return MatrixDropdownCell;
}());

var MatrixDropdownRowModelBase = (function () {
    function MatrixDropdownRowModelBase(data, value) {
        this.rowValues = {};
        this.rowComments = {};
        this.isSettingValue = false;
        this.cells = [];
        this.data = data;
        this.value = value;
        this.idValue = MatrixDropdownRowModelBase.getId();
        this.buildCells();
    }
    MatrixDropdownRowModelBase.getId = function () { return "srow_" + MatrixDropdownRowModelBase.idCounter++; };
    Object.defineProperty(MatrixDropdownRowModelBase.prototype, "id", {
        get: function () { return this.idValue; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatrixDropdownRowModelBase.prototype, "rowName", {
        get: function () { return null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatrixDropdownRowModelBase.prototype, "value", {
        get: function () { return this.rowValues; },
        set: function (value) {
            this.isSettingValue = true;
            this.rowValues = {};
            if (value != null) {
                for (var key in value) {
                    this.rowValues[key] = value[key];
                }
            }
            for (var i = 0; i < this.cells.length; i++) {
                this.cells[i].question.onSurveyValueChanged(this.getValue(this.cells[i].column.name));
            }
            this.isSettingValue = false;
        },
        enumerable: true,
        configurable: true
    });
    MatrixDropdownRowModelBase.prototype.getValue = function (name) {
        return this.rowValues[name];
    };
    MatrixDropdownRowModelBase.prototype.setValue = function (name, newValue) {
        if (this.isSettingValue)
            return;
        if (newValue === "")
            newValue = null;
        if (newValue != null) {
            this.rowValues[name] = newValue;
        }
        else {
            delete this.rowValues[name];
        }
        this.data.onRowChanged(this, this.value);
    };
    MatrixDropdownRowModelBase.prototype.getComment = function (name) {
        return this.rowComments[name];
    };
    MatrixDropdownRowModelBase.prototype.setComment = function (name, newValue) {
        this.rowComments[name] = newValue;
    };
    Object.defineProperty(MatrixDropdownRowModelBase.prototype, "isEmpty", {
        get: function () {
            var val = this.value;
            if (!val)
                return true;
            for (var key in val)
                return false;
            return true;
        },
        enumerable: true,
        configurable: true
    });
    MatrixDropdownRowModelBase.prototype.buildCells = function () {
        var columns = this.data.columns;
        for (var i = 0; i < columns.length; i++) {
            var column = columns[i];
            this.cells.push(this.createCell(column));
        }
    };
    MatrixDropdownRowModelBase.prototype.createCell = function (column) {
        return new MatrixDropdownCell(column, this, this.data);
    };
    return MatrixDropdownRowModelBase;
}());

MatrixDropdownRowModelBase.idCounter = 1;
var QuestionMatrixDropdownModelBase = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionMatrixDropdownModelBase, _super);
    function QuestionMatrixDropdownModelBase(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.columnsValue = [];
        _this.choicesValue = [];
        _this.isRowChanging = false;
        _this.generatedVisibleRows = null;
        _this.cellTypeValue = "dropdown";
        _this.columnColCountValue = 0;
        _this.columnMinWidth = "";
        _this.horizontalScroll = false;
        var self = _this;
        _this.columnsValue.push = function (value) {
            var result = Array.prototype.push.call(this, value);
            if (self.data != null) {
                self.fireCallback(self.columnsChangedCallback);
            }
            return result;
        };
        return _this;
    }
    QuestionMatrixDropdownModelBase.prototype.getType = function () {
        return "matrixdropdownbase";
    };
    Object.defineProperty(QuestionMatrixDropdownModelBase.prototype, "columns", {
        get: function () { return this.columnsValue; },
        set: function (value) {
            this.columnsValue = value;
            this.fireCallback(this.columnsChangedCallback);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionMatrixDropdownModelBase.prototype, "cellType", {
        get: function () { return this.cellTypeValue; },
        set: function (newValue) {
            if (this.cellType == newValue)
                return;
            this.cellTypeValue = newValue;
            this.fireCallback(this.updateCellsCallbak);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionMatrixDropdownModelBase.prototype, "columnColCount", {
        get: function () { return this.columnColCountValue; },
        set: function (value) {
            if (value < 0 || value > 4)
                return;
            this.columnColCountValue = value;
            this.fireCallback(this.updateCellsCallbak);
        },
        enumerable: true,
        configurable: true
    });
    QuestionMatrixDropdownModelBase.prototype.getColumnTitle = function (column) {
        var result = column.title;
        if (column.isRequired && this.survey) {
            var requireText = this.survey.requiredText;
            if (requireText)
                requireText += " ";
            result = requireText + result;
        }
        return result;
    };
    QuestionMatrixDropdownModelBase.prototype.getColumnWidth = function (column) {
        return column.minWidth ? column.minWidth : this.columnMinWidth;
    };
    Object.defineProperty(QuestionMatrixDropdownModelBase.prototype, "choices", {
        get: function () { return this.choicesValue; },
        set: function (newValue) {
            __WEBPACK_IMPORTED_MODULE_3__base__["f" /* ItemValue */].setData(this.choicesValue, newValue);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionMatrixDropdownModelBase.prototype, "optionsCaption", {
        get: function () { return (this.optionsCaptionValue) ? this.optionsCaptionValue : __WEBPACK_IMPORTED_MODULE_4__surveyStrings__["a" /* surveyLocalization */].getString("optionsCaption"); },
        set: function (newValue) { this.optionsCaptionValue = newValue; },
        enumerable: true,
        configurable: true
    });
    QuestionMatrixDropdownModelBase.prototype.addColumn = function (name, title) {
        if (title === void 0) { title = null; }
        var column = new MatrixDropdownColumn(name, title);
        this.columnsValue.push(column);
        return column;
    };
    Object.defineProperty(QuestionMatrixDropdownModelBase.prototype, "visibleRows", {
        get: function () {
            this.generatedVisibleRows = this.generateRows();
            return this.generatedVisibleRows;
        },
        enumerable: true,
        configurable: true
    });
    QuestionMatrixDropdownModelBase.prototype.generateRows = function () { return null; };
    QuestionMatrixDropdownModelBase.prototype.createMatrixRow = function (name, text, value) {
        return null;
    };
    QuestionMatrixDropdownModelBase.prototype.createNewValue = function (curValue) { return !curValue ? {} : curValue; };
    QuestionMatrixDropdownModelBase.prototype.getRowValue = function (row, questionValue, create) {
        if (create === void 0) { create = false; }
        var result = questionValue[row.rowName] ? questionValue[row.rowName] : null;
        if (!result && create) {
            result = {};
            questionValue[row.rowName] = result;
        }
        return result;
    };
    QuestionMatrixDropdownModelBase.prototype.onBeforeValueChanged = function (val) {
    };
    QuestionMatrixDropdownModelBase.prototype.onValueChanged = function () {
        if (this.isRowChanging)
            return;
        this.onBeforeValueChanged(this.value);
        if (!(this.generatedVisibleRows) || this.generatedVisibleRows.length == 0)
            return;
        this.isRowChanging = true;
        var val = this.createNewValue(this.value);
        for (var i = 0; i < this.generatedVisibleRows.length; i++) {
            var row = this.generatedVisibleRows[i];
            this.generatedVisibleRows[i].value = this.getRowValue(row, val);
        }
        this.isRowChanging = false;
    };
    QuestionMatrixDropdownModelBase.prototype.supportGoNextPageAutomatic = function () {
        var rows = this.generatedVisibleRows;
        if (!rows)
            rows = this.visibleRows;
        if (!rows)
            return true;
        for (var i = 0; i < rows.length; i++) {
            var cells = this.generatedVisibleRows[i].cells;
            if (!cells)
                continue;
            for (var colIndex = 0; colIndex < cells.length; colIndex++) {
                var question = cells[colIndex].question;
                if (question && (!question.supportGoNextPageAutomatic() || !question.value))
                    return false;
            }
        }
        return true;
    };
    QuestionMatrixDropdownModelBase.prototype.hasErrors = function (fireCallback) {
        if (fireCallback === void 0) { fireCallback = true; }
        var errosInColumns = this.hasErrorInColumns(fireCallback);
        return _super.prototype.hasErrors.call(this, fireCallback) || errosInColumns;
    };
    QuestionMatrixDropdownModelBase.prototype.hasErrorInColumns = function (fireCallback) {
        if (!this.generatedVisibleRows)
            return false;
        var res = false;
        for (var colIndex = 0; colIndex < this.columns.length; colIndex++) {
            for (var i = 0; i < this.generatedVisibleRows.length; i++) {
                var cells = this.generatedVisibleRows[i].cells;
                res = cells && cells[colIndex] && cells[colIndex].question && cells[colIndex].question.hasErrors(fireCallback) || res;
            }
        }
        return res;
    };
    QuestionMatrixDropdownModelBase.prototype.getFirstInputElementId = function () {
        var question = this.getFirstCellQuestion(false);
        return question ? question.inputId : _super.prototype.getFirstInputElementId.call(this);
    };
    QuestionMatrixDropdownModelBase.prototype.getFirstErrorInputElementId = function () {
        var question = this.getFirstCellQuestion(true);
        return question ? question.inputId : _super.prototype.getFirstErrorInputElementId.call(this);
    };
    QuestionMatrixDropdownModelBase.prototype.getFirstCellQuestion = function (onError) {
        if (!this.generatedVisibleRows)
            return null;
        for (var i = 0; i < this.generatedVisibleRows.length; i++) {
            var cells = this.generatedVisibleRows[i].cells;
            for (var colIndex = 0; colIndex < this.columns.length; colIndex++) {
                if (!onError)
                    return cells[colIndex].question;
                if (cells[colIndex].question.currentErrorCount > 0)
                    return cells[colIndex].question;
            }
        }
        return null;
    };
    //IMatrixDropdownData
    QuestionMatrixDropdownModelBase.prototype.createQuestion = function (row, column) {
        var question = this.createQuestionCore(row, column);
        question.name = column.name;
        question.isRequired = column.isRequired;
        question.hasOther = column.hasOther;
        question.setData(this.survey);
        if (column.hasOther) {
            if (question instanceof __WEBPACK_IMPORTED_MODULE_5__question_baseselect__["b" /* QuestionSelectBase */]) {
                question.storeOthersAsComment = false;
            }
        }
        return question;
    };
    QuestionMatrixDropdownModelBase.prototype.createQuestionCore = function (row, column) {
        var cellType = column.cellType == "default" ? this.cellType : column.cellType;
        var name = this.getQuestionName(row, column);
        if (cellType == "checkbox")
            return this.createCheckbox(name, column);
        if (cellType == "radiogroup")
            return this.createRadiogroup(name, column);
        if (cellType == "text")
            return this.createText(name, column);
        if (cellType == "comment")
            return this.createComment(name, column);
        return this.createDropdown(name, column);
    };
    QuestionMatrixDropdownModelBase.prototype.getQuestionName = function (row, column) { return row.rowName + "_" + column.name; };
    QuestionMatrixDropdownModelBase.prototype.getColumnChoices = function (column) {
        return column.choices && column.choices.length > 0 ? column.choices : this.choices;
    };
    QuestionMatrixDropdownModelBase.prototype.getColumnOptionsCaption = function (column) {
        return column.optionsCaption ? column.optionsCaption : this.optionsCaption;
    };
    QuestionMatrixDropdownModelBase.prototype.createDropdown = function (name, column) {
        var q = this.createCellQuestion("dropdown", name);
        this.setSelectBaseProperties(q, column);
        q.optionsCaption = this.getColumnOptionsCaption(column);
        return q;
    };
    QuestionMatrixDropdownModelBase.prototype.createCheckbox = function (name, column) {
        var q = this.createCellQuestion("checkbox", name);
        this.setSelectBaseProperties(q, column);
        q.colCount = column.colCount > -1 ? column.colCount : this.columnColCount;
        return q;
    };
    QuestionMatrixDropdownModelBase.prototype.createRadiogroup = function (name, column) {
        var q = this.createCellQuestion("radiogroup", name);
        this.setSelectBaseProperties(q, column);
        q.colCount = column.colCount > -1 ? column.colCount : this.columnColCount;
        return q;
    };
    QuestionMatrixDropdownModelBase.prototype.setSelectBaseProperties = function (question, column) {
        question.choicesOrder = column.choicesOrder;
        question.choices = this.getColumnChoices(column);
        question.choicesByUrl.setData(column.choicesByUrl);
        if (!question.choicesByUrl.isEmpty) {
            question.choicesByUrl.run();
        }
    };
    QuestionMatrixDropdownModelBase.prototype.createText = function (name, column) {
        var q = this.createCellQuestion("text", name);
        q.inputType = column.inputType;
        q.placeHolder = column.placeHolder;
        return q;
    };
    QuestionMatrixDropdownModelBase.prototype.createComment = function (name, column) {
        var q = this.createCellQuestion("comment", name);
        q.placeHolder = column.placeHolder;
        return q;
    };
    QuestionMatrixDropdownModelBase.prototype.createCellQuestion = function (questionType, name) {
        return __WEBPACK_IMPORTED_MODULE_7__questionfactory__["a" /* QuestionFactory */].Instance.createQuestion(questionType, name);
    };
    QuestionMatrixDropdownModelBase.prototype.deleteRowValue = function (newValue, row) {
        delete newValue[row.rowName];
        return Object.keys(newValue).length == 0 ? null : newValue;
    };
    QuestionMatrixDropdownModelBase.prototype.onRowChanged = function (row, newRowValue) {
        var newValue = this.createNewValue(this.value);
        var rowValue = this.getRowValue(row, newValue, true);
        for (var key in rowValue)
            delete rowValue[key];
        if (newRowValue) {
            newRowValue = JSON.parse(JSON.stringify(newRowValue));
            for (var key in newRowValue)
                rowValue[key] = newRowValue[key];
        }
        if (Object.keys(rowValue).length == 0) {
            newValue = this.deleteRowValue(newValue, row);
        }
        this.isRowChanging = true;
        this.setNewValue(newValue);
        this.isRowChanging = false;
    };
    return QuestionMatrixDropdownModelBase;
}(__WEBPACK_IMPORTED_MODULE_2__question__["a" /* Question */]));

__WEBPACK_IMPORTED_MODULE_1__jsonobject__["a" /* JsonObject */].metaData.addClass("matrixdropdowncolumn", ["name", { name: "title", onGetValue: function (obj) { return obj.titleValue; } },
    { name: "choices:itemvalues", onGetValue: function (obj) { return __WEBPACK_IMPORTED_MODULE_3__base__["f" /* ItemValue */].getData(obj.choices); }, onSetValue: function (obj, value) { obj.choices = value; } },
    "optionsCaption", { name: "cellType", default: "default", choices: ["default", "dropdown", "checkbox", "radiogroup", "text", "comment"] },
    { name: "colCount", default: -1, choices: [-1, 0, 1, 2, 3, 4] }, "isRequired:boolean", "hasOther:boolean", "minWidth", "placeHolder",
    { name: "choicesOrder", default: "none", choices: ["none", "asc", "desc", "random"] },
    { name: "choicesByUrl:restfull", className: "ChoicesRestfull", onGetValue: function (obj) { return obj.choicesByUrl.isEmpty ? null : obj.choicesByUrl; }, onSetValue: function (obj, value) { obj.choicesByUrl.setData(value); } },
    { name: "inputType", default: "text", choices: ["color", "date", "datetime", "datetime-local", "email", "month", "number", "password", "range", "tel", "text", "time", "url", "week"] }], function () { return new MatrixDropdownColumn(""); });
__WEBPACK_IMPORTED_MODULE_1__jsonobject__["a" /* JsonObject */].metaData.addClass("matrixdropdownbase", [{ name: "columns:matrixdropdowncolumns", className: "matrixdropdowncolumn" },
    "horizontalScroll:boolean",
    { name: "choices:itemvalues", onGetValue: function (obj) { return __WEBPACK_IMPORTED_MODULE_3__base__["f" /* ItemValue */].getData(obj.choices); }, onSetValue: function (obj, value) { obj.choices = value; } },
    { name: "optionsCaption", onGetValue: function (obj) { return obj.optionsCaptionValue; } },
    { name: "cellType", default: "dropdown", choices: ["dropdown", "checkbox", "radiogroup", "text", "comment"] },
    { name: "columnColCount", default: 0, choices: [0, 1, 2, 3, 4] }, "columnMinWidth"], function () { return new QuestionMatrixDropdownModelBase(""); }, "question");


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jsonobject__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__conditions__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionBase; });




var QuestionBase = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionBase, _super);
    function QuestionBase(name) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.conditionRunner = null;
        _this.visibleIf = "";
        _this.visibleValue = true;
        _this.startWithNewLineValue = true;
        _this.visibleIndexValue = -1;
        _this.width = "";
        _this.renderWidthValue = "";
        _this.rightIndentValue = 0;
        _this.indent = 0;
        _this.idValue = QuestionBase.getQuestionId();
        _this.onCreating();
        return _this;
    }
    QuestionBase.getQuestionId = function () {
        return "sq_" + QuestionBase.questionCounter++;
    };
    Object.defineProperty(QuestionBase.prototype, "isPanel", {
        get: function () { return false; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionBase.prototype, "visible", {
        get: function () { return this.visibleValue; },
        set: function (val) {
            if (val == this.visible)
                return;
            this.visibleValue = val;
            this.fireCallback(this.visibilityChangedCallback);
            this.fireCallback(this.rowVisibilityChangedCallback);
            if (this.survey) {
                this.survey.questionVisibilityChanged(this, this.visible);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionBase.prototype, "isVisible", {
        get: function () { return this.visible || (this.survey && this.survey.isDesignMode); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionBase.prototype, "visibleIndex", {
        get: function () { return this.visibleIndexValue; },
        enumerable: true,
        configurable: true
    });
    QuestionBase.prototype.hasErrors = function (fireCallback) {
        if (fireCallback === void 0) { fireCallback = true; }
        return false;
    };
    Object.defineProperty(QuestionBase.prototype, "currentErrorCount", {
        get: function () { return 0; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionBase.prototype, "hasTitle", {
        get: function () { return false; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionBase.prototype, "hasInput", {
        get: function () { return false; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionBase.prototype, "hasComment", {
        get: function () { return false; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionBase.prototype, "id", {
        get: function () { return this.idValue; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionBase.prototype, "startWithNewLine", {
        get: function () { return this.startWithNewLineValue; },
        set: function (value) {
            if (this.startWithNewLine == value)
                return;
            this.startWithNewLineValue = value;
            if (this.startWithNewLineChangedCallback)
                this.startWithNewLineChangedCallback();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionBase.prototype, "renderWidth", {
        get: function () { return this.renderWidthValue; },
        set: function (val) {
            if (val == this.renderWidth)
                return;
            this.renderWidthValue = val;
            this.fireCallback(this.renderWidthChangedCallback);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionBase.prototype, "rightIndent", {
        get: function () { return this.rightIndentValue; },
        set: function (val) {
            if (val == this.rightIndent)
                return;
            this.rightIndentValue = val;
            this.fireCallback(this.renderWidthChangedCallback);
        },
        enumerable: true,
        configurable: true
    });
    QuestionBase.prototype.focus = function (onError) {
        if (onError === void 0) { onError = false; }
    };
    QuestionBase.prototype.setData = function (newValue) {
        this.data = newValue;
        if (newValue && newValue["questionAdded"]) {
            this.surveyValue = newValue;
        }
        this.onSetData();
    };
    Object.defineProperty(QuestionBase.prototype, "survey", {
        get: function () { return this.surveyValue; },
        enumerable: true,
        configurable: true
    });
    QuestionBase.prototype.fireCallback = function (callback) {
        if (callback)
            callback();
    };
    QuestionBase.prototype.onSetData = function () { };
    QuestionBase.prototype.onCreating = function () { };
    QuestionBase.prototype.runCondition = function (values) {
        if (!this.visibleIf)
            return;
        if (!this.conditionRunner)
            this.conditionRunner = new __WEBPACK_IMPORTED_MODULE_3__conditions__["a" /* ConditionRunner */](this.visibleIf);
        this.conditionRunner.expression = this.visibleIf;
        this.visible = this.conditionRunner.run(values);
    };
    //IQuestion
    QuestionBase.prototype.onSurveyValueChanged = function (newValue) {
    };
    QuestionBase.prototype.onSurveyLoad = function () {
    };
    QuestionBase.prototype.setVisibleIndex = function (value) {
        if (this.visibleIndexValue == value)
            return;
        this.visibleIndexValue = value;
        this.fireCallback(this.visibleIndexChangedCallback);
    };
    QuestionBase.prototype.supportGoNextPageAutomatic = function () { return false; };
    QuestionBase.prototype.clearUnusedValues = function () { };
    return QuestionBase;
}(__WEBPACK_IMPORTED_MODULE_1__base__["a" /* Base */]));

QuestionBase.questionCounter = 100;
__WEBPACK_IMPORTED_MODULE_2__jsonobject__["a" /* JsonObject */].metaData.addClass("questionbase", ["!name", { name: "visible:boolean", default: true }, "visibleIf:expression",
    { name: "width" }, { name: "startWithNewLine:boolean", default: true }, { name: "indent:number", default: 0, choices: [0, 1, 2, 3] }]);


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jsonobject__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__page__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__textPreProcessor__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__conditionProcessValue__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dxSurveyService__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__surveyStrings__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__error__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__questionCustomWidgets__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyModel; });










var SurveyModel = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](SurveyModel, _super);
    function SurveyModel(jsonObj) {
        if (jsonObj === void 0) { jsonObj = null; }
        var _this = _super.call(this) || this;
        _this.surveyId = null;
        _this.surveyPostId = null;
        _this.clientId = null;
        _this.cookieName = null;
        _this.sendResultOnPageNext = false;
        _this.commentPrefix = "-Comment";
        _this.title = "";
        _this.focusFirstQuestionAutomatic = true;
        _this.showNavigationButtons = true;
        _this.showTitle = true;
        _this.showPageTitles = true;
        _this.showCompletedPage = true;
        _this.completedHtml = "";
        _this.requiredText = "*";
        _this.questionStartIndex = "";
        _this.questionTitleTemplate = "";
        _this.showProgressBar = "off";
        _this.storeOthersAsComment = true;
        _this.goNextPageAutomatic = false;
        _this.pages = new Array();
        _this.triggers = new Array();
        _this.clearInvisibleValues = false;
        _this.currentPageValue = null;
        _this.valuesHash = {};
        _this.variablesHash = {};
        _this.showPageNumbersValue = false;
        _this.showQuestionNumbersValue = "on";
        _this.questionTitleLocationValue = "top";
        _this.localeValue = "";
        _this.isCompleted = false;
        _this.isLoading = false;
        _this.processedTextValues = {};
        _this.isValidatingOnServerValue = false;
        _this.modeValue = "edit";
        _this.isDesignModeValue = false;
        _this.onComplete = new __WEBPACK_IMPORTED_MODULE_2__base__["b" /* Event */]();
        _this.onPartialSend = new __WEBPACK_IMPORTED_MODULE_2__base__["b" /* Event */]();
        _this.onCurrentPageChanged = new __WEBPACK_IMPORTED_MODULE_2__base__["b" /* Event */]();
        _this.onValueChanged = new __WEBPACK_IMPORTED_MODULE_2__base__["b" /* Event */]();
        _this.onVisibleChanged = new __WEBPACK_IMPORTED_MODULE_2__base__["b" /* Event */]();
        _this.onPageVisibleChanged = new __WEBPACK_IMPORTED_MODULE_2__base__["b" /* Event */]();
        _this.onQuestionAdded = new __WEBPACK_IMPORTED_MODULE_2__base__["b" /* Event */]();
        _this.onQuestionRemoved = new __WEBPACK_IMPORTED_MODULE_2__base__["b" /* Event */]();
        _this.onPanelAdded = new __WEBPACK_IMPORTED_MODULE_2__base__["b" /* Event */]();
        _this.onPanelRemoved = new __WEBPACK_IMPORTED_MODULE_2__base__["b" /* Event */]();
        _this.onValidateQuestion = new __WEBPACK_IMPORTED_MODULE_2__base__["b" /* Event */]();
        _this.onProcessHtml = new __WEBPACK_IMPORTED_MODULE_2__base__["b" /* Event */]();
        _this.onSendResult = new __WEBPACK_IMPORTED_MODULE_2__base__["b" /* Event */]();
        _this.onGetResult = new __WEBPACK_IMPORTED_MODULE_2__base__["b" /* Event */]();
        _this.onUploadFile = new __WEBPACK_IMPORTED_MODULE_2__base__["b" /* Event */]();
        _this.onAfterRenderSurvey = new __WEBPACK_IMPORTED_MODULE_2__base__["b" /* Event */]();
        _this.onAfterRenderPage = new __WEBPACK_IMPORTED_MODULE_2__base__["b" /* Event */]();
        _this.onAfterRenderQuestion = new __WEBPACK_IMPORTED_MODULE_2__base__["b" /* Event */]();
        _this.onAfterRenderPanel = new __WEBPACK_IMPORTED_MODULE_2__base__["b" /* Event */]();
        _this.jsonErrors = null;
        _this.isLoadingFromJsonValue = false;
        var self = _this;
        _this.textPreProcessor = new __WEBPACK_IMPORTED_MODULE_4__textPreProcessor__["a" /* TextPreProcessor */]();
        _this.textPreProcessor.onHasValue = function (name) { return self.hasProcessedTextValue(name); };
        _this.textPreProcessor.onProcess = function (name) { return self.getProcessedTextValue(name); };
        _this.pages.push = function (value) {
            value.data = self;
            return Array.prototype.push.call(this, value);
        };
        _this.triggers.push = function (value) {
            value.setOwner(self);
            return Array.prototype.push.call(this, value);
        };
        _this.updateProcessedTextValues();
        _this.onBeforeCreating();
        if (jsonObj) {
            _this.setJsonObject(jsonObj);
            if (_this.surveyId) {
                _this.loadSurveyFromService(_this.surveyId);
            }
        }
        _this.onCreating();
        return _this;
    }
    SurveyModel.prototype.getType = function () { return "survey"; };
    Object.defineProperty(SurveyModel.prototype, "locale", {
        get: function () { return this.localeValue; },
        set: function (value) {
            this.localeValue = value;
            __WEBPACK_IMPORTED_MODULE_7__surveyStrings__["a" /* surveyLocalization */].currentLocale = value;
        },
        enumerable: true,
        configurable: true
    });
    SurveyModel.prototype.getLocString = function (str) { return __WEBPACK_IMPORTED_MODULE_7__surveyStrings__["a" /* surveyLocalization */].getString(str); };
    Object.defineProperty(SurveyModel.prototype, "emptySurveyText", {
        get: function () { return this.getLocString("emptySurvey"); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "pagePrevText", {
        get: function () { return (this.pagePrevTextValue) ? this.pagePrevTextValue : this.getLocString("pagePrevText"); },
        set: function (newValue) { this.pagePrevTextValue = newValue; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "pageNextText", {
        get: function () { return (this.pageNextTextValue) ? this.pageNextTextValue : this.getLocString("pageNextText"); },
        set: function (newValue) { this.pageNextTextValue = newValue; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "completeText", {
        get: function () { return (this.completeTextValue) ? this.completeTextValue : this.getLocString("completeText"); },
        set: function (newValue) { this.completeTextValue = newValue; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "showPageNumbers", {
        get: function () { return this.showPageNumbersValue; },
        set: function (value) {
            if (value === this.showPageNumbers)
                return;
            this.showPageNumbersValue = value;
            this.updateVisibleIndexes();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "showQuestionNumbers", {
        get: function () { return this.showQuestionNumbersValue; },
        set: function (value) {
            if (value === this.showQuestionNumbers)
                return;
            this.showQuestionNumbersValue = value;
            this.updateVisibleIndexes();
        },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(SurveyModel.prototype, "processedTitle", {
        get: function () { return this.processText(this.title); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "questionTitleLocation", {
        get: function () { return this.questionTitleLocationValue; },
        set: function (value) {
            if (value === this.questionTitleLocationValue)
                return;
            this.questionTitleLocationValue = value;
        },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(SurveyModel.prototype, "mode", {
        get: function () { return this.modeValue; },
        set: function (value) {
            if (value == this.mode)
                return;
            if (value != "edit" && value != "display")
                return;
            this.modeValue = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "data", {
        get: function () {
            var result = {};
            for (var key in this.valuesHash) {
                result[key] = this.valuesHash[key];
            }
            return result;
        },
        set: function (data) {
            this.valuesHash = {};
            if (data) {
                for (var key in data) {
                    this._setDataValue(data, key);
                    this.checkTriggers(key, data[key], false);
                    if (!this.processedTextValues[key.toLowerCase()]) {
                        this.processedTextValues[key.toLowerCase()] = "value";
                    }
                }
            }
            this.notifyAllQuestionsOnValueChanged();
            this.runConditions();
        },
        enumerable: true,
        configurable: true
    });
    SurveyModel.prototype._setDataValue = function (data, key) {
        this.valuesHash[key] = data[key];
    };
    Object.defineProperty(SurveyModel.prototype, "comments", {
        get: function () {
            var result = {};
            for (var key in this.valuesHash) {
                if (key.indexOf(this.commentPrefix) > 0) {
                    result[key] = this.valuesHash[key];
                }
            }
            return result;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "visiblePages", {
        get: function () {
            if (this.isDesignMode)
                return this.pages;
            var result = new Array();
            for (var i = 0; i < this.pages.length; i++) {
                if (this.pages[i].isVisible) {
                    result.push(this.pages[i]);
                }
            }
            return result;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "isEmpty", {
        get: function () { return this.pages.length == 0; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "PageCount", {
        get: function () {
            return this.pages.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "visiblePageCount", {
        get: function () {
            return this.visiblePages.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "currentPage", {
        get: function () {
            var vPages = this.visiblePages;
            if (this.currentPageValue != null) {
                if (vPages.indexOf(this.currentPageValue) < 0) {
                    this.currentPage = null;
                }
            }
            if (this.currentPageValue == null && vPages.length > 0) {
                this.currentPage = vPages[0];
            }
            return this.currentPageValue;
        },
        set: function (value) {
            var vPages = this.visiblePages;
            if (value != null && vPages.indexOf(value) < 0)
                return;
            if (value == this.currentPageValue)
                return;
            var oldValue = this.currentPageValue;
            this.currentPageValue = value;
            this.updateCustomWidgets(value);
            this.currentPageChanged(value, oldValue);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "currentPageNo", {
        get: function () {
            return this.visiblePages.indexOf(this.currentPage);
        },
        set: function (value) {
            var vPages = this.visiblePages;
            if (value < 0 || value >= this.visiblePages.length)
                return;
            this.currentPage = this.visiblePages[value];
        },
        enumerable: true,
        configurable: true
    });
    SurveyModel.prototype.focusFirstQuestion = function () {
        if (this.currentPageValue) {
            this.currentPageValue.scrollToTop();
            this.currentPageValue.focusFirstQuestion();
        }
    };
    Object.defineProperty(SurveyModel.prototype, "state", {
        get: function () {
            if (this.isLoading)
                return "loading";
            if (this.isCompleted)
                return "completed";
            return (this.currentPage) ? "running" : "empty";
        },
        enumerable: true,
        configurable: true
    });
    SurveyModel.prototype.clear = function (clearData, gotoFirstPage) {
        if (clearData === void 0) { clearData = true; }
        if (gotoFirstPage === void 0) { gotoFirstPage = true; }
        if (clearData) {
            this.data = null;
            this.variablesHash = {};
        }
        this.isCompleted = false;
        if (gotoFirstPage && this.visiblePageCount > 0) {
            this.currentPage = this.visiblePages[0];
        }
    };
    SurveyModel.prototype.mergeValues = function (src, dest) {
        if (!dest || !src)
            return;
        for (var key in src) {
            var value = src[key];
            if (value && typeof value === 'object') {
                if (!dest[key])
                    dest[key] = {};
                this.mergeValues(value, dest[key]);
            }
            else {
                dest[key] = value;
            }
        }
    };
    SurveyModel.prototype.updateCustomWidgets = function (page) {
        if (!page)
            return;
        for (var i = 0; i < page.questions.length; i++) {
            page.questions[i].customWidget = __WEBPACK_IMPORTED_MODULE_9__questionCustomWidgets__["a" /* CustomWidgetCollection */].Instance.getCustomWidget(page.questions[i]);
        }
    };
    SurveyModel.prototype.currentPageChanged = function (newValue, oldValue) {
        this.onCurrentPageChanged.fire(this, { 'oldCurrentPage': oldValue, 'newCurrentPage': newValue });
    };
    SurveyModel.prototype.getProgress = function () {
        if (this.currentPage == null)
            return 0;
        var index = this.visiblePages.indexOf(this.currentPage) + 1;
        return Math.ceil((index * 100 / this.visiblePageCount));
    };
    Object.defineProperty(SurveyModel.prototype, "isNavigationButtonsShowing", {
        get: function () {
            if (this.isDesignMode)
                return false;
            var page = this.currentPage;
            if (!page)
                return false;
            return page.navigationButtonsVisibility == "show" ||
                (page.navigationButtonsVisibility != "hide" && this.showNavigationButtons);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "isEditMode", {
        get: function () { return this.mode == "edit"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "isDisplayMode", {
        get: function () { return this.mode == "display"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "isDesignMode", {
        get: function () { return this.isDesignModeValue; },
        enumerable: true,
        configurable: true
    });
    SurveyModel.prototype.setDesignMode = function (value) {
        this.isDesignModeValue = value;
    };
    Object.defineProperty(SurveyModel.prototype, "hasCookie", {
        get: function () {
            if (!this.cookieName)
                return false;
            var cookies = document.cookie;
            return cookies && cookies.indexOf(this.cookieName + "=true") > -1;
        },
        enumerable: true,
        configurable: true
    });
    SurveyModel.prototype.setCookie = function () {
        if (!this.cookieName)
            return;
        document.cookie = this.cookieName + "=true; expires=Fri, 31 Dec 9999 0:0:0 GMT";
    };
    SurveyModel.prototype.deleteCookie = function () {
        if (!this.cookieName)
            return;
        document.cookie = this.cookieName + "=;";
    };
    SurveyModel.prototype.nextPage = function () {
        if (this.isLastPage)
            return false;
        if (this.isEditMode && this.isCurrentPageHasErrors)
            return false;
        if (this.doServerValidation())
            return false;
        this.doNextPage();
        return true;
    };
    Object.defineProperty(SurveyModel.prototype, "isCurrentPageHasErrors", {
        get: function () {
            if (this.currentPage == null)
                return true;
            return this.currentPage.hasErrors(true, true);
        },
        enumerable: true,
        configurable: true
    });
    SurveyModel.prototype.prevPage = function () {
        if (this.isFirstPage)
            return false;
        var vPages = this.visiblePages;
        var index = vPages.indexOf(this.currentPage);
        this.currentPage = vPages[index - 1];
    };
    SurveyModel.prototype.completeLastPage = function () {
        if (this.isEditMode && this.isCurrentPageHasErrors)
            return false;
        if (this.doServerValidation())
            return false;
        this.doComplete();
        return true;
    };
    Object.defineProperty(SurveyModel.prototype, "isFirstPage", {
        get: function () {
            if (this.currentPage == null)
                return true;
            return this.visiblePages.indexOf(this.currentPage) == 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "isLastPage", {
        get: function () {
            if (this.currentPage == null)
                return true;
            var vPages = this.visiblePages;
            return vPages.indexOf(this.currentPage) == vPages.length - 1;
        },
        enumerable: true,
        configurable: true
    });
    SurveyModel.prototype.doComplete = function () {
        this.clearUnusedValues();
        this.setCookie();
        this.setCompleted();
        this.onComplete.fire(this, null);
        if (this.surveyPostId) {
            this.sendResult();
        }
    };
    Object.defineProperty(SurveyModel.prototype, "isValidatingOnServer", {
        get: function () { return this.isValidatingOnServerValue; },
        enumerable: true,
        configurable: true
    });
    SurveyModel.prototype.setIsValidatingOnServer = function (val) {
        if (val == this.isValidatingOnServer)
            return;
        this.isValidatingOnServerValue = val;
        this.onIsValidatingOnServerChanged();
    };
    SurveyModel.prototype.onIsValidatingOnServerChanged = function () { };
    SurveyModel.prototype.doServerValidation = function () {
        if (!this.onServerValidateQuestions)
            return false;
        var self = this;
        var options = { data: {}, errors: {}, survey: this, complete: function () { self.completeServerValidation(options); } };
        for (var i = 0; i < this.currentPage.questions.length; i++) {
            var question = this.currentPage.questions[i];
            if (!question.visible)
                continue;
            var value = this.getValue(question.name);
            if (value)
                options.data[question.name] = value;
        }
        this.setIsValidatingOnServer(true);
        this.onServerValidateQuestions(this, options);
        return true;
    };
    SurveyModel.prototype.completeServerValidation = function (options) {
        this.setIsValidatingOnServer(false);
        if (!options && !options.survey)
            return;
        var self = options.survey;
        var hasErrors = false;
        if (options.errors) {
            for (var name in options.errors) {
                var question = self.getQuestionByName(name);
                if (question && question["errors"]) {
                    hasErrors = true;
                    question["addError"](new __WEBPACK_IMPORTED_MODULE_8__error__["a" /* CustomError */](options.errors[name]));
                }
            }
        }
        if (!hasErrors) {
            if (self.isLastPage)
                self.doComplete();
            else
                self.doNextPage();
        }
    };
    SurveyModel.prototype.doNextPage = function () {
        this.checkOnPageTriggers();
        if (this.sendResultOnPageNext) {
            this.sendResult(this.surveyPostId, this.clientId, true);
        }
        var vPages = this.visiblePages;
        var index = vPages.indexOf(this.currentPage);
        this.currentPage = vPages[index + 1];
    };
    SurveyModel.prototype.setCompleted = function () {
        this.isCompleted = true;
    };
    Object.defineProperty(SurveyModel.prototype, "processedCompletedHtml", {
        get: function () {
            if (this.completedHtml) {
                return this.processHtml(this.completedHtml);
            }
            return "<h3>" + this.getLocString("completingSurvey") + "</h3>";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "processedLoadingHtml", {
        get: function () {
            return "<h3>" + this.getLocString("loadingSurvey") + "</h3>";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyModel.prototype, "progressText", {
        get: function () {
            if (this.currentPage == null)
                return "";
            var vPages = this.visiblePages;
            var index = vPages.indexOf(this.currentPage) + 1;
            return this.getLocString("progressText")["format"](index, vPages.length);
        },
        enumerable: true,
        configurable: true
    });
    SurveyModel.prototype.afterRenderSurvey = function (htmlElement) {
        this.onAfterRenderSurvey.fire(this, { survey: this, htmlElement: htmlElement });
    };
    SurveyModel.prototype.afterRenderPage = function (htmlElement) {
        if (this.onAfterRenderPage.isEmpty)
            return;
        this.onAfterRenderPage.fire(this, { page: this.currentPage, htmlElement: htmlElement });
    };
    SurveyModel.prototype.afterRenderQuestion = function (question, htmlElement) {
        this.onAfterRenderQuestion.fire(this, { question: question, htmlElement: htmlElement });
    };
    SurveyModel.prototype.afterRenderPanel = function (panel, htmlElement) {
        this.onAfterRenderPanel.fire(this, { panel: panel, htmlElement: htmlElement });
    };
    SurveyModel.prototype.uploadFile = function (name, file, storeDataAsText, uploadingCallback) {
        var accept = true;
        this.onUploadFile.fire(this, { name: name, file: file, accept: accept });
        if (!accept)
            return false;
        if (!storeDataAsText && this.surveyPostId) {
            this.uploadFileCore(name, file, uploadingCallback);
        }
        return true;
    };
    SurveyModel.prototype.uploadFileCore = function (name, file, uploadingCallback) {
        var self = this;
        if (uploadingCallback)
            uploadingCallback("uploading");
        new __WEBPACK_IMPORTED_MODULE_6__dxSurveyService__["a" /* dxSurveyService */]().sendFile(this.surveyPostId, file, function (success, response) {
            if (uploadingCallback)
                uploadingCallback(success ? "success" : "error");
            if (success) {
                self.setValue(name, response);
            }
        });
    };
    SurveyModel.prototype.getPage = function (index) {
        return this.pages[index];
    };
    SurveyModel.prototype.addPage = function (page) {
        if (page == null)
            return;
        this.pages.push(page);
        this.updateVisibleIndexes();
    };
    SurveyModel.prototype.addNewPage = function (name) {
        var page = this.createNewPage(name);
        this.addPage(page);
        return page;
    };
    SurveyModel.prototype.removePage = function (page) {
        var index = this.pages.indexOf(page);
        if (index < 0)
            return;
        this.pages.splice(index, 1);
        if (this.currentPageValue == page) {
            this.currentPage = this.pages.length > 0 ? this.pages[0] : null;
        }
        this.updateVisibleIndexes();
    };
    SurveyModel.prototype.getQuestionByName = function (name, caseInsensitive) {
        if (caseInsensitive === void 0) { caseInsensitive = false; }
        var questions = this.getAllQuestions();
        if (caseInsensitive)
            name = name.toLowerCase();
        for (var i = 0; i < questions.length; i++) {
            var questionName = questions[i].name;
            if (caseInsensitive)
                questionName = questionName.toLowerCase();
            if (questionName == name)
                return questions[i];
        }
        return null;
    };
    SurveyModel.prototype.getQuestionsByNames = function (names, caseInsensitive) {
        if (caseInsensitive === void 0) { caseInsensitive = false; }
        var result = [];
        if (!names)
            return result;
        for (var i = 0; i < names.length; i++) {
            if (!names[i])
                continue;
            var question = this.getQuestionByName(names[i], caseInsensitive);
            if (question)
                result.push(question);
        }
        return result;
    };
    SurveyModel.prototype.getPageByElement = function (element) {
        for (var i = 0; i < this.pages.length; i++) {
            var page = this.pages[i];
            if (page.containsElement(element))
                return page;
        }
        return null;
    };
    SurveyModel.prototype.getPageByQuestion = function (question) {
        return this.getPageByElement(question);
    };
    SurveyModel.prototype.getPageByName = function (name) {
        for (var i = 0; i < this.pages.length; i++) {
            if (this.pages[i].name == name)
                return this.pages[i];
        }
        return null;
    };
    SurveyModel.prototype.getPagesByNames = function (names) {
        var result = [];
        if (!names)
            return result;
        for (var i = 0; i < names.length; i++) {
            if (!names[i])
                continue;
            var page = this.getPageByName(names[i]);
            if (page)
                result.push(page);
        }
        return result;
    };
    SurveyModel.prototype.getAllQuestions = function (visibleOnly) {
        if (visibleOnly === void 0) { visibleOnly = false; }
        var result = new Array();
        for (var i = 0; i < this.pages.length; i++) {
            this.pages[i].addQuestionsToList(result, visibleOnly);
        }
        return result;
    };
    SurveyModel.prototype.createNewPage = function (name) { return new __WEBPACK_IMPORTED_MODULE_3__page__["a" /* PageModel */](name); };
    SurveyModel.prototype.notifyQuestionOnValueChanged = function (name, newValue) {
        var questions = this.getAllQuestions();
        var question = null;
        for (var i = 0; i < questions.length; i++) {
            if (questions[i].name != name)
                continue;
            question = questions[i];
            this.doSurveyValueChanged(question, newValue);
        }
        this.onValueChanged.fire(this, { 'name': name, 'question': question, 'value': newValue });
    };
    SurveyModel.prototype.notifyAllQuestionsOnValueChanged = function () {
        var questions = this.getAllQuestions();
        for (var i = 0; i < questions.length; i++) {
            this.doSurveyValueChanged(questions[i], this.getValue(questions[i].name));
        }
    };
    SurveyModel.prototype.doSurveyValueChanged = function (question, newValue) {
        question.onSurveyValueChanged(newValue);
    };
    SurveyModel.prototype.checkOnPageTriggers = function () {
        var questions = this.getCurrentPageQuestions();
        for (var i = 0; i < questions.length; i++) {
            var question = questions[i];
            var value = this.getValue(question.name);
            this.checkTriggers(question.name, value, true);
        }
    };
    SurveyModel.prototype.getCurrentPageQuestions = function () {
        var result = [];
        var page = this.currentPage;
        if (!page)
            return result;
        for (var i = 0; i < page.questions.length; i++) {
            var question = page.questions[i];
            if (!question.visible || !question.name)
                continue;
            result.push(question);
        }
        return result;
    };
    SurveyModel.prototype.checkTriggers = function (name, newValue, isOnNextPage) {
        for (var i = 0; i < this.triggers.length; i++) {
            var trigger = this.triggers[i];
            if (trigger.name == name && trigger.isOnNextPage == isOnNextPage) {
                trigger.check(newValue);
            }
        }
    };
    SurveyModel.prototype.doElementsOnLoad = function () {
        for (var i = 0; i < this.pages.length; i++) {
            this.pages[i].onSurveyLoad();
        }
    };
    SurveyModel.prototype.runConditions = function () {
        var pages = this.pages;
        for (var i = 0; i < pages.length; i++) {
            pages[i].runCondition(this.valuesHash);
        }
    };
    SurveyModel.prototype.sendResult = function (postId, clientId, isPartialCompleted) {
        if (postId === void 0) { postId = null; }
        if (clientId === void 0) { clientId = null; }
        if (isPartialCompleted === void 0) { isPartialCompleted = false; }
        if (!this.isEditMode)
            return;
        if (isPartialCompleted && this.onPartialSend) {
            this.onPartialSend.fire(this, null);
        }
        if (!postId && this.surveyPostId) {
            postId = this.surveyPostId;
        }
        if (!postId)
            return;
        if (clientId) {
            this.clientId = clientId;
        }
        if (isPartialCompleted && !this.clientId)
            return;
        var self = this;
        new __WEBPACK_IMPORTED_MODULE_6__dxSurveyService__["a" /* dxSurveyService */]().sendResult(postId, this.data, function (success, response) {
            self.onSendResult.fire(self, { success: success, response: response });
        }, this.clientId, isPartialCompleted);
    };
    SurveyModel.prototype.getResult = function (resultId, name) {
        var self = this;
        new __WEBPACK_IMPORTED_MODULE_6__dxSurveyService__["a" /* dxSurveyService */]().getResult(resultId, name, function (success, data, dataList, response) {
            self.onGetResult.fire(self, { success: success, data: data, dataList: dataList, response: response });
        });
    };
    SurveyModel.prototype.loadSurveyFromService = function (surveyId) {
        if (surveyId === void 0) { surveyId = null; }
        if (surveyId) {
            this.surveyId = surveyId;
        }
        var self = this;
        this.isLoading = true;
        this.onLoadingSurveyFromService();
        new __WEBPACK_IMPORTED_MODULE_6__dxSurveyService__["a" /* dxSurveyService */]().loadSurvey(this.surveyId, function (success, result, response) {
            self.isLoading = false;
            if (success && result) {
                self.setJsonObject(result);
                self.notifyAllQuestionsOnValueChanged();
                self.onLoadSurveyFromService();
            }
        });
    };
    SurveyModel.prototype.onLoadingSurveyFromService = function () {
    };
    SurveyModel.prototype.onLoadSurveyFromService = function () {
    };
    SurveyModel.prototype.checkPageVisibility = function (question, oldQuestionVisible) {
        var page = this.getPageByQuestion(question);
        if (!page)
            return;
        var newValue = page.isVisible;
        if (newValue != page.getIsPageVisible(question) || oldQuestionVisible) {
            this.pageVisibilityChanged(page, newValue);
        }
    };
    SurveyModel.prototype.updateVisibleIndexes = function () {
        this.updatePageVisibleIndexes(this.showPageNumbers);
        if (this.showQuestionNumbers == "onPage") {
            var visPages = this.visiblePages;
            for (var i = 0; i < visPages.length; i++) {
                this.updateQuestionVisibleIndexes(visPages[i].questions, true);
            }
        }
        else {
            this.updateQuestionVisibleIndexes(this.getAllQuestions(false), this.showQuestionNumbers == "on");
        }
    };
    SurveyModel.prototype.updatePageVisibleIndexes = function (showIndex) {
        var index = 0;
        for (var i = 0; i < this.pages.length; i++) {
            this.pages[i].visibleIndex = this.pages[i].visible ? (index++) : -1;
            this.pages[i].num = showIndex && this.pages[i].visible ? this.pages[i].visibleIndex + 1 : -1;
        }
    };
    SurveyModel.prototype.updateQuestionVisibleIndexes = function (questions, showIndex) {
        var index = 0;
        for (var i = 0; i < questions.length; i++) {
            questions[i].setVisibleIndex(showIndex && questions[i].visible && questions[i].hasTitle ? (index++) : -1);
        }
    };
    Object.defineProperty(SurveyModel.prototype, "isLoadingFromJson", {
        get: function () { return this.isLoadingFromJsonValue; },
        enumerable: true,
        configurable: true
    });
    SurveyModel.prototype.setJsonObject = function (jsonObj) {
        if (!jsonObj)
            return;
        this.jsonErrors = null;
        this.isLoadingFromJsonValue = true;
        var jsonConverter = new __WEBPACK_IMPORTED_MODULE_1__jsonobject__["a" /* JsonObject */]();
        jsonConverter.toObject(jsonObj, this);
        if (jsonConverter.errors.length > 0) {
            this.jsonErrors = jsonConverter.errors;
        }
        this.isLoadingFromJsonValue = false;
        this.updateProcessedTextValues();
        if (this.hasCookie) {
            this.doComplete();
        }
        this.doElementsOnLoad();
        this.runConditions();
        this.updateVisibleIndexes();
    };
    SurveyModel.prototype.onBeforeCreating = function () { };
    SurveyModel.prototype.onCreating = function () { };
    SurveyModel.prototype.updateProcessedTextValues = function () {
        this.processedTextValues = {};
        var self = this;
        this.processedTextValues["pageno"] = function (name) { return self.currentPage != null ? self.visiblePages.indexOf(self.currentPage) + 1 : 0; };
        this.processedTextValues["pagecount"] = function (name) { return self.visiblePageCount; };
        var questions = this.getAllQuestions();
        for (var i = 0; i < questions.length; i++) {
            this.addQuestionToProcessedTextValues(questions[i]);
        }
    };
    SurveyModel.prototype.addQuestionToProcessedTextValues = function (question) {
        this.processedTextValues[question.name.toLowerCase()] = "question";
    };
    SurveyModel.prototype.hasProcessedTextValue = function (name) {
        var firstName = new __WEBPACK_IMPORTED_MODULE_5__conditionProcessValue__["a" /* ProcessValue */]().getFirstName(name);
        return this.processedTextValues[firstName.toLowerCase()];
    };
    SurveyModel.prototype.getProcessedTextValue = function (name) {
        var firstName = new __WEBPACK_IMPORTED_MODULE_5__conditionProcessValue__["a" /* ProcessValue */]().getFirstName(name);
        var val = this.processedTextValues[firstName.toLowerCase()];
        if (!val)
            return null;
        if (val == "variable") {
            return this.getVariable(name.toLowerCase());
        }
        if (val == "question") {
            var question = this.getQuestionByName(firstName, true);
            if (!question)
                return null;
            name = question.name + name.substr(firstName.length);
            return new __WEBPACK_IMPORTED_MODULE_5__conditionProcessValue__["a" /* ProcessValue */]().getValue(name, this.valuesHash);
        }
        if (val == "value") {
            return new __WEBPACK_IMPORTED_MODULE_5__conditionProcessValue__["a" /* ProcessValue */]().getValue(name, this.valuesHash);
        }
        return val(name);
    };
    SurveyModel.prototype.clearUnusedValues = function () {
        var questions = this.getAllQuestions();
        for (var i = 0; i < questions.length; i++) {
            questions[i].clearUnusedValues();
        }
        if (this.clearInvisibleValues) {
            this.clearInvisibleQuestionValues();
        }
    };
    SurveyModel.prototype.clearInvisibleQuestionValues = function () {
        var questions = this.getAllQuestions();
        for (var i = 0; i < questions.length; i++) {
            if (questions[i].visible)
                continue;
            this.clearValue(questions[i].name);
        }
    };
    SurveyModel.prototype.getVariable = function (name) {
        if (!name)
            return null;
        return this.variablesHash[name];
    };
    SurveyModel.prototype.setVariable = function (name, newValue) {
        if (!name)
            return;
        this.variablesHash[name] = newValue;
        this.processedTextValues[name.toLowerCase()] = "variable";
    };
    //ISurvey data
    SurveyModel.prototype.getUnbindValue = function (value) {
        if (value && value instanceof Object) {
            //do not return the same object instance!!!
            return JSON.parse(JSON.stringify(value));
        }
        return value;
    };
    SurveyModel.prototype.getValue = function (name) {
        if (!name || name.length == 0)
            return null;
        var value = this.valuesHash[name];
        return this.getUnbindValue(value);
    };
    SurveyModel.prototype.setValue = function (name, newValue) {
        if (this.isValueEqual(name, newValue))
            return;
        if (newValue === "" || newValue === null) {
            delete this.valuesHash[name];
        }
        else {
            newValue = this.getUnbindValue(newValue);
            this.valuesHash[name] = newValue;
            this.processedTextValues[name.toLowerCase()] = "value";
        }
        this.notifyQuestionOnValueChanged(name, newValue);
        this.checkTriggers(name, newValue, false);
        this.runConditions();
        this.tryGoNextPageAutomatic(name);
    };
    SurveyModel.prototype.isValueEqual = function (name, newValue) {
        if (newValue == "")
            newValue = null;
        var oldValue = this.getValue(name);
        if (newValue === null || oldValue === null)
            return newValue === oldValue;
        return this.isTwoValueEquals(newValue, oldValue);
    };
    SurveyModel.prototype.tryGoNextPageAutomatic = function (name) {
        if (!this.goNextPageAutomatic || !this.currentPage)
            return;
        var question = this.getQuestionByName(name);
        if (question && (!question.visible || !question.supportGoNextPageAutomatic()))
            return;
        var questions = this.getCurrentPageQuestions();
        for (var i = 0; i < questions.length; i++) {
            if (questions[i].hasInput && !this.getValue(questions[i].name))
                return;
        }
        if (!this.currentPage.hasErrors(true, false)) {
            if (!this.isLastPage) {
                this.nextPage();
            }
            else {
                this.doComplete();
            }
        }
    };
    SurveyModel.prototype.getComment = function (name) {
        var result = this.data[name + this.commentPrefix];
        if (result == null)
            result = "";
        return result;
    };
    SurveyModel.prototype.setComment = function (name, newValue) {
        name = name + this.commentPrefix;
        if (newValue === "" || newValue === null) {
            delete this.valuesHash[name];
        }
        else {
            this.valuesHash[name] = newValue;
            this.tryGoNextPageAutomatic(name);
        }
    };
    SurveyModel.prototype.clearValue = function (name) {
        this.setValue(name, null);
        this.setComment(name, null);
    };
    SurveyModel.prototype.questionVisibilityChanged = function (question, newValue) {
        this.updateVisibleIndexes();
        this.onVisibleChanged.fire(this, { 'question': question, 'name': question.name, 'visible': newValue });
        this.checkPageVisibility(question, !newValue);
    };
    SurveyModel.prototype.pageVisibilityChanged = function (page, newValue) {
        this.updateVisibleIndexes();
        this.onPageVisibleChanged.fire(this, { 'page': page, 'visible': newValue });
    };
    SurveyModel.prototype.questionAdded = function (question, index, parentPanel, rootPanel) {
        this.updateVisibleIndexes();
        this.addQuestionToProcessedTextValues(question);
        this.onQuestionAdded.fire(this, { 'question': question, 'name': question.name, 'index': index, 'parentPanel': parentPanel, 'rootPanel': rootPanel });
    };
    SurveyModel.prototype.questionRemoved = function (question) {
        this.updateVisibleIndexes();
        this.onQuestionRemoved.fire(this, { 'question': question, 'name': question.name });
    };
    SurveyModel.prototype.panelAdded = function (panel, index, parentPanel, rootPanel) {
        this.updateVisibleIndexes();
        this.onPanelAdded.fire(this, { 'panel': panel, 'name': panel.name, 'index': index, 'parentPanel': parentPanel, 'rootPanel': rootPanel });
    };
    SurveyModel.prototype.panelRemoved = function (panel) {
        this.updateVisibleIndexes();
        this.onPanelRemoved.fire(this, { 'panel': panel, 'name': panel.name });
    };
    SurveyModel.prototype.validateQuestion = function (name) {
        if (this.onValidateQuestion.isEmpty)
            return null;
        var options = { name: name, value: this.getValue(name), error: null };
        this.onValidateQuestion.fire(this, options);
        return options.error ? new __WEBPACK_IMPORTED_MODULE_8__error__["a" /* CustomError */](options.error) : null;
    };
    SurveyModel.prototype.processHtml = function (html) {
        var options = { html: html };
        this.onProcessHtml.fire(this, options);
        return this.processText(options.html);
    };
    SurveyModel.prototype.processText = function (text) {
        return this.textPreProcessor.process(text);
    };
    //ISurveyTriggerOwner
    SurveyModel.prototype.getObjects = function (pages, questions) {
        var result = [];
        Array.prototype.push.apply(result, this.getPagesByNames(pages));
        Array.prototype.push.apply(result, this.getQuestionsByNames(questions));
        return result;
    };
    SurveyModel.prototype.setTriggerValue = function (name, value, isVariable) {
        if (!name)
            return;
        if (isVariable) {
            this.setVariable(name, value);
        }
        else {
            this.setValue(name, value);
        }
    };
    return SurveyModel;
}(__WEBPACK_IMPORTED_MODULE_2__base__["a" /* Base */]));

__WEBPACK_IMPORTED_MODULE_1__jsonobject__["a" /* JsonObject */].metaData.addClass("survey", [{ name: "locale", choices: function () { return __WEBPACK_IMPORTED_MODULE_7__surveyStrings__["a" /* surveyLocalization */].getLocales(); } },
    "title", { name: "focusFirstQuestionAutomatic:boolean", default: true }, "completedHtml:html", { name: "pages", className: "page", visible: false },
    { name: "questions", baseClassName: "question", visible: false, onGetValue: function (obj) { return null; }, onSetValue: function (obj, value, jsonConverter) { var page = obj.addNewPage(""); jsonConverter.toObject({ questions: value }, page); } },
    { name: "triggers:triggers", baseClassName: "surveytrigger", classNamePart: "trigger" },
    "surveyId", "surveyPostId", "cookieName", "sendResultOnPageNext:boolean",
    { name: "showNavigationButtons:boolean", default: true }, { name: "showTitle:boolean", default: true },
    { name: "showPageTitles:boolean", default: true }, { name: "showCompletedPage:boolean", default: true },
    "showPageNumbers:boolean", { name: "showQuestionNumbers", default: "on", choices: ["on", "onPage", "off"] },
    { name: "questionTitleLocation", default: "top", choices: ["top", "bottom"] },
    { name: "showProgressBar", default: "off", choices: ["off", "top", "bottom"] },
    { name: "mode", default: "edit", choices: ["edit", "display"] },
    { name: "storeOthersAsComment:boolean", default: true }, "goNextPageAutomatic:boolean", "clearInvisibleValues:boolean",
    { name: "pagePrevText", onGetValue: function (obj) { return obj.pagePrevTextValue; } },
    { name: "pageNextText", onGetValue: function (obj) { return obj.pageNextTextValue; } },
    { name: "completeText", onGetValue: function (obj) { return obj.completeTextValue; } },
    { name: "requiredText", default: "*" }, "questionStartIndex", "questionTitleTemplate"]);


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TextPreProcessorItem */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextPreProcessor; });
var TextPreProcessorItem = (function () {
    function TextPreProcessorItem() {
    }
    return TextPreProcessorItem;
}());

var TextPreProcessor = (function () {
    function TextPreProcessor() {
    }
    TextPreProcessor.prototype.process = function (text) {
        if (!text)
            return text;
        if (!this.onProcess)
            return text;
        var items = this.getItems(text);
        for (var i = items.length - 1; i >= 0; i--) {
            var item = items[i];
            var name = this.getName(text.substring(item.start + 1, item.end));
            if (!this.canProcessName(name))
                continue;
            if (this.onHasValue && !this.onHasValue(name))
                continue;
            var value = this.onProcess(name);
            if (value == null)
                value = "";
            text = text.substr(0, item.start) + value + text.substr(item.end + 1);
        }
        return text;
    };
    TextPreProcessor.prototype.getItems = function (text) {
        var items = [];
        var length = text.length;
        var start = -1;
        var ch = '';
        for (var i = 0; i < length; i++) {
            ch = text[i];
            if (ch == '{')
                start = i;
            if (ch == '}') {
                if (start > -1) {
                    var item = new TextPreProcessorItem();
                    item.start = start;
                    item.end = i;
                    items.push(item);
                }
                start = -1;
            }
        }
        return items;
    };
    TextPreProcessor.prototype.getName = function (name) {
        if (!name)
            return;
        return name.trim();
    };
    TextPreProcessor.prototype.canProcessName = function (name) {
        if (!name)
            return false;
        for (var i = 0; i < name.length; i++) {
            var ch = name[i];
            //TODO
            if (ch == ' ' || ch == '-' || ch == '&')
                return false;
        }
        return true;
    };
    return TextPreProcessor;
}());



/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__error__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__surveyStrings__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__jsonobject__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return ValidatorResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return SurveyValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidatorRunner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return NumericValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return TextValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AnswerCountValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return RegexValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return EmailValidator; });





var ValidatorResult = (function () {
    function ValidatorResult(value, error) {
        if (error === void 0) { error = null; }
        this.value = value;
        this.error = error;
    }
    return ValidatorResult;
}());

var SurveyValidator = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](SurveyValidator, _super);
    function SurveyValidator() {
        var _this = _super.call(this) || this;
        _this.text = "";
        return _this;
    }
    SurveyValidator.prototype.getErrorText = function (name) {
        if (this.text)
            return this.text;
        return this.getDefaultErrorText(name);
    };
    SurveyValidator.prototype.getDefaultErrorText = function (name) {
        return "";
    };
    SurveyValidator.prototype.validate = function (value, name) {
        if (name === void 0) { name = null; }
        return null;
    };
    return SurveyValidator;
}(__WEBPACK_IMPORTED_MODULE_1__base__["a" /* Base */]));

var ValidatorRunner = (function () {
    function ValidatorRunner() {
    }
    ValidatorRunner.prototype.run = function (owner) {
        for (var i = 0; i < owner.validators.length; i++) {
            var validatorResult = owner.validators[i].validate(owner.value, owner.getValidatorTitle());
            if (validatorResult != null) {
                if (validatorResult.error)
                    return validatorResult.error;
                if (validatorResult.value) {
                    owner.value = validatorResult.value;
                }
            }
        }
        return null;
    };
    return ValidatorRunner;
}());

var NumericValidator = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](NumericValidator, _super);
    function NumericValidator(minValue, maxValue) {
        if (minValue === void 0) { minValue = null; }
        if (maxValue === void 0) { maxValue = null; }
        var _this = _super.call(this) || this;
        _this.minValue = minValue;
        _this.maxValue = maxValue;
        return _this;
    }
    NumericValidator.prototype.getType = function () { return "numericvalidator"; };
    NumericValidator.prototype.validate = function (value, name) {
        if (name === void 0) { name = null; }
        if (!value || !this.isNumber(value)) {
            return new ValidatorResult(null, new __WEBPACK_IMPORTED_MODULE_2__error__["c" /* RequreNumericError */]());
        }
        var result = new ValidatorResult(parseFloat(value));
        if (this.minValue && this.minValue > result.value) {
            result.error = new __WEBPACK_IMPORTED_MODULE_2__error__["a" /* CustomError */](this.getErrorText(name));
            return result;
        }
        if (this.maxValue && this.maxValue < result.value) {
            result.error = new __WEBPACK_IMPORTED_MODULE_2__error__["a" /* CustomError */](this.getErrorText(name));
            return result;
        }
        return (typeof value === 'number') ? null : result;
    };
    NumericValidator.prototype.getDefaultErrorText = function (name) {
        var vName = name ? name : "value";
        if (this.minValue && this.maxValue) {
            return __WEBPACK_IMPORTED_MODULE_3__surveyStrings__["a" /* surveyLocalization */].getString("numericMinMax")["format"](vName, this.minValue, this.maxValue);
        }
        else {
            if (this.minValue) {
                return __WEBPACK_IMPORTED_MODULE_3__surveyStrings__["a" /* surveyLocalization */].getString("numericMin")["format"](vName, this.minValue);
            }
            return __WEBPACK_IMPORTED_MODULE_3__surveyStrings__["a" /* surveyLocalization */].getString("numericMax")["format"](vName, this.maxValue);
        }
    };
    NumericValidator.prototype.isNumber = function (value) {
        return !isNaN(parseFloat(value)) && isFinite(value);
    };
    return NumericValidator;
}(SurveyValidator));

var TextValidator = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](TextValidator, _super);
    function TextValidator(minLength, maxLength) {
        if (minLength === void 0) { minLength = 0; }
        if (maxLength === void 0) { maxLength = 0; }
        var _this = _super.call(this) || this;
        _this.minLength = minLength;
        _this.maxLength = maxLength;
        return _this;
    }
    TextValidator.prototype.getType = function () { return "textvalidator"; };
    TextValidator.prototype.validate = function (value, name) {
        if (name === void 0) { name = null; }
        if (this.minLength > 0 && value.length < this.minLength) {
            return new ValidatorResult(null, new __WEBPACK_IMPORTED_MODULE_2__error__["a" /* CustomError */](this.getErrorText(name)));
        }
        if (this.maxLength > 0 && value.length > this.maxLength) {
            return new ValidatorResult(null, new __WEBPACK_IMPORTED_MODULE_2__error__["a" /* CustomError */](this.getErrorText(name)));
        }
        return null;
    };
    TextValidator.prototype.getDefaultErrorText = function (name) {
        if (this.minLength > 0 && this.maxLength > 0)
            return __WEBPACK_IMPORTED_MODULE_3__surveyStrings__["a" /* surveyLocalization */].getString("textMinMaxLength")["format"](this.minLength, this.maxLength);
        if (this.minLength > 0)
            return __WEBPACK_IMPORTED_MODULE_3__surveyStrings__["a" /* surveyLocalization */].getString("textMinLength")["format"](this.minLength);
        return __WEBPACK_IMPORTED_MODULE_3__surveyStrings__["a" /* surveyLocalization */].getString("textMaxLength")["format"](this.maxLength);
    };
    return TextValidator;
}(SurveyValidator));

var AnswerCountValidator = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](AnswerCountValidator, _super);
    function AnswerCountValidator(minCount, maxCount) {
        if (minCount === void 0) { minCount = null; }
        if (maxCount === void 0) { maxCount = null; }
        var _this = _super.call(this) || this;
        _this.minCount = minCount;
        _this.maxCount = maxCount;
        return _this;
    }
    AnswerCountValidator.prototype.getType = function () { return "answercountvalidator"; };
    AnswerCountValidator.prototype.validate = function (value, name) {
        if (name === void 0) { name = null; }
        if (value == null || value.constructor != Array)
            return null;
        var count = value.length;
        if (this.minCount && count < this.minCount) {
            return new ValidatorResult(null, new __WEBPACK_IMPORTED_MODULE_2__error__["a" /* CustomError */](this.getErrorText(__WEBPACK_IMPORTED_MODULE_3__surveyStrings__["a" /* surveyLocalization */].getString("minSelectError")["format"](this.minCount))));
        }
        if (this.maxCount && count > this.maxCount) {
            return new ValidatorResult(null, new __WEBPACK_IMPORTED_MODULE_2__error__["a" /* CustomError */](this.getErrorText(__WEBPACK_IMPORTED_MODULE_3__surveyStrings__["a" /* surveyLocalization */].getString("maxSelectError")["format"](this.maxCount))));
        }
        return null;
    };
    AnswerCountValidator.prototype.getDefaultErrorText = function (name) {
        return name;
    };
    return AnswerCountValidator;
}(SurveyValidator));

var RegexValidator = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](RegexValidator, _super);
    function RegexValidator(regex) {
        if (regex === void 0) { regex = null; }
        var _this = _super.call(this) || this;
        _this.regex = regex;
        return _this;
    }
    RegexValidator.prototype.getType = function () { return "regexvalidator"; };
    RegexValidator.prototype.validate = function (value, name) {
        if (name === void 0) { name = null; }
        if (!this.regex || !value)
            return null;
        var re = new RegExp(this.regex);
        if (re.test(value))
            return null;
        return new ValidatorResult(value, new __WEBPACK_IMPORTED_MODULE_2__error__["a" /* CustomError */](this.getErrorText(name)));
    };
    return RegexValidator;
}(SurveyValidator));

var EmailValidator = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](EmailValidator, _super);
    function EmailValidator() {
        var _this = _super.call(this) || this;
        _this.re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        return _this;
    }
    EmailValidator.prototype.getType = function () { return "emailvalidator"; };
    EmailValidator.prototype.validate = function (value, name) {
        if (name === void 0) { name = null; }
        if (!value)
            return null;
        if (this.re.test(value))
            return null;
        return new ValidatorResult(value, new __WEBPACK_IMPORTED_MODULE_2__error__["a" /* CustomError */](this.getErrorText(name)));
    };
    EmailValidator.prototype.getDefaultErrorText = function (name) {
        return __WEBPACK_IMPORTED_MODULE_3__surveyStrings__["a" /* surveyLocalization */].getString("invalidEmail");
    };
    return EmailValidator;
}(SurveyValidator));

__WEBPACK_IMPORTED_MODULE_4__jsonobject__["a" /* JsonObject */].metaData.addClass("surveyvalidator", ["text"]);
__WEBPACK_IMPORTED_MODULE_4__jsonobject__["a" /* JsonObject */].metaData.addClass("numericvalidator", ["minValue:number", "maxValue:number"], function () { return new NumericValidator(); }, "surveyvalidator");
__WEBPACK_IMPORTED_MODULE_4__jsonobject__["a" /* JsonObject */].metaData.addClass("textvalidator", ["minLength:number", "maxLength:number"], function () { return new TextValidator(); }, "surveyvalidator");
__WEBPACK_IMPORTED_MODULE_4__jsonobject__["a" /* JsonObject */].metaData.addClass("answercountvalidator", ["minCount:number", "maxCount:number"], function () { return new AnswerCountValidator(); }, "surveyvalidator");
__WEBPACK_IMPORTED_MODULE_4__jsonobject__["a" /* JsonObject */].metaData.addClass("regexvalidator", ["regex"], function () { return new RegexValidator(); }, "surveyvalidator");
__WEBPACK_IMPORTED_MODULE_4__jsonobject__["a" /* JsonObject */].metaData.addClass("emailvalidator", [], function () { return new EmailValidator(); }, "surveyvalidator");


/***/ }),
/* 25 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__panel__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__jsonobject__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__questionfactory__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionRow; });
/* unused harmony export PanelImplementorBase */
/* unused harmony export PageImplementor */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Panel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Page; });







var QuestionRow = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionRow, _super);
    function QuestionRow(panel) {
        var _this = _super.call(this, panel) || this;
        _this.panel = panel;
        _this.koVisible = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](_this.visible);
        _this.koElements = __WEBPACK_IMPORTED_MODULE_1_knockout__["observableArray"]();
        return _this;
    }
    QuestionRow.prototype.addElement = function (q) {
        _super.prototype.addElement.call(this, q);
        this.koElements(this.elements);
    };
    QuestionRow.prototype.onVisibleChanged = function () {
        this.koVisible(this.visible);
        _super.prototype.onVisibleChanged.call(this);
    };
    QuestionRow.prototype.koAfterRender = function (el, con) {
        for (var i = 0; i < el.length; i++) {
            var tEl = el[i];
            var nName = tEl.nodeName;
            if (nName == "#text")
                tEl.data = "";
        }
    };
    return QuestionRow;
}(__WEBPACK_IMPORTED_MODULE_3__panel__["b" /* QuestionRowModel */]));

var PanelImplementorBase = (function () {
    function PanelImplementorBase(panel) {
        this.panel = panel;
        var self = this;
        this.koRows = __WEBPACK_IMPORTED_MODULE_1_knockout__["observableArray"]();
        this.panel.rowsChangedCallback = function () { self.koRows(self.panel.rows); };
        this.panel["koQuestionAfterRender"] = function (el, con) { self.koQuestionAfterRender(el, con); };
        this.panel["koPanelAfterRender"] = function (el, con) { self.koPanelAfterRender(el, con); };
        this.panel["koRows"] = this.koRows;
    }
    PanelImplementorBase.prototype.koQuestionAfterRender = function (elements, con) {
        if (!this.panel.data)
            return;
        var el = __WEBPACK_IMPORTED_MODULE_5__base__["c" /* SurveyElement */].GetFirstNonTextElement(elements);
        if (el)
            this.panel.data.afterRenderQuestion(con, el);
    };
    PanelImplementorBase.prototype.koPanelAfterRender = function (elements, con) {
        if (!this.panel.data)
            return;
        var el = __WEBPACK_IMPORTED_MODULE_5__base__["c" /* SurveyElement */].GetFirstNonTextElement(elements);
        if (el)
            this.panel.data.afterRenderPanel(con, el);
    };
    return PanelImplementorBase;
}());

var PageImplementor = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](PageImplementor, _super);
    function PageImplementor(panel) {
        var _this = _super.call(this, panel) || this;
        _this.panel = panel;
        _this.koNo = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"]("");
        _this.panel["koNo"] = _this.koNo;
        return _this;
    }
    return PageImplementor;
}(PanelImplementorBase));

var Panel = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](Panel, _super);
    function Panel(name) {
        if (name === void 0) { name = ""; }
        var _this = _super.call(this, name) || this;
        new PanelImplementorBase(_this);
        _this.onCreating();
        var self = _this;
        _this.renderWidthChangedCallback = function () { self.onRenderWidthChanged(); };
        _this.koInnerMargin = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](_this.getIndentSize(_this.innerIndent));
        return _this;
    }
    Panel.prototype.createRow = function () { return new QuestionRow(this); };
    Panel.prototype.onCreating = function () { };
    Panel.prototype.onNumChanged = function (value) {
        this["koNo"](value > 0 ? value + ". " : "");
    };
    Panel.prototype.onRenderWidthChanged = function () {
        this.koInnerMargin(this.getIndentSize(this.innerIndent));
    };
    Panel.prototype.getIndentSize = function (indent) {
        if (indent < 1)
            return "";
        if (!this.data)
            return "";
        var css = this.data["css"];
        if (!css)
            return "";
        return indent * css.question.indent + "px";
    };
    return Panel;
}(__WEBPACK_IMPORTED_MODULE_3__panel__["c" /* PanelModel */]));

var Page = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](Page, _super);
    function Page(name) {
        if (name === void 0) { name = ""; }
        var _this = _super.call(this, name) || this;
        new PageImplementor(_this);
        _this.onCreating();
        return _this;
    }
    Page.prototype.createRow = function () { return new QuestionRow(this); };
    Page.prototype.createNewPanel = function (name) {
        return new Panel(name);
    };
    Page.prototype.onCreating = function () { };
    Page.prototype.onNumChanged = function (value) {
        this["koNo"](value > 0 ? value + ". " : "");
    };
    return Page;
}(__WEBPACK_IMPORTED_MODULE_2__page__["a" /* PageModel */]));

__WEBPACK_IMPORTED_MODULE_4__jsonobject__["a" /* JsonObject */].metaData.overrideClassCreatore("panel", function () { return new Panel(); });
__WEBPACK_IMPORTED_MODULE_4__jsonobject__["a" /* JsonObject */].metaData.overrideClassCreatore("page", function () { return new Page(); });
__WEBPACK_IMPORTED_MODULE_6__questionfactory__["b" /* ElementFactory */].Instance.registerElement("panel", function (name) { return new Panel(name); });


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return koTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyTemplateText; });
var koTemplate = __webpack_require__(80);
var SurveyTemplateText = (function () {
    function SurveyTemplateText() {
    }
    SurveyTemplateText.prototype.addText = function (newText, id, name) {
        id = this.getId(id, name);
        this.text = this.text + '<script type="text/html" ' + id + '>' + newText + '</script>';
    };
    SurveyTemplateText.prototype.replaceText = function (replaceText, id, questionType) {
        if (questionType === void 0) { questionType = null; }
        var posId = this.getId(id, questionType);
        var pos = this.text.indexOf(posId);
        if (pos < 0) {
            this.addText(replaceText, id, questionType);
            return;
        }
        pos = this.text.indexOf('>', pos);
        if (pos < 0)
            return;
        var startPos = pos + 1;
        var endString = "</script>";
        pos = this.text.indexOf(endString, startPos);
        if (pos < 0)
            return;
        this.text = this.text.substr(0, startPos) + replaceText + this.text.substr(pos);
    };
    SurveyTemplateText.prototype.getId = function (id, questionType) {
        var result = 'id="survey-' + id;
        if (questionType) {
            result += "-" + questionType;
        }
        return result + '"';
    };
    Object.defineProperty(SurveyTemplateText.prototype, "text", {
        get: function () { return koTemplate; },
        set: function (value) { koTemplate = value; },
        enumerable: true,
        configurable: true
    });
    return SurveyTemplateText;
}());



/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__conditions__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConditionsParser; });

var ConditionsParser = (function () {
    function ConditionsParser() {
    }
    ConditionsParser.prototype.parse = function (text, root) {
        this.text = text;
        this.root = root;
        this.root.clear();
        this.at = 0;
        this.length = this.text.length;
        var res = this.parseText();
        return res;
    };
    ConditionsParser.prototype.toString = function (root) {
        this.root = root;
        return this.nodeToString(root);
    };
    ConditionsParser.prototype.toStringCore = function (value) {
        if (!value)
            return "";
        if (value["children"])
            return this.nodeToString(value);
        if (value["left"])
            return this.conditionToString(value);
        return "";
    };
    ConditionsParser.prototype.nodeToString = function (node) {
        if (node.isEmpty)
            return "";
        var res = "";
        for (var i = 0; i < node.children.length; i++) {
            var nodeText = this.toStringCore(node.children[i]);
            if (nodeText) {
                if (res)
                    res += ' ' + node.connective + ' ';
                res += nodeText;
            }
        }
        if (node != this.root && node.children.length > 1) {
            res = '(' + res + ')';
        }
        return res;
    };
    ConditionsParser.prototype.conditionToString = function (condition) {
        if (!condition.right || !condition.operator)
            return "";
        var left = condition.left;
        if (left && !this.isNumeric(left))
            left = "'" + left + "'";
        var res = left + ' ' + this.operationToString(condition.operator);
        if (this.isNoRightOperation(condition.operator))
            return res;
        var right = condition.right;
        if (right && !this.isNumeric(right))
            right = "'" + right + "'";
        return res + ' ' + right;
    };
    ConditionsParser.prototype.operationToString = function (op) {
        if (op == "equal")
            return "=";
        if (op == "notequal")
            return "!=";
        if (op == "greater")
            return ">";
        if (op == "less")
            return "<";
        if (op == "greaterorequal")
            return ">=";
        if (op == "lessorequal")
            return "<=";
        return op;
    };
    ConditionsParser.prototype.isNumeric = function (value) {
        var val = parseFloat(value);
        if (isNaN(val))
            return false;
        return isFinite(val);
    };
    ConditionsParser.prototype.parseText = function () {
        this.node = this.root;
        this.expressionNodes = [];
        this.expressionNodes.push(this.node);
        var res = this.readConditions();
        return res && this.at >= this.length;
    };
    ConditionsParser.prototype.readConditions = function () {
        var res = this.readCondition();
        if (!res)
            return res;
        var connective = this.readConnective();
        if (connective) {
            this.addConnective(connective);
            return this.readConditions();
        }
        return true;
    };
    ConditionsParser.prototype.readCondition = function () {
        var expRes = this.readExpression();
        if (expRes < 0)
            return false;
        if (expRes == 1)
            return true;
        var left = this.readString();
        if (!left)
            return false;
        var op = this.readOperator();
        if (!op)
            return false;
        var c = new __WEBPACK_IMPORTED_MODULE_0__conditions__["b" /* Condition */]();
        c.left = left;
        c.operator = op;
        if (!this.isNoRightOperation(op)) {
            var right = this.readString();
            if (!right)
                return false;
            c.right = right;
        }
        this.addCondition(c);
        return true;
    };
    ConditionsParser.prototype.readExpression = function () {
        this.skip();
        if (this.at >= this.length || this.ch != '(')
            return 0;
        this.at++;
        this.pushExpression();
        var res = this.readConditions();
        if (res) {
            this.skip();
            res = this.ch == ')';
            this.at++;
            this.popExpression();
            return 1;
        }
        return -1;
    };
    Object.defineProperty(ConditionsParser.prototype, "ch", {
        get: function () { return this.text.charAt(this.at); },
        enumerable: true,
        configurable: true
    });
    ConditionsParser.prototype.skip = function () {
        while (this.at < this.length && this.isSpace(this.ch))
            this.at++;
    };
    ConditionsParser.prototype.isSpace = function (c) {
        return c == ' ' || c == '\n' || c == '\t' || c == '\r';
    };
    ConditionsParser.prototype.isQuotes = function (c) {
        return c == "'" || c == '"';
    };
    ConditionsParser.prototype.isOperatorChar = function (c) {
        return c == '>' || c == '<' || c == '=' || c == '!';
    };
    ConditionsParser.prototype.isBrackets = function (c) {
        return c == '(' || c == ')';
    };
    ConditionsParser.prototype.readString = function () {
        this.skip();
        if (this.at >= this.length)
            return null;
        var start = this.at;
        var hasQuotes = this.isQuotes(this.ch);
        if (hasQuotes)
            this.at++;
        var isFirstOpCh = this.isOperatorChar(this.ch);
        while (this.at < this.length) {
            if (!hasQuotes && this.isSpace(this.ch))
                break;
            if (this.isQuotes(this.ch)) {
                if (hasQuotes)
                    this.at++;
                break;
            }
            if (!hasQuotes) {
                if (isFirstOpCh != this.isOperatorChar(this.ch))
                    break;
                if (this.isBrackets(this.ch))
                    break;
            }
            this.at++;
        }
        if (this.at <= start)
            return null;
        var res = this.text.substr(start, this.at - start);
        if (res) {
            if (res.length > 1 && this.isQuotes(res[0])) {
                var len = res.length - 1;
                if (this.isQuotes(res[res.length - 1]))
                    len--;
                res = res.substr(1, len);
            }
        }
        return res;
    };
    ConditionsParser.prototype.isNoRightOperation = function (op) {
        return op == "empty" || op == "notempty";
    };
    ConditionsParser.prototype.readOperator = function () {
        var op = this.readString();
        if (!op)
            return null;
        op = op.toLowerCase();
        if (op == '>')
            op = "greater";
        if (op == '<')
            op = "less";
        if (op == '>=' || op == '=>')
            op = "greaterorequal";
        if (op == '<=' || op == '=<')
            op = "lessorequal";
        if (op == '=' || op == '==')
            op = "equal";
        if (op == '<>' || op == '!=')
            op = "notequal";
        if (op == 'contain')
            op = "contains";
        if (op == 'notcontain')
            op = "notcontains";
        return op;
    };
    ConditionsParser.prototype.readConnective = function () {
        var con = this.readString();
        if (!con)
            return null;
        con = con.toLowerCase();
        if (con == "&" || con == "&&")
            con = "and";
        if (con == "|" || con == "||")
            con = "or";
        if (con != "and" && con != "or")
            con = null;
        return con;
    };
    ConditionsParser.prototype.pushExpression = function () {
        var node = new __WEBPACK_IMPORTED_MODULE_0__conditions__["c" /* ConditionNode */]();
        this.expressionNodes.push(node);
        this.node = node;
    };
    ConditionsParser.prototype.popExpression = function () {
        var node = this.expressionNodes.pop();
        this.node = this.expressionNodes[this.expressionNodes.length - 1];
        this.node.children.push(node);
    };
    ConditionsParser.prototype.addCondition = function (c) {
        this.node.children.push(c);
    };
    ConditionsParser.prototype.addConnective = function (con) {
        if (this.node.children.length < 2) {
            this.node.connective = con;
        }
        else {
            if (this.node.connective != con) {
                var oldCon = this.node.connective;
                var oldChildren = this.node.children;
                this.node.clear();
                this.node.connective = con;
                var oldNode = new __WEBPACK_IMPORTED_MODULE_0__conditions__["c" /* ConditionNode */]();
                oldNode.connective = oldCon;
                oldNode.children = oldChildren;
                this.node.children.push(oldNode);
                var newNode = new __WEBPACK_IMPORTED_MODULE_0__conditions__["c" /* ConditionNode */]();
                this.node.children.push(newNode);
                this.node = newNode;
            }
        }
    };
    return ConditionsParser;
}());



/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dxSurveyService; });
var dxSurveyService = (function () {
    //public static serviceUrl: string = "http://localhost:50488/api/Survey";
    function dxSurveyService() {
    }
    dxSurveyService.prototype.loadSurvey = function (surveyId, onLoad) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', dxSurveyService.serviceUrl + '/getSurvey?surveyId=' + surveyId);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onload = function () {
            var result = JSON.parse(xhr.response);
            onLoad(xhr.status == 200, result, xhr.response);
        };
        xhr.send();
    };
    dxSurveyService.prototype.sendResult = function (postId, result, onSendResult, clientId, isPartialCompleted) {
        if (clientId === void 0) { clientId = null; }
        if (isPartialCompleted === void 0) { isPartialCompleted = false; }
        var xhr = new XMLHttpRequest();
        xhr.open('POST', dxSurveyService.serviceUrl + '/post/');
        xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
        var data = { postId: postId, surveyResult: JSON.stringify(result) };
        if (clientId)
            data['clientId'] = clientId;
        if (isPartialCompleted)
            data['isPartialCompleted'] = true;
        var dataStringify = JSON.stringify(data);
        var self = this;
        xhr.onload = xhr.onerror = function () {
            if (!onSendResult)
                return;
            onSendResult(xhr.status == 200, xhr.response);
        };
        xhr.send(dataStringify);
    };
    dxSurveyService.prototype.sendFile = function (postId, file, onSendFile) {
        var xhr = new XMLHttpRequest();
        xhr.onload = xhr.onerror = function () {
            if (!onSendFile)
                return;
            onSendFile(xhr.status == 200, JSON.parse(xhr.response));
        };
        xhr.open("POST", dxSurveyService.serviceUrl + '/upload/', true);
        var formData = new FormData();
        formData.append("file", file);
        formData.append("postId", postId);
        xhr.send(formData);
    };
    dxSurveyService.prototype.getResult = function (resultId, name, onGetResult) {
        var xhr = new XMLHttpRequest();
        var data = 'resultId=' + resultId + '&name=' + name;
        xhr.open('GET', dxSurveyService.serviceUrl + '/getResult?' + data);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        var self = this;
        xhr.onload = function () {
            var result = null;
            var list = null;
            if (xhr.status == 200) {
                result = JSON.parse(xhr.response);
                list = [];
                for (var key in result.QuestionResult) {
                    var el = { name: key, value: result.QuestionResult[key] };
                    list.push(el);
                }
            }
            onGetResult(xhr.status == 200, result, list, xhr.response);
        };
        xhr.send();
    };
    dxSurveyService.prototype.isCompleted = function (resultId, clientId, onIsCompleted) {
        var xhr = new XMLHttpRequest();
        var data = 'resultId=' + resultId + '&clientId=' + clientId;
        xhr.open('GET', dxSurveyService.serviceUrl + '/isCompleted?' + data);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        var self = this;
        xhr.onload = function () {
            var result = null;
            if (xhr.status == 200) {
                result = JSON.parse(xhr.response);
            }
            onIsCompleted(xhr.status == 200, result, xhr.response);
        };
        xhr.send();
    };
    return dxSurveyService;
}());

dxSurveyService.serviceUrl = "https://dxsurveyapi.azurewebsites.net/api/Survey";


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalizableString; });
var LocalizableString = (function () {
    function LocalizableString(owner) {
        this.owner = owner;
        this.values = {};
    }
    Object.defineProperty(LocalizableString.prototype, "locale", {
        get: function () { return this.owner ? this.owner.locale : ""; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalizableString.prototype, "text", {
        get: function () {
            var keys = Object.keys(this.values);
            if (keys.length == 0)
                return "";
            var loc = this.locale;
            if (!loc)
                loc = LocalizableString.defaultLocale;
            var res = this.values[loc];
            if (!res && loc !== LocalizableString.defaultLocale) {
                res = this.values[LocalizableString.defaultLocale];
            }
            return res ? res : this.values[keys[0]];
        },
        set: function (value) {
            this.setLocaleText(this.locale, value);
        },
        enumerable: true,
        configurable: true
    });
    LocalizableString.prototype.getLocaleText = function (loc) {
        if (!loc)
            loc = LocalizableString.defaultLocale;
        var res = this.values[loc];
        return res ? res : "";
    };
    LocalizableString.prototype.setLocaleText = function (loc, value) {
        if (!loc)
            loc = LocalizableString.defaultLocale;
        this.values[loc] = value;
    };
    LocalizableString.prototype.getJson = function () {
        var keys = Object.keys(this.values);
        if (keys.length == 0)
            return null;
        if (keys.length == 1)
            return this.values[keys[0]];
        return this.values;
    };
    LocalizableString.prototype.setJson = function (value) {
        this.values = {};
        if (!value)
            return;
        if (typeof value === 'string') {
            this.setLocaleText(null, value);
        }
        else {
            for (var key in value) {
                this.setLocaleText(key, value[key]);
            }
        }
    };
    return LocalizableString;
}());

LocalizableString.defaultLocale = "default";


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jsonobject__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__questionfactory__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__question_baseselect__ = __webpack_require__(10);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionCheckboxModel; });




var QuestionCheckboxModel = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionCheckboxModel, _super);
    function QuestionCheckboxModel(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        return _this;
    }
    QuestionCheckboxModel.prototype.getHasOther = function (val) {
        if (!val || !Array.isArray(val))
            return false;
        return val.indexOf(this.otherItem.value) >= 0;
    };
    QuestionCheckboxModel.prototype.valueFromDataCore = function (val) {
        if (!val || !Array.isArray(val))
            return val;
        for (var i = 0; i < val.length; i++) {
            if (val[i] == this.otherItem.value)
                return val;
            if (this.hasUnknownValue(val[i])) {
                this.comment = val[i];
                var newVal = val.slice();
                newVal[i] = this.otherItem.value;
                return newVal;
            }
        }
        return val;
    };
    QuestionCheckboxModel.prototype.valueToDataCore = function (val) {
        if (!val || !val.length)
            return val;
        for (var i = 0; i < val.length; i++) {
            if (val[i] == this.otherItem.value) {
                if (this.getComment()) {
                    var newVal = val.slice();
                    newVal[i] = this.getComment();
                    return newVal;
                }
            }
        }
        return val;
    };
    QuestionCheckboxModel.prototype.getType = function () {
        return "checkbox";
    };
    return QuestionCheckboxModel;
}(__WEBPACK_IMPORTED_MODULE_3__question_baseselect__["a" /* QuestionCheckboxBase */]));

__WEBPACK_IMPORTED_MODULE_1__jsonobject__["a" /* JsonObject */].metaData.addClass("checkbox", [], function () { return new QuestionCheckboxModel(""); }, "checkboxbase");
__WEBPACK_IMPORTED_MODULE_2__questionfactory__["a" /* QuestionFactory */].Instance.registerQuestion("checkbox", function (name) { var q = new QuestionCheckboxModel(name); q.choices = __WEBPACK_IMPORTED_MODULE_2__questionfactory__["a" /* QuestionFactory */].DefaultChoices; return q; });


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jsonobject__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__questionfactory__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionCommentModel; });




var QuestionCommentModel = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionCommentModel, _super);
    function QuestionCommentModel(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.rows = 4;
        _this.cols = 50;
        return _this;
    }
    QuestionCommentModel.prototype.getType = function () {
        return "comment";
    };
    QuestionCommentModel.prototype.isEmpty = function () {
        return _super.prototype.isEmpty.call(this) || this.value == "";
    };
    return QuestionCommentModel;
}(__WEBPACK_IMPORTED_MODULE_1__question__["a" /* Question */]));

__WEBPACK_IMPORTED_MODULE_2__jsonobject__["a" /* JsonObject */].metaData.addClass("comment", [{ name: "cols:number", default: 50 }, { name: "rows:number", default: 4 }, "placeHolder"], function () { return new QuestionCommentModel(""); }, "question");
__WEBPACK_IMPORTED_MODULE_3__questionfactory__["a" /* QuestionFactory */].Instance.registerQuestion("comment", function (name) { return new QuestionCommentModel(name); });


/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jsonobject__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__questionfactory__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__question_baseselect__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__surveyStrings__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionDropdownModel; });





var QuestionDropdownModel = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionDropdownModel, _super);
    function QuestionDropdownModel(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        return _this;
    }
    Object.defineProperty(QuestionDropdownModel.prototype, "optionsCaption", {
        get: function () { return (this.optionsCaptionValue) ? this.optionsCaptionValue : __WEBPACK_IMPORTED_MODULE_4__surveyStrings__["a" /* surveyLocalization */].getString("optionsCaption"); },
        set: function (newValue) { this.optionsCaptionValue = newValue; },
        enumerable: true,
        configurable: true
    });
    QuestionDropdownModel.prototype.getType = function () {
        return "dropdown";
    };
    QuestionDropdownModel.prototype.supportGoNextPageAutomatic = function () { return true; };
    return QuestionDropdownModel;
}(__WEBPACK_IMPORTED_MODULE_3__question_baseselect__["b" /* QuestionSelectBase */]));

__WEBPACK_IMPORTED_MODULE_1__jsonobject__["a" /* JsonObject */].metaData.addClass("dropdown", [{ name: "optionsCaption", onGetValue: function (obj) { return obj.optionsCaptionValue; } }], function () { return new QuestionDropdownModel(""); }, "selectbase");
__WEBPACK_IMPORTED_MODULE_2__questionfactory__["a" /* QuestionFactory */].Instance.registerQuestion("dropdown", function (name) { var q = new QuestionDropdownModel(name); q.choices = __WEBPACK_IMPORTED_MODULE_2__questionfactory__["a" /* QuestionFactory */].DefaultChoices; return q; });


/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jsonobject__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__questionfactory__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__error__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__surveyStrings__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionFileModel; });






var QuestionFileModel = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionFileModel, _super);
    function QuestionFileModel(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.showPreviewValue = false;
        _this.isUploading = false;
        return _this;
    }
    QuestionFileModel.prototype.getType = function () {
        return "file";
    };
    Object.defineProperty(QuestionFileModel.prototype, "showPreview", {
        get: function () { return this.showPreviewValue; },
        set: function (value) { this.showPreviewValue = value; },
        enumerable: true,
        configurable: true
    });
    QuestionFileModel.prototype.loadFile = function (file) {
        var self = this;
        if (this.survey && !this.survey.uploadFile(this.name, file, this.storeDataAsText, function (status) { self.isUploading = status == "uploading"; }))
            return;
        this.setFileValue(file);
    };
    QuestionFileModel.prototype.setFileValue = function (file) {
        if (!FileReader)
            return;
        if (!this.showPreview && !this.storeDataAsText)
            return;
        if (this.checkFileForErrors(file))
            return;
        var fileReader = new FileReader();
        var self = this;
        fileReader.onload = function (e) {
            if (self.showPreview) {
                self.previewValue = self.isFileImage(file) ? fileReader.result : null;
                self.fireCallback(self.previewValueLoadedCallback);
            }
            if (self.storeDataAsText) {
                self.value = fileReader.result;
            }
        };
        fileReader.readAsDataURL(file);
    };
    QuestionFileModel.prototype.onCheckForErrors = function (errors) {
        _super.prototype.onCheckForErrors.call(this, errors);
        if (this.isUploading) {
            this.errors.push(new __WEBPACK_IMPORTED_MODULE_4__error__["a" /* CustomError */](__WEBPACK_IMPORTED_MODULE_5__surveyStrings__["a" /* surveyLocalization */].getString("uploadingFile")));
        }
    };
    QuestionFileModel.prototype.checkFileForErrors = function (file) {
        var errorLength = this.errors ? this.errors.length : 0;
        this.errors = [];
        if (this.maxSize > 0 && file.size > this.maxSize) {
            this.errors.push(new __WEBPACK_IMPORTED_MODULE_4__error__["d" /* ExceedSizeError */](this.maxSize));
        }
        if (errorLength != this.errors.length || this.errors.length > 0) {
            this.fireCallback(this.errorsChangedCallback);
        }
        return this.errors.length > 0;
    };
    QuestionFileModel.prototype.isFileImage = function (file) {
        if (!file || !file.type)
            return;
        var str = file.type.toLowerCase();
        return str.indexOf("image") == 0;
    };
    return QuestionFileModel;
}(__WEBPACK_IMPORTED_MODULE_1__question__["a" /* Question */]));

__WEBPACK_IMPORTED_MODULE_2__jsonobject__["a" /* JsonObject */].metaData.addClass("file", ["showPreview:boolean", "imageHeight", "imageWidth", "storeDataAsText:boolean", "maxSize:number"], function () { return new QuestionFileModel(""); }, "question");
__WEBPACK_IMPORTED_MODULE_3__questionfactory__["a" /* QuestionFactory */].Instance.registerQuestion("file", function (name) { return new QuestionFileModel(name); });


/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__questionbase__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jsonobject__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__questionfactory__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionHtmlModel; });




var QuestionHtmlModel = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionHtmlModel, _super);
    function QuestionHtmlModel(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        return _this;
    }
    QuestionHtmlModel.prototype.getType = function () {
        return "html";
    };
    Object.defineProperty(QuestionHtmlModel.prototype, "html", {
        get: function () { return this.htmlValue; },
        set: function (value) {
            this.htmlValue = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionHtmlModel.prototype, "processedHtml", {
        get: function () { return this.survey ? this.survey.processHtml(this.html) : this.html; },
        enumerable: true,
        configurable: true
    });
    return QuestionHtmlModel;
}(__WEBPACK_IMPORTED_MODULE_1__questionbase__["a" /* QuestionBase */]));

__WEBPACK_IMPORTED_MODULE_2__jsonobject__["a" /* JsonObject */].metaData.addClass("html", ["html:html"], function () { return new QuestionHtmlModel(""); }, "questionbase");
__WEBPACK_IMPORTED_MODULE_3__questionfactory__["a" /* QuestionFactory */].Instance.registerQuestion("html", function (name) { return new QuestionHtmlModel(name); });


/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__question__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jsonobject__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__surveyStrings__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__error__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__questionfactory__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatrixRowModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return QuestionMatrixModel; });







var MatrixRowModel = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](MatrixRowModel, _super);
    function MatrixRowModel(name, text, fullName, data, value) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.text = text;
        _this.fullName = fullName;
        _this.data = data;
        _this.rowValue = value;
        return _this;
    }
    Object.defineProperty(MatrixRowModel.prototype, "value", {
        get: function () { return this.rowValue; },
        set: function (newValue) {
            this.rowValue = newValue;
            if (this.data)
                this.data.onMatrixRowChanged(this);
            this.onValueChanged();
        },
        enumerable: true,
        configurable: true
    });
    MatrixRowModel.prototype.onValueChanged = function () {
    };
    return MatrixRowModel;
}(__WEBPACK_IMPORTED_MODULE_1__base__["a" /* Base */]));

var QuestionMatrixModel = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionMatrixModel, _super);
    function QuestionMatrixModel(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.columnsValue = [];
        _this.rowsValue = [];
        _this.isRowChanging = false;
        _this.isAllRowRequired = false;
        return _this;
    }
    QuestionMatrixModel.prototype.getType = function () {
        return "matrix";
    };
    Object.defineProperty(QuestionMatrixModel.prototype, "hasRows", {
        get: function () {
            return this.rowsValue.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionMatrixModel.prototype, "columns", {
        get: function () { return this.columnsValue; },
        set: function (newValue) {
            __WEBPACK_IMPORTED_MODULE_1__base__["f" /* ItemValue */].setData(this.columnsValue, newValue);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionMatrixModel.prototype, "rows", {
        get: function () { return this.rowsValue; },
        set: function (newValue) {
            __WEBPACK_IMPORTED_MODULE_1__base__["f" /* ItemValue */].setData(this.rowsValue, newValue);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionMatrixModel.prototype, "visibleRows", {
        get: function () {
            var result = new Array();
            var val = this.value;
            if (!val)
                val = {};
            for (var i = 0; i < this.rows.length; i++) {
                if (!this.rows[i].value)
                    continue;
                result.push(this.createMatrixRow(this.rows[i].value, this.rows[i].text, this.name + '_' + this.rows[i].value.toString(), val[this.rows[i].value]));
            }
            if (result.length == 0) {
                result.push(this.createMatrixRow(null, "", this.name, val));
            }
            this.generatedVisibleRows = result;
            return result;
        },
        enumerable: true,
        configurable: true
    });
    QuestionMatrixModel.prototype.supportGoNextPageAutomatic = function () { return this.hasValuesInAllRows(); };
    QuestionMatrixModel.prototype.onCheckForErrors = function (errors) {
        _super.prototype.onCheckForErrors.call(this, errors);
        if (this.hasErrorInRows()) {
            this.errors.push(new __WEBPACK_IMPORTED_MODULE_5__error__["a" /* CustomError */](__WEBPACK_IMPORTED_MODULE_4__surveyStrings__["a" /* surveyLocalization */].getString("requiredInAllRowsError")));
        }
    };
    QuestionMatrixModel.prototype.hasErrorInRows = function () {
        if (!this.isAllRowRequired)
            return false;
        return !this.hasValuesInAllRows();
    };
    QuestionMatrixModel.prototype.hasValuesInAllRows = function () {
        var rows = this.generatedVisibleRows;
        if (!rows)
            rows = this.visibleRows;
        if (!rows)
            return true;
        for (var i = 0; i < rows.length; i++) {
            var val = rows[i].value;
            if (!val)
                return false;
        }
        return true;
    };
    QuestionMatrixModel.prototype.createMatrixRow = function (name, text, fullName, value) {
        return new MatrixRowModel(name, text, fullName, this, value);
    };
    QuestionMatrixModel.prototype.onValueChanged = function () {
        if (this.isRowChanging || !(this.generatedVisibleRows) || this.generatedVisibleRows.length == 0)
            return;
        this.isRowChanging = true;
        var val = this.value;
        if (!val)
            val = {};
        if (this.rows.length == 0) {
            this.generatedVisibleRows[0].value = val;
        }
        else {
            for (var i = 0; i < this.generatedVisibleRows.length; i++) {
                var row = this.generatedVisibleRows[i];
                var rowVal = val[row.name] ? val[row.name] : null;
                this.generatedVisibleRows[i].value = rowVal;
            }
        }
        this.isRowChanging = false;
    };
    //IMatrixData
    QuestionMatrixModel.prototype.onMatrixRowChanged = function (row) {
        if (this.isRowChanging)
            return;
        this.isRowChanging = true;
        if (!this.hasRows) {
            this.setNewValue(row.value);
        }
        else {
            var newValue = this.value;
            if (!newValue) {
                newValue = {};
            }
            newValue[row.name] = row.value;
            this.setNewValue(newValue);
        }
        this.isRowChanging = false;
    };
    return QuestionMatrixModel;
}(__WEBPACK_IMPORTED_MODULE_2__question__["a" /* Question */]));

__WEBPACK_IMPORTED_MODULE_3__jsonobject__["a" /* JsonObject */].metaData.addClass("matrix", [{ name: "columns:itemvalues", onGetValue: function (obj) { return __WEBPACK_IMPORTED_MODULE_1__base__["f" /* ItemValue */].getData(obj.columns); }, onSetValue: function (obj, value) { obj.columns = value; } },
    { name: "rows:itemvalues", onGetValue: function (obj) { return __WEBPACK_IMPORTED_MODULE_1__base__["f" /* ItemValue */].getData(obj.rows); }, onSetValue: function (obj, value) { obj.rows = value; } },
    "isAllRowRequired:boolean"], function () { return new QuestionMatrixModel(""); }, "question");
__WEBPACK_IMPORTED_MODULE_6__questionfactory__["a" /* QuestionFactory */].Instance.registerQuestion("matrix", function (name) { var q = new QuestionMatrixModel(name); q.rows = ["Row 1", "Row 2"]; q.columns = ["Column 1", "Column 2", "Column 3"]; return q; });


/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question_matrixdropdownbase__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jsonobject__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__questionfactory__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MatrixDropdownRowModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionMatrixDropdownModel; });





var MatrixDropdownRowModel = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](MatrixDropdownRowModel, _super);
    function MatrixDropdownRowModel(name, text, data, value) {
        var _this = _super.call(this, data, value) || this;
        _this.name = name;
        _this.text = text;
        return _this;
    }
    Object.defineProperty(MatrixDropdownRowModel.prototype, "rowName", {
        get: function () { return this.name; },
        enumerable: true,
        configurable: true
    });
    return MatrixDropdownRowModel;
}(__WEBPACK_IMPORTED_MODULE_1__question_matrixdropdownbase__["a" /* MatrixDropdownRowModelBase */]));

var QuestionMatrixDropdownModel = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionMatrixDropdownModel, _super);
    function QuestionMatrixDropdownModel(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.rowsValue = [];
        return _this;
    }
    QuestionMatrixDropdownModel.prototype.getType = function () {
        return "matrixdropdown";
    };
    Object.defineProperty(QuestionMatrixDropdownModel.prototype, "rows", {
        get: function () { return this.rowsValue; },
        set: function (newValue) {
            __WEBPACK_IMPORTED_MODULE_3__base__["f" /* ItemValue */].setData(this.rowsValue, newValue);
        },
        enumerable: true,
        configurable: true
    });
    QuestionMatrixDropdownModel.prototype.generateRows = function () {
        var result = new Array();
        if (!this.rows || this.rows.length === 0)
            return result;
        var val = this.value;
        if (!val)
            val = {};
        for (var i = 0; i < this.rows.length; i++) {
            if (!this.rows[i].value)
                continue;
            result.push(this.createMatrixRow(this.rows[i].value, this.rows[i].text, val[this.rows[i].value]));
        }
        return result;
    };
    QuestionMatrixDropdownModel.prototype.createMatrixRow = function (name, text, value) {
        return new MatrixDropdownRowModel(name, text, this, value);
    };
    return QuestionMatrixDropdownModel;
}(__WEBPACK_IMPORTED_MODULE_1__question_matrixdropdownbase__["b" /* QuestionMatrixDropdownModelBase */]));

__WEBPACK_IMPORTED_MODULE_2__jsonobject__["a" /* JsonObject */].metaData.addClass("matrixdropdown", [{ name: "rows:itemvalues", onGetValue: function (obj) { return __WEBPACK_IMPORTED_MODULE_3__base__["f" /* ItemValue */].getData(obj.rows); }, onSetValue: function (obj, value) { obj.rows = value; } }], function () { return new QuestionMatrixDropdownModel(""); }, "matrixdropdownbase");
__WEBPACK_IMPORTED_MODULE_4__questionfactory__["a" /* QuestionFactory */].Instance.registerQuestion("matrixdropdown", function (name) { var q = new QuestionMatrixDropdownModel(name); q.choices = [1, 2, 3, 4, 5]; q.rows = ["Row 1", "Row 2"]; q.addColumn("Column 1"); q.addColumn("Column 2"); q.addColumn("Column 3"); return q; });


/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question_matrixdropdownbase__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jsonobject__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__questionfactory__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__surveyStrings__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__error__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MatrixDynamicRowModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionMatrixDynamicModel; });






var MatrixDynamicRowModel = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](MatrixDynamicRowModel, _super);
    function MatrixDynamicRowModel(index, data, value) {
        var _this = _super.call(this, data, value) || this;
        _this.index = index;
        return _this;
    }
    Object.defineProperty(MatrixDynamicRowModel.prototype, "rowName", {
        get: function () { return "row" + this.index; },
        enumerable: true,
        configurable: true
    });
    return MatrixDynamicRowModel;
}(__WEBPACK_IMPORTED_MODULE_1__question_matrixdropdownbase__["a" /* MatrixDropdownRowModelBase */]));

var QuestionMatrixDynamicModel = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionMatrixDynamicModel, _super);
    function QuestionMatrixDynamicModel(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.rowCounter = 0;
        _this.rowCountValue = 2;
        _this.addRowTextValue = null;
        _this.removeRowTextValue = null;
        _this.minRowCount = 0;
        return _this;
    }
    QuestionMatrixDynamicModel.prototype.getType = function () {
        return "matrixdynamic";
    };
    Object.defineProperty(QuestionMatrixDynamicModel.prototype, "rowCount", {
        get: function () { return this.rowCountValue; },
        set: function (val) {
            if (val < 0 || val > QuestionMatrixDynamicModel.MaxRowCount)
                return;
            this.rowCountValue = val;
            if (this.value && this.value.length > val) {
                var qVal = this.value;
                qVal.splice(val);
                this.value = qVal;
            }
            this.fireCallback(this.rowCountChangedCallback);
        },
        enumerable: true,
        configurable: true
    });
    QuestionMatrixDynamicModel.prototype.addRow = function () {
        if (this.generatedVisibleRows) {
            this.generatedVisibleRows.push(this.createMatrixRow(null));
        }
        this.rowCount++;
    };
    QuestionMatrixDynamicModel.prototype.removeRow = function (index) {
        if (index < 0 || index >= this.rowCount)
            return;
        if (this.generatedVisibleRows && index < this.generatedVisibleRows.length) {
            this.generatedVisibleRows.splice(index, 1);
        }
        if (this.value) {
            var val = this.createNewValue(this.value);
            val.splice(index, 1);
            val = this.deleteRowValue(val, null);
            this.value = val;
        }
        this.rowCount--;
    };
    Object.defineProperty(QuestionMatrixDynamicModel.prototype, "addRowText", {
        get: function () { return this.addRowTextValue ? this.addRowTextValue : __WEBPACK_IMPORTED_MODULE_4__surveyStrings__["a" /* surveyLocalization */].getString("addRow"); },
        set: function (value) {
            this.addRowTextValue = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionMatrixDynamicModel.prototype, "removeRowText", {
        get: function () { return this.removeRowTextValue ? this.removeRowTextValue : __WEBPACK_IMPORTED_MODULE_4__surveyStrings__["a" /* surveyLocalization */].getString("removeRow"); },
        set: function (value) {
            this.removeRowTextValue = value;
        },
        enumerable: true,
        configurable: true
    });
    QuestionMatrixDynamicModel.prototype.supportGoNextPageAutomatic = function () { return false; };
    Object.defineProperty(QuestionMatrixDynamicModel.prototype, "cachedVisibleRows", {
        get: function () {
            if (this.generatedVisibleRows && this.generatedVisibleRows.length == this.rowCount)
                return this.generatedVisibleRows;
            return this.visibleRows;
        },
        enumerable: true,
        configurable: true
    });
    QuestionMatrixDynamicModel.prototype.onCheckForErrors = function (errors) {
        _super.prototype.onCheckForErrors.call(this, errors);
        if (this.hasErrorInRows()) {
            errors.push(new __WEBPACK_IMPORTED_MODULE_5__error__["a" /* CustomError */](__WEBPACK_IMPORTED_MODULE_4__surveyStrings__["a" /* surveyLocalization */].getString("minRowCountError")["format"](this.minRowCount)));
        }
    };
    QuestionMatrixDynamicModel.prototype.hasErrorInRows = function () {
        if (this.minRowCount <= 0 || !this.generatedVisibleRows)
            return false;
        var res = false;
        var setRowCount = 0;
        for (var rowIndex = 0; rowIndex < this.generatedVisibleRows.length; rowIndex++) {
            var row = this.generatedVisibleRows[rowIndex];
            if (!row.isEmpty)
                setRowCount++;
        }
        return setRowCount < this.minRowCount;
    };
    QuestionMatrixDynamicModel.prototype.generateRows = function () {
        var result = new Array();
        if (this.rowCount === 0)
            return result;
        var val = this.createNewValue(this.value);
        for (var i = 0; i < this.rowCount; i++) {
            result.push(this.createMatrixRow(this.getRowValueByIndex(val, i)));
        }
        return result;
    };
    QuestionMatrixDynamicModel.prototype.createMatrixRow = function (value) {
        return new MatrixDynamicRowModel(this.rowCounter++, this, value);
    };
    QuestionMatrixDynamicModel.prototype.onBeforeValueChanged = function (val) {
        var newRowCount = val && Array.isArray(val) ? val.length : 0;
        if (newRowCount <= this.rowCount)
            return;
        this.rowCountValue = newRowCount;
        if (this.generatedVisibleRows) {
            this.generatedVisibleRows = this.visibleRows;
        }
    };
    QuestionMatrixDynamicModel.prototype.createNewValue = function (curValue) {
        var result = curValue;
        if (!result)
            result = [];
        var r = [];
        if (result.length > this.rowCount)
            result.splice(this.rowCount - 1);
        for (var i = result.length; i < this.rowCount; i++) {
            result.push({});
        }
        return result;
    };
    QuestionMatrixDynamicModel.prototype.deleteRowValue = function (newValue, row) {
        var isEmpty = true;
        for (var i = 0; i < newValue.length; i++) {
            if (Object.keys(newValue[i]).length > 0) {
                isEmpty = false;
                break;
            }
        }
        return isEmpty ? null : newValue;
    };
    QuestionMatrixDynamicModel.prototype.getRowValueByIndex = function (questionValue, index) {
        return index >= 0 && index < questionValue.length ? questionValue[index] : null;
    };
    QuestionMatrixDynamicModel.prototype.getRowValue = function (row, questionValue, create) {
        if (create === void 0) { create = false; }
        return this.getRowValueByIndex(questionValue, this.generatedVisibleRows.indexOf(row));
    };
    return QuestionMatrixDynamicModel;
}(__WEBPACK_IMPORTED_MODULE_1__question_matrixdropdownbase__["b" /* QuestionMatrixDropdownModelBase */]));

QuestionMatrixDynamicModel.MaxRowCount = 100;
__WEBPACK_IMPORTED_MODULE_2__jsonobject__["a" /* JsonObject */].metaData.addClass("matrixdynamic", [{ name: "rowCount:number", default: 2 }, { name: "minRowCount:number", default: 0 },
    { name: "addRowText", onGetValue: function (obj) { return obj.addRowTextValue; } },
    { name: "removeRowText", onGetValue: function (obj) { return obj.removeRowTextValue; } }], function () { return new QuestionMatrixDynamicModel(""); }, "matrixdropdownbase");
__WEBPACK_IMPORTED_MODULE_3__questionfactory__["a" /* QuestionFactory */].Instance.registerQuestion("matrixdynamic", function (name) { var q = new QuestionMatrixDynamicModel(name); q.choices = [1, 2, 3, 4, 5]; q.addColumn("Column 1"); q.addColumn("Column 2"); q.addColumn("Column 3"); return q; });


/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__validator__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__question__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__jsonobject__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__questionfactory__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__error__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultipleTextItemModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return QuestionMultipleTextModel; });







var MultipleTextItemModel = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](MultipleTextItemModel, _super);
    function MultipleTextItemModel(name, title) {
        if (name === void 0) { name = null; }
        if (title === void 0) { title = null; }
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.isRequired = false;
        _this.validators = new Array();
        _this.title = title;
        return _this;
    }
    MultipleTextItemModel.prototype.getType = function () {
        return "multipletextitem";
    };
    MultipleTextItemModel.prototype.setData = function (data) {
        this.data = data;
    };
    Object.defineProperty(MultipleTextItemModel.prototype, "title", {
        get: function () { return this.titleValue ? this.titleValue : this.name; },
        set: function (newText) { this.titleValue = newText; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultipleTextItemModel.prototype, "fullTitle", {
        get: function () {
            var res = this.title;
            if (this.isRequired && this.data)
                res = this.data.getIsRequiredText() + ' ' + res;
            return res;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MultipleTextItemModel.prototype, "value", {
        get: function () {
            return this.data ? this.data.getMultipleTextValue(this.name) : null;
        },
        set: function (value) {
            if (this.data != null) {
                this.data.setMultipleTextValue(this.name, value);
            }
        },
        enumerable: true,
        configurable: true
    });
    MultipleTextItemModel.prototype.onValueChanged = function (newValue) {
    };
    //IValidatorOwner
    MultipleTextItemModel.prototype.getValidatorTitle = function () { return this.title; };
    return MultipleTextItemModel;
}(__WEBPACK_IMPORTED_MODULE_1__base__["a" /* Base */]));

var QuestionMultipleTextModel = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionMultipleTextModel, _super);
    function QuestionMultipleTextModel(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.colCountValue = 1;
        _this.itemSize = 25;
        _this.itemsValues = new Array();
        _this.isMultipleItemValueChanging = false;
        _this.setItemsOverriddenMethods();
        return _this;
    }
    QuestionMultipleTextModel.prototype.getType = function () {
        return "multipletext";
    };
    Object.defineProperty(QuestionMultipleTextModel.prototype, "items", {
        get: function () { return this.itemsValues; },
        set: function (value) {
            this.itemsValues = value;
            this.setItemsOverriddenMethods();
            this.fireCallback(this.colCountChangedCallback);
        },
        enumerable: true,
        configurable: true
    });
    QuestionMultipleTextModel.prototype.addItem = function (name, title) {
        if (title === void 0) { title = null; }
        var item = this.createTextItem(name, title);
        this.items.push(item);
        return item;
    };
    QuestionMultipleTextModel.prototype.setItemsOverriddenMethods = function () {
        var self = this;
        this.itemsValues.push = function (value) {
            value.setData(self);
            var result = Array.prototype.push.call(this, value);
            self.fireCallback(self.colCountChangedCallback);
            return result;
        };
        this.itemsValues.splice = function (start, deleteCount) {
            var items = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                items[_i - 2] = arguments[_i];
            }
            if (!start)
                start = 0;
            if (!deleteCount)
                deleteCount = 0;
            var result = (_a = Array.prototype.splice).call.apply(_a, [self.itemsValues, start, deleteCount].concat(items));
            if (!items)
                items = [];
            for (var i = 0; i < items.length; i++) {
                items[i].setData(self);
            }
            self.fireCallback(self.colCountChangedCallback);
            return result;
            var _a;
        };
    };
    QuestionMultipleTextModel.prototype.supportGoNextPageAutomatic = function () {
        for (var i = 0; i < this.items.length; i++) {
            if (!this.items[i].value)
                return false;
        }
        return true;
    };
    Object.defineProperty(QuestionMultipleTextModel.prototype, "colCount", {
        get: function () { return this.colCountValue; },
        set: function (value) {
            if (value < 1 || value > 4)
                return;
            this.colCountValue = value;
            this.fireCallback(this.colCountChangedCallback);
        },
        enumerable: true,
        configurable: true
    });
    QuestionMultipleTextModel.prototype.getRows = function () {
        var colCount = this.colCount;
        var items = this.items;
        var rows = [];
        var index = 0;
        for (var i = 0; i < items.length; i++) {
            if (index == 0) {
                rows.push([]);
            }
            rows[rows.length - 1].push(items[i]);
            index++;
            if (index >= colCount) {
                index = 0;
            }
        }
        return rows;
    };
    QuestionMultipleTextModel.prototype.onValueChanged = function () {
        _super.prototype.onValueChanged.call(this);
        this.onItemValueChanged();
    };
    QuestionMultipleTextModel.prototype.createTextItem = function (name, title) {
        return new MultipleTextItemModel(name, title);
    };
    QuestionMultipleTextModel.prototype.onItemValueChanged = function () {
        if (this.isMultipleItemValueChanging)
            return;
        for (var i = 0; i < this.items.length; i++) {
            var itemValue = null;
            if (this.value && (this.items[i].name in this.value)) {
                itemValue = this.value[this.items[i].name];
            }
            this.items[i].onValueChanged(itemValue);
        }
    };
    QuestionMultipleTextModel.prototype.runValidators = function () {
        var error = _super.prototype.runValidators.call(this);
        if (error != null)
            return error;
        for (var i = 0; i < this.items.length; i++) {
            error = new __WEBPACK_IMPORTED_MODULE_2__validator__["a" /* ValidatorRunner */]().run(this.items[i]);
            if (error != null)
                return error;
        }
        return null;
    };
    QuestionMultipleTextModel.prototype.hasErrors = function (fireCallback) {
        if (fireCallback === void 0) { fireCallback = true; }
        var res = _super.prototype.hasErrors.call(this, fireCallback);
        if (!res)
            res = this.hasErrorInItems(fireCallback);
        return res;
    };
    QuestionMultipleTextModel.prototype.hasErrorInItems = function (fireCallback) {
        for (var i = 0; i < this.items.length; i++) {
            var item = this.items[i];
            if (item.isRequired && !item.value) {
                this.errors.push(new __WEBPACK_IMPORTED_MODULE_6__error__["b" /* AnswerRequiredError */]());
                if (fireCallback) {
                    this.fireCallback(this.errorsChangedCallback);
                }
                return true;
            }
        }
        return false;
    };
    //IMultipleTextData
    QuestionMultipleTextModel.prototype.getMultipleTextValue = function (name) {
        if (!this.value)
            return null;
        return this.value[name];
    };
    QuestionMultipleTextModel.prototype.setMultipleTextValue = function (name, value) {
        this.isMultipleItemValueChanging = true;
        var newValue = this.value;
        if (!newValue) {
            newValue = {};
        }
        newValue[name] = value;
        this.setNewValue(newValue);
        this.isMultipleItemValueChanging = false;
    };
    QuestionMultipleTextModel.prototype.getIsRequiredText = function () {
        return this.survey ? this.survey.requiredText : "";
    };
    return QuestionMultipleTextModel;
}(__WEBPACK_IMPORTED_MODULE_3__question__["a" /* Question */]));

__WEBPACK_IMPORTED_MODULE_4__jsonobject__["a" /* JsonObject */].metaData.addClass("multipletextitem", ["name", "isRequired:boolean", "placeHolder", { name: "title", onGetValue: function (obj) { return obj.titleValue; } },
    { name: "validators:validators", baseClassName: "surveyvalidator", classNamePart: "validator" }], function () { return new MultipleTextItemModel(""); });
__WEBPACK_IMPORTED_MODULE_4__jsonobject__["a" /* JsonObject */].metaData.addClass("multipletext", [{ name: "!items:textitems", className: "multipletextitem" },
    { name: "itemSize:number", default: 25 }, { name: "colCount:number", default: 1, choices: [1, 2, 3, 4] }], function () { return new QuestionMultipleTextModel(""); }, "question");
__WEBPACK_IMPORTED_MODULE_5__questionfactory__["a" /* QuestionFactory */].Instance.registerQuestion("multipletext", function (name) { var q = new QuestionMultipleTextModel(name); q.addItem("text1"); q.addItem("text2"); return q; });


/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jsonobject__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__questionfactory__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__question_baseselect__ = __webpack_require__(10);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionRadiogroupModel; });




var QuestionRadiogroupModel = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionRadiogroupModel, _super);
    function QuestionRadiogroupModel(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        return _this;
    }
    QuestionRadiogroupModel.prototype.getType = function () {
        return "radiogroup";
    };
    QuestionRadiogroupModel.prototype.supportGoNextPageAutomatic = function () { return true; };
    return QuestionRadiogroupModel;
}(__WEBPACK_IMPORTED_MODULE_3__question_baseselect__["a" /* QuestionCheckboxBase */]));

__WEBPACK_IMPORTED_MODULE_1__jsonobject__["a" /* JsonObject */].metaData.addClass("radiogroup", [], function () { return new QuestionRadiogroupModel(""); }, "checkboxbase");
__WEBPACK_IMPORTED_MODULE_2__questionfactory__["a" /* QuestionFactory */].Instance.registerQuestion("radiogroup", function (name) { var q = new QuestionRadiogroupModel(name); q.choices = __WEBPACK_IMPORTED_MODULE_2__questionfactory__["a" /* QuestionFactory */].DefaultChoices; return q; });


/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__question__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jsonobject__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__questionfactory__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionRatingModel; });





var QuestionRatingModel = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionRatingModel, _super);
    function QuestionRatingModel(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.rates = [];
        _this.minRateDescription = null;
        _this.maxRateDescription = null;
        return _this;
    }
    Object.defineProperty(QuestionRatingModel.prototype, "rateValues", {
        get: function () { return this.rates; },
        set: function (newValue) {
            __WEBPACK_IMPORTED_MODULE_1__base__["f" /* ItemValue */].setData(this.rates, newValue);
            this.fireCallback(this.rateValuesChangedCallback);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionRatingModel.prototype, "visibleRateValues", {
        get: function () {
            if (this.rateValues.length > 0)
                return this.rateValues;
            return QuestionRatingModel.defaultRateValues;
        },
        enumerable: true,
        configurable: true
    });
    QuestionRatingModel.prototype.getType = function () {
        return "rating";
    };
    QuestionRatingModel.prototype.supportComment = function () { return true; };
    QuestionRatingModel.prototype.supportOther = function () { return true; };
    QuestionRatingModel.prototype.supportGoNextPageAutomatic = function () { return true; };
    return QuestionRatingModel;
}(__WEBPACK_IMPORTED_MODULE_2__question__["a" /* Question */]));

QuestionRatingModel.defaultRateValues = [];
__WEBPACK_IMPORTED_MODULE_1__base__["f" /* ItemValue */].setData(QuestionRatingModel.defaultRateValues, [1, 2, 3, 4, 5]);
__WEBPACK_IMPORTED_MODULE_3__jsonobject__["a" /* JsonObject */].metaData.addClass("rating", ["hasComment:boolean", { name: "rateValues:itemvalues", onGetValue: function (obj) { return __WEBPACK_IMPORTED_MODULE_1__base__["f" /* ItemValue */].getData(obj.rateValues); }, onSetValue: function (obj, value) { obj.rateValues = value; } },
    { name: "minRateDescription", alternativeName: "mininumRateDescription" }, { name: "maxRateDescription", alternativeName: "maximumRateDescription" }], function () { return new QuestionRatingModel(""); }, "question");
__WEBPACK_IMPORTED_MODULE_4__questionfactory__["a" /* QuestionFactory */].Instance.registerQuestion("rating", function (name) { return new QuestionRatingModel(name); });


/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__questionfactory__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jsonobject__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__question__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionTextModel; });




var QuestionTextModel = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionTextModel, _super);
    function QuestionTextModel(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.size = 25;
        _this.inputType = "text";
        return _this;
    }
    QuestionTextModel.prototype.getType = function () {
        return "text";
    };
    QuestionTextModel.prototype.isEmpty = function () { return _super.prototype.isEmpty.call(this) || this.value == ""; };
    QuestionTextModel.prototype.supportGoNextPageAutomatic = function () { return true; };
    QuestionTextModel.prototype.setNewValue = function (newValue) {
        newValue = this.correctValueType(newValue);
        _super.prototype.setNewValue.call(this, newValue);
    };
    QuestionTextModel.prototype.correctValueType = function (newValue) {
        if (!newValue)
            return newValue;
        if (this.inputType == "number" || this.inputType == "range") {
            return this.isNumber(newValue) ? parseFloat(newValue) : "";
        }
        return newValue;
    };
    QuestionTextModel.prototype.isNumber = function (value) {
        return !isNaN(parseFloat(value)) && isFinite(value);
    };
    return QuestionTextModel;
}(__WEBPACK_IMPORTED_MODULE_3__question__["a" /* Question */]));

__WEBPACK_IMPORTED_MODULE_2__jsonobject__["a" /* JsonObject */].metaData.addClass("text", [{ name: "inputType", default: "text", choices: ["color", "date", "datetime", "datetime-local", "email", "month", "number", "password", "range", "tel", "text", "time", "url", "week"] },
    { name: "size:number", default: 25 }, "placeHolder"], function () { return new QuestionTextModel(""); }, "question");
__WEBPACK_IMPORTED_MODULE_1__questionfactory__["a" /* QuestionFactory */].Instance.registerQuestion("text", function (name) { return new QuestionTextModel(name); });


/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__survey__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyWindowModel; });



var SurveyWindowModel = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](SurveyWindowModel, _super);
    function SurveyWindowModel(jsonObj) {
        var _this = _super.call(this) || this;
        _this.surveyValue = _this.createSurvey(jsonObj);
        _this.surveyValue.showTitle = false;
        _this.windowElement = document.createElement("div");
        return _this;
    }
    SurveyWindowModel.prototype.getType = function () { return "window"; };
    Object.defineProperty(SurveyWindowModel.prototype, "survey", {
        get: function () { return this.surveyValue; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyWindowModel.prototype, "isShowing", {
        get: function () { return this.isShowingValue; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyWindowModel.prototype, "isExpanded", {
        get: function () { return this.isExpandedValue; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyWindowModel.prototype, "title", {
        get: function () { return this.titleValue ? this.titleValue : this.survey.title; },
        set: function (value) { this.titleValue = value; },
        enumerable: true,
        configurable: true
    });
    SurveyWindowModel.prototype.expand = function () {
        this.expandcollapse(true);
    };
    SurveyWindowModel.prototype.collapse = function () {
        this.expandcollapse(false);
    };
    SurveyWindowModel.prototype.createSurvey = function (jsonObj) {
        return new __WEBPACK_IMPORTED_MODULE_2__survey__["a" /* SurveyModel */](jsonObj);
    };
    SurveyWindowModel.prototype.expandcollapse = function (value) {
        this.isExpandedValue = value;
    };
    return SurveyWindowModel;
}(__WEBPACK_IMPORTED_MODULE_1__base__["a" /* Base */]));

SurveyWindowModel.surveyElementName = "windowSurveyJS";


/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cssstandard__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return defaultBootstrapCss; });

var defaultBootstrapCss = {
    root: "",
    header: "panel-heading",
    body: "panel-body",
    footer: "panel-footer",
    navigationButton: "", navigation: { complete: "", prev: "", next: "" },
    progress: "progress center-block", progressBar: "progress-bar",
    pageTitle: "",
    row: "",
    question: { root: "", title: "", comment: "form-control", indent: 20 },
    error: { root: "alert alert-danger", icon: "glyphicon glyphicon-exclamation-sign", item: "" },
    checkbox: { root: "form-inline", item: "checkbox", other: "" },
    comment: "form-control",
    dropdown: { root: "", control: "form-control" },
    matrix: { root: "table" },
    matrixdropdown: { root: "table" },
    matrixdynamic: { root: "table", button: "button" },
    multipletext: { root: "table", itemTitle: "", itemValue: "form-control" },
    radiogroup: { root: "form-inline", item: "radio", label: "", other: "" },
    rating: { root: "btn-group", item: "btn btn-default" },
    text: "form-control",
    window: {
        root: "modal-content", body: "modal-body",
        header: {
            root: "modal-header panel-title", title: "pull-left", button: "glyphicon pull-right",
            buttonExpanded: "glyphicon pull-right glyphicon-chevron-up", buttonCollapsed: "glyphicon pull-right glyphicon-chevron-down"
        }
    }
};
__WEBPACK_IMPORTED_MODULE_0__cssstandard__["b" /* surveyCss */]["bootstrap"] = defaultBootstrapCss;


/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__localization_czech__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__localization_danish__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__localization_dutch__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__localization_finnish__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__localization_french__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__localization_german__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__localization_greek__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__localization_polish__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__localization_romanian__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__localization_russian__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__localization_swedish__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__localization_turkish__ = __webpack_require__(93);














/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_scss__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__main_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__validator__ = __webpack_require__(24);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__validator__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__validator__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__validator__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__validator__["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_1__validator__["f"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_1__validator__["g"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_1__validator__["h"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_1__validator__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base__ = __webpack_require__(4);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_2__base__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_2__base__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_2__base__["f"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_2__base__["e"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__localizablestring__ = __webpack_require__(30);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_3__localizablestring__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__choicesRestfull__ = __webpack_require__(15);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_4__choicesRestfull__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__conditions__ = __webpack_require__(12);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_5__conditions__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_5__conditions__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_5__conditions__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__conditionsParser__ = __webpack_require__(28);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return __WEBPACK_IMPORTED_MODULE_6__conditionsParser__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__conditionProcessValue__ = __webpack_require__(16);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return __WEBPACK_IMPORTED_MODULE_7__conditionProcessValue__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__error__ = __webpack_require__(7);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return __WEBPACK_IMPORTED_MODULE_8__error__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return __WEBPACK_IMPORTED_MODULE_8__error__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return __WEBPACK_IMPORTED_MODULE_8__error__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__jsonobject__ = __webpack_require__(1);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return __WEBPACK_IMPORTED_MODULE_9__jsonobject__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return __WEBPACK_IMPORTED_MODULE_9__jsonobject__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return __WEBPACK_IMPORTED_MODULE_9__jsonobject__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return __WEBPACK_IMPORTED_MODULE_9__jsonobject__["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return __WEBPACK_IMPORTED_MODULE_9__jsonobject__["f"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return __WEBPACK_IMPORTED_MODULE_9__jsonobject__["g"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return __WEBPACK_IMPORTED_MODULE_9__jsonobject__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return __WEBPACK_IMPORTED_MODULE_9__jsonobject__["h"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return __WEBPACK_IMPORTED_MODULE_9__jsonobject__["i"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return __WEBPACK_IMPORTED_MODULE_9__jsonobject__["j"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__question_matrixdropdownbase__ = __webpack_require__(20);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return __WEBPACK_IMPORTED_MODULE_10__question_matrixdropdownbase__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return __WEBPACK_IMPORTED_MODULE_10__question_matrixdropdownbase__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return __WEBPACK_IMPORTED_MODULE_10__question_matrixdropdownbase__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return __WEBPACK_IMPORTED_MODULE_10__question_matrixdropdownbase__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__question_matrixdropdown__ = __webpack_require__(37);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return __WEBPACK_IMPORTED_MODULE_11__question_matrixdropdown__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return __WEBPACK_IMPORTED_MODULE_11__question_matrixdropdown__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__question_matrixdynamic__ = __webpack_require__(38);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "N", function() { return __WEBPACK_IMPORTED_MODULE_12__question_matrixdynamic__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "O", function() { return __WEBPACK_IMPORTED_MODULE_12__question_matrixdynamic__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__question_matrix__ = __webpack_require__(36);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return __WEBPACK_IMPORTED_MODULE_13__question_matrix__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Q", function() { return __WEBPACK_IMPORTED_MODULE_13__question_matrix__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__question_multipletext__ = __webpack_require__(39);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "R", function() { return __WEBPACK_IMPORTED_MODULE_14__question_multipletext__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return __WEBPACK_IMPORTED_MODULE_14__question_multipletext__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__panel__ = __webpack_require__(18);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "T", function() { return __WEBPACK_IMPORTED_MODULE_15__panel__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "U", function() { return __WEBPACK_IMPORTED_MODULE_15__panel__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "V", function() { return __WEBPACK_IMPORTED_MODULE_15__panel__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__page__ = __webpack_require__(17);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "W", function() { return __WEBPACK_IMPORTED_MODULE_16__page__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__question__ = __webpack_require__(8);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "X", function() { return __WEBPACK_IMPORTED_MODULE_17__question__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__questionbase__ = __webpack_require__(21);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Y", function() { return __WEBPACK_IMPORTED_MODULE_18__questionbase__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__question_baseselect__ = __webpack_require__(10);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Z", function() { return __WEBPACK_IMPORTED_MODULE_19__question_baseselect__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_0", function() { return __WEBPACK_IMPORTED_MODULE_19__question_baseselect__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__question_checkbox__ = __webpack_require__(31);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_1", function() { return __WEBPACK_IMPORTED_MODULE_20__question_checkbox__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__question_comment__ = __webpack_require__(32);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_2", function() { return __WEBPACK_IMPORTED_MODULE_21__question_comment__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__question_dropdown__ = __webpack_require__(33);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_3", function() { return __WEBPACK_IMPORTED_MODULE_22__question_dropdown__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__questionfactory__ = __webpack_require__(2);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_4", function() { return __WEBPACK_IMPORTED_MODULE_23__questionfactory__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_5", function() { return __WEBPACK_IMPORTED_MODULE_23__questionfactory__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__question_file__ = __webpack_require__(34);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_6", function() { return __WEBPACK_IMPORTED_MODULE_24__question_file__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__question_html__ = __webpack_require__(35);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_7", function() { return __WEBPACK_IMPORTED_MODULE_25__question_html__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__question_radiogroup__ = __webpack_require__(40);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_8", function() { return __WEBPACK_IMPORTED_MODULE_26__question_radiogroup__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__question_rating__ = __webpack_require__(41);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_9", function() { return __WEBPACK_IMPORTED_MODULE_27__question_rating__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__question_text__ = __webpack_require__(42);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_10", function() { return __WEBPACK_IMPORTED_MODULE_28__question_text__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__survey__ = __webpack_require__(22);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_11", function() { return __WEBPACK_IMPORTED_MODULE_29__survey__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__trigger__ = __webpack_require__(94);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_12", function() { return __WEBPACK_IMPORTED_MODULE_30__trigger__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_13", function() { return __WEBPACK_IMPORTED_MODULE_30__trigger__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_14", function() { return __WEBPACK_IMPORTED_MODULE_30__trigger__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_15", function() { return __WEBPACK_IMPORTED_MODULE_30__trigger__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_16", function() { return __WEBPACK_IMPORTED_MODULE_30__trigger__["e"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__surveyWindow__ = __webpack_require__(43);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_17", function() { return __WEBPACK_IMPORTED_MODULE_31__surveyWindow__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__textPreProcessor__ = __webpack_require__(23);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_18", function() { return __WEBPACK_IMPORTED_MODULE_32__textPreProcessor__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__dxSurveyService__ = __webpack_require__(29);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_19", function() { return __WEBPACK_IMPORTED_MODULE_33__dxSurveyService__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__surveyStrings__ = __webpack_require__(3);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_20", function() { return __WEBPACK_IMPORTED_MODULE_34__surveyStrings__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_21", function() { return __WEBPACK_IMPORTED_MODULE_34__surveyStrings__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__questionCustomWidgets__ = __webpack_require__(19);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_22", function() { return __WEBPACK_IMPORTED_MODULE_35__questionCustomWidgets__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_23", function() { return __WEBPACK_IMPORTED_MODULE_35__questionCustomWidgets__["a"]; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Version; });
// styles

var Version;
Version = "" + "0.12.6";



































//Uncomment to include the "date" question type.
//export {default as QuestionDateModel} from "../../plugins/question_date"; 


/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__surveyWindow__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__kosurvey__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyWindow; });




var koTemplate = __webpack_require__(81);
var SurveyWindow = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](SurveyWindow, _super);
    function SurveyWindow(jsonObj) {
        var _this = _super.call(this, jsonObj) || this;
        _this.koExpanded = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](false);
        _this.koExpandedCss = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](_this.getButtonCss());
        var self = _this;
        _this.doExpand = function () { self.changeExpanded(); };
        _this.survey.onComplete.add(function (sender) { self.onComplete(); self.koExpandedCss(self.getButtonCss()); });
        return _this;
    }
    SurveyWindow.prototype.createSurvey = function (jsonObj) {
        return new __WEBPACK_IMPORTED_MODULE_3__kosurvey__["a" /* Survey */](jsonObj);
    };
    SurveyWindow.prototype.expandcollapse = function (value) {
        _super.prototype.expandcollapse.call(this, value);
        this.koExpanded(this.isExpandedValue);
    };
    Object.defineProperty(SurveyWindow.prototype, "template", {
        get: function () { return this.templateValue ? this.templateValue : this.getDefaultTemplate(); },
        set: function (value) { this.templateValue = value; },
        enumerable: true,
        configurable: true
    });
    SurveyWindow.prototype.show = function () {
        this.windowElement.innerHTML = this.template;
        __WEBPACK_IMPORTED_MODULE_1_knockout__["cleanNode"](this.windowElement);
        __WEBPACK_IMPORTED_MODULE_1_knockout__["applyBindings"](this, this.windowElement);
        document.body.appendChild(this.windowElement);
        this.survey.render(SurveyWindow.surveyElementName);
        this.isShowingValue = true;
    };
    SurveyWindow.prototype.getDefaultTemplate = function () { return koTemplate; };
    SurveyWindow.prototype.hide = function () {
        document.body.removeChild(this.windowElement);
        this.windowElement.innerHTML = "";
        this.isShowingValue = false;
    };
    Object.defineProperty(SurveyWindow.prototype, "css", {
        get: function () { return this.survey["css"]; },
        enumerable: true,
        configurable: true
    });
    SurveyWindow.prototype.changeExpanded = function () {
        this.expandcollapse(!this.isExpanded);
    };
    SurveyWindow.prototype.onComplete = function () {
        this.hide();
    };
    SurveyWindow.prototype.getButtonCss = function () {
        return this.koExpanded() ? this.css.window.header.buttonCollapsed : this.css.window.header.buttonExpanded;
    };
    return SurveyWindow;
}(__WEBPACK_IMPORTED_MODULE_2__surveyWindow__["a" /* SurveyWindowModel */]));



/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__koquestion_baseselect__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jsonobject__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__questionfactory__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__question_checkbox__ = __webpack_require__(31);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionCheckbox; });






var QuestionCheckboxImplementor = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionCheckboxImplementor, _super);
    function QuestionCheckboxImplementor(question) {
        return _super.call(this, question) || this;
    }
    QuestionCheckboxImplementor.prototype.createkoValue = function () {
        return this.question.value ? __WEBPACK_IMPORTED_MODULE_1_knockout__["observableArray"](this.question.value) : __WEBPACK_IMPORTED_MODULE_1_knockout__["observableArray"]();
    };
    QuestionCheckboxImplementor.prototype.setkoValue = function (newValue) {
        if (newValue) {
            this.koValue([].concat(newValue));
        }
        else {
            this.koValue([]);
        }
    };
    return QuestionCheckboxImplementor;
}(__WEBPACK_IMPORTED_MODULE_2__koquestion_baseselect__["b" /* QuestionCheckboxBaseImplementor */]));
var QuestionCheckbox = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionCheckbox, _super);
    function QuestionCheckbox(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        new QuestionCheckboxImplementor(_this);
        return _this;
    }
    return QuestionCheckbox;
}(__WEBPACK_IMPORTED_MODULE_5__question_checkbox__["a" /* QuestionCheckboxModel */]));

__WEBPACK_IMPORTED_MODULE_3__jsonobject__["a" /* JsonObject */].metaData.overrideClassCreatore("checkbox", function () { return new QuestionCheckbox(""); });
__WEBPACK_IMPORTED_MODULE_4__questionfactory__["a" /* QuestionFactory */].Instance.registerQuestion("checkbox", function (name) { var q = new QuestionCheckbox(name); q.choices = __WEBPACK_IMPORTED_MODULE_4__questionfactory__["a" /* QuestionFactory */].DefaultChoices; return q; });


/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jsonobject__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__questionfactory__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__question_comment__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__koquestion__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionComment; });





var QuestionComment = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionComment, _super);
    function QuestionComment(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        new __WEBPACK_IMPORTED_MODULE_4__koquestion__["a" /* QuestionImplementor */](_this);
        return _this;
    }
    return QuestionComment;
}(__WEBPACK_IMPORTED_MODULE_3__question_comment__["a" /* QuestionCommentModel */]));

__WEBPACK_IMPORTED_MODULE_1__jsonobject__["a" /* JsonObject */].metaData.overrideClassCreatore("comment", function () { return new QuestionComment(""); });
__WEBPACK_IMPORTED_MODULE_2__questionfactory__["a" /* QuestionFactory */].Instance.registerQuestion("comment", function (name) { return new QuestionComment(name); });


/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question_dropdown__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jsonobject__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__questionfactory__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__koquestion_baseselect__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionDropdown; });





var QuestionDropdown = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionDropdown, _super);
    function QuestionDropdown(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        new __WEBPACK_IMPORTED_MODULE_4__koquestion_baseselect__["a" /* QuestionSelectBaseImplementor */](_this);
        return _this;
    }
    return QuestionDropdown;
}(__WEBPACK_IMPORTED_MODULE_1__question_dropdown__["a" /* QuestionDropdownModel */]));

__WEBPACK_IMPORTED_MODULE_2__jsonobject__["a" /* JsonObject */].metaData.overrideClassCreatore("dropdown", function () { return new QuestionDropdown(""); });
__WEBPACK_IMPORTED_MODULE_3__questionfactory__["a" /* QuestionFactory */].Instance.registerQuestion("dropdown", function (name) { var q = new QuestionDropdown(name); q.choices = __WEBPACK_IMPORTED_MODULE_3__questionfactory__["a" /* QuestionFactory */].DefaultChoices; return q; });


/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jsonobject__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__questionfactory__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__question_file__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__koquestion__ = __webpack_require__(6);
/* unused harmony export QuestionFileImplementor */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionFile; });






var QuestionFileImplementor = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionFileImplementor, _super);
    function QuestionFileImplementor(question) {
        var _this = _super.call(this, question) || this;
        var self = _this;
        _this.koDataUpdater = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](0);
        _this.koData = __WEBPACK_IMPORTED_MODULE_1_knockout__["computed"](function () { self.koDataUpdater(); return self.question.previewValue; });
        _this.koHasValue = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](false);
        _this.question["koData"] = _this.koData;
        _this.question["koHasValue"] = _this.koHasValue;
        _this.question.previewValueLoadedCallback = function () { self.onLoadPreview(); };
        _this.question["dochange"] = function (data, event) { var src = event.target || event.srcElement; self.onChange(src); };
        return _this;
    }
    QuestionFileImplementor.prototype.onChange = function (src) {
        if (!window["FileReader"])
            return;
        if (!src || !src.files || src.files.length < 1)
            return;
        this.question.loadFile(src.files[0]);
    };
    QuestionFileImplementor.prototype.onLoadPreview = function () {
        this.koDataUpdater(this.koDataUpdater() + 1);
        this.koHasValue(true);
    };
    return QuestionFileImplementor;
}(__WEBPACK_IMPORTED_MODULE_5__koquestion__["a" /* QuestionImplementor */]));

var QuestionFile = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionFile, _super);
    function QuestionFile(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        new QuestionFileImplementor(_this);
        return _this;
    }
    return QuestionFile;
}(__WEBPACK_IMPORTED_MODULE_4__question_file__["a" /* QuestionFileModel */]));

__WEBPACK_IMPORTED_MODULE_2__jsonobject__["a" /* JsonObject */].metaData.overrideClassCreatore("file", function () { return new QuestionFile(""); });
__WEBPACK_IMPORTED_MODULE_3__questionfactory__["a" /* QuestionFactory */].Instance.registerQuestion("file", function (name) { return new QuestionFile(name); });


/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jsonobject__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__questionfactory__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__koquestionbase__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__question_html__ = __webpack_require__(35);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionHtml; });





var QuestionHtml = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionHtml, _super);
    function QuestionHtml(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        new __WEBPACK_IMPORTED_MODULE_3__koquestionbase__["a" /* QuestionImplementorBase */](_this);
        return _this;
    }
    return QuestionHtml;
}(__WEBPACK_IMPORTED_MODULE_4__question_html__["a" /* QuestionHtmlModel */]));

__WEBPACK_IMPORTED_MODULE_1__jsonobject__["a" /* JsonObject */].metaData.overrideClassCreatore("html", function () { return new QuestionHtml(""); });
__WEBPACK_IMPORTED_MODULE_2__questionfactory__["a" /* QuestionFactory */].Instance.registerQuestion("html", function (name) { return new QuestionHtml(name); });


/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__question_matrix__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__koquestion__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__jsonobject__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__questionfactory__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatrixRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return QuestionMatrix; });






var MatrixRow = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](MatrixRow, _super);
    function MatrixRow(name, text, fullName, data, value) {
        var _this = _super.call(this, name, text, fullName, data, value) || this;
        _this.name = name;
        _this.text = text;
        _this.fullName = fullName;
        _this.isValueUpdating = false;
        _this.koValue = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](_this.value);
        var self = _this;
        _this.koValue.subscribe(function (newValue) {
            if (self.isValueUpdating)
                true;
            self.value = newValue;
        });
        return _this;
    }
    MatrixRow.prototype.onValueChanged = function () {
        this.isValueUpdating = true;
        this.koValue(this.value);
        this.isValueUpdating = false;
    };
    return MatrixRow;
}(__WEBPACK_IMPORTED_MODULE_2__question_matrix__["a" /* MatrixRowModel */]));

var QuestionMatrix = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionMatrix, _super);
    function QuestionMatrix(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        new __WEBPACK_IMPORTED_MODULE_3__koquestion__["a" /* QuestionImplementor */](_this);
        return _this;
    }
    QuestionMatrix.prototype.createMatrixRow = function (name, text, fullName, value) {
        return new MatrixRow(name, text, fullName, this, value);
    };
    return QuestionMatrix;
}(__WEBPACK_IMPORTED_MODULE_2__question_matrix__["b" /* QuestionMatrixModel */]));

__WEBPACK_IMPORTED_MODULE_4__jsonobject__["a" /* JsonObject */].metaData.overrideClassCreatore("matrix", function () { return new QuestionMatrix(""); });
__WEBPACK_IMPORTED_MODULE_5__questionfactory__["a" /* QuestionFactory */].Instance.registerQuestion("matrix", function (name) { var q = new QuestionMatrix(name); q.rows = ["Row 1", "Row 2"]; q.columns = ["Column 1", "Column 2", "Column 3"]; return q; });


/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question_matrixdropdown__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jsonobject__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__questionfactory__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__koquestion__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionMatrixDropdown; });





var QuestionMatrixDropdown = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionMatrixDropdown, _super);
    function QuestionMatrixDropdown(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        new __WEBPACK_IMPORTED_MODULE_4__koquestion__["a" /* QuestionImplementor */](_this);
        return _this;
    }
    return QuestionMatrixDropdown;
}(__WEBPACK_IMPORTED_MODULE_1__question_matrixdropdown__["a" /* QuestionMatrixDropdownModel */]));

__WEBPACK_IMPORTED_MODULE_2__jsonobject__["a" /* JsonObject */].metaData.overrideClassCreatore("matrixdropdown", function () { return new QuestionMatrixDropdown(""); });
__WEBPACK_IMPORTED_MODULE_3__questionfactory__["a" /* QuestionFactory */].Instance.registerQuestion("matrixdropdown", function (name) { var q = new QuestionMatrixDropdown(name); q.choices = [1, 2, 3, 4, 5]; q.rows = ["Row 1", "Row 2"]; q.addColumn("Column 1"); q.addColumn("Column 2"); q.addColumn("Column 3"); return q; });


/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jsonobject__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__questionfactory__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__koquestion__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__question_matrixdynamic__ = __webpack_require__(38);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionMatrixDynamicImplementor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return QuestionMatrixDynamic; });






var QuestionMatrixDynamicImplementor = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionMatrixDynamicImplementor, _super);
    function QuestionMatrixDynamicImplementor(question) {
        var _this = _super.call(this, question) || this;
        _this.koRecalc = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](0);
        _this.koRows = __WEBPACK_IMPORTED_MODULE_1_knockout__["pureComputed"](function () {
            this.koRecalc();
            return this.question.visibleRows;
        }, _this);
        _this.koOverflowX = __WEBPACK_IMPORTED_MODULE_1_knockout__["pureComputed"](function () {
            return this.question.horizontalScroll ? "scroll" : "none";
        }, _this);
        _this.question["koRows"] = _this.koRows;
        var self = _this;
        _this.koAddRowClick = function () { self.addRow(); };
        _this.koRemoveRowClick = function (data) { self.removeRow(data); };
        _this.question["koAddRowClick"] = _this.koAddRowClick;
        _this.question["koRemoveRowClick"] = _this.koRemoveRowClick;
        _this.question["koOverflowX"] = _this.koOverflowX;
        _this.question.rowCountChangedCallback = function () { self.onRowCountChanged(); };
        _this.question.columnsChangedCallback = function () { self.onColumnChanged(); };
        _this.question.updateCellsCallbak = function () { self.onUpdateCells(); };
        return _this;
    }
    QuestionMatrixDynamicImplementor.prototype.onUpdateCells = function () {
        //Genereate rows again.
        var rows = this.question["generatedVisibleRows"];
        var columns = this.question.columns;
        if (rows && rows.length > 0 && columns && columns.length > 0)
            this.onColumnChanged();
    };
    QuestionMatrixDynamicImplementor.prototype.onColumnChanged = function () {
        var rows = this.question.visibleRows;
        this.onRowCountChanged();
    };
    QuestionMatrixDynamicImplementor.prototype.onRowCountChanged = function () {
        this.koRecalc(this.koRecalc() + 1);
    };
    QuestionMatrixDynamicImplementor.prototype.addRow = function () {
        this.question.addRow();
    };
    QuestionMatrixDynamicImplementor.prototype.removeRow = function (row) {
        var rows = this.question.cachedVisibleRows;
        var index = rows.indexOf(row);
        if (index > -1) {
            this.question.removeRow(index);
        }
    };
    return QuestionMatrixDynamicImplementor;
}(__WEBPACK_IMPORTED_MODULE_4__koquestion__["a" /* QuestionImplementor */]));

var QuestionMatrixDynamic = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionMatrixDynamic, _super);
    function QuestionMatrixDynamic(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        new QuestionMatrixDynamicImplementor(_this);
        return _this;
    }
    return QuestionMatrixDynamic;
}(__WEBPACK_IMPORTED_MODULE_5__question_matrixdynamic__["a" /* QuestionMatrixDynamicModel */]));

__WEBPACK_IMPORTED_MODULE_2__jsonobject__["a" /* JsonObject */].metaData.overrideClassCreatore("matrixdynamic", function () { return new QuestionMatrixDynamic(""); });
__WEBPACK_IMPORTED_MODULE_3__questionfactory__["a" /* QuestionFactory */].Instance.registerQuestion("matrixdynamic", function (name) { var q = new QuestionMatrixDynamic(name); q.choices = [1, 2, 3, 4, 5]; q.rowCount = 2; q.addColumn("Column 1"); q.addColumn("Column 2"); q.addColumn("Column 3"); return q; });


/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__question_multipletext__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__koquestion__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__jsonobject__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__questionfactory__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultipleTextItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return QuestionMultipleTextImplementor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return QuestionMultipleText; });






var MultipleTextItem = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](MultipleTextItem, _super);
    function MultipleTextItem(name, title) {
        if (name === void 0) { name = null; }
        if (title === void 0) { title = null; }
        var _this = _super.call(this, name, title) || this;
        _this.name = name;
        _this.isKOValueUpdating = false;
        _this.koValue = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](_this.value);
        var self = _this;
        _this.koValue.subscribe(function (newValue) {
            if (!self.isKOValueUpdating) {
                self.value = newValue;
            }
        });
        return _this;
    }
    MultipleTextItem.prototype.onValueChanged = function (newValue) {
        this.isKOValueUpdating = true;
        this.koValue(newValue);
        this.isKOValueUpdating = false;
    };
    return MultipleTextItem;
}(__WEBPACK_IMPORTED_MODULE_2__question_multipletext__["a" /* MultipleTextItemModel */]));

var QuestionMultipleTextImplementor = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionMultipleTextImplementor, _super);
    function QuestionMultipleTextImplementor(question) {
        var _this = _super.call(this, question) || this;
        _this.koRows = __WEBPACK_IMPORTED_MODULE_1_knockout__["observableArray"](_this.question.getRows());
        _this.question["koRows"] = _this.koRows;
        _this.onColCountChanged();
        var self = _this;
        _this.question.colCountChangedCallback = function () { self.onColCountChanged(); };
        return _this;
    }
    QuestionMultipleTextImplementor.prototype.onColCountChanged = function () {
        this.koRows(this.question.getRows());
    };
    return QuestionMultipleTextImplementor;
}(__WEBPACK_IMPORTED_MODULE_3__koquestion__["a" /* QuestionImplementor */]));

var QuestionMultipleText = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionMultipleText, _super);
    function QuestionMultipleText(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        new QuestionMultipleTextImplementor(_this);
        return _this;
    }
    QuestionMultipleText.prototype.createTextItem = function (name, title) {
        return new MultipleTextItem(name, title);
    };
    return QuestionMultipleText;
}(__WEBPACK_IMPORTED_MODULE_2__question_multipletext__["b" /* QuestionMultipleTextModel */]));

__WEBPACK_IMPORTED_MODULE_4__jsonobject__["a" /* JsonObject */].metaData.overrideClassCreatore("multipletextitem", function () { return new MultipleTextItem(""); });
__WEBPACK_IMPORTED_MODULE_4__jsonobject__["a" /* JsonObject */].metaData.overrideClassCreatore("multipletext", function () { return new QuestionMultipleText(""); });
__WEBPACK_IMPORTED_MODULE_5__questionfactory__["a" /* QuestionFactory */].Instance.registerQuestion("multipletext", function (name) { var q = new QuestionMultipleText(name); q.addItem("text1"); q.addItem("text2"); return q; });


/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question_radiogroup__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jsonobject__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__questionfactory__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__koquestion_baseselect__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionRadiogroup; });





var QuestionRadiogroup = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionRadiogroup, _super);
    function QuestionRadiogroup(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        new __WEBPACK_IMPORTED_MODULE_4__koquestion_baseselect__["b" /* QuestionCheckboxBaseImplementor */](_this);
        return _this;
    }
    return QuestionRadiogroup;
}(__WEBPACK_IMPORTED_MODULE_1__question_radiogroup__["a" /* QuestionRadiogroupModel */]));

__WEBPACK_IMPORTED_MODULE_2__jsonobject__["a" /* JsonObject */].metaData.overrideClassCreatore("radiogroup", function () { return new QuestionRadiogroup(""); });
__WEBPACK_IMPORTED_MODULE_3__questionfactory__["a" /* QuestionFactory */].Instance.registerQuestion("radiogroup", function (name) { var q = new QuestionRadiogroup(name); q.choices = __WEBPACK_IMPORTED_MODULE_3__questionfactory__["a" /* QuestionFactory */].DefaultChoices; return q; });


/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__koquestion__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__question_rating__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__jsonobject__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__questionfactory__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionRating; });






var QuestionRatingImplementor = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionRatingImplementor, _super);
    function QuestionRatingImplementor(question) {
        var _this = _super.call(this, question) || this;
        _this.koVisibleRateValues = __WEBPACK_IMPORTED_MODULE_1_knockout__["observableArray"](_this.getValues());
        _this.question["koVisibleRateValues"] = _this.koVisibleRateValues;
        var self = _this;
        _this.koChange = function (val) { self.koValue(val.itemValue); };
        _this.question["koChange"] = _this.koChange;
        _this.question.rateValuesChangedCallback = function () { self.onRateValuesChanged(); };
        _this.question["koGetCss"] = function (val) {
            var css = self.question.itemCss;
            return self.question["koValue"]() == val.value ? css + " active" : css;
        };
        return _this;
    }
    QuestionRatingImplementor.prototype.onRateValuesChanged = function () {
        this.koVisibleRateValues(this.getValues());
    };
    QuestionRatingImplementor.prototype.getValues = function () { return this.question.visibleRateValues; };
    return QuestionRatingImplementor;
}(__WEBPACK_IMPORTED_MODULE_2__koquestion__["a" /* QuestionImplementor */]));
var QuestionRating = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionRating, _super);
    function QuestionRating(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        new QuestionRatingImplementor(_this);
        return _this;
    }
    QuestionRating.prototype.onSetData = function () {
        this.itemCss = this.data["css"].rating.item;
    };
    return QuestionRating;
}(__WEBPACK_IMPORTED_MODULE_3__question_rating__["a" /* QuestionRatingModel */]));

__WEBPACK_IMPORTED_MODULE_4__jsonobject__["a" /* JsonObject */].metaData.overrideClassCreatore("rating", function () { return new QuestionRating(""); });
__WEBPACK_IMPORTED_MODULE_5__questionfactory__["a" /* QuestionFactory */].Instance.registerQuestion("rating", function (name) { return new QuestionRating(name); });


/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question_text__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jsonobject__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__questionfactory__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__koquestion__ = __webpack_require__(6);
/* unused harmony export QuestionTextImplementor */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionText; });





var QuestionTextImplementor = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionTextImplementor, _super);
    function QuestionTextImplementor(question) {
        var _this = _super.call(this, question) || this;
        _this.question = question;
        return _this;
    }
    QuestionTextImplementor.prototype.updateValue = function (newValue) {
        _super.prototype.updateValue.call(this, newValue);
        if (newValue !== this.question.value) {
            this.koValue(this.question.value);
        }
    };
    return QuestionTextImplementor;
}(__WEBPACK_IMPORTED_MODULE_4__koquestion__["a" /* QuestionImplementor */]));

var QuestionText = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](QuestionText, _super);
    function QuestionText(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        new QuestionTextImplementor(_this);
        return _this;
    }
    return QuestionText;
}(__WEBPACK_IMPORTED_MODULE_1__question_text__["a" /* QuestionTextModel */]));

__WEBPACK_IMPORTED_MODULE_2__jsonobject__["a" /* JsonObject */].metaData.overrideClassCreatore("text", function () { return new QuestionText(""); });
__WEBPACK_IMPORTED_MODULE_3__questionfactory__["a" /* QuestionFactory */].Instance.registerQuestion("text", function (name) { return new QuestionText(name); });


/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"survey-comment\">\n    <!-- ko if: question.survey.isEditMode -->\n    <input data-bind=\"value: $data.question.koComment, visible: $data.visible, css: question.survey.css.question.comment\" />\n    <!-- /ko -->\n    <!-- ko if: question.survey.isDisplayMode -->\n    <div data-bind=\"text: $data.question.koComment, visible: $data.visible, css: question.survey.css.question.comment\"></div>\n    <!-- /ko -->\n</script>";

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = "<!-- ko template: { name: 'survey-content', afterRender: koEventAfterRender } -->\n<!-- /ko -->\n<script type=\"text/html\" id=\"survey-content\">\n    <div data-bind=\"css: css.root, afterRender: koEventAfterRender\">\n        <div data-bind=\"visible: (title.length > 0) && showTitle && koState() != 'completed', css: css.header\">\n            <h3 data-bind=\"text:processedTitle\"></h3>\n        </div>\n        <!-- ko if: koState() == \"running\" -->\n        <div data-bind=\"css: css.body\">\n            <div data-bind=\"visible: showProgressBar =='top', template: 'survey-progress'\"></div>\n            <div id=\"sq_page\" data-bind=\"template: { name: 'survey-page', data: koCurrentPage, afterRender: koAfterRenderPage }\"></div>\n            <div style=\"margin-top:10px\" data-bind=\"visible: showProgressBar =='bottom', template: 'survey-progress'\"></div>\n        </div>\n        <div data-bind=\"visible: koIsNavigationButtonsShowing, css: css.footer\">\n            <input type=\"button\" data-bind=\"value: pagePrevText, click: prevPage, visible: !koIsFirstPage(), css: cssNavigationPrev\" />\n            <input type=\"button\" data-bind=\"value: pageNextText, click: nextPage, visible: !koIsLastPage(), css: cssNavigationNext\" />\n            <input type=\"button\" data-bind=\"value: completeText, click: completeLastPage, visible: koIsLastPage() && isEditMode, css: cssNavigationComplete\" />\n        </div>\n        <!-- /ko -->\n        <!-- ko if: koState() == \"completed\" && showCompletedPage -->\n        <div data-bind=\"html: processedCompletedHtml\"></div>\n        <!-- /ko -->\n        <!-- ko if: koState() == \"loading\" -->\n        <div data-bind=\"html: processedLoadingHtml\"></div>\n        <!-- /ko -->\n        <!-- ko if: koState() == \"empty\" -->\n        <div data-bind=\"text:emptySurveyText, css: css.body\"></div>\n        <!-- /ko -->\n    </div>\n</script>";

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"survey-page\">\n<div>\n    <h4 data-bind=\"visible: (title.length > 0) && data.showPageTitles, text: koNo() + processedTitle, css: data.css.pageTitle\"></h4>\n    <!-- ko template: { name: 'survey-rows', data: $data} --><!-- /ko -->\n</div>    \n</script>\n";

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"survey-panel\">\n<div>\n    <h4 data-bind=\"visible: (title.length > 0), text: processedTitle, css: data.css.pageTitle\"></h4>\n    <div data-bind=\"style: { marginLeft: koInnerMargin }\">\n    <!-- ko template: { name: 'survey-rows', data: $data} --><!-- /ko -->\n    </div>\n</div>    \n</script>\n";

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"survey-progress\">\n    <div style=\"width:60%;\" data-bind=\"css: css.progress\">\n        <div data-bind=\"css: css.progressBar, style:{width: koProgress() + '%'}\"\n             role=\"progressbar\" aria-valuemin=\"0\"\n             aria-valuemax=\"100\">\n            <span data-bind=\"text:koProgressText\"></span>\n        </div>\n    </div>\n</script>\n";

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"survey-question-checkbox\">\n    <form data-bind=\"css: question.survey.css.checkbox.root\">\n        <!-- ko foreach: { data: question.koVisibleChoices, as: 'item', afterRender: question.koAfterRender}  -->\n        <div data-bind=\"style:{width: question.koWidth, 'margin-right': question.colCount == 0 ? '5px': '0px'}, css: question.survey.css.checkbox.item\">\n            <label data-bind=\"css: question.survey.css.checkbox.item\">\n                <input type=\"checkbox\" data-bind=\"attr: {name: question.name, value: item.value, id: ($index() == 0) ? question.inputId : ''}, checked: question.koValue, enable: question.survey.isEditMode\" />\n                <span data-bind=\"text: item.text\"></span>\n            </label>\n            <div data-bind=\"visible: question.hasOther && ($index() == question.koVisibleChoices().length-1)\">\n                <div data-bind=\"template: { name: 'survey-comment', data: {'question': question, 'visible': question.koOtherVisible } }, css: question.survey.css.checkbox.other\"></div>\n            </div>\n        </div>\n        <!-- /ko -->\n    </form>\n</script>";

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"survey-question-comment\">\n    <!-- ko if: question.survey.isEditMode -->\n    <textarea type=\"text\" data-bind=\"attr: {cols: question.cols, rows: question.rows, id: question.inputId, placeholder: question.placeHolder}, value:question.koValue, css: question.survey.css.comment\"></textarea>\n    <!-- /ko -->\n    <!-- ko if: question.survey.isDisplayMode -->\n    <div data-bind=\"text:question.koValue, css: question.survey.css.text\"></div>\n    <!-- /ko -->\n</script>\n";

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"survey-question-dropdown\">\n    <!-- ko if: question.survey.isEditMode -->\n    <select data-bind=\"attr: {id: question.inputId}, options: question.koVisibleChoices, optionsText: 'text', optionsValue: 'value', value: question.koValue, optionsCaption: question.optionsCaption, css: question.survey.css.dropdown.control\"></select>\n    <!-- /ko -->\n    <!-- ko if: question.survey.isDisplayMode -->\n    <div data-bind=\"text:question.koValue, css: question.survey.css.dropdown.control\"></div>\n    <!-- /ko -->\n    <div data-bind=\"visible: question.hasOther\">\n        <div data-bind=\"template: { name: 'survey-comment', data: {'question': question, 'visible': question.koOtherVisible } }\"></div>\n    </div>\n</script>";

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"survey-question-errors\">\n    <div role=\"alert\" data-bind=\"visible: koErrors().length > 0, foreach: { data: koErrors, as: 'error'}, css: question.survey.css.error.root\">\n        <div>\n            <span aria-hidden=\"true\" data-bind=\"css: question.survey.css.error.icon\"></span>\n            <span data-bind=\"text:error.getText(), css: question.survey.css.error.item\"></span>\n        </div>\n    </div>\n</script>";

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"survey-question-file\">\n    <!-- ko if: question.survey.isEditMode -->\n    <input type=\"file\" data-bind=\"attr: {id: question.inputId}, event: {change: question.dochange}\">\n    <!-- /ko -->\n    <div>\n        <img data-bind=\"attr: { src: question.koData, height: question.imageHeight, width: question.imageWidth }, visible: question.koHasValue\">\n    </div>\n</script>\n";

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"survey-question-html\">\n    <div data-bind=\"html: question.processedHtml\"></div>\n</script>\n";

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"survey-question-matrix\">\n    <table data-bind=\"css: question.survey.css.matrix.root\">\n        <thead>\n            <tr>\n                <th data-bind=\"visible: question.hasRows\"></th>\n                <!-- ko foreach: question.columns -->\n                <th data-bind=\"text:$data.text\"></th>\n                <!-- /ko -->\n            </tr>\n        </thead>\n        <tbody>\n            <!-- ko foreach: { data: question.visibleRows, as: 'row' } -->\n            <tr>\n                <td data-bind=\"visible: question.hasRows, text:row.text\"></td>\n                <!-- ko foreach: question.columns -->\n                <td>\n                    <input type=\"radio\" data-bind=\"attr: {name: row.fullName, value: $data.value, id: ($index() == 0) && ($parentContext.$index() == 0) ? question.inputId : ''}, checked: row.koValue, enable: question.survey.isEditMode\" />\n                </td>\n                <!-- /ko -->\n            </tr>\n            <!-- /ko -->\n        </tbody>\n    </table>\n</script>";

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"survey-question-matrixdropdown\">\n    <div data-bind=\"style: {overflowX: question.horizontalScroll? 'scroll': ''}\">\n        <table data-bind=\"css: question.survey.css.matrixdropdown.root\">\n            <thead>\n                <tr>\n                    <th></th>\n                    <!-- ko foreach: question.columns -->\n                    <th data-bind=\"text: question.getColumnTitle($data), style: { minWidth: question.getColumnWidth($data) }\"></th>\n                    <!-- /ko -->\n                </tr>\n            </thead>\n            <tbody>\n                <!-- ko foreach: { data: question.visibleRows, as: 'row' } -->\n                <tr>\n                    <td data-bind=\"text:row.text\"></td>\n                    <!-- ko foreach: row.cells-->\n                    <td>\n                        <!-- ko template: { name: 'survey-question-errors', data: $data.question } -->\n                        <!-- /ko -->\n                        <!-- ko template: { name: 'survey-question-' + $data.question.getType(), data: $data.question, as: 'question' } -->\n                        <!-- /ko -->\n                    </td>\n                    <!-- /ko -->\n                </tr>\n                <!-- /ko -->\n            </tbody>\n        </table>\n    </div>\n</script>";

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"survey-question-matrixdynamic\">\n    <div data-bind=\"style: {overflowX: question.horizontalScroll? 'scroll': ''}\">\n        <table data-bind=\"css: question.survey.css.matrixdynamic.root\">\n            <thead>\n                <tr>\n                    <!-- ko foreach: question.columns -->\n                    <th data-bind=\"text: question.getColumnTitle($data), style: { minWidth: question.getColumnWidth($data) }\"></th>\n                    <!-- /ko -->\n                    <!-- ko if: question.survey.isEditMode -->\n                    <th></th>\n                    <!-- /ko -->\n                </tr>\n            </thead>\n            <tbody>\n                <!-- ko foreach: { data: question.koRows, as: 'row' } -->\n                <tr>\n                    <!-- ko foreach: row.cells-->\n                    <td>\n                        <!-- ko template: { name: 'survey-question-errors', data: $data.question } -->\n                        <!-- /ko -->\n                        <!-- ko template: { name: 'survey-question-' + $data.question.getType(), data: $data.question, as: 'question' } -->\n                        <!-- /ko -->\n                    </td>\n                    <!-- /ko -->\n                    <!-- ko if: question.survey.isEditMode -->\n                    <td><input type=\"button\" data-bind=\"click:question.koRemoveRowClick, css: question.survey.css.matrixdynamic.button, value: question.removeRowText\" /></td>\n                    <!-- /ko -->\n                </tr>\n                <!-- /ko -->\n            </tbody>\n        </table>\n    </div>\n    <!-- ko if: question.survey.isEditMode -->\n    <input type=\"button\" data-bind=\"click:question.koAddRowClick, css: question.survey.css.matrixdynamic.button, value: question.addRowText\" />\n    <!-- /ko -->\n</script>";

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"survey-question-multipletext\">\n    <table data-bind=\"css: question.survey.css.multipletext.root, foreach: { data:  question.koRows, as: 'row' }\">\n        <tr data-bind=\"foreach: { data: row, as: 'item' }\">\n            <td data-bind=\"text: item.fullTitle, css: question.survey.css.multipletext.itemTitle\"></td>\n            <td>\n                <!-- ko if: question.survey.isEditMode -->\n                <input type=\"text\" style=\"float:left\" data-bind=\"attr: {size: question.itemSize, id: ($index() == 0) ? question.inputId : '', placeholder: item.placeHolder}, value: item.koValue, css: question.survey.css.multipletext.itemValue\" />\n                <!-- /ko -->\n                <!-- ko if: question.survey.isDisplayMode -->\n                <div style=\"float:left\" data-bind=\"attr: {size: question.itemSize}, text: item.koValue, css: question.survey.css.multipletext.itemValue\"></div>\n                <!-- /ko -->\n            </td>\n        </tr>\n    </table>\n</script>";

/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"survey-question-radiogroup\">\n    <form data-bind=\"css: question.survey.css.radiogroup.root\">\n        <!-- ko foreach: { data: question.koVisibleChoices, as: 'item', afterRender: question.koAfterRender}  -->\n        <div  data-bind=\"style:{width: question.koWidth, 'margin-right': question.colCount == 0 ? '5px': '0px'}, css: question.survey.css.radiogroup.item\">\n            <label data-bind=\"css: question.survey.css.radiogroup.label\">\n                <input type=\"radio\" data-bind=\"attr: {name: question.name, value: item.value, id: ($index() == 0) ? question.inputId : ''}, checked: question.koValue, enable: question.survey.isEditMode\" />\n                <span data-bind=\"text: item.text\"></span>\n            </label>\n            <div data-bind=\"visible: question.hasOther && ($index() == question.koVisibleChoices().length-1)\">\n                <div data-bind=\"template: { name: 'survey-comment', data: {'question': question, 'visible': question.koOtherVisible}}, css: question.survey.css.radiogroup.other\"></div>\n            </div>\n        </div>\n        <!-- /ko -->\n    </form>\n</script>";

/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"survey-question-rating\">\n    <div data-bind=\"css: question.survey.css.rating.root\">\n        <!-- ko foreach: question.koVisibleRateValues -->\n        <label data-bind=\"css: question.koGetCss($data)\">\n            <input type=\"radio\" style=\"display: none;\"\n                    data-bind=\"attr: {name: question.name, id: question.name + $index(), value: $data.value}, event: { change: question.koChange}, enable: question.survey.isEditMode\" />\n            <span data-bind=\"visible: $index() == 0, text: question.minRateDescription\"></span>\n            <span data-bind=\"text: $data.text\"></span>\n            <span data-bind=\"visible: $index() == (question.koVisibleRateValues().length-1), text: question.maxRateDescription\"></span>\n        </label>\n        <!-- /ko -->\n    </div>\n    <div data-bind=\"visible: question.hasOther\">\n        <div data-bind=\"template: { name: 'survey-comment', data: {'question': question } }\"></div>\n    </div>\n</script>";

/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"survey-question-text\">\n    <!-- ko if: question.survey.isEditMode -->\n    <input data-bind=\"attr: {type: question.inputType, size: question.size, id: question.inputId, placeholder: question.placeHolder}, value:question.koValue, css: question.survey.css.text\"/>\n    <!-- /ko -->\n    <!-- ko if: question.survey.isDisplayMode -->\n    <div data-bind=\"text:question.koValue, css: question.survey.css.text\"></div>\n    <!-- /ko -->\n</script>\n";

/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"survey-question\">\n    <div style=\"vertical-align:top\" data-bind=\"css: question.survey.css.question.root, style: {display: question.koVisible() ? 'inline-block': 'none', marginLeft: question.koMarginLeft, paddingRight: question.koPaddingRight, width: question.koRenderWidth }, attr: {id: question.id}\">\n        <!-- ko if: question.hasTitle -->\n        <h5 data-bind=\"visible: question.survey.questionTitleLocation == 'top', text: question.koTitle(), css: question.survey.css.question.title\"></h5>\n        <!-- /ko -->\n        <!-- ko template: { name: 'survey-question-errors', data: question } -->\n        <!-- /ko -->\n        <!-- ko template: { name: question.koTemplateName(), data: question, afterRender: question.koQuestionAfterRender } -->\n        <!-- /ko -->\n        <div data-bind=\"visible: question.hasComment\">\n            <div data-bind=\"text:question.commentText\"></div>\n            <div data-bind=\"template: { name: 'survey-comment', data: {'question': question, 'visible': true } }\"></div>\n        </div>\n        <!-- ko if: question.hasTitle -->\n        <h5 data-bind=\"visible: question.survey.questionTitleLocation == 'bottom', text: question.koTitle(), css: question.survey.css.question.title\"></h5>\n        <!-- /ko -->\n    </div>\n</script>";

/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"survey-rows\">\n    <!-- ko foreach: { data: koRows, as: 'row'} -->\n    <div data-bind=\"visible: row.koVisible, css: panel.data.css.row\">\n        <!-- ko foreach: { data: row.koElements, as: 'question' , afterRender: row.koAfterRender } -->\n            <!-- ko if: question.isPanel -->\n            <!-- ko template: { name: 'survey-panel', data: question, afterRender: $parent.panel.koPanelAfterRender } --><!-- /ko -->\n            <!-- /ko -->\n            <!-- ko if: !question.isPanel -->\n            <!-- ko template: { name: 'survey-question', data: question, afterRender: $parent.panel.koQuestionAfterRender } --><!-- /ko -->\n            <!-- /ko -->\n        <!-- /ko -->\n    </div>\n    <!-- /ko -->\n</script>\n";

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "" + __webpack_require__(61) + "\n" + __webpack_require__(60) + "\n" + __webpack_require__(62) + "\n" + __webpack_require__(63) + "\n" + __webpack_require__(79) + "\n" + __webpack_require__(64) + "\n" + __webpack_require__(78) + "\n" + __webpack_require__(65) + "\n" + __webpack_require__(66) + "\n" + __webpack_require__(67) + "\n" + __webpack_require__(68) + "\n" + __webpack_require__(69) + "\n" + __webpack_require__(70) + "\n" + __webpack_require__(71) + "\n" + __webpack_require__(72) + "\n" + __webpack_require__(73) + "\n" + __webpack_require__(74) + "\n" + __webpack_require__(75) + "\n" + __webpack_require__(76) + "\n" + __webpack_require__(77) + "";

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = "<div style=\"position: fixed; bottom: 3px; right: 10px;\" data-bind=\"css: css.window.root\">\n    <div data-bind=\"css: css.window.header.root\">\n        <a href=\"#\" data-bind=\"click:doExpand\" style=\"width:100%\">\n            <span style=\"padding-right:10px\" data-bind=\"text:title, css: css.window.header.title\"></span>\n            <span aria-hidden=\"true\" data-bind=\"css: koExpandedCss\"></span>\n        </a>\n    </div>\n    <div data-bind=\"visible:koExpanded, css: css.window.body\">\n        <div id=\"windowSurveyJS\"></div>\n    </div>\n</div>";

/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__surveyStrings__ = __webpack_require__(3);
/* unused harmony export czechSurveyStrings */

var czechSurveyStrings = {
    pagePrevText: "Předchozí",
    pageNextText: "Další",
    completeText: "Hotovo",
    otherItemText: "Jiná odpověď (napište)",
    progressText: "Strana {0} z {1}",
    emptySurvey: "Průzkumu neobsahuje žádné otázky.",
    completingSurvey: "Děkujeme za vyplnění průzkumu!",
    loadingSurvey: "Probíhá načítání průzkumu...",
    optionsCaption: "Vyber...",
    requiredError: "Odpovězte prosím na otázku.",
    requiredInAllRowsError: "Odpovězte prosím na všechny otázky.",
    numericError: "V tomto poli lze zadat pouze čísla.",
    textMinLength: "Zadejte prosím alespoň {0} znaků.",
    textMaxLength: "Zadejte prosím méně než {0} znaků.",
    textMinMaxLength: "Zadejte prosím více než {0} a méně než {1} znaků.",
    minRowCountError: "Vyplňte prosím alespoň {0} řádků.",
    minSelectError: "Vyberte prosím alespoň {0} varianty.",
    maxSelectError: "Nevybírejte prosím více než {0} variant.",
    numericMinMax: "Odpověď '{0}' by mělo být větší nebo rovno {1} a menší nebo rovno {2}",
    numericMin: "Odpověď '{0}' by mělo být větší nebo rovno {1}",
    numericMax: "Odpověď '{0}' by mělo být menší nebo rovno {1}",
    invalidEmail: "Zadejte prosím platnou e-mailovou adresu.",
    urlRequestError: "Požadavek vrátil chybu '{0}'. {1}",
    urlGetChoicesError: "Požadavek nevrátil data nebo cesta je neplatná",
    exceedMaxSize: "Velikost souboru by neměla být větší než {0}.",
    otherRequiredError: "Zadejte prosím jinou hodnotu.",
    uploadingFile: "Váš soubor se nahrává. Zkuste to prosím za několik sekund.",
    addRow: "Přidat řádek",
    removeRow: "Odstranit"
};
__WEBPACK_IMPORTED_MODULE_0__surveyStrings__["a" /* surveyLocalization */].locales["cz"] = czechSurveyStrings;


/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__surveyStrings__ = __webpack_require__(3);
/* unused harmony export danishSurveyStrings */

var danishSurveyStrings = {
    pagePrevText: "Tilbage",
    pageNextText: "Videre",
    completeText: "Færdig",
    progressText: "Side {0} af {1}",
    emptySurvey: "Der er ingen synlige spørgsmål.",
    completingSurvey: "Mange tak for din besvarelse!",
    loadingSurvey: "Spørgeskemaet hentes fra serveren...",
    otherItemText: "Valgfrit svar...",
    optionsCaption: "Vælg...",
    requiredError: "Besvar venligst spørgsmålet.",
    numericError: "Angiv et tal.",
    textMinLength: "Angiv mindst {0} tegn.",
    minSelectError: "Vælg venligst mindst  {0} svarmulighed(er).",
    maxSelectError: "Vælg venligst færre {0} svarmuligheder(er).",
    numericMinMax: "'{0}' skal være lig med eller større end {1} og lig med eller mindre end {2}",
    numericMin: "'{0}' skal være lig med eller større end {1}",
    numericMax: "'{0}' skal være lig med eller mindre end {1}",
    invalidEmail: "Angiv venligst en gyldig e-mail adresse.",
    exceedMaxSize: "Filstørrelsen må ikke overstige {0}.",
    otherRequiredError: "Angiv en værdi for dit valgfrie svar."
};
__WEBPACK_IMPORTED_MODULE_0__surveyStrings__["a" /* surveyLocalization */].locales["da"] = danishSurveyStrings;


/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__surveyStrings__ = __webpack_require__(3);
/* unused harmony export dutchSurveyStrings */
//Created on behalf https://github.com/Frank13

var dutchSurveyStrings = {
    pagePrevText: "Vorige",
    pageNextText: "Volgende",
    completeText: "Afsluiten",
    otherItemText: "Andere",
    progressText: "Pagina {0} van {1}",
    emptySurvey: "Er is geen zichtbare pagina of vraag in deze vragenlijst",
    completingSurvey: "Bedankt om deze vragenlijst in te vullen",
    loadingSurvey: "De vragenlijst is aan het laden...",
    optionsCaption: "Kies...",
    requiredError: "Gelieve een antwoord in te vullen",
    numericError: "Het antwoord moet een getal zijn",
    textMinLength: "Gelieve minsten {0} karakters in te vullen.",
    minSelectError: "Gelieve minimum {0} antwoorden te selecteren.",
    maxSelectError: "Gelieve niet meer dan {0} antwoorden te selecteren.",
    numericMinMax: "Uw antwoord '{0}' moet groter of gelijk zijn aan {1} en kleiner of gelijk aan {2}",
    numericMin: "Uw antwoord '{0}' moet groter of gelijk zijn aan {1}",
    numericMax: "Uw antwoord '{0}' moet groter of gelijk zijn aan {1}",
    invalidEmail: "Gelieve een geldig e-mailadres in te vullen.",
    exceedMaxSize: "De grootte van het bestand mag niet groter zijn dan {0}.",
    otherRequiredError: "Gelieve het veld 'Andere' in te vullen"
};
__WEBPACK_IMPORTED_MODULE_0__surveyStrings__["a" /* surveyLocalization */].locales["nl"] = dutchSurveyStrings;


/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__surveyStrings__ = __webpack_require__(3);
/* unused harmony export finnishSurveyStrings */

var finnishSurveyStrings = {
    pagePrevText: "Edellinen",
    pageNextText: "Seuraava",
    completeText: "Valmis",
    otherItemText: "Muu (kuvaile)",
    progressText: "Sivu {0}/{1}",
    emptySurvey: "Tässä kyselyssä ei ole yhtäkään näkyvillä olevaa sivua tai kysymystä.",
    completingSurvey: "Kiitos kyselyyn vastaamisesta!",
    loadingSurvey: "Kyselyä ladataan palvelimelta...",
    optionsCaption: "Valitse...",
    requiredError: "Vastaa kysymykseen, kiitos.",
    numericError: "Arvon tulee olla numeerinen.",
    textMinLength: "Ole hyvä ja syötä vähintään {0} merkkiä.",
    minSelectError: "Ole hyvä ja valitse vähintään {0} vaihtoehtoa.",
    maxSelectError: "Ole hyvä ja valitse enintään {0} vaihtoehtoa.",
    numericMinMax: "'{0}' täytyy olla enemmän tai yhtä suuri kuin {1} ja vähemmän tai yhtä suuri kuin {2}",
    numericMin: "'{0}' täytyy olla enemmän tai yhtä suuri kuin {1}",
    numericMax: "'{0}' täytyy olla vähemmän tai yhtä suuri kuin {1}",
    invalidEmail: "Syötä validi sähköpostiosoite.",
    otherRequiredError: "Ole hyvä ja syötä \"Muu (kuvaile)\""
};
__WEBPACK_IMPORTED_MODULE_0__surveyStrings__["a" /* surveyLocalization */].locales["fi"] = finnishSurveyStrings;


/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__surveyStrings__ = __webpack_require__(3);
/* unused harmony export frenchSurveyStrings */
//Created on behalf https://github.com/Frank13

var frenchSurveyStrings = {
    pagePrevText: "Pr\u00e9c\u00e9dent",
    pageNextText: "Suivant",
    completeText: "Terminer",
    otherItemText: "Autre (pr\u00e9ciser)",
    progressText: "Page {0} sur {1}",
    emptySurvey: "Il n'y a ni page visible ni question visible dans ce questionnaire",
    completingSurvey: "Merci d'avoir r\u00e9pondu au questionnaire!",
    loadingSurvey: "Le questionnaire est en cours de chargement...",
    optionsCaption: "Choisissez...",
    requiredError: "La r\u00e9ponse \u00e0 cette question est obligatoire.",
    requiredInAllRowsError: "Toutes les lignes sont obligatoires",
    numericError: "La r\u00e9ponse doit \u00eatre un nombre.",
    textMinLength: "Merci d'entrer au moins {0} symboles.",
    minSelectError: "Merci de s\u00e9lectionner au moins {0}r\u00e9ponses.",
    maxSelectError: "Merci de s\u00e9lectionner au plus {0}r\u00e9ponses.",
    numericMinMax: "Votre r\u00e9ponse '{0}' doit \u00eatresup\u00e9rieure ou \u00e9gale \u00e0 {1} et inf\u00e9rieure ou\u00e9gale \u00e0 {2}",
    numericMin: "Votre r\u00e9ponse '{0}' doit \u00eatresup\u00e9rieure ou \u00e9gale \u00e0 {1}",
    numericMax: "Votre r\u00e9ponse '{0}' doit \u00eatreinf\u00e9rieure ou \u00e9gale \u00e0 {1}",
    invalidEmail: "Merci d'entrer une adresse mail valide.",
    exceedMaxSize: "La taille du fichier ne doit pas exc\u00e9der {0}.",
    otherRequiredError: "Merci de pr\u00e9ciser le champ 'Autre'."
};
__WEBPACK_IMPORTED_MODULE_0__surveyStrings__["a" /* surveyLocalization */].locales["fr"] = frenchSurveyStrings;


/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__surveyStrings__ = __webpack_require__(3);
/* unused harmony export germanSurveyStrings */

var germanSurveyStrings = {
    pagePrevText: "Zurück",
    pageNextText: "Weiter",
    completeText: "Fertig",
    progressText: "Seite {0} von {1}",
    emptySurvey: "Es gibt keine sichtbare Frage.",
    completingSurvey: "Vielen Dank für das Ausfüllen des Fragebogens!",
    loadingSurvey: "Der Fragebogen wird vom Server geladen...",
    otherItemText: "Benutzerdefinierte Antwort...",
    optionsCaption: "Wählen...",
    requiredError: "Bitte antworten Sie auf die Frage.",
    numericError: "Der Wert sollte eine Zahl sein.",
    textMinLength: "Bitte geben Sie mindestens {0} Symbole.",
    minSelectError: "Bitte wählen Sie mindestens {0} Varianten.",
    maxSelectError: "Bitte wählen Sie nicht mehr als {0} Varianten.",
    numericMinMax: "'{0}' sollte gleich oder größer sein als {1} und gleich oder kleiner als {2}",
    numericMin: "'{0}' sollte gleich oder größer sein als {1}",
    numericMax: "'{0}' sollte gleich oder kleiner als {1}",
    invalidEmail: "Bitte geben Sie eine gültige Email-Adresse ein.",
    exceedMaxSize: "Die Dateigröße soll nicht mehr als {0}.",
    otherRequiredError: "Bitte geben Sie einen Wert für Ihre benutzerdefinierte Antwort ein."
};
__WEBPACK_IMPORTED_MODULE_0__surveyStrings__["a" /* surveyLocalization */].locales["de"] = germanSurveyStrings;


/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__surveyStrings__ = __webpack_require__(3);
/* unused harmony export greekSurveyStrings */
//Created by https://github.com/agelospanagiotakis

var greekSurveyStrings = {
    pagePrevText: "Προηγούμενο",
    pageNextText: "Επόμενο",
    completeText: "Ολοκλήρωση",
    otherItemText: "Άλλο (παρακαλώ διευκρινίστε)",
    progressText: "Σελίδα {0} από {1}",
    emptySurvey: "Δεν υπάρχει καμία ορατή σελίδα ή ορατή ερώτηση σε αυτό το ερωτηματολόγιο.",
    completingSurvey: "Ευχαριστούμε για την συμπλήρωση αυτου του ερωτηματολογίου!",
    loadingSurvey: "Το ερωτηματολόγιο φορτώνεται απο το διακομιστή...",
    optionsCaption: "Επιλέξτε...",
    requiredError: "Παρακαλώ απαντήστε στην ερώτηση.",
    requiredInAllRowsError: "Παρακαλώ απαντήστε στις ερωτήσεις σε όλες τις γραμμές.",
    numericError: "Η τιμή πρέπει να είναι αριθμιτική.",
    textMinLength: "Παρακαλώ συμπληρώστε τουλάχιστον {0} σύμβολα.",
    minRowCountError: "Παρακαλώ συμπληρώστε τουλάχιστον {0} γραμμές.",
    minSelectError: "Παρακαλώ επιλέξτε τουλάχιστον {0} παραλλαγές.",
    maxSelectError: "Παρακαλώ επιλέξτε όχι παραπάνω απο {0} παραλλαγές.",
    numericMinMax: "Το '{0}' θα πρέπει να είναι ίσο ή μεγαλύτερο απο το {1} και ίσο ή μικρότερο απο το {2}",
    numericMin: "Το '{0}' πρέπει να είναι μεγαλύτερο ή ισο με το {1}",
    numericMax: "Το '{0}' πρέπει να είναι μικρότερο ή ίσο απο το {1}",
    invalidEmail: "Παρακαλώ δώστε μια αποδεκτή διεύθυνση e-mail.",
    urlRequestError: "Η αίτηση επέστρεψε σφάλμα '{0}'. {1}",
    urlGetChoicesError: "Η αίτηση επέστρεψε κενά δεδομένα ή η ιδότητα 'μονοπάτι/path' είναι εσφαλέμένη",
    exceedMaxSize: "Το μέγεθος δεν μπορεί να υπερβένει τα {0}.",
    otherRequiredError: "Παρακαλώ συμπληρώστε την τιμή για το πεδίο 'άλλο'.",
    uploadingFile: "Το αρχείο σας ανεβαίνει. Παρακαλώ περιμένετε καποια δευτερόλεπτα και δοκιμάστε ξανά.",
    addRow: "Προσθήκη γραμμής",
    removeRow: "Αφαίρεση"
};
__WEBPACK_IMPORTED_MODULE_0__surveyStrings__["a" /* surveyLocalization */].locales["gr"] = greekSurveyStrings;


/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__surveyStrings__ = __webpack_require__(3);
/* unused harmony export polishSurveyStrings */

var polishSurveyStrings = {
    pagePrevText: "Wstecz",
    pageNextText: "Dalej",
    completeText: "Gotowe",
    otherItemText: "Inna odpowiedź (wpisz)",
    progressText: "Strona {0} z {1}",
    emptySurvey: "Nie ma widocznych pytań.",
    completingSurvey: "Dziękujemy za wypełnienie ankiety!",
    loadingSurvey: "Trwa wczytywanie ankiety...",
    optionsCaption: "Wybierz...",
    requiredError: "Proszę odpowiedzieć na to pytanie.",
    requiredInAllRowsError: "Proszę odpowiedzieć na wszystkie pytania.",
    numericError: "W tym polu można wpisać tylko liczby.",
    textMinLength: "Proszę wpisać co najmniej {0} znaków.",
    textMaxLength: "Proszę wpisać mniej niż {0} znaków.",
    textMinMaxLength: "Proszę wpisać więcej niż {0} i mniej niż {1} znaków.",
    minRowCountError: "Proszę uzupełnić przynajmniej {0} wierszy.",
    minSelectError: "Proszę wybrać co najmniej {0} pozycji.",
    maxSelectError: "Proszę wybrać nie więcej niż {0} pozycji.",
    numericMinMax: "Odpowiedź '{0}' powinna być większa lub równa {1} oraz mniejsza lub równa {2}",
    numericMin: "Odpowiedź '{0}' powinna być większa lub równa {1}",
    numericMax: "Odpowiedź '{0}' powinna być mniejsza lub równa {1}",
    invalidEmail: "Proszę podać prawidłowy adres email.",
    urlRequestError: "Żądanie zwróciło błąd '{0}'. {1}",
    urlGetChoicesError: "Żądanie nie zwróciło danych albo ścieżka jest nieprawidłowa",
    exceedMaxSize: "Rozmiar przesłanego pliku nie może przekraczać {0}.",
    otherRequiredError: "Proszę podać inną odpowiedź.",
    uploadingFile: "Trwa przenoszenie Twojego pliku, proszę spróbować ponownie za kilka sekund.",
    addRow: "Dodaj wiersz",
    removeRow: "Usuń"
};
__WEBPACK_IMPORTED_MODULE_0__surveyStrings__["a" /* surveyLocalization */].locales["pl"] = polishSurveyStrings;


/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__surveyStrings__ = __webpack_require__(3);
/* unused harmony export romanianSurveyStrings */

var romanianSurveyStrings = {
    pagePrevText: "Precedent",
    pageNextText: "Următor",
    completeText: "Finalizare",
    otherItemText: "Altul(precizaţi)",
    progressText: "Pagina {0} din {1}",
    emptySurvey: "Nu sunt întrebări pentru acest chestionar",
    completingSurvey: "Vă mulţumim pentru timpul acordat!",
    loadingSurvey: "Chestionarul se încarcă...",
    optionsCaption: "Alegeţi...",
    requiredError: "Răspunsul la această întrebare este obligatoriu.",
    requiredInAllRowsError: "Toate răspunsurile sunt obligatorii",
    numericError: "Răspunsul trebuie să fie numeric.",
    textMinLength: "Trebuie să introduci minim {0} caractere.",
    minSelectError: "Trebuie să selectezi minim {0} opţiuni.",
    maxSelectError: "Trebuie să selectezi maxim {0} opţiuni.",
    numericMinMax: "Răspunsul '{0}' trebuie să fie mai mare sau egal ca {1} şî mai mic sau egal cu {2}",
    numericMin: "Răspunsul '{0}' trebuie să fie mai mare sau egal ca {1}",
    numericMax: "Răspunsul '{0}' trebuie să fie mai mic sau egal ca {1}",
    invalidEmail: "Trebuie să introduceţi o adresa de email validă.",
    exceedMaxSize: "Dimensiunea fişierului nu trebuie să depăşească {0}.",
    otherRequiredError: "Trebuie să completezi câmpul 'Altul'."
};
__WEBPACK_IMPORTED_MODULE_0__surveyStrings__["a" /* surveyLocalization */].locales["ro"] = romanianSurveyStrings;


/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__surveyStrings__ = __webpack_require__(3);
/* unused harmony export russianSurveyStrings */

var russianSurveyStrings = {
    pagePrevText: "Назад",
    pageNextText: "Далее",
    completeText: "Готово",
    progressText: "Страница {0} из {1}",
    emptySurvey: "Нет ни одного вопроса.",
    completingSurvey: "Благодарим Вас за заполнение анкеты!",
    loadingSurvey: "Загрузка с сервера...",
    otherItemText: "Другое (пожалуйста, опишите)",
    optionsCaption: "Выбрать...",
    requiredError: "Пожалуйста, ответьте на вопрос.",
    numericError: "Ответ должен быть числом.",
    textMinLength: "Пожалуйста, введите хотя бы {0} символов.",
    minSelectError: "Пожалуйста, выберите хотя бы {0} вариантов.",
    maxSelectError: "Пожалуйста, выберите не более {0} вариантов.",
    numericMinMax: "'{0}' должно быть равным или больше, чем {1}, и равным или меньше, чем {2}",
    numericMin: "'{0}' должно быть равным или больше, чем {1}",
    numericMax: "'{0}' должно быть равным или меньше, чем {1}",
    invalidEmail: "Пожалуйста, введите действительный адрес электронной почты.",
    otherRequiredError: "Пожалуйста, введите данные в поле \"Другое\""
};
__WEBPACK_IMPORTED_MODULE_0__surveyStrings__["a" /* surveyLocalization */].locales["ru"] = russianSurveyStrings;


/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__surveyStrings__ = __webpack_require__(3);
/* unused harmony export swedishSurveyStrings */
//Create by Mattias Asplund

var swedishSurveyStrings = {
    pagePrevText: "Föregående",
    pageNextText: "Nästa",
    completeText: "Färdig",
    otherItemText: "Annat (beskriv)",
    progressText: "Sida {0} av {1}",
    emptySurvey: "Det finns ingen synlig sida eller fråga i enkäten.",
    completingSurvey: "Tack för att du genomfört enkäten!!",
    loadingSurvey: "Enkäten laddas...",
    optionsCaption: "Välj...",
    requiredError: "Var vänlig besvara frågan.",
    requiredInAllRowsError: "Var vänlig besvara frågorna på alla rader.",
    numericError: "Värdet ska vara numeriskt.",
    textMinLength: "Var vänlig ange minst {0} tecken.",
    minRowCountError: "Var vänlig fyll i minst {0} rader.",
    minSelectError: "Var vänlig välj åtminstone {0} varianter.",
    maxSelectError: "Var vänlig välj inte fler än {0} varianter.",
    numericMinMax: "'{0}' ska vara lika med eller mer än {1} samt lika med eller mindre än {2}",
    numericMin: "'{0}' ska vara lika med eller mer än {1}",
    numericMax: "'{0}' ska vara lika med eller mindre än {1}",
    invalidEmail: "Var vänlig ange en korrekt e-postadress.",
    urlRequestError: "Förfrågan returnerade felet '{0}'. {1}",
    urlGetChoicesError: "Antingen returnerade förfrågan ingen data eller så är egenskapen 'path' inte korrekt",
    exceedMaxSize: "Filstorleken får ej överstiga {0}.",
    otherRequiredError: "Var vänlig ange det andra värdet.",
    uploadingFile: "Din fil laddas upp. Var vänlig vänta några sekunder och försök sedan igen.",
    addRow: "Lägg till rad",
    removeRow: "Ta bort"
};
__WEBPACK_IMPORTED_MODULE_0__surveyStrings__["a" /* surveyLocalization */].locales["sv"] = swedishSurveyStrings;


/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__surveyStrings__ = __webpack_require__(3);
/* unused harmony export turkishSurveyStrings */

var turkishSurveyStrings = {
    pagePrevText: "Geri",
    pageNextText: "İleri",
    completeText: "Anketi Tamamla",
    otherItemText: "Diğer (açıklayınız)",
    progressText: "Sayfa {0} / {1}",
    emptySurvey: "Ankette görüntülenecek sayfa ya da soru mevcut değil.",
    completingSurvey: "Anketimizi tamamladığınız için teşekkür ederiz.",
    loadingSurvey: "Anket sunucudan yükleniyor ...",
    optionsCaption: "Seçiniz ...",
    requiredError: "Lütfen soruya cevap veriniz",
    numericError: "Girilen değer numerik olmalıdır",
    textMinLength: "En az {0} sembol giriniz.",
    minRowCountError: "Lütfen en az {0} satırı doldurun.",
    minSelectError: "Lütfen en az {0} seçeneği seçiniz.",
    maxSelectError: "Lütfen {0} adetten fazla seçmeyiniz.",
    numericMinMax: "The '{0}' should be equal or more than {1} and equal or less than {2}",
    numericMin: "'{0}' değeri {1} değerine eşit veya büyük olmalıdır",
    numericMax: "'{0}' değeri {1} değerine eşit ya da küçük olmalıdır.",
    invalidEmail: "Lütfen geçerli bir eposta adresi giriniz.",
    urlRequestError: "Talebi şu hatayı döndü '{0}'. {1}",
    urlGetChoicesError: "Talep herhangi bir veri dönmedi ya da 'path' özelliği hatalı.",
    exceedMaxSize: "Dosya boyutu {0} değerini geçemez.",
    otherRequiredError: "Lütfen diğer değerleri giriniz.",
    uploadingFile: "Dosyanız yükleniyor. LÜtfen birkaç saniye bekleyin ve tekrar deneyin.",
    addRow: "Satır Ekle",
    removeRow: "Kaldır"
};
__WEBPACK_IMPORTED_MODULE_0__surveyStrings__["a" /* surveyLocalization */].locales["tr"] = turkishSurveyStrings;


/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jsonobject__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Trigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyTrigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SurveyTriggerVisible; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SurveyTriggerComplete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SurveyTriggerSetValue; });



var Trigger = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](Trigger, _super);
    function Trigger() {
        var _this = _super.call(this) || this;
        _this.opValue = "equal";
        return _this;
    }
    Object.defineProperty(Trigger, "operators", {
        get: function () {
            if (Trigger.operatorsValue != null)
                return Trigger.operatorsValue;
            Trigger.operatorsValue = {
                empty: function (value, expectedValue) { return !value; },
                notempty: function (value, expectedValue) { return !(!value); },
                equal: function (value, expectedValue) { return value == expectedValue; },
                notequal: function (value, expectedValue) { return value != expectedValue; },
                contains: function (value, expectedValue) { return value && value["indexOf"] && value.indexOf(expectedValue) > -1; },
                notcontains: function (value, expectedValue) { return !value || !value["indexOf"] || value.indexOf(expectedValue) == -1; },
                greater: function (value, expectedValue) { return value > expectedValue; },
                less: function (value, expectedValue) { return value < expectedValue; },
                greaterorequal: function (value, expectedValue) { return value >= expectedValue; },
                lessorequal: function (value, expectedValue) { return value <= expectedValue; }
            };
            return Trigger.operatorsValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Trigger.prototype, "operator", {
        get: function () { return this.opValue; },
        set: function (value) {
            if (!value)
                return;
            value = value.toLowerCase();
            if (!Trigger.operators[value])
                return;
            this.opValue = value;
        },
        enumerable: true,
        configurable: true
    });
    Trigger.prototype.check = function (value) {
        if (Trigger.operators[this.operator](value, this.value)) {
            this.onSuccess();
        }
        else {
            this.onFailure();
        }
    };
    Trigger.prototype.onSuccess = function () { };
    Trigger.prototype.onFailure = function () { };
    return Trigger;
}(__WEBPACK_IMPORTED_MODULE_1__base__["a" /* Base */]));

Trigger.operatorsValue = null;
var SurveyTrigger = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](SurveyTrigger, _super);
    function SurveyTrigger() {
        var _this = _super.call(this) || this;
        _this.owner = null;
        return _this;
    }
    SurveyTrigger.prototype.setOwner = function (owner) {
        this.owner = owner;
    };
    Object.defineProperty(SurveyTrigger.prototype, "isOnNextPage", {
        get: function () { return false; },
        enumerable: true,
        configurable: true
    });
    return SurveyTrigger;
}(Trigger));

var SurveyTriggerVisible = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](SurveyTriggerVisible, _super);
    function SurveyTriggerVisible() {
        var _this = _super.call(this) || this;
        _this.pages = [];
        _this.questions = [];
        return _this;
    }
    SurveyTriggerVisible.prototype.getType = function () { return "visibletrigger"; };
    SurveyTriggerVisible.prototype.onSuccess = function () { this.onTrigger(this.onItemSuccess); };
    SurveyTriggerVisible.prototype.onFailure = function () { this.onTrigger(this.onItemFailure); };
    SurveyTriggerVisible.prototype.onTrigger = function (func) {
        if (!this.owner)
            return;
        var objects = this.owner.getObjects(this.pages, this.questions);
        for (var i = 0; i < objects.length; i++) {
            func(objects[i]);
        }
    };
    SurveyTriggerVisible.prototype.onItemSuccess = function (item) { item.visible = true; };
    SurveyTriggerVisible.prototype.onItemFailure = function (item) { item.visible = false; };
    return SurveyTriggerVisible;
}(SurveyTrigger));

var SurveyTriggerComplete = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](SurveyTriggerComplete, _super);
    function SurveyTriggerComplete() {
        return _super.call(this) || this;
    }
    SurveyTriggerComplete.prototype.getType = function () { return "completetrigger"; };
    Object.defineProperty(SurveyTriggerComplete.prototype, "isOnNextPage", {
        get: function () { return true; },
        enumerable: true,
        configurable: true
    });
    SurveyTriggerComplete.prototype.onSuccess = function () { if (this.owner)
        this.owner.doComplete(); };
    return SurveyTriggerComplete;
}(SurveyTrigger));

var SurveyTriggerSetValue = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __extends */](SurveyTriggerSetValue, _super);
    function SurveyTriggerSetValue() {
        return _super.call(this) || this;
    }
    SurveyTriggerSetValue.prototype.getType = function () { return "setvaluetrigger"; };
    SurveyTriggerSetValue.prototype.onSuccess = function () {
        if (!this.setToName || !this.owner)
            return;
        this.owner.setTriggerValue(this.setToName, this.setValue, this.isVariable);
    };
    return SurveyTriggerSetValue;
}(SurveyTrigger));

__WEBPACK_IMPORTED_MODULE_2__jsonobject__["a" /* JsonObject */].metaData.addClass("trigger", ["operator", "!value"]);
__WEBPACK_IMPORTED_MODULE_2__jsonobject__["a" /* JsonObject */].metaData.addClass("surveytrigger", ["!name"], null, "trigger");
__WEBPACK_IMPORTED_MODULE_2__jsonobject__["a" /* JsonObject */].metaData.addClass("visibletrigger", ["pages", "questions"], function () { return new SurveyTriggerVisible(); }, "surveytrigger");
__WEBPACK_IMPORTED_MODULE_2__jsonobject__["a" /* JsonObject */].metaData.addClass("completetrigger", [], function () { return new SurveyTriggerComplete(); }, "surveytrigger");
__WEBPACK_IMPORTED_MODULE_2__jsonobject__["a" /* JsonObject */].metaData.addClass("setvaluetrigger", ["!setToName", "setValue", "isVariable:boolean"], function () { return new SurveyTriggerSetValue(); }, "surveytrigger");


/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__chunks_model__ = __webpack_require__(46);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Version", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "AnswerCountValidator", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "EmailValidator", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "NumericValidator", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "RegexValidator", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "SurveyValidator", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "TextValidator", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["g"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ValidatorResult", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["h"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ValidatorRunner", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["i"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Base", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["j"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Event", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["k"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ItemValue", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["l"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "SurveyError", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["m"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "LocalizableString", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["n"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ChoicesRestfull", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["o"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Condition", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["p"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ConditionNode", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["q"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ConditionRunner", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["r"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ConditionsParser", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["s"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ProcessValue", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["t"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "CustomError", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["u"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ExceedSizeError", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["v"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "RequreNumericError", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["w"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "JsonError", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["x"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "JsonIncorrectTypeError", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["y"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "JsonMetadata", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["z"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "JsonMetadataClass", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["A"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "JsonMissingTypeError", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["B"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "JsonMissingTypeErrorBase", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["C"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "JsonObject", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["D"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "JsonObjectProperty", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["E"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "JsonRequiredPropertyError", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["F"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "JsonUnknownPropertyError", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["G"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MatrixDropdownCell", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["H"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MatrixDropdownColumn", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["I"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MatrixDropdownRowModelBase", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["J"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "QuestionMatrixDropdownModelBase", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["K"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MatrixDropdownRowModel", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["L"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "QuestionMatrixDropdownModel", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["M"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MatrixDynamicRowModel", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["N"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "QuestionMatrixDynamicModel", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["O"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MatrixRowModel", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["P"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "QuestionMatrixModel", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["Q"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MultipleTextItemModel", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["R"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "QuestionMultipleTextModel", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["S"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "PanelModel", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["T"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "PanelModelBase", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["U"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "QuestionRowModel", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["V"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "PageModel", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["W"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Question", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["X"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "QuestionBase", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["Y"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "QuestionCheckboxBase", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["Z"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "QuestionSelectBase", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["_0"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "QuestionCheckboxModel", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["_1"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "QuestionCommentModel", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["_2"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "QuestionDropdownModel", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["_3"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "QuestionFactory", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["_4"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ElementFactory", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["_5"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "QuestionFileModel", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["_6"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "QuestionHtmlModel", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["_7"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "QuestionRadiogroupModel", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["_8"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "QuestionRatingModel", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["_9"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "QuestionTextModel", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["_10"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "SurveyModel", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["_11"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "SurveyTrigger", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["_12"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "SurveyTriggerComplete", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["_13"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "SurveyTriggerSetValue", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["_14"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "SurveyTriggerVisible", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["_15"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Trigger", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["_16"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "SurveyWindowModel", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["_17"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "TextPreProcessor", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["_18"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "dxSurveyService", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["_19"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "surveyLocalization", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["_20"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "surveyStrings", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["_21"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "QuestionCustomWidget", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["_22"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "CustomWidgetCollection", function() { return __WEBPACK_IMPORTED_MODULE_0__chunks_model__["_23"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chunks_localization__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chunks_helpers__ = __webpack_require__(0);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __WEBPACK_IMPORTED_MODULE_2__chunks_helpers__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __WEBPACK_IMPORTED_MODULE_2__chunks_helpers__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __WEBPACK_IMPORTED_MODULE_2__chunks_helpers__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__defaultCss_cssstandard__ = __webpack_require__(13);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "defaultStandardCss", function() { return __WEBPACK_IMPORTED_MODULE_3__defaultCss_cssstandard__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__defaultCss_cssbootstrap__ = __webpack_require__(44);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "defaultBootstrapCss", function() { return __WEBPACK_IMPORTED_MODULE_4__defaultCss_cssbootstrap__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__main_scss__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__main_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__main_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__knockout_kosurvey__ = __webpack_require__(11);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Survey", function() { return __WEBPACK_IMPORTED_MODULE_6__knockout_kosurvey__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Model", function() { return __WEBPACK_IMPORTED_MODULE_6__knockout_kosurvey__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__knockout_kopage__ = __webpack_require__(26);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionRow", function() { return __WEBPACK_IMPORTED_MODULE_7__knockout_kopage__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return __WEBPACK_IMPORTED_MODULE_7__knockout_kopage__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Panel", function() { return __WEBPACK_IMPORTED_MODULE_7__knockout_kopage__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__knockout_koquestionbase__ = __webpack_require__(14);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionImplementorBase", function() { return __WEBPACK_IMPORTED_MODULE_8__knockout_koquestionbase__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__knockout_koquestion__ = __webpack_require__(6);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionImplementor", function() { return __WEBPACK_IMPORTED_MODULE_9__knockout_koquestion__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__knockout_koquestion_baseselect__ = __webpack_require__(9);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionSelectBaseImplementor", function() { return __WEBPACK_IMPORTED_MODULE_10__knockout_koquestion_baseselect__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionCheckboxBaseImplementor", function() { return __WEBPACK_IMPORTED_MODULE_10__knockout_koquestion_baseselect__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__knockout_koquestion_checkbox__ = __webpack_require__(48);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionCheckbox", function() { return __WEBPACK_IMPORTED_MODULE_11__knockout_koquestion_checkbox__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__knockout_koquestion_comment__ = __webpack_require__(49);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionComment", function() { return __WEBPACK_IMPORTED_MODULE_12__knockout_koquestion_comment__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__knockout_koquestion_dropdown__ = __webpack_require__(50);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionDropdown", function() { return __WEBPACK_IMPORTED_MODULE_13__knockout_koquestion_dropdown__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__knockout_koquestion_file__ = __webpack_require__(51);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionFile", function() { return __WEBPACK_IMPORTED_MODULE_14__knockout_koquestion_file__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__knockout_koquestion_html__ = __webpack_require__(52);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionHtml", function() { return __WEBPACK_IMPORTED_MODULE_15__knockout_koquestion_html__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__knockout_koquestion_matrix__ = __webpack_require__(53);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MatrixRow", function() { return __WEBPACK_IMPORTED_MODULE_16__knockout_koquestion_matrix__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionMatrix", function() { return __WEBPACK_IMPORTED_MODULE_16__knockout_koquestion_matrix__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__knockout_koquestion_matrixdropdown__ = __webpack_require__(54);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionMatrixDropdown", function() { return __WEBPACK_IMPORTED_MODULE_17__knockout_koquestion_matrixdropdown__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__knockout_koquestion_matrixdynamic__ = __webpack_require__(55);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionMatrixDynamicImplementor", function() { return __WEBPACK_IMPORTED_MODULE_18__knockout_koquestion_matrixdynamic__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionMatrixDynamic", function() { return __WEBPACK_IMPORTED_MODULE_18__knockout_koquestion_matrixdynamic__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__knockout_koquestion_multipletext__ = __webpack_require__(56);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MultipleTextItem", function() { return __WEBPACK_IMPORTED_MODULE_19__knockout_koquestion_multipletext__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionMultipleTextImplementor", function() { return __WEBPACK_IMPORTED_MODULE_19__knockout_koquestion_multipletext__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionMultipleText", function() { return __WEBPACK_IMPORTED_MODULE_19__knockout_koquestion_multipletext__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__knockout_koquestion_radiogroup__ = __webpack_require__(57);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionRadiogroup", function() { return __WEBPACK_IMPORTED_MODULE_20__knockout_koquestion_radiogroup__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__knockout_koquestion_rating__ = __webpack_require__(58);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionRating", function() { return __WEBPACK_IMPORTED_MODULE_21__knockout_koquestion_rating__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__knockout_koquestion_text__ = __webpack_require__(59);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionText", function() { return __WEBPACK_IMPORTED_MODULE_22__knockout_koquestion_text__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__knockout_koSurveyWindow__ = __webpack_require__(47);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyWindow", function() { return __WEBPACK_IMPORTED_MODULE_23__knockout_koSurveyWindow__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__knockout_templateText__ = __webpack_require__(27);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyTemplateText", function() { return __WEBPACK_IMPORTED_MODULE_24__knockout_templateText__["a"]; });
// model

// localization

// helpers

// css standard

// css bootstrap

// styles

// knockout
 // TODO need to remove someday




















//Uncomment to include the "date" question type.
//export {QuestionDate} from "../plugins/knockout/koquestion_date"; 


/***/ })
/******/ ]);
});