import { createRef } from "react";
import ScrollSpy from "react-scrollspy";

const Navbar = () => {
  const itemList = ["intro", "budget", "sankey", "timeline", "faq", "resources"];

  return(
    <ScrollSpy   
      style={{marginTop: 20, marginBottom: 20}}
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