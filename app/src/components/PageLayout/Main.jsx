import React, { Component } from "react";
import Sidebar from "./Sidebar/Sidebar.jsx";
import Card from "./Card/Card.jsx";

//import './Main.css';

class Main extends Component {
 
  render() {
    return (
      <main>
        <div className="row no-gutters w-100">
          <Sidebar/>
          <div className="col content-block">
            <Card title={"First post"}>{`Promo content to first post`}</Card>
          </div>
        </div>
      </main>
    );
  }
}

export default Main;
