import { Grid } from "@material-ui/core";
import timelinePic from '../timeline.svg';

const TimelineDesc = () => {
  return(
    <Grid container justifyContent="center">
      <Grid item xs="10" md="8" justifyContent="center">
      
      <h3 class="QandA">Who makes the budget?</h3>
        <p>Now that you’ve been given a couple perspectives on how stanford’s budget works, 
          you might be wondering who’s even making these decisions and how you can affect these decisions. Below you can find a timeline of decisions and who makes them. As mentioned above, 
          it can get a little convoluted since each school and department has their own way of budgeting and deciding each year.</p>

      </Grid>

      <img src={timelinePic} className="endowment" alt="Budget Timeline" />
    </Grid>

  );
}

export default TimelineDesc;