import React, { Component } from "react";
class education extends Component {
  state = {};

  render() {
    return (
      <div className="container eduCont">
        <div className="row">
          <div className="col col-6">
            <div className="row">
              <a>
                <img
                  src="https://i.ibb.co/9W44RJs/certificate-degree-line-icon-vector-17009733.jpg"
                  alt="certificate-degree-line-icon-vector-17009733"
                  border="0"
                  className="imgCont-degree"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-quad"
                />
              </a>
            </div>
          </div>
          <div className="col col-6">
            <div className="row ">
              <div
                className="col-12 text-center eduRow"
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-easing="ease-in-quad"
              >
                {" "}
                Education
              </div>
            </div>
            <div className="row text-center">
              <div
                className="col-12 "
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-easing="ease-in-quad"
              >
                <i
                  className="fab fa-hackerrank fa-3x"
                  style={{ color: "green" }}
                ></i>
                <i
                  class="fas fa-certificate fa-3x ml-5"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-quad"
                  style={{ color: "blue" }}
                ></i>
                <i
                  class="fas fa-laptop-code fa-3x ml-5"
                  style={{ color: "gray" }}
                ></i>
                <i class="fas fa-book fa-3x ml-5" style={{ color: "red" }}></i>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="col col-12 text-center degree"
            data-aos="zoom-in"
            data-aos-duration="800"
            data-aos-easing="ease-in-quad"
          >
            Degree
          </div>
        </div>
        <div
          className="row mt-4"
          data-aos="flip-left"
          data-aos-duration="800"
          data-aos-easing="ease-in-quad"
        >
          <div className="col col-4 text-right mt-4">
            <a>
              <img
                src="https://i.ibb.co/CBznyZj/Logo-new.png"
                alt="Logo-new"
                border="0"
                className="clgLogo"
              />
            </a>
          </div>
          <div className="col col-8">
            <div className="jumbotron">
              <h4 className="display-6">
                Gandhi Engineering College, Bhubaneswar
              </h4>
              <p className="lead display-6">B.tech (Computer Science)</p>
              <p className="lead display-8">2014-2018</p>
              {/* <hr className="my-4" /> */}
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="col col-12 text-center degree"
            data-aos="zoom-in"
            data-aos-duration="800"
            data-aos-easing="ease-in-quad"
          >
            Intermediate
          </div>
        </div>
        <div
          className="row mt-4"
          data-aos="flip-right"
          data-aos-duration="800"
          data-aos-easing="ease-in-quad"
        >
          <div className="col col-8">
            <div className="jumbotron">
              <h4 className="display-6">BIHAR SECONDARY EDUCATION BOARD</h4>
              <p className="lead display-6">M.P. College</p>
              <p className=" display-8"> 2012-2014</p>
              {/* <hr className="my-4" /> */}
            </div>
          </div>
          <div className="col col-4 text-left mt-4">
            <a>
              <img
                src="https://i.ibb.co/NmZKWWR/images.jpg"
                alt="Logo-new"
                border="0"
                className="clgLogo-inter"
              />
            </a>
          </div>
        </div>
        <div className="row">
          <div
            className="col col-12 text-center degree"
            data-aos="zoom-in"
            data-aos-duration="800"
            data-aos-easing="ease-in-quad"
          >
            Matriculation
          </div>
        </div>
        <div
          className="row mt-4"
          data-aos="flip-left"
          data-aos-duration="800"
          data-aos-easing="ease-in-quad"
        >
          <div className="col col-4 text-right mt-4">
            <a>
              <img
                src="https://i.ibb.co/3hX8swd/download.jpg"
                alt="Logo-new"
                border="0"
                className="clgLogo-inter"
              />
            </a>
          </div>
          <div className="col col-8">
            <div className="jumbotron">
              <h4 className="display-6">
                CENTRAL BOARD OF SECONDARY EDUCATION
              </h4>
              <p className="lead display-6">G.I.P Public School</p>
              <p className="lead display-8"> 2011</p>
              {/* <hr className="my-4" /> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default education;
