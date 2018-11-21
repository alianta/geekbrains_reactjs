import React, { Component } from "react";
import Search from "../Search/Search.jsx"
import SidebarMenu from "../SidebarMenu/SidebarMenu.jsx"
import "./Slidebar.css";

class Sidebar extends Component {
  render() {
    return (
          <div className="col-2 sidebar no-margin align-items-center  text-white m-2 p-2">
            <Search/>
            <SidebarMenu/>
          </div> 
    );
  }
}

export default Sidebar;
