import { Grid, Typography } from "@material-ui/core";

const IntroDesc = () => {
  return (
    <Grid container xs={12} style={{position: "absolute", top: 0}} justify="center" alignItems="center">
      <Grid item xs={1} sm={1} md={1} lg={2}/>
      <Grid item xs={10} sm={10} md={10} lg={8}>
        <Typography class="intro-title" variant="h2">Stanford's Finances</Typography>
      </Grid>
      <Grid item xs={1} sm={1} md={1} lg={2}/>

      <Grid item xs={1} sm={1} md={1} lg={2}/>
      <Grid container item xs={10} sm={10} md={10} lg={8} style={{position: "relative", bottom: 50}}>
        <Grid item xs={12}>
          <p class="intro-desc">
            Have you ever wondered where your tuition money goes? How does Stanford pay for all those t-shirts? <br/><br/>
            Who makes budgeting decisions? And why does Stanford have a giant endowment yet never seems to use it? <br/><br/>
            In this website, we will attempt to dive into these sorts of questions about Stanford Finances and give some clarity on how Stanford uses its money. 
          </p>
        </Grid>
      </Grid>
      <Grid item xs={1} sm={1} md={1} lg={2}/>
    </Grid>
  )
}

export default IntroDesc;