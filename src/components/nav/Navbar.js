import { Tab, Tabs, Typography } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  sticky: {
    position: "fixed",
    width: "100%",
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
    fontFamily: "Source Sans Pro, sans",
    fontSize: "26px",
  }

  return(
    <Tabs
      className={classes.sticky}
      centered
    >
      <Tab label={<span style={defaultStyle}>Intro</span>} />
      <Tab label={<span style={defaultStyle}>Budget</span>} />
      <Tab label={<span style={defaultStyle}>Sankey</span>} />
      {/* <Tab label={<img src="https://identity.stanford.edu/wp-content/uploads/2020/07/block-s-1color.png" alt="Stanford University at Night"/>} /> */}
      <Tab label={<span style={defaultStyle}>Timeline</span>} />
      <Tab label={<span style={defaultStyle}>FAQ</span>} />
      <Tab label={<span style={defaultStyle}>Resources</span>}/>
    </Tabs>
  )
}

export default Navbar;