import React, { Component } from "react";
import TopContainer from "./news/TopContainer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2 className="App-header">NYTimes News</h2>
        <TopContainer />
      </div>
    );
  }
}

export default App;
