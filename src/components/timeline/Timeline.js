import TimelineDesc from "./TimelineDesc";
import TimelinePic from "./timeline.svg";
import { Grid } from "@material-ui/core";

const Timeline = () => {
  return(
    <div id="timeline">
      <TimelineDesc />
      <Grid container justify="center" alignItems="center">
        <Grid item sm={1} md={2} lg={2} />
        <Grid container sm={10} md={8} lg={8}> 
          <img style={{width: '100%', height: 'auto'}} src={TimelinePic} alt="A timeline of the budget proposal and execution process." />
        </Grid>
        <Grid item sm={1} md={2} lg={2} />
      </Grid>
    </div>
  );
}

export default Timeline;