import { ResponsiveCirclePacking } from '@nivo/circle-packing';
import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({

});

const BudgetExpense = () => {
  const classes = useStyles();
  const data = {
    name: "Expenses",
    color: "hsl(124, 70%, 100%)",
    children: [
      {
        name: "Academic Units",
        color: "hsl(40, 70%, 50%)",
        loc: 90
      },
      {
        name: "Administrative",
        color: "hsl(40, 70%, 50%)",
        loc: 90
      },
      {
        name: "Auxiliary",
        color: "hsl(40, 70%, 50%)",
        loc: 90
      }
    ]
  }

  return(
    // <div style={{position: "relative", minHeight: "500px"}}>
    //   <div style={{position: "absolute", width: "100%", zIndex: 110}}>
    <div style={{height: 600}}>
      <ResponsiveCirclePacking 
        data={data}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        id="name"
        value="loc"
        colors={{ scheme: 'nivo' }}
        childColor={{ from: 'color', modifiers: [ [ 'brighter', 0.4 ] ] }}
        padding={4}
        enableLabels={true}
        labelsFilter={function(e){return 2===e.node.depth}}
        labelsSkipRadius={10}
        labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 2 ] ] }}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.5 ] ] }}
        defs={[
            {
                id: 'lines',
                type: 'patternLines',
                background: 'none',
                color: 'inherit',
                rotation: -45,
                lineWidth: 5,
                spacing: 8
            }
        ]}
        fill={[ { match: { depth: 1 }, id: 'lines' } ]}
      />
    </div>
  );
};

export default BudgetExpense;