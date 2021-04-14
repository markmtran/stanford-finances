import Chart from "react-google-charts";
import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  center: {

  }
})

const BudgetGraphic = () => {
  return(
    <Grid container justify="center">
      <Grid item xs={2} />
      <Grid container item xs={8} justify="center">
        <Chart
          width={1000}
          height={'600px'}
          chartType="Sankey"
          loader={<div>Loading Chart</div>}
          data={[
            ['From', 'To', 'Weight'],
            ['What Stanford Covers', 'The Avg Student', 6],
            ['Avg FinAid', 'The Avg Student', 6],
            ['Avg Undergrad Tuition', 'The Avg Student', 6],
            ['The Avg Student', 'FinAid', 2],
            ['The Avg Student', 'Instutional/Community', 2],
            ['The Avg Student', 'Instruction/Dept Research', 2],
            ['The Avg Student', 'Departmental Administration', 2],
            ['The Avg Student', 'Student Services', 2],
            ['The Avg Student', 'Library', 2],
            ['The Avg Student', 'Facilities O&M Expenses', 2],
            ['The Avg Student', 'Depreciation', 2],
            ['The Avg Student', 'Administration', 2],
          ]}
          options={{
            animation: {
              startup: true,
              easing: 'linear',
              duration: 1500,
            },
            enableInteractivity: false,
          }}
          rootProps={{ 'data-testid': '1' }}
        />
      </Grid>
      <Grid item xs={2} />
    </Grid>
  )
}

export default BudgetGraphic