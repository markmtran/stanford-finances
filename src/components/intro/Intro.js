import { AppBar, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  appBarStyle: {
    backgroundColor: "#B1040E"
  },
  stanfordFont: {
    fontFamily: "Source Serif Pro, serif"
  },
  margins: {
    marginTop: "5px",
    marginBottom: "5px"
  },
  titleText: {
    fontFamily: "Source Sans Pro, sans",
    color: "white",
    fontWeight: 100
  },
  introDiv: {
    backgroundImage: 'url("https://www-media.stanford.edu/wp-content/uploads/2017/06/20191526/stanford-share.jpg")'
  }
});

const Intro = () => {
  const classes = useStyles();

  return(
    <div>
      <AppBar id="intro" className={classes.appBarStyle} position="static">
        <Grid container className={classes.margins}>
          <Grid item xs="1"/>
          <Grid item xs="11">
            <Typography className={classes.stanfordFont} variant="h6" color="inherit">
              Stanford | Finances
            </Typography>
          </Grid>
        </Grid>
      </AppBar>
      {/* <div>
        <Typography className={classes.titleText} variant="h3">Understanding Stanford's Finances</Typography>
      </div> */}
      <img src="https://www-media.stanford.edu/wp-content/uploads/2017/06/20191526/stanford-share.jpg" alt="Stanford University at Night" width="100%"/>
    </div>
  )
}

export default Intro;