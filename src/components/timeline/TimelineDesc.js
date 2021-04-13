import { Grid } from "@material-ui/core";


const TimelineDesc = () => {
  return(
    <Grid container>
      <Grid item xs="1" />
      <Grid item xs="11">
        <h1 id="timeline">Tipsy Timeline</h1>
      </Grid>

      <Grid item xs="2" />
      <Grid item xs="10">
        <h2>About</h2>
      </Grid>
      <Grid item xs="2" />
      <Grid item xs="10">
        <p>Lorem ipsum yada yada yada...</p>
      </Grid>

      <Grid item xs="2" />
      <Grid item xs="10">
        <h2>More Info</h2>
      </Grid>
      <Grid item xs="2" />
      <Grid item xs="10">
        <p>Lorem ipsum yada yada yada...</p>
      </Grid>
    </Grid>
  );
}

export default TimelineDesc;