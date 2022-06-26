import { useEffect, useState } from "react";
import { ResponsivePie } from '@nivo/pie';

const BudgetExpense = () => {
  const data = [
    {
      "id": "Stanford Medicine",
      "label": "Stanford Medicine",
      "value": 3339.6,
      "color": "#924a48"
    },
    {
      "id": "Humanities & Sciences",
      "label": "Humanities & Sciences",
      "value": 556.6,
      "color": "#bb5a52"
    },
    {
      "id": "SLAC",
      "label": "SLAC",
      "value": 556.6,
      "color": "#e27f6a"
    },
    {
      "id": "School of Engineering",
      "label": "School of Engineering",
      "value": 432.9,
      "color": "#e99469"
    },
    {
      "id": "Graduate School of Business",
      "label": "Graduate School of Business",
      "value": 309.2,
      "color": "#f8b972"
    },
    {
      "id": "Dean of Research",
      "label": "Dean of Research",
      "value": 309.2,
      "color": "#f8ce73"
    },
    {
      "id": "Other",
      "label": "Other",
      "value": 247.4,
      "color": "#ffe19f"
    },
    {
      "id": "Sustainability",
      "label": "Sustainability",
      "value": 123.7,
      "color": "#f6b792"
    },
    {
      "id": "School of Law",
      "label": "School of Law",
      "value": 123.7,
      "color": "#ffc9b2"
    },
    {
      "id": "Libraries",
      "label": "Libraries",
      "value": 123.7,
      "color": "#ee9e93"
    },
    {
      "id": "School of Education",
      "label": "School of Education",
      "value": 61.8,
      "color": "#c07c7a"
    },
    {
      "id": "Administrative",
      "label": "Administrative",
      "value": 1584.5,
      "color": "#cc6666"
    },
    {
      "id": "Auxiliary",
      "label": "Auxiliary",
      "value": 539.7,
      "color": "#ac4949"
    }
  ];
  const total = 7708.6;

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
    return width < 750 ? 40 : 200
  }

  function getTooltip(node) {
    let title = node.datum.id;
    let desc = "";
    let amount = node.datum.value.toFixed(1).toString();
    switch(title) {
      case "Administrative":
        desc = "This budget item includes all of the divisions at Stanford necessary for the institution to function but aren’t directly involved in the academic mission. It includes everything from the General Counsel’s Office to Student Affairs to The President and Provost’s Offices. ";
        title = width < 750 ? node.datum.id + ` ($${amount}M): ` : `$${amount}M: `;
        break;
      case "Auxiliary":
        desc = "This budget item consists of Athletics and Residential & Dining Enterprises. In normal years (i.e. non-COVID), both of these auxiliaries function as (nearly) self-sustaining operations which provide important services for the university.";
        title = width < 750 ? node.datum.id + ` ($${amount}M): ` : `$${amount}M: `;
        break;
      default:
        desc = "";
        title = width < 750 ? node.datum.id + `: $${amount}M` : `$${amount}M`;
        break;
    }

    return (
      <div style={{backgroundColor: 'white', 
                   borderRadius: 2, 
                   boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.09)',
                   maxWidth: 320,
                   fontSize: 16,
                   fontWeight: 'normal'}}>
        <div style={{padding: 12}}>
          <span><b>{title}</b>{desc}</span>
        </div>
      </div>
    )
  }
  
  return(
    <div style={{height: 480, fontWeight: 'bold', display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
      <ResponsivePie
        data={data}
        // valueFormat='>-0,.2f'
        valueFormat={val => `${(val / total * 100).toFixed(1)}%`}
        // valueFormat={val => `${val}%`}
        margin={{ top: 80, bottom: 50, right: handleMargins(), left: handleMargins() }}
        innerRadius={0.5}
        startAngle={-200}
        endAngle={160}
        padAngle={1}
        cornerRadius={1}
        activeOuterRadiusOffset={8}
        colors={{ datum: 'data.color' }}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
        enableArcLinkLabels={handleArcLinkLabels()}
        arcLinkLabelsSkipAngle={0}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsDiagonalLength={24}
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
      <h2>Expenses: $7,708.6 Million</h2>
    </div>
  )
}

export default BudgetExpense;