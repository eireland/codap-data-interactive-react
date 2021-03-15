import React from "react";
import DOMPurify from "dompurify";
import parse from "html-react-parser";

import "./card.css"

export class Card extends React.PureComponent{
  constructor(props){
    super();
  }

  render(){
    let { plugin } = this.props;
    let categoryClassName = plugin.categories[0].replace(" ","-");
    let cardClassNames = `card ${categoryClassName}`
    return (
      <div className={cardClassNames}>
        {this.renderPluginTitle()}
        <p className="pluginDescription">{this.renderHTML(plugin.description)}</p>
        <a className="listing-link" href={this.cleanPath()} target="_blank" rel="noopener noreferrer">
          Embeddable Link
        </a>
    </div>
    );
  }

  renderPluginTitle() {
    let { plugin } = this.props;
    let codapUrl = "http://codap.concord.org/releases/latest/";
    let pluginPath = "";
    let urlRoot = window.location.origin+window.location.pathname;
    if (plugin.path.match(/^http/i)) {
      pluginPath = plugin.path;
    }
    else {
      urlRoot=urlRoot.replace(/index.html$/, '');
      pluginPath = urlRoot+plugin.path;
    }
    if (codapUrl.match(/^https/i) && !pluginPath.match(/^https/i)) {
      pluginPath=pluginPath.replace(/http/i,'https');
    }

    if (pluginPath.match(/^https/i) && !codapUrl.match(/^https/i)) {
      codapUrl=codapUrl.replace(/http/i,'https');
    }
    
    return (
      <a href={`${codapUrl}?di=${pluginPath}`} className="pluginTitle" target="_blank" rel="noopener noreferrer">
        {plugin.title}
      </a>
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

