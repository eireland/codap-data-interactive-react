import React from 'react';
import "./header.css"
import { NavigationTabs } from "./navigation";

export class Header extends React.Component {
  render() {
    return (
      <div className="header">
        {this.renderHeaderTitle()}
        <NavigationTabs plugins={this.props.plugins} categorySelected={this.props.categorySelected} handleCategorySelect={this.props.handleCategorySelect} />
      </div>
    );
  }

  renderHeaderTitle() {
    return (
      <div className="headerTitle">
        <div className="headerLeft">
        <a href="https://codap.concord.org/" title="CODAP Project" target="_blank" rel="noopener noreferrer">
          <img src="https://codap.concord.org/wp-content/themes/cc/img/codap-logo.png" className="codap-logo" alt="Common Online Data Analysis Program" />
        </a>
        </div>
        <div className="headerCenter">
          <span className="title">CODAP Data Interactive Plugins</span>
        </div>
      </div>

    )
  }
}