import React from 'react';
import "./footer.css"

export class Footer extends React.Component {

  render() {
    return (
      <div className="footer">
        <div id="cc">
            a product of
            <div className="cc-logo">
              <a href="https://concord.org/" title="The Concord Consortium - Revolutionary digital learning for science, math, and engineering"><img src="http://codap.concord.org/_assets/img/cc-logo.png" alt="The Concord Consortium" />
              </a>
            </div>
        </div>
      </div>
    );
  }
}