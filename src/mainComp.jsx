import React, { Component } from "react";
import Navbar from "./navbar";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./home";
import Education from "./education";
import Experiance from "./experiance";
import Projects from "./projects";
import Contact from "./contact";
class Maincomp extends Component {
  state = {};
  componentDidMount() {}
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/education" component={Education} />
          <Route path="/experience" component={Experiance} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Redirect to="/home" />
      </div>
    );
  }
}

export default Maincomp;
