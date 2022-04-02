import React, { Component } from "react";
import { NavLink } from "react-router-dom";
class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a class="navbar-brand">
            <i className="fa fa-user-circle fa-1x text-warning"></i>

            <span style={{ color: "white" }}>
              <span className="text-warning">Abhijeet</span>
              <span>Raj</span>
            </span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto ">
              <li className="nav-item active">
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
                    <i className="fa fa-home mr-1 text-warning fa-2x"></i>
                    Home
                  </NavLink>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  <NavLink
                    to="/education"
                    style={{
                      color: "white",
                      textShadow: "0 2px 2px #dfdfdf",
                    }}
                    activeStyle={{ color: "yellow" }}
                  >
                    <i className="fas fa-book-reader mr-1 text-warning fa-2x"></i>
                    Education
                  </NavLink>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  <NavLink
                    to="/experience"
                    style={{
                      color: "white",
                      textShadow: "0 2px 2px #dfdfdf",
                    }}
                    activeStyle={{ color: "yellow" }}
                  >
                    <i className="fas fa-briefcase mr-1 text-warning fa-2x"></i>
                    Experience
                  </NavLink>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link ">
                  <NavLink
                    to="/projects"
                    style={{
                      color: "white",
                      textShadow: "0 2px 2px #dfdfdf",
                    }}
                    activeStyle={{ color: "yellow" }}
                  >
                    {" "}
                    <i className="fas fa-code mr-1 text-warning fa-2x"></i>
                    Projects
                  </NavLink>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link ">
                  <NavLink
                    to="/contact"
                    style={{
                      color: "white",
                      textShadow: "0 2px 2px #dfdfdf",
                    }}
                    activeStyle={{ color: "yellow" }}
                  >
                    <i className="fas fa-address-book mr-1 text-warning fa-2x"></i>
                    Contact Me
                  </NavLink>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
