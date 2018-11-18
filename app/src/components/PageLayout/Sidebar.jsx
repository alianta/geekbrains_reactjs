import React, { Component } from "react";

import "./Slidebar.css";

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.slidebarLinks = ["Link1", "Link2","Link3","Link4","Link5"];
      }
  render() {
    return (
          <menu class="col-1 sidebar no-margin align-items-center bg-secondary text-white m-2">
            <nav class="align-items-center">
              <ul class="nav nav-pills flex-column float-left slidebar-links">
                {this.slidebarLinks.map((slidebarLink, slidebarLinkIndex) => {
                    return <li class="nav-item slidebar-item">
                    <a class="btn btn-link nav-item-link slidebar-link" key={`nav-link-slidebar-${slidebarLinkIndex}`}>{slidebarLink}</a>
                  </li>;
                })}
              </ul>
            </nav>
          </menu>
    );
  }
}

export default Sidebar;
