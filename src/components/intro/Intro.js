import { AppBar, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  appBarStyle: {
    backgroundColor: "#B1040E",
  },
  stanfordFont: {
    fontFamily: "Source Serif Pro, serif"
  },
  margins: {
    marginTop: "5px",
    marginBottom: "5px"
  },
  titleText: {
    width: "100%",
    fontFamily: "Source Serif Pro, serif",
    color: "white",
    fontWeight: "bold",
    position: "absolute",
    top: "30%",
    textShadow: "0 0 30px rgb(0 0 0 / 70%)",
    textAlign: "center"
  },
  descText: {
    width: "100%",
    fontFamily: "Source Serif Pro, serif",
    color: "white",
    textShadow: "0 0 30px rgb(0 0 0 / 70%)",
    textAlign: "center"
  },
  introDiv: {
    // backgroundImage: 'url("https://www-media.stanford.edu/wp-content/uploads/2017/06/20191526/stanford-share.jpg")'
    backgroundImage: "url('https://www-media.stanford.edu/wp-content/uploads/2017/06/20191526/stanford-share.jpg')"
  }
});

const Intro = () => {
  const classes = useStyles();

  return(
    <div id="intro">
      <AppBar  className={classes.appBarStyle} position="static">
        <Grid container className={classes.margins}>
          <Grid item xs="1"/>
          <Grid item xs="11">
            <Typography className={classes.stanfordFont} variant="h6" color="inherit">
              Stanford | Finances
            </Typography>
          </Grid>
        </Grid>
      </AppBar>
      <div style={{position: "relative"}}>
        <div id="intro-div"/>
        <Typography className={classes.titleText} variant="h2">Understanding Stanford's Finances</Typography>
        <Grid container style={{position: "absolute", top: "350px"}}>
          <Grid container item xs={12} justify="center">
            <p className={classes.descText}>
              Have you ever wondered where your tuition money goes? How does Stanford pay for all those t-shirts? 
            </p>
          </Grid>
          <Grid container item xs={12} justify="center">
            <p className={classes.descText}>
              Who makes budgeting decisions? And why does Stanford have a giant endowment yet never seems to use it?
            </p>
          </Grid>
          <Grid  container item xs={12} justify="center">
            <p className={classes.descText}>
              In this website, we will attempt to dive into these sorts of questions about Stanford Finances and give some clarity on how Stanford uses its money. 
            </p>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Intro;