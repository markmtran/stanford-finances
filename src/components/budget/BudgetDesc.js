import { Grid } from "@material-ui/core";

const BudgetDesc = () => {
  return(
    <Grid container>
      <Grid item xs="1" />
      <Grid item xs="11">
        <h1>The Big Bad Budget</h1>
      </Grid>
      
      <Grid item xs="2" />
      <Grid item xs="8">
        <p>
          In order to understand Stanford’s finances, 
          first we have to look at where the money comes from and where it goes. 
          Below, you can find an interactive chart where you can explore each of Stanford’s main sources of revenue 
          and a breakdown of how that money gets distributed through the budget plan. 
        </p>
      </Grid>
    </Grid>
  );
}

export default BudgetDesc;