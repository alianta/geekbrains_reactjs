import React, { Component } from "react";
import Sidebar from "./Sidebar.jsx"

//import './Main.css';

class Main extends Component {
  render() {
    return (
      <main>
        <div class="row no-gutters w-100">
          <Sidebar/>
          <div class="col content-block">
            This will be content...
        </div>
        </div>
      </main>
    );
  }
}

export default Main;
