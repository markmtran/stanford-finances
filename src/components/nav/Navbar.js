import { createRef } from "react";
import { AppBar, Grid, Tab, Tabs, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ScrollSpy from "react-scrollspy";

const useStyles = makeStyles({
  sticky: {
    position: "sticky",
    top: 0
  },
  noBullet: {
    display: "inline"
  },
  navLink: {
    textDecoration: "none",
  }
})

const Navbar = () => {
  const classes = useStyles();

  const itemList = ["intro", "budget", "sankey", "timeline", "faq", "resources"];

  const navStyle = {
    position: "sticky",
    position: "-webkit-sticky",
    top: 0,
    backgroundColor: "white",
    display: "flex",
    justifyContent: "space-evenly",
    fontSize: "26px",
    fontWeight: "bold",
    textDecoration: "none"
  }

  return(
    // <Tabs
    //   className={classes.sticky}href="#" 
    //   centered
    //   selectionFollowsFocus={true}
    // >
    //   <Tab label={<a href="#intro" style={defaultStyle}>Intro</a>} />
    //   <Tab label={<a href="#budget" style={defaultStyle}>Budget</a>} />
    //   <Tab label={<a href="#sankey" style={defaultStyle}>Sankey</a>} />
    //   {/* <Tab label={<img src="https://identity.stanford.edu/wp-content/uploads/2020/07/block-s-1color.png" alt="Stanford University at Night"/>} /> */}
    //   <Tab label={<a href="#timeline" style={defaultStyle}>Timeline</a>} />
    //   <Tab label={<a href="#faq" style={defaultStyle}>FAQ</a>} />
    //   <Tab label={<a href="#resources" style={defaultStyle}>Resources</a>}/>
    // </Tabs>
    <ScrollSpy   
      className={classes.sticky}
      style={navStyle}
      items={itemList}
      currentClassName="current-section"
      >
      <li className={classes.noBullet}><a className={classes.navLink} href="#intro" ref={createRef()}>INTRO</a></li>
      <li className={classes.noBullet}><a className={classes.navLink} href="#budget" ref={createRef()}>BUDGET</a></li>
      <li className={classes.noBullet}><a className={classes.navLink} href="#sankey" ref={createRef()}>SANKEY</a></li>
      <li className={classes.noBullet}><a className={classes.navLink} href="#timeline" ref={createRef()}>TIMELINE</a></li>
      <li className={classes.noBullet}><a className={classes.navLink} href="#faq" ref={createRef()}>FAQ</a></li>
      <li className={classes.noBullet}><a className={classes.navLink} href="#resources" ref={createRef()}>RESOURCES</a></li>
    </ScrollSpy>
  )
}

export default Navbar;