import React, { Component } from "react";
import { TextField, Button, Icon } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import SendIcon from "@material-ui/icons/Send";
import SimpleReactValidator from "simple-react-validator";
import axios from "axios";
const useStyles = (theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "100%",
    },
  },
  button: {
    margin: theme.spacing(1),
    width: "25%",
  },
});

class Contact extends Component {
  state = {
    mainArray: { name: "", email: "", body: "" },
    validator: new SimpleReactValidator(),
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    console.log("asijsfsia");
    console.log(this.state.mainArray);
    if (this.state.validator.allValid()) {
      try {
        let response = await axios.post(
          "http://192.168.43.62:2000/mail",
          this.state.mainArray
        );
        if (response.status === 200) {
          console.log(response);
          console.log(response.data.token);
          alert("Thank you For Sharing Your Valuable Feedback");
          this.state.mainArray.body = "";
          this.state.mainArray.name = "";
          this.state.mainArray.email = "";
        }
      } catch (error) {
        console.log(error.response);
        if (error.response && error.response.status === 404) {
          alert(error.response.data.messege);
        }
      }
    } else {
      this.state.validator.showMessages();
      this.forceUpdate();
    }
  };
  handleChange = (e) => {
    const { currentTarget: inp } = e;

    let localArray = this.state.mainArray;
    localArray[inp.name] = inp.value;
    this.setState({ mainArray: localArray });
  };
  render() {
    const { classes } = this.props;
    return (
      <div className="container projectContainer">
        <div className="row">
          <div className="col col-6 text-center mt-5">
            <img
              src="https://i.ibb.co/rFP28Mx/images.jpg"
              alt="images"
              border="0"
              // height="300px"
            />
          </div>
          <div className="col col-6">
            <form className={classes.root} noValidate autoComplete="off">
              <TextField
                id="standard-basic"
                label="Name"
                name="name"
                value={this.state.mainArray.name}
                onChange={this.handleChange}
              />
              {this.state.validator.message(
                "Name",
                this.state.mainArray.name,
                "required|alpha",
                { className: "text-danger" }
              )}
              <TextField
                id="standard-basic"
                label="Email"
                helperText="we will never share your email address"
                name="email"
                value={this.state.mainArray.email}
                onChange={this.handleChange}
              ></TextField>
              {this.state.validator.message(
                "email",
                this.state.mainArray.email,
                "required|email",
                { className: "text-danger" }
              )}
              <TextField
                id="standard-basic"
                multiline
                rows={4}
                label="body"
                variant="outlined"
                name="body"
                value={this.state.mainArray.body}
                onChange={this.handleChange}
              ></TextField>
              {this.state.validator.message(
                "body",
                this.state.mainArray.body,
                "required|min:20|max:120",
                { className: "text-danger" }
              )}
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                endIcon={<SendIcon />}
                onClick={this.handleSubmit}
              >
                Send
              </Button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(useStyles)(Contact);
