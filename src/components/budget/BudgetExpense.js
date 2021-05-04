import { useState } from "react";
import { ResponsiveCirclePacking } from '@nivo/circle-packing';
import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({

});

const BudgetExpense = () => {
  const classes = useStyles();
  const [ zoomedId, setZoomedId ] = useState(null);

  const data = {
    name: "Expenses",
    color: "hsl(124, 70%, 100%)",
    children: [
      {
        name: "Academic Units",
        color: "hsl(40, 70%, 50%)",
        value: 5250.60
      },
      {
        name: "Administrative",
        color: "hsl(40, 70%, 50%)",
        value: 138.40
      },
      {
        name: "Auxiliary",
        color: "hsl(40, 70%, 50%)",
        value: 449.50
      }
    ]
  }

  return(
    // <div style={{position: "relative", minHeight: "500px"}}>
    //   <div style={{position: "absolute", width: "100%", zIndex: 110}}>
    <div style={{height: 700}}>
      <ResponsiveCirclePacking 
        leavesOnly
        margin={{top: 50, bottom: 50}}
        data={data}
        id="name"
        value="value"
        valueFormat=">-$0,.2f"
        colors={{ scheme: 'nivo' }}
        colorBy="id"
        childColor={{ from: 'color', modifiers: [ [ 'brighter', 0.4 ] ] }}
        padding={4}
        enableLabels={true}
        labelsFilter={function(e){return 2===e.node.depth}}
        labelsSkipRadius={10}
        labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 2 ] ] }}
        borderWidth={2}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.5 ] ] }}
        defs={[
            {
                id: 'lines',
                type: 'patternLines',
                background: 'none',
                color: 'inherit',
                rotation: -45,
                lineWidth: 2,
                spacing: 4
            }
        ]}
        fill={[ { match: { depth: 1 }, id: 'lines' } ]}
        onClick={ node => {
          setZoomedId(zoomedId === node.id ? null : node.id)
        }}
        zoomedId={zoomedId}
      />
    </div>
  );
};

export default BudgetExpense;