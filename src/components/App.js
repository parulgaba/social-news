import React, { Component } from "react";
import TopContainer from "./news/TopContainer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">NYTimes News</header>
        <TopContainer />
      </div>
    );
  }
}

export default App;
