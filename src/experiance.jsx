import React, { Component } from "react";
import { Collapse } from "react-bootstrap";
import { Tooltip } from "@material-ui/core";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import { Paper } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
const useStyles = (theme) => ({
  paper: {
    padding: "6px 16px",
    "&:hover": {
      background: "#e8f4f8",
    },
  },

  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  bgColor: {
    backgroundColor: "#00FFFF",
  },
  color: {
    color: "black",
  },
  dotColor: {
    backgroundColor: "green",
  },
  iconColor: {
    backgroundColor: "black",
  },
});

// export default function CustomizedTimeline() {

class Experiance extends Component {
  state = {
    showText1: false,
    showText2: false,
    showText3: false,
  };
  render() {
    const { classes } = this.props;
    // const { classes } = this.props;
    return (
      <div className="journey">
        <div className="row">
          <div className="col col-6">
            <h1 className="text-center">My Journey Has Been So Far</h1>
            <div className="row text-center ml-5">
              <img
                src="https://i.ibb.co/g9TCCgs/download-1.jpg"
                alt="download-1"
                border="0"
                height="50px"
                className="text-center ml-5 mt-3"
              />
              <img
                src="https://i.ibb.co/brpFwy0/milestoneos-squarelogo-1561443454170.png"
                height="80px"
                className="text-center ml-5"
              />
              <img
                src="https://i.ibb.co/TgDR8tK/925845058s.jpg"
                alt="925845058s"
                border="0"
                height="40px"
                className="text-center ml-5 mt-3"
              />
            </div>
          </div>
          <div className="col col-6">
            <img
              src="https://i.ibb.co/tCxgPdm/depositphotos-362308920-stock-illustration-web-developer-coding-programmer.jpg"
              alt="depositphotos-362308920-stock-illustration-web-developer-coding-programmer"
              border="0"
              height="400px"
              width="500px"
            />
          </div>
        </div>
        <Timeline align="alternate" style={{ marginTop: "100px" }}>
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant="body2" color="textPrimary">
                May-2018 to Sep-2018
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <Tooltip title="completed" placement="left">
                <TimelineDot className={classes.dotColor}>
                  <i class="fas fa-check-circle fa-5x"></i>
                </TimelineDot>
              </Tooltip>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper
                elevation={6}
                className={`${classes.paper} ${classes.bgColor} ${classes.color}`}
              >
                <Typography variant="h4" component="h1">
                  <div className="row">
                    <div className=" col col-9 text-left font-weight-bold">
                      {" "}
                      InfiCons Technology
                    </div>
                    <div className="col col-3">
                      <img
                        src="https://i.ibb.co/g9TCCgs/download-1.jpg"
                        alt="download-1"
                        border="0"
                        height="30px"
                        className="text-right"
                      />
                    </div>
                  </div>
                </Typography>
                <Typography>
                  <b>Full Stack Developer(internship)</b>
                </Typography>
                <Typography className="mt-2">
                  <span>
                    <i class="fa fa-hand-point-right mr-2"></i>
                    Work in a team-oriented environment for all aspects of
                    product development (design, implementation, test, and
                    maintenance support).
                  </span>
                  {this.state.showText1 === false ? (
                    <a
                      onClick={() =>
                        this.setState({ showText1: !this.state.showText1 })
                      }
                    >
                      <Tooltip
                        title="Read More"
                        placement="right"
                        className={classes.color}
                      >
                        <a>
                          <i class="fas fa-chevron-circle-down fa-2x"></i>
                        </a>
                      </Tooltip>
                    </a>
                  ) : (
                    ""
                  )}

                  <Collapse in={this.state.showText1}>
                    <span>
                      <br /> <i class="fa fa-hand-point-right mr-2"></i>
                      Contribute to group meetings and provide status update on
                      development tasks for progress reporting
                      <br />
                      <i class="fa fa-hand-point-right mr-2"></i> Work with
                      development engineers to test product features and
                      functions
                      <br />
                      <i class="fa fa-hand-point-right mr-2"></i> Work with
                      development engineers to validate corrected problem
                      reports
                      <br />
                      <i class="fa fa-hand-point-right mr-2"></i> Work with
                      senior engineers to review the problem report solution and
                      implement the solution
                      <br />
                      <i class="fa fa-hand-point-right mr-2"></i> Support
                      development engineers in reviewing product documentation
                    </span>
                  </Collapse>
                </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant="body2" color="textPrimary">
                May-2020 to Oct-2020
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <Tooltip title="completed" placement="right">
                <TimelineDot className={classes.dotColor}>
                  <i class="fas fa-check-circle fa-5x"></i>
                </TimelineDot>
              </Tooltip>
              <TimelineConnector className={classes.secondaryTail} />
            </TimelineSeparator>
            <TimelineContent>
              <Paper
                elevation={3}
                className={`${classes.paper} ${classes.bgColor} ${classes.color}`}
              >
                <Typography variant="h3" component="h1">
                  <div className="row">
                    <div className="col col-8 text-left">Milestone Os</div>
                    <div className="col-4 text-right">
                      <img
                        src="https://i.ibb.co/brpFwy0/milestoneos-squarelogo-1561443454170.png"
                        height="40px"
                      />
                    </div>
                  </div>
                </Typography>
                <Typography className="text-left">
                  <b>Full Stack Developer(Trainee)</b>
                </Typography>
                <Typography className="text-left mt-3">
                  <i class="fa fa-hand-point-right mr-2"></i>
                  <span>Developing front end website architecture.</span>
                  {this.state.showText2 === false ? (
                    <a
                      onClick={() =>
                        this.setState({ showText2: !this.state.showText2 })
                      }
                    >
                      <Tooltip
                        title="Read More"
                        placement="right"
                        className={classes.color}
                      >
                        <a>
                          <i class="fas fa-chevron-circle-down fa-2x"></i>
                        </a>
                      </Tooltip>
                    </a>
                  ) : (
                    ""
                  )}
                  <br />
                  <Collapse in={this.state.showText2}>
                    <span>
                      <i class="fa fa-hand-point-right mr-2"></i> Designing user
                      interactions on web pages.
                      <br />
                      <i class="fa fa-hand-point-right mr-2"></i> Developing
                      back end website applications. <br />
                      <i class="fa fa-hand-point-right mr-2"></i> Creating
                      servers and databases for functionality.
                      <br />
                      <i class="fa fa-hand-point-right mr-2"></i> Ensuring
                      responsiveness of applications.
                      <br />
                      <i class="fa fa-hand-point-right mr-2"></i> Working on web
                      design features.
                      <br />
                      <i class="fa fa-hand-point-right mr-2"></i> Seeing through
                      a project from conception to finished product.
                      <br />
                      <i class="fa fa-hand-point-right mr-2"></i> Designing and
                      developing APIs.
                    </span>
                  </Collapse>
                </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant="body2" color="textPrimary">
                Nov -2020 to Preasent
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <Tooltip title="still Working" placement="left">
                <TimelineDot className={classes.iconColor}>
                  <i class="fas fa-eye fa-5x"></i>
                </TimelineDot>
              </Tooltip>
            </TimelineSeparator>
            <TimelineContent>
              <Paper
                elevation={3}
                className={`${classes.paper} ${classes.bgColor} ${classes.color}`}
              >
                <Typography variant="h4" component="h1">
                  <div className="row">
                    <div className="col col-10 text-left font-weight-bold">
                      GlobalHunt India Pvt Ltd
                    </div>
                    <div className="col col-2">
                      <img
                        src="https://i.ibb.co/TgDR8tK/925845058s.jpg"
                        alt="925845058s"
                        border="0"
                        height="40px"
                        className="text-right"
                      />
                    </div>
                  </div>
                </Typography>
                <Typography>
                  <b>Full Stack Developer </b>
                  <Typography className="mt-3">
                    <span>
                      <i class="fa fa-hand-point-right mr-2"></i>
                      Hands on experience in creating components <br />
                    </span>{" "}
                    {this.state.showText3 === false ? (
                      <a
                        onClick={() =>
                          this.setState({ showText3: !this.state.showText3 })
                        }
                      >
                        <Tooltip
                          title="Read More"
                          placement="right"
                          className={classes.color}
                        >
                          <a>
                            <i class="fas fa-chevron-circle-down fa-2x"></i>
                          </a>
                        </Tooltip>
                      </a>
                    ) : (
                      ""
                    )}
                    <Collapse in={this.state.showText3}>
                      <span>
                        <i class="fa fa-hand-point-right mr-2"></i>
                        Good experience in creating components documentation{" "}
                        <br /> <i class="fa fa-hand-point-right mr-2"></i>
                        Strong in developing and updating a web page quickly and
                        effectively using HTML5, CSS3, Java Script, Bootstrap
                        and react.js with the webpage crosses browser, desktop
                        and mobile compatibility. <br />{" "}
                        <i class="fa fa-hand-point-right mr-2"></i>
                        Experience in applying latest development approaches
                        including MVC framework in the browser, event-driven
                        applications using AJAX, Object Oriented (OO)
                        JavaScript, JSON and XML <br />{" "}
                        <i class="fa fa-hand-point-right mr-2"></i>
                        Well versed with UI tools visual studio for developing.
                      </span>
                    </Collapse>
                  </Typography>
                </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    );
    // }
  }
}
export default withStyles(useStyles)(Experiance);
