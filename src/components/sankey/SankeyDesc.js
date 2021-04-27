import { Grid } from "@material-ui/core";


const SankeyDesc = () => {
  return(
    <Grid container>
      <Grid item xs="1" />
      <Grid item xs="11">
        <h1>The Student Sankey</h1>
      </Grid>
      
      <Grid item xs="2" />
      <Grid container item xs="8" justify="center">
        <p>
          But looking at the revenue and budget breakdown is incredibly impersonal. 
          How does it relate to us as students? What is your giant tuition paying for exactly?
        </p>
        <p>
          Check out the sankey graph below to see the flow of money centered around the student experience. Hover over a section to learn more about it!
        </p>
      </Grid>

      <Grid container item xs="12" justify="center">
        <h3>2020-2021 Academic Year</h3>
      </Grid>
    </Grid>
  );
}

export default SankeyDesc;