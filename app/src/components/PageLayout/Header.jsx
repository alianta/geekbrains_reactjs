import React, { Component } from "react";

import LoginModal from "./LoginModal.jsx";
import "./Header.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.links = ["Home", "About","Contacts"];
  }
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <a class="navbar-brand" href="#">BLOG</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse d-flex justify-content-between" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            {this.links.map((link, linkIndex) => {
              return <a class="header-menu-link nav-item nav-link " href="#" key={`nav-link-${linkIndex}`}>{link}</a>;
            })}

          </div>
          <button type="button" class="btn btn-primary " data-toggle="modal" data-target="#loginModal">
            Login
          </button>
          <LoginModal />
        </div>
      </nav>
    );
  }
}

export default Header;
