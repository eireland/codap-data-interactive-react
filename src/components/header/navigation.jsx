import React from "react";
import { getCategories } from "../../utils/util";
import "./navigation.css"

export const NavigationTabs = (props) => {
  const categories = getCategories(props.plugins);
  const categoryTooltip = [{ category: "Partners", tooltip: "Plugins developed with other project partners" },
                           { category: "Utilities", tooltip: "Plugins developed to help developers" },
                           { category: "Data Games", tooltip: "Plugins developed for Data Games project" },
                           { category: "Data Worlds", tooltip: "Plugins developed for Data World project" }
                          ];

  return (
    <>
      <div className="navigationTabs">
        {categories.map((category, index) => {
          const tip = (categoryTooltip.filter(c => c.category === category))[0];
          return (
            <div key={`${index}`} className={`tab ${category} ${props.categorySelected === category ? "selected" : ""}`} value={category}
              onClick={() => props.handleCategorySelect(category)}>
              {category}
              {tip && <span className="tooltipText">{tip.tooltip}</span>}
            </div>
          )
        }
        )}
      </div>
    </>
  );
}
