import { useEffect, useState } from "react";
import { ResponsivePie } from '@nivo/pie';

const BudgetExpense = () => {
  const data = [
    {
      "id": "Academic Units",
      "label": "Academic Units",
      "value": 5250.60,
      "color": "hsl(294, 70%, 50%)"
    },
    {
      "id": "Administrative",
      "label": "Administrative",
      "value": 138.40,
      "color": "hsl(304, 70%, 50%)"
    },
    {
      "id": "Auxiliary",
      "label": "Auxiliary",
      "value": 449.50,
      "color": "hsl(218, 70%, 50%)"
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
      case "Academic Units":
        desc = "Academic Units description";
        break;
      case "Administrative":
        desc = "Administrative description";
        break;
      case "Auxiliary":
        desc = "Auxiliary description";
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
        margin={{ top: 50, bottom: 50, right: handleMargins(), left: handleMargins() }}
        innerRadius={0.5}
        startAngle={-200}
        endAngle={160}
        padAngle={1}
        cornerRadius={1}
        activeOuterRadiusOffset={8}
        colors={{ scheme: 'set2' }}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
        enableArcLinkLabels={handleArcLinkLabels()}
        arcLinkLabelsSkipAngle={0}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={0}
        arcLabelsTextColor={{ from: 'color', modifiers: [ [ 'darker', 3 ] ] }}
        theme={{
          fontFamily: "Source Sans Pro, sans",
          fontSize: 18,
          textColor: 'black'
        }}
        tooltip={node => getTooltip(node)}
      />
    </div>
  )
}

export default BudgetExpense;