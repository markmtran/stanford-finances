import { createRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ScrollSpy from "react-scrollspy";

const useStyles = makeStyles({
  sticky: {
    position: "sticky",
    top: 0,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "white",
    display: "flex",
    justifyContent: "space-evenly",
    fontSize: "26px",
    fontWeight: "700",
  },
  noBullet: {
    listStyle: "none",
  },
  navLink: {
    color: "#b1040e",
    textDecoration: "none",
    opacity: 1
  }
})

const Navbar = () => {
  const classes = useStyles();

  const itemList = ["intro", "budget", "sankey", "timeline", "faq", "resources"];

  return(
    <ScrollSpy   
      className={classes.sticky}
      items={itemList}
      currentClassName="current-section"
      componentTag="p"
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