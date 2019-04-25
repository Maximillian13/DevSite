import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";

import workStyle from "assets/jss/material-kit-react/views/landingPageSections/workStyle.jsx";

class WorkSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {messageBody: "", messageSubject: ""};

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem cs={12} sm={12} md={8}>
            <h1 className={classes.title}>Contact Me</h1>
            <h4 className={classes.description}>
              Questions? Contact me!
              <br />
              You can also email me directly at: <a href = "mailto:maximilliancoburn@gmail.com">MaximillianCoburn@gmail.com</a>
            </h4>
            <form>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Subject"
                    id="subject"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      name: "messageSubject",
                      value: this.state.messageSubject,
                      onChange: this.handleChange
                    }}
                  />
                </GridItem>
                <CustomInput
                  labelText="Your Message"
                  id="message"
                  formControlProps={{
                    fullWidth: true,
                    className: classes.textArea
                  }}
                  inputProps={{
                    multiline: true,
                    rows: 5,
                    name: "messageBody",
                    value: this.state.messageBody,
                    onChange: this.handleChange
                  }}
                />
                <GridContainer justify="center">
                  <GridItem
                    xs={12}
                    sm={12}
                    md={4}
                    className={classes.textCenter}
                  >
                    <Button color="danger" href={"mailto:maximilliancoburn@gmail.com?body=" + this.state.messageBody +
                                                  "&subject=" + this.state.messageSubject}>Send Email</Button>
                  </GridItem>
                </GridContainer>
              </GridContainer>
            </form>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(workStyle)(WorkSection);
