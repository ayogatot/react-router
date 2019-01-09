import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import News from "./components/News";
import About from "./components/About";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/News" exact component={News} />
          <Route path="/About" exact component={About} />
        </Switch>
      </Router>
    );
  }
}

export default App;
