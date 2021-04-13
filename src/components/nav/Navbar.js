import { AppBar, Tab, Tabs, Typography } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  sticky: {
    position: "sticky",
    top: 0,
    width: "100%",
    backgroundColor: "white"
  },
  tabLabel: {
    color: "#B1040E",
    fontFamily: "Source Sans Pro, sans",
    fontSize: "20px",
    fontWeight: "40px"
  }
})



const Navbar = () => {
  const classes = useStyles();

  const defaultStyle = {
    color: "black",
    fontSize: "26px",
    fontWeight: "bold",
    textDecoration: "none"
  }

  return(
    <Tabs
      className={classes.sticky}href="#" 
      centered
    >
      <Tab label={<a href="#intro" style={defaultStyle}>Intro</a>} />
      <Tab label={<a href="#budget" style={defaultStyle}>Budget</a>} />
      <Tab label={<a href="#sankey" style={defaultStyle}>Sankey</a>} />
      {/* <Tab label={<img src="https://identity.stanford.edu/wp-content/uploads/2020/07/block-s-1color.png" alt="Stanford University at Night"/>} /> */}
      <Tab label={<a href="#timeline" style={defaultStyle}>Timeline</a>} />
      <Tab label={<a href="#faq" style={defaultStyle}>FAQ</a>} />
      <Tab label={<a href="#resources" style={defaultStyle}>Resources</a>}/>
    </Tabs>
  )
}

export default Navbar;