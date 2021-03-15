import React from 'react';
import "./header.css"

export class Header extends React.Component {

  render() {
    return (
      <div className="header">
          <a href="https://codap.concord.org/" title="CODAP Project" target="_blank" rel="noopener noreferrer">
            <img src="https://codap.concord.org/wp-content/themes/cc/img/codap-logo.png" className="codap-logo" alt="Common Online Data Analysis Program" />
          </a>
          <div className="header-title">
            <span>CODAP Data Interactive Plugins</span>
          </div>
      </div>
    );
  }
}