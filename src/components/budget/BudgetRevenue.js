import { useState } from "react";
import { ResponsiveCirclePacking } from '@nivo/circle-packing';
import { Divider, Grid, makeStyles } from "@material-ui/core";
import { getByLabelText } from "@testing-library/dom";

const useStyles = makeStyles({

});

const BudgetRevenue = () => {
  const classes = useStyles();
  const [ zoomedId, setZoomedId ] = useState(null);

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

  function getLabel(nodeId) {
    let title = "";
    let desc = "";
    switch(nodeId) {
      case "Gifts and Net Assets":
        title = "G&Net Assets title";
        desc = "$78,165.00"
        break;
      case "University-sponsored Research":
        title = "ss description";
        desc = "$77,643.67"
        break;
      case "Investment Income":
        title = "ss description";
        desc = "$77,643.67"
        break;
      case "Special Program Fees and Other Income":
        title = "ss description";
        desc = "$77,643.67"
        break;
      case "Health Care Services":
        title = "ss description";
        desc = "$77,643.67"
        break;
      case "Student Income":
        title = "ss description";
        desc = "$77,643.67"
        break;
      case "SLAC Sponsored Research":
        title = "ss description";
        desc = "$77,643.67"
        break;
      default:
        break;
    }

    return (
      <span>{title}</span>
    )
  }

  return(
    <div style={{height: 700}}>
      <ResponsiveCirclePacking 
        leavesOnly
        margin={{top: 50, bottom: 50}}
        data={data}
        id="name"
        value="value"
        valueFormat=">-$0,.2f"
        colors={{ scheme: 'category10' }}
        colorBy="id"
        childColor={{ from: 'color', modifiers: [ [ 'brighter', 0.4 ] ] }}
        padding={10}
        enableLabels={true}
        label={node => getLabel(node.id)}
        labelsSkipRadius={0}
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

export default BudgetRevenue;