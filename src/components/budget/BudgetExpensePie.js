import { useEffect, useState } from "react";
import { ResponsivePie } from '@nivo/pie';
import { TooltipWrapper } from '@nivo/tooltip';

const BudgetExpense = () => {
  const data = [
    {
      "id": "School of Medicine",
      "label": "School of Medicine",
      "value": 2660.20,
      "color": "#B3C274"
    },
    {
      "id": "School of Humanities & Sciences",
      "label": "School of Humanities & Sciences",
      "value": 517.60,
      "color": "#B3C274"
    },
    {
      "id": "SLAC",
      "label": "SLAC",
      "value": 492.40,
      "color": "#B3C274"
    },
    {
      "id": "School of Engineering",
      "label": "School of Engineering",
      "value": 428.20,
      "color": "#B3C274"
    },
    {
      "id": "Graduate School of Business",
      "label": "Graduate School of Business",
      "value": 299.30,
      "color": "#B3C274"
    },
    {
      "id": "Other",
      "label": "Other",
      "value": 257.20,
      "color": "#B3C274"
    },
    {
      "id": "Dean of Research",
      "label": "Dean of Research",
      "value": 248.60,
      "color": "#B3C274"
    },
    {
      "id": "School of Law",
      "label": "School of Law",
      "value": 100.20,
      "color": "#B3C274"
    },
    {
      "id": "Libraries",
      "label": "Libraries",
      "value": 92.80,
      "color": "#B3C274"
    },
    {
      "id": "Earth, Energy, Environmental Sciences",
      "label": "Earth, Energy, Environmental Sciences",
      "value": 77.10,
      "color": "#B3C274"
    },
    {
      "id": "Graduate School of Education",
      "label": "Graduate School of Education",
      "value": 77.00,
      "color": "#B3C274"
    },
    {
      "id": "Administrative",
      "label": "Administrative",
      "value": 138.40,
      "color": "#7BB261"
    },
    {
      "id": "Auxiliary",
      "label": "Auxiliary",
      "value": 449.50,
      "color": "#5E9968"
    }
  ];
  const total = 5838.5;

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
    let val = node.datum.value;
    let desc = "";
    let anchorSide = "left";
    switch(title) {
      case "Academic Units":
        desc = "This budget item is all of the divisions at Stanford that focus directly on education. It includes the different schools (Law, Engineering, etc.), research institutes (e.g. SLAC and Hoover), academic support divisions (e.g. Vice Provost for the Arts and Vice Provost for Undergraduate Education), and the libraries.";
        anchorSide = "right"
        break;
      case "Administrative":
        desc = "This budget item includes all of the divisions at Stanford necessary for the institution to function but aren’t directly involved in the academic mission. It includes everything from the General Counsel’s Office to Student Affairs to The President and Provost’s Offices. ";
        anchorSide = "left"
        break;
      case "Auxiliary":
        desc = "This budget item consists of Athletics and Residential & Dining Enterprises. In normal years (i.e. non-COVID) bothBoth of these auxiliaries function as (nearly) self-sustaining operations which provide important services for the university.";
        anchorSide = "left"
        break;
      default:
        break;
    }

    title = width < 750 ? node.datum.id + `: $${val.toFixed(2)}` : `$${val.toFixed(2)}: `;

    return (
      <TooltipWrapper anchor={anchorSide} position={[0, 0]}>
        <div style={{backgroundColor: 'white', 
                    borderRadius: 2, 
                    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.09)',
                    width: 320,
                    fontSize: 16,
                    fontWeight: 'normal'}}>
          <div style={{padding: 12}}>
            <span><b>{title}</b>{desc}</span>
          </div>
        </div>
      </TooltipWrapper>
    )
  }
  
  return(
    <div style={{
      height: 500, 
      fontWeight: 'bold', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center',
      marginBottom: 40,
      marginTop: 60
    }}>
      <h2 class="budget-titles">Budget Expenses (Total: $5,838.5 million)</h2>
      <ResponsivePie
        data={data}
        // valueFormat='>-0,.2f'
        valueFormat={val => `${(val / total * 100).toFixed(1)}%`}
        margin={{ top: 28, bottom: 100, right: handleMargins(), left: handleMargins() }}
        innerRadius={0.5}
        startAngle={-200}
        endAngle={160}
        padAngle={1}
        cornerRadius={1}
        activeOuterRadiusOffset={8}
        colors={{ datum: 'data.color' }}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
        //enableArcLinkLabels={handleArcLinkLabels()}
        enableArcLinkLabels
        arcLinkLabelsSkipAngle={0}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={0}
        arcLabelsTextColor={{ from: 'color', modifiers: [ [ 'darker', 3 ] ] }}
        theme={{
          fontFamily: "Source Sans Pro, sans",
          fontSize: 16,
          textColor: 'black'
        }}
        tooltip={node => getTooltip(node)}
      />
    </div>
  )
}

export default BudgetExpense;