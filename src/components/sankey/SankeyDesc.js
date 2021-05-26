import { Grid } from "@material-ui/core";


const SankeyDesc = () => {
  return(
    <Grid container>
      <Grid item xs="1" />
      <Grid item xs="11">
        <h1 class="header-margin">The Student Sankey</h1>
      </Grid>
      
      <Grid item xs="1" md="2"/>
      <Grid container item xs="10" md="8" justify="center">
        <p>
          But looking at the revenue and budget breakdown is incredibly impersonal. 
          How does it relate to us as students? What is your giant tuition paying for exactly?
        </p>
        <p>
          Check out the sankey graph below to see the flow of money centered around the student experience. Hover over a section to learn more about it!
        </p>
      </Grid>
      <Grid item xs="1" md="2"/>
    </Grid>
  );
}

export default SankeyDesc;