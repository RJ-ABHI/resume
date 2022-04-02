import React, { Component } from "react";
import { NavLink } from "react-router-dom";
class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand">
          <i className="fa fa-user-circle fa-1x text-warning"></i>

          <span style={{ color: "white" }}>
            <span className="text-warning">Abhijeet</span>
            <span>Raj</span>
          </span>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li class="nav-item active">
              <a>
                <NavLink
                  to="/home"
                  style={{
                    color: "white",
                    textShadow: "0 2px 2px #dfdfdf",
                  }}
                  activeStyle={{ color: "yellow" }}
                  className="nav-link"
                >
                  <i class="fa fa-home mr-1 text-warning fa-2x"></i>
                  Home
                </NavLink>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link">
                <NavLink
                  to="/education"
                  style={{
                    color: "white",
                    textShadow: "0 2px 2px #dfdfdf",
                  }}
                  activeStyle={{ color: "yellow" }}
                >
                  <i class="fas fa-book-reader mr-1 text-warning fa-2x"></i>
                  Education
                </NavLink>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link">
                <NavLink
                  to="/experience"
                  style={{
                    color: "white",
                    textShadow: "0 2px 2px #dfdfdf",
                  }}
                  activeStyle={{ color: "yellow" }}
                >
                  <i class="fas fa-briefcase mr-1 text-warning fa-2x"></i>
                  Experience
                </NavLink>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link ">
                <NavLink
                  to="/projects"
                  style={{
                    color: "white",
                    textShadow: "0 2px 2px #dfdfdf",
                  }}
                  activeStyle={{ color: "yellow" }}
                >
                  {" "}
                  <i class="fas fa-code mr-1 text-warning fa-2x"></i>
                  Projects
                </NavLink>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link ">
                <NavLink
                  to="/contact"
                  style={{ color: "white", textShadow: "0 2px 2px #dfdfdf" }}
                  activeStyle={{ color: "yellow" }}
                >
                  <i class="fas fa-address-book mr-1 text-warning fa-2x"></i>
                  Contact Me
                </NavLink>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
