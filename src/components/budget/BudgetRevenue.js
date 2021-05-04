import { ResponsiveCirclePacking } from '@nivo/circle-packing';
import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({

});

const BudgetRevenue = () => {
  const classes = useStyles();
  const data = {
    name: "Revenues",
    children: [
      {
        name: "Gifts and Net Assets",
        color: "hsl(40, 70%, 50%)",
        value: 445.10
      },
      {
        name: "University-sponsored Research",
        color: "hsl(40, 70%, 50%)",
        value: 1147.00
      },
      {
        name: "Investment Income",
        color: "hsl(40, 70%, 50%)",
        value: 1657.60
      },
      {
        name: "Special Program Fees and Other Income",
        color: "hsl(40, 70%, 50%)",
        value: 578.70
      },
      {
        name: "Health Care Services",
        color: "hsl(40, 70%, 50%)",
        value: 1423.80
      },
      {
        name: "Student Income",
        color: "hsl(40, 70%, 50%)",
        value: 1017.60
      },
      {
        name: "SLAC Sponsored Research",
        color: "hsl(40, 70%, 50%)",
        value: 488.40
      },
    ]
  }

  return(
    // <div style={{position: "relative", minHeight: "500px"}}>
    //   <div style={{position: "absolute", width: "100%", zIndex: 110}}>
    <div style={{height: 600}}>
      <ResponsiveCirclePacking 
        leavesOnly
        data={data}
        id="name"
        value="value"
        colors={{ scheme: 'category10' }}
        colorBy="id"
        childColor={{ from: 'color', modifiers: [ [ 'brighter', 0.4 ] ] }}
        padding={10}
        enableLabels={true}
        labelsFilter={function(e){return 2===e.node.depth}}
        labelsSkipRadius={10}
        labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 2 ] ] }}
        borderWidth={3}
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

export default BudgetRevenue;