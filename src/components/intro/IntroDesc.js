import { Grid } from "@material-ui/core";

const IntroDesc = () => {
  return (
    <Grid className="intro-desc" container xs={12} justify="center" alignItems="center">
      <Grid item xs={1} sm={1} md={1} lg={2}/>
      <Grid container item xs={10} sm={10} md={10} lg={8}>
        <Grid item xs={12}>
          <p>
            Have you ever wondered where your tuition money goes? How does Stanford pay for all those t-shirts?
          </p>
          <p>
            Who makes budgeting decisions? And why does Stanford have a giant endowment yet never seems to use it?
          </p>
          <p>
            In this website, we will attempt to dive into these sorts of questions about Stanford Finances and give some clarity on how Stanford uses its money. 
          </p>
        </Grid>
      </Grid>
      <Grid item xs={1} sm={1} md={1} lg={2}/>
    </Grid>
  )
}

export default IntroDesc;