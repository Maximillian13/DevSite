import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
// import Chat from "@material-ui/icons/Chat";
// import VerifiedUser from "@material-ui/icons/VerifiedUser";
// import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";

import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";
import { MusicNote, VideogameAsset, Business } from "@material-ui/icons";

class ProductSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>My Work</h2>
            <h5 className={classes.description}>
            </h5>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Lightworks"
                description="Lightworks is a music puzzle game I'm currently developing. In Lightworks, you use critical listening skills to complete songs by matching 
                up sections of the track - piece by piece. I'm developing Lightworks in Unity and it will be released on Steam in 2019."
                icon={VideogameAsset}
                iconColor="info"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Bean Boy Games"
                description="Bean Boy Games is an indie video game company I founded with two of my best friends when I was 17 years old. Since then, we've released
                three video games to Steam. to check these games out, head on over to beanboygames.com."
                icon={Business}
                iconColor="success"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Sheep Hair"
                description="Sheep Hair is the name I make music as. As Sheep Hair, I have created three video game soundtracks, one personal album, and a handful of
                miscellaneous tracks. Check out my work at sheephair.bandcamp.com and soundcloud.com/sheephairkevin."
                icon={MusicNote}
                iconColor="danger"
                vertical
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(productStyle)(ProductSection);
