import React from "react";
import { getCategories } from "../../utils/util";
import "./navigation.css"

export const NavigationTabs = (props) => {
  const categories = getCategories(props.plugins);
  console.log(props.categorySelected);
  return (
    <>
      <div className="navigationTabs">
        {categories.map((category, index) =>
          <div key={`${index}`} className={`tab ${category} ${props.categorySelected === category ? "selected" : ""}`} value={category}
            onClick={()=> props.handleCategorySelect(category)}>
            {category}
          </div>
        )}
      </div>
    </>
  );
}
