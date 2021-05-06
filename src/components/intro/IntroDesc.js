import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
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
});

const IntroDesc = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid container>
        <Typography className={classes.titleText} variant="h2">Understanding Stanford's Finances</Typography>
      </Grid>
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
  )
}

export default IntroDesc;