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
    zIndex: 100,
  }
})

const Navbar = () => {
  const classes = useStyles();

  const itemList = ["intro", "budget", "sankey", "timeline", "faq", "resources"];

  return(
    <ScrollSpy   
      id="#nav"
      className="nav-style hidden-mobile"
      items={itemList}
      currentClassName="current-section"
    >
      <li className="no-bullet"><a className="nav-link nav-link-ltr" href="#intro" ref={createRef()}>INTRO</a></li>
      <li className="no-bullet"><a className="nav-link nav-link-ltr" href="#budget" ref={createRef()}>BUDGET</a></li>
      <li className="no-bullet"><a className="nav-link nav-link-ltr" href="#sankey" ref={createRef()}>SANKEY</a></li>
      <li className="no-bullet"><a className="nav-link nav-link-ltr" href="#timeline" ref={createRef()}>TIMELINE</a></li>
      <li className="no-bullet"><a className="nav-link nav-link-ltr" href="#faq" ref={createRef()}>FAQ</a></li>
      <li className="no-bullet"><a className="nav-link nav-link-ltr" href="#resources" ref={createRef()}>RESOURCES</a></li>
    </ScrollSpy>
  )
}

export default Navbar;