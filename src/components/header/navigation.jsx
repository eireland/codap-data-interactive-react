import React from 'react';
import "./navigation.css"

export class NavigationTabs extends React.PureComponent {
  render() {
    const categories = this.getCategories(this.props.plugins);
    return (
      <div className="navigationTabs">
        {categories.map((category, index) =>
          <button key={`${index}`} className={`tab section${category}Tab`} onClick={() => this.handleCategorySelect(category)}>
            {category}
          </button>
        )}
      </div>
    );
  }

  handleCategorySelect(category) {
    // alert(`clicked on ${category}`);
  }

  getCategories() {
    let categoryArray = [];
    this.props.plugins.map(plugin => {
      plugin.categories.forEach(category => {
        if (!categoryArray.includes(category)) {
          categoryArray.push(category)
        }
      })
    })
    return categoryArray;
  }
}
