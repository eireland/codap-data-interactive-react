import React from "react";
import DOMPurify from "dompurify";
import parse from "html-react-parser";

import "./card.css"

export class Card extends React.PureComponent{
  constructor(props){
    super();
  }

  render(){
    return (
      <div className="card">
        <p className="pluginTitle">{this.props.plugin.title}</p>
        <p className="pluginDescription">{this.renderHTML(this.props.plugin.description)}</p>
        <a className="listing-link" href={this.cleanPath()}>Embeddable Link</a>
    </div>
    );
  }

  renderHTML(description) {
    return parse(DOMPurify.sanitize(description || ""));
  }

  cleanPath() {
    const { plugin } = this.props;
    let path = '';
    let url_root=window.location.origin+window.location.pathname;
    let url="https://codap.concord.org/app/"

    if (plugin.path.match(/^http/i)) {
      path = plugin.path;
    }
    else {
      url_root = url_root.replace(/index.html$/, '');
      path = url_root + plugin.path;
    }

    if (url.match(/^https/i) && !path.match(/^https/i)) {
      path = path.replace(/http/i, 'https');
    }

    if (path.match(/^https/i) && !url.match(/^https/i)) {
      url = url.replace(/http/i, 'https');
    }
    return path;
  }
}

