import React, { Component } from "react";
import { Paper } from "@material-ui/core";
import Image from "material-ui-image";
import { withStyles } from "@material-ui/core/styles";
const useStyles = (theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(2),
      width: theme.spacing(40),
      height: theme.spacing(30),
      borderRadius: "15px",
    },
  },
});

class projects extends Component {
  state = {};
  render() {
    const { classes } = this.props;
    return (
      <div className="container projectContainer">
        <div className="row mb-5">
          <div className=" col col-12 text-center projectHeader">
            {" "}
            Desgin, Devlopment and Maintenance
          </div>
        </div>
        <div className="row">
          <div className="col col-4">
            <div className={classes.root}>
              <Paper variant="standard" elevation={7} className="image-box">
                <img
                  src="https://i.ibb.co/r4MMdg1/87df1322-1508-47c0-8936-25fa5c91b377.jpg"
                  alt="87df1322-1508-47c0-8936-25fa5c91b377"
                  border="0"
                  style={{ width: "100%", height: "95%" }}
                />
              </Paper>
            </div>
          </div>
          <div className="col col-4">
            <div className={classes.root}>
              <Paper
                variant="standard"
                elevation={7}
                // style={styles.paperContainer}
                className="image-box"
              >
                <img
                  src="https://i.ibb.co/2sK2JBg/2fc238f9-f93c-43da-baad-1501dca717fc.jpg"
                  className="zoom"
                  alt=""
                  style={{ width: "100%", height: "95%" }}
                />
              </Paper>
            </div>
          </div>
          <div className="col col-4">
            <div className={classes.root}>
              <Paper variant="standard" elevation={7} className="image-box">
                <img
                  src="https://i.ibb.co/B4ZFtj7/99a89881-e14b-4797-b692-c666efc3b7d3.jpg"
                  alt="99a89881-e14b-4797-b692-c666efc3b7d3"
                  border="0"
                  style={{ width: "100%", height: "95%" }}
                />
              </Paper>
            </div>
          </div>
          <div className="col col-4">
            <div className={classes.root}>
              <Paper variant="standard" elevation={7} className="image-box">
                <img
                  src="https://i.ibb.co/ZVmzmYQ/d202c3c2-6306-4de8-a5d6-ed8b16127386.jpg"
                  alt="d202c3c2-6306-4de8-a5d6-ed8b1612738"
                  border="0"
                  style={{ width: "100%", height: "95%" }}
                />
              </Paper>
            </div>
          </div>
          <div className="col col-4">
            <div className={classes.root}>
              <Paper variant="standard" elevation={7} className="image-box">
                <img
                  src="https://i.ibb.co/W0HBBJP/913a83b4-6fda-4577-805a-4b1128e53e73.jpg"
                  alt="913a83b4-6fda-4577-805a-4b1128e53e73"
                  border="0"
                  style={{ width: "100%", height: "95%" }}
                />
              </Paper>
            </div>
          </div>
          <div className="col col-4">
            <div className={classes.root}>
              <Paper variant="standard" elevation={7} className="image-box">
                <img
                  src="https://i.ibb.co/sHVdfP0/ffb6ec3e-27ac-4dd1-b417-4acca9dea1f8.jpg"
                  alt="ffb6ec3e-27ac-4dd1-b417-4acca9dea1f8"
                  border="0"
                  style={{ width: "100%", height: "95%" }}
                />
              </Paper>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(useStyles)(projects);
