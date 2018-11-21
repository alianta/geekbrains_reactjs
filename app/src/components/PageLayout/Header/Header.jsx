import React, { Component } from "react";

import LoginModal from "../LoginModal/LoginModal.jsx";
import "./Header.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.links = ["Home", "About","Contacts"];
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="#">BLOG</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            {this.links.map((link, linkIndex) => {
              return <a className="header-menu-link nav-item nav-link " href="#" key={`nav-link-${linkIndex}`}>{link}</a>;
            })}

          </div>
          <button type="button" className="btn btn-primary " data-toggle="modal" data-target="#loginModal">
            Login
          </button>
          <LoginModal />
        </div>
      </nav>
    );
  }
}

export default Header;
