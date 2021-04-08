import { AppBar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  appBarStyle: {
    backgroundColor: "#B1040E"
  },
  headerFont: {
    fontFamily: "Source Serif Pro, serif"
  }
});

const Intro = () => {
  const classes = useStyles();

  return(
    <AppBar className={classes.appBarStyle} position="static">
      <Typography className={classes.headerFont} variant="h6" color="inherit">
        Stanford University
      </Typography>
    </AppBar>
  )
}

export default Intro;