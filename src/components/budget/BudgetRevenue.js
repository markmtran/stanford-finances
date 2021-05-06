import { useState } from "react";
import { ResponsiveCirclePacking } from '@nivo/circle-packing';

const BudgetRevenue = () => {
  const [ zoomedId, setZoomedId ] = useState(null);

  const data = {
    name: "Revenues",
    children: [
      {
        id: "Gifts and Net Assets",
        name: "Gifts and Net Assets include yada yada yada",
        color: "hsl(40, 70%, 50%)",
        value: 445.10,
      },
      {
        id: "University-sponsored Research",
        name: "University-sponsored Research include yada yada yada",
        color: "hsl(40, 70%, 50%)",
        value: 1147.00,
      },
      {
        id: "Investment Income",
        name: "Investment Income include yada yada yada",
        color: "hsl(40, 70%, 50%)",
        value: 1657.60,
      },
      {
        id: "Special Program Fees and Other Income",
        name: "Special Program Fees and Other Income include yada yada yada",
        color: "hsl(40, 70%, 50%)",
        value: 578.70,
      },
      {
        id: "Health Care Services",
        name: "Health Care Services include yada yada yada",
        color: "hsl(40, 70%, 50%)",
        value: 1423.80,
      },
      {
        id: "Student Income",
        name: "Student Income include yada yada yada",
        color: "hsl(40, 70%, 50%)",
        value: 1017.60,
      },
      {
        id: "SLAC Sponsored Research",
        name: "SLAC Sponsored Research include yada yada yada",
        color: "hsl(40, 70%, 50%)",
        value: 488.40,
      },
    ]
  }

  function getLabel(node) {
    let percent = node.percentage.toFixed(2);
    let title = node.id;
    let desc = "";
    switch(title) {
      case "Gifts and Net Assets":
        desc = "gifts from"
        break;
      case "University-sponsored Research":
        desc = "research like"
        break;
      case "Investment Income":
        desc = "investments made"
        break;
      case "Special Program Fees and Other Income":
        desc = "special programs like"
        break;
      case "Health Care Services":
        desc = "health care services provided"
        break;
      case "Student Income":
        desc = "incomes from students"
        break;
      case "SLAC Sponsored Research":
        desc = "SLAC, which is"
        break;
      default:
        break;
    }

    return `${percent}% of the budget revenue comes from ${desc}`
  }

  return(
    <div style={{height: 700}}>
      <ResponsiveCirclePacking 
        leavesOnly
        margin={{top: 50, bottom: 50}}
        data={data}
        id="id"
        value="value"
        valueFormat=">-$0,.2f"
        colors={{ scheme: 'category10' }}
        colorBy="id"
        childColor={{ from: 'color', modifiers: [ [ 'brighter', 0.4 ] ] }}
        padding={10}
        enableLabels
        label={node => getLabel(node)}
        labelsSkipRadius={200}
        labelTextColor="white"
        borderWidth={2}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.5 ] ] }}
        onClick={ node => {
          setZoomedId(zoomedId === node.id ? null : node.id)
        }}
        zoomedId={zoomedId}
        theme={{
          fontFamily: "Source Sans Pro, sans",
          fontSize: 16,
        }}
      />
    </div>
  );
};

export default BudgetRevenue;