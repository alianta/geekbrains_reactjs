import React, {Component} from "react";
import "./SidebarMenu.css";

class SidebarMenu extends Component{
    constructor(props) {
        super(props);
        this.slidebarLinks = ["Link1", "Link2","Link3","Link4","Link5"];
      }
    render(){
        return(
            <nav className="sidebar-menu align-items-center p-2">
                <ul className="nav nav-pills flex-column float-left slidebar-links">
                    {this.slidebarLinks.map((slidebarLink, slidebarLinkIndex) => {
                        return <li className="nav-item slidebar-item">
                            <a className="btn btn-link nav-item-link slidebar-link" key={`nav-link-slidebar-${slidebarLinkIndex}`}>{slidebarLink}</a>
                        </li>;
                    })}
                </ul>
            </nav>
        );
    }
}

export default SidebarMenu;