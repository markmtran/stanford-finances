import { ResponsiveSankey } from "@nivo/sankey";
import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  tipHeader: {
    fontWeight: "bold"
  },
  tipDesc: {

  },
  nodeStyle: {
    fontWeight: "bold"
  }
})

const SankeyGraph2 = () => {
  const classes = useStyles();
  const data = {
    "nodes": [
      {
        "id": "Price per Student",
      },
      {
        "id": "Stanford Subsidy",
      },
      {
        "id": "",
      },
      {
        "id": "Instruct/Dept Research",
      },
      {
        "id": "FinAid Costs",
      },
      {
        "id": "Dep't Administration",
      },
      {
        "id": "Library",
      },
      {
        "id": "Facilities O&M",
      },
      {
        "id": "Student Services",
      },
      {
        "id": "Administration (G&A)",
      },
      {
        "id": "Depreciation",
      },
      {
        "id": "Institutional/Community",
      }
    ],
    "links": [
      {
        "source": "Price per Student",
        "target": "",
        "value": 78165.00
      },
      {
        "source": "Stanford Subsidy",
        "target": "",
        "value": 77643.67
      },
      {
        "source": "",
        "target": "Instruct/Dept Research",
        "value": 69624.43
      },
      {
        "source": "",
        "target": "FinAid Costs",
        "value": 31755.31
      },
      {
        "source": "",
        "target": "Dep't Administration",
        "value": 19275.27
      },
      {
        "source": "",
        "target": "Facilities O&M",
        "value": 7609.43
      },
      {
        "source": "",
        "target": "Library",
        "value": 7479.56
      },
      {
        "source": "",
        "target": "Student Services",
        "value": 7082.68
      },
      {
        "source": "",
        "target": "Administration (G&A)",
        "value": 5088.03
      },
      {
        "source": "",
        "target": "Depreciation",
        "value": 4740.75
      },
      {
        "source": "",
        "target": "Institutional/Community",
        "value": 3153.21
      }
    ]
  }
  function getLinkTooltip(node) {
    let desc = "";
    let val = "";
    switch(node.source.label) {
      case "Price per Student":
        desc = "pps description";
        val = "$78,165.00"
        break;
      case "Stanford Subsidy":
        desc = "ss description";
        val = "$77,643.67"
        break;
      default:
        break;
    }
    switch(node.target.label) {
      case "Instruct/Dept Research":
        desc = "I/D research description";
        val = "$69,624.43"
        break;
      case "FinAid Costs":
        desc = "FA description";
        val = "$31,755.31"
        break;
      case "Dep't Administration":
        desc = "DA description";
        val = "$19,275.27"
        break;
      case "Library":
        desc = "library description";
        val = "$7,479.56"
        break;
      case "Facilities O&M":
        desc = "fom description";
        val = "$7,609.43"
        break;
      case "Student Services":
        desc = "stuserv description";
        val = "$7,082.68"
        break;
      case "Administration (G&A)":
        desc = "admin g&a description";
        val = "$5,088.03"
        break;
      case "Depreciation":
        desc = "dep description";
        val = "$4,740.75"
        break;
      case "Institutional/Community":
        desc = "I/C description";
        val = "$3,153.21"
        break;
      default:
        break;
    }
    
    return (
      <div>
        <span className={classes.tipHeader}>{val}</span><br />
        <span className={classes.tipDesc}>{desc}</span>
      </div>
    )
  }
  return(
    <Grid container justify="center">
      <Grid item xs={1} />
      <Grid item xs={10} style={{height: "700px"}}>
        <ResponsiveSankey
          data={data}
          sort="descending"
          margin={{ top: 20, bottom: 80, left: 140, right: 140}}
          align="justify"
          colors={{ scheme: 'category10' }}
          nodeOpacity={1}
          nodeThickness={18}
          nodeInnerPadding={3}
          nodeSpacing={20}
          nodeBorderWidth={0}
          nodeBorderColor={{ from: 'color', modifiers: [ [ 'darker', 0.8 ] ] }}
          nodeTooltip={node =>
            (node.label === "") ? <span className={classes.nodeStyle}>Student</span> :
            <span className={classes.nodeStyle}>{node.label}</span>
          }
          linkTooltip={node => getLinkTooltip(node)}
          linkOpacity={0.5}
          linkHoverOpacity={0.7}
          linkHoverOthersOpacity={0.1}
          enableLinkGradient={true}
          labelPosition="outside"
          labelOrientation="horizontal"
          labelPadding={16}
          labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1 ] ] }}
          legends={[
            {
              anchor: 'bottom',
              translateY: 40,
              direction: 'row',
              itemWidth: 100,
              itemHeight: 14,
              itemDirection: 'top-to-bottom',
              itemsSpacing: 10,
              itemTextColor: '#999',
              symbolSize: 14,
              effects: [
                {
                  on: 'hover',
                  style: {
                    itemTextColor: '#B10'
                  }
                }
              ]
            }
          ]}
        />
      </Grid>
      <Grid item xs={1} />
    </Grid>
  )
};

export default SankeyGraph2