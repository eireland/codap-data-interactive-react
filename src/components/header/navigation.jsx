import React from "react";
import { getCategories } from "../../utils/util";
import "./navigation.css"

export const NavigationTabs = (props) => {
  const categories = getCategories(props.plugins);
  const categoryTooltip = [
                            "Plugins developed with other project partners",
                            "Plugins developed to help developers",
                            "Plugins developed for Data Games project",
                            "Plugins developed for Data World project"
                          ]
  return (
    <>
      <div className="navigationTabs">
        {categories.map((category, index) =>
          <div key={`${index}`} className={`tab ${category} ${props.categorySelected === category ? "selected" : ""}`} value={category}
            onClick={()=> props.handleCategorySelect(category)}>
            {category}
            <div className="tabTip">
              <span className="tooltipText">{categoryTooltip[index]}</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
