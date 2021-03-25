import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { getCategories } from "../../utils/util";
import "./navigation.css"

export class NavigationTabs extends React.PureComponent {
  render() {
    const categories = getCategories(this.props.plugins);
    return (
      <>
        <div className="navigationTabs">
          {/* <Tabs>
          <TabList> */}
          {categories.map((category, index) =>
            <div key={`${index}`} className={`tab ${category}`} value={category} onClick={(e) => {
              console.log("NavigationTab: ", e.target.value);
              this.props.handleCategorySelect(e.target.value)
            }
            }>
              {category}
            </div>
          )}
          {/* </TabList>
        </Tabs> */}
        </div>
      </>
    );
  }
}
