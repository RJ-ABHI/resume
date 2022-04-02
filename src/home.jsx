import React, { Component } from "react";
import { init } from "ityped";
import { withStyles } from "@material-ui/core/styles";
const useStyles = (theme) => ({
  paper: {
    "&:hover": {
      color: "#e8f4f8",
    },
  },
});
class Home extends Component {
  state = {};
  componentDidMount() {
    const myElement = document.querySelector("#myElement");
    init(myElement, {
      showCursor: false,
      strings: [
        "a Software Developer",
        "an App Developer ",
        "an UI/UX Designer ",
      ],
    });
  }
  render() {
    const { classes } = this.props;
    return (
      //   <div className="container">
      //     <div className="row col-12">
      //       <div className="col col-6">Abhijeet Raj</div>
      //     </div>
      //   </div>
      <div className="container">
        <div className="row">
          <div className="col col-lg-6 col-xs-12">
            <div className="row">
              <h1
                className="homeCont"
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-easing="ease-in-quad"
              >
                Abhijeet Raj
              </h1>
              <h6
                className="userName"
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-easing="ease-in-quad"
              >
                I am <span id="myElement"></span>
              </h6>
              <div
                data-aos="fade-down"
                data-aos-duration="800"
                data-aos-easing="ease-in-quad"
                className="row homeRow"
              >
                Design, develop, and test software and applications for
                computers and Mobile.Participates in programming activities,
                monitoring, and evaluating system performance, and designing and
                implementing new programs and features.
              </div>
              <div
                className="row mt-4"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-easing="ease-in-quad"
              >
                <a href="https://github.com/RJ-ABHI">
                  <i
                    class="fab fa-github fa-2x"
                    data-toggle="tooltip"
                    title="github"
                    data-placement="top"
                    style={{ color: "black" }}
                  ></i>
                </a>
                <a href="https://www.linkedin.com/in/abhijeet-raj-51374a19a">
                  <i
                    class="fab fa-linkedin-in fa-2x ml-4"
                    style={{ color: "blue" }}
                    data-toggle="tooltip"
                    title="linkedin"
                    data-placement="top"
                  ></i>
                </a>
                <a href="https://www.instagram.com/abhijeeet_raj/">
                  <i
                    class="fab fa-instagram fa-2x ml-4"
                    style={{ color: "red" }}
                    data-toggle="tooltip"
                    title="instagram"
                    data-placement="top"
                  ></i>
                </a>

                <i
                  class="fab fa-facebook fa-2x ml-4"
                  style={{ color: "blue" }}
                  data-toggle="tooltip"
                  title="facebook"
                  data-placement="top"
                ></i>
                <i
                  class="fab fa-twitter fa-2x ml-4"
                  style={{ color: "#1DA1F2" }}
                  data-toggle="tooltip"
                  title="twitter"
                  data-placement="top"
                ></i>
              </div>
            </div>
          </div>
          <div className="col col-6">
            <a>
              <img
                src="https://i.ibb.co/JFT55zj/f8a9c9a12aff0473d3ca3f3e60b95dd7.jpg"
                alt="f8a9c9a12aff0473d3ca3f3e60b95dd7"
                border="0"
                className="imgCont"
                data-aos="fade-left"
                data-aos-duration="800"
                data-aos-easing="ease-in-quad"
              />
            </a>
          </div>
        </div>
        <div className="row">
          <div
            className="col-12 text-center Do"
            data-aos="zoom-in"
            data-aos-duration="800"
            data-aos-easing="ease-in-quad"
          >
            What I do ?
          </div>
          <div className="row">
            <div
              className="col col-6"
              data-aos="fade-down"
              data-aos-duration="800"
              data-aos-easing="ease-in-quad"
            >
              <div className="row text-center full-stack">
                Full Stack Development
              </div>
              <div className="row  mt-4">
                <i
                  class="fab fa-html5 fa-3x ml-4"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-quad"
                  style={{ color: "#ff0000" }}
                ></i>
                <i
                  class="fab fa-css3 fa-3x ml-4"
                  data-aos="fade-right"
                  data-aos-duration="900"
                  data-aos-easing="ease-in-quad"
                  style={{ color: "#264de4" }}
                ></i>
                <i
                  class="fab fa-react fa-3x ml-4"
                  data-aos="fade-right"
                  data-aos-duration="800"
                  data-aos-easing="ease-in-quad"
                  style={{ color: "#61DBFB" }}
                ></i>
                <i
                  class="fab fa-js  fa-3x ml-4"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-quad"
                  style={{ color: "#f0db4f" }}
                ></i>
                <i
                  class="fab fa-node  fa-3x ml-4"
                  data-aos="fade-left"
                  data-aos-duration="900"
                  data-aos-easing="ease-in-quad"
                  style={{ color: "#3C873A" }}
                ></i>
                <i
                  class="fab fa-npm fa-3x ml-4"
                  data-aos="fade-left"
                  data-aos-duration="800"
                  data-aos-easing="ease-in-quad"
                  style={{ color: "#ff0000" }}
                ></i>
              </div>
              <div
                className="mt-5"
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-easing="ease-in-quad"
              >
                <div className="row" className="full-stack-row">
                  <i class="far fa-bell mr-2" style={{ color: "red" }}></i>
                  Building responsive website front end using React
                </div>
                <div className="row" className="full-stack-row">
                  <i class="far fa-bell mr-2" style={{ color: "red" }}></i>
                  Developing mobile applications using ionic and meteor
                </div>
                <div className="row" className="full-stack-row">
                  <i class="far fa-bell mr-2" style={{ color: "red" }}></i>
                  Creating application backend in Node and Express
                </div>
              </div>
            </div>
            <div className="col col-6">
              <a>
                <img
                  src="https://i.ibb.co/mR5NrfB/programmer-vector.png"
                  alt="programmer-vector"
                  border="0"
                  className="imgCont-full"
                  data-aos="fade-left"
                  data-aos-duration="800"
                  data-aos-easing="ease-in-quad"
                />
              </a>
            </div>
          </div>
        </div>

        {/* <div className="row">
          <div className="col-2">
            <img
              src="https://i.ibb.co/5hTXp94/vector-ui-ux-design-illustration.jpg"
              alt="programmer-vector"
              border="0"
              className=""
              data-aos="fade-left"
              data-aos-duration="800"
              data-aos-easing="ease-in-quad"
            />
          </div>
          <div
            className="col-10"
            data-aos="fade-down"
            data-aos-duration="800"
            data-aos-easing="ease-in-quad"
          >
            <div className="row text-center full-stack">
              Full Stack Development
            </div>
            <div className="row  mt-4">
              <i
                class="fab fa-html5 fa-3x ml-4"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-easing="ease-in-quad"
                style={{ color: "#ff0000" }}
              ></i>
              <i
                class="fab fa-css3 fa-3x ml-4"
                data-aos="fade-right"
                data-aos-duration="900"
                data-aos-easing="ease-in-quad"
                style={{ color: "#264de4" }}
              ></i>
              <i
                class="fab fa-react fa-3x ml-4"
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-easing="ease-in-quad"
                style={{ color: "#61DBFB" }}
              ></i>
              <i
                class="fab fa-js  fa-3x ml-4"
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-easing="ease-in-quad"
                style={{ color: "#f0db4f" }}
              ></i>
              <i
                class="fab fa-node  fa-3x ml-4"
                data-aos="fade-left"
                data-aos-duration="900"
                data-aos-easing="ease-in-quad"
                style={{ color: "#3C873A" }}
              ></i>
              <i
                class="fab fa-npm fa-3x ml-4"
                data-aos="fade-left"
                data-aos-duration="800"
                data-aos-easing="ease-in-quad"
                style={{ color: "#ff0000" }}
              ></i>
            </div>
            <div
              className="mt-5"
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-easing="ease-in-quad"
            >
              <div className="row" className="full-stack-row">
                <i class="far fa-bell mr-2" style={{ color: "red" }}></i>
                Building responsive website front end using React
              </div>
              <div className="row" className="full-stack-row">
                <i class="far fa-bell mr-2" style={{ color: "red" }}></i>
                Developing mobile applications using ionic and meteor
              </div>
              <div className="row" className="full-stack-row">
                <i class="far fa-bell mr-2" style={{ color: "red" }}></i>
                Creating application backend in Node and Express
              </div>
            </div>
          </div>
        </div> */}
      </div>
    );
  }
}

export default withStyles(useStyles)(Home);
