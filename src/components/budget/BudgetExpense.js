import { useState } from "react";
import { ResponsiveCirclePacking } from '@nivo/circle-packing';

const BudgetExpense = () => {
  const [ zoomedId, setZoomedId ] = useState(null);

  const data = {
    name: "Expenses",
    color: "hsl(124, 70%, 100%)",
    children: [
      {
        id: "Academic Units",
        color: "hsl(40, 70%, 50%)",
        value: 5250.60
      },
      {
        id: "Administrative",
        color: "hsl(40, 70%, 50%)",
        value: 138.40
      },
      {
        id: "Auxiliary",
        color: "hsl(40, 70%, 50%)",
        value: 449.50
      }
    ]
  }

  function getLabel(node) {
    let percent = node.percentage.toFixed(2);
    let title = node.id;
    let desc = "";
    switch(title) {
      case "Academic Units":
        desc = "academic units like"
        break;
      case "Administrative":
        desc = "administrative purposes such as"
        break;
      case "Auxiliary":
        desc = "auxiliary programs like"
        break;
      default:
        break;
    }
    return `${percent}% of budget expenses come from ${desc}`;
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
        colors={{ scheme: 'nivo' }}
        colorBy="id"
        childColor={{ from: 'color', modifiers: [ [ 'brighter', 0.4 ] ] }}
        padding={10}
        enableLabels={true}
        label={node => getLabel(node)}
        labelsSkipRadius={230}
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

export default BudgetExpense;