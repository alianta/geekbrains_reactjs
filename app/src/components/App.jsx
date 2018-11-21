import React, { Component, PureComponent } from "react";
import "./App.css";

import Page from "./PageLayout/Page.jsx";
//import Footer from "./PageLayout/Footer.jsx";
import Header from "./PageLayout/Header/Header.jsx";
import Main from "./PageLayout/Main.jsx";

class App extends Component {
  render() {
    return (
      <Page>
        <Header />
        <Main />
      </Page>
    );
  }
}

export default App;
