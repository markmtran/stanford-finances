import { Grid } from "@material-ui/core";


const TimelineDesc = () => {
  return(
    <Grid container>
      <Grid item xs="1" />
      <Grid item xs="11">
        <h1 id="timeline" class="header-margin">Finances Timeline</h1>
      </Grid>

      <Grid item xs="1" md="2"/>
      <Grid item xs="10" md="8">
        <p>Now that you’ve been given a couple perspectives on how stanford’s budget works, 
          you might be wondering who’s even making these decisions and how you can affect these decisions. 
          Below you can find a timeline of decisions and who makes them. As mentioned above, 
          it can get a little convoluted since each school and department has their own way of budgeting and deciding each year.</p>
      </Grid>
      <Grid item xs="1" md="2"/>
    </Grid>
  );
}

export default TimelineDesc;