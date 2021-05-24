import { useEffect, useState } from "react";
import { ResponsivePie } from '@nivo/pie';

const BudgetRevenue = () => {
  const data = [
    {
      "id": "Gifts and Net Assets",
      "label": "Gifts and Net Assets",
      "value": 445.10,
      "color": "hsl(294, 70%, 50%)"
    },
    {
      "id": "University-sponsored Research",
      "label": "University-sponsored Research",
      "value": 1147.00,
      "color": "hsl(304, 70%, 50%)"
    },
    {
      "id": "Investment Income",
      "label": "Investment Income",
      "value": 1657.60,
      "color": "hsl(218, 70%, 50%)"
    },
    {
      "id": "Special Program Fees and Other Income",
      "label": "Special Program Fees and Other Income",
      "value": 578.70,
      "color": "hsl(218, 70%, 50%)"
    },
    {
      "id": "Health Care Services",
      "label": "Health Care Services",
      "value": 1423.80,
      "color": "hsl(67, 70%, 50%)"
    },
    {
      "id": "Student Income",
      "label": "Student Income",
      "value": 1017.60,
      "color": "hsl(67, 70%, 50%)"
    },
    {
      "id": "SLAC Sponsored Research",
      "label": "SLAC Sponsored Research",
      "value": 488.40,
      "color": "hsl(67, 70%, 50%)"
    }
  ]

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }
  function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  
    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return windowDimensions;
  }
  const { width } = useWindowDimensions();
  const handleArcLinkLabels = () => {
    return width < 750 ? false : true;
  }
  const handleMargins = () => {
    return width < 750 ? 20 : 80
  }

  function getTooltip(node) {
    let title = node.datum.id;
    let desc = "";
    switch(title) {
      case "Gifts and Net Assets":
        desc = "gna description";
        break;
      case "University-sponsored Research":
        desc = "usr description";
        break;
      case "Investment Income":
        desc = "invest description";
        break;
      case "Special Program Fees and Other Income":
        desc = "spfoi description";
        break;
      case "Health Care Services":
        desc = "hcs description";
        break;
      case "Student Income":
        desc = "stuincome description";
        break;
      case "SLAC Sponsored Research":
        desc = "slac description";
        break;
      default:
        break;
    }

    title = width < 750 ? node.datum.id + ": " : "";

    return (
      <div style={{backgroundColor: 'white', 
                   borderRadius: 2, 
                   boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.09)'}}>
        <div style={{margin: 8}}>
          <span><b>{title}</b>{desc}</span>
        </div>
      </div>
    )
  }
  
  return(
    <div style={{height: 600}}>
      <ResponsivePie
        data={data}
        // valueFormat={value => `$${value.toLocaleString() + '0'}`}
        valueFormat='>-$0,.2f'
        sortByValue
        margin={{ top: 50, bottom: 50, right: handleMargins(), left: handleMargins() }}
        innerRadius={0.5}
        padAngle={1}
        cornerRadius={1}
        activeOuterRadiusOffset={8}
        colors={{ scheme: 'set2' }}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
        enableArcLinkLabels={handleArcLinkLabels()}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{ from: 'color', modifiers: [ [ 'darker', 3 ] ] }}
        theme={{
          fontFamily: "Source Sans Pro, sans",
          fontSize: 18,
        }}
        tooltip={node => getTooltip(node)}
      />
    </div>
  )
}

export default BudgetRevenue;