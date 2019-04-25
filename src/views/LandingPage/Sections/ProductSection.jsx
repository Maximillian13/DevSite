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
                title="Turner"
								description="Turner is a 2D platformer puzzle game set in an insane asylum where you take the role of Turner, a man with a troubled past and an 
								unstable state of mind.  This was the first game I published to Steam."
                icon={VideogameAsset}
                iconColor="info"
                vertical
              />
              <a
                href="https://store.steampowered.com/app/499340/Turner/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Turner Steam Page
              </a>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Hot Squat 1 and 2"
								description="Hot Squat 1 and 2 are Virtual Reality fitness games. They both work around the machanic of squating under walls in order to get the highest score 
								possible. Hot Squat 2 is still in development while Hot Squat 1 is out now!"
                icon={VideogameAsset}
                iconColor="success"
                vertical
              />
              <a
                href="https://store.steampowered.com/app/553590/Hot_Squat/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hot Squat Steam Page 
              </a>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="UNTITLED"
								description="UNTITLED is a physics based Virtual Reality game centered around discover and finding out things on your own. I would say more but that would defeat the 
								purpose of the game."
                icon={VideogameAsset}
                iconColor="danger"
                vertical
              />
              <a
                href="https://store.steampowered.com/app/639770/UNTITLED/"
                target="_blank"
                rel="noopener noreferrer"
              >
                UNTITLED Steam Page 
              </a>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(productStyle)(ProductSection);
