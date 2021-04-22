import { ResponsiveSankey } from "@nivo/sankey";
import { Grid, makeStyles } from "@material-ui/core";

const SankeyGraph2 = () => {
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
        "value": 77643.67
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
        "target": "Library",
        "value": 7479.56
      },
      {
        "source": "",
        "target": "Facilities O&M",
        "value": 7609.43
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
  return(
    <Grid container justify="center">
      <Grid item xs={1} />
      <Grid item xs={10} style={{height: "750px"}}>
        <ResponsiveSankey
          data={data}
          margin={{ top: 20, bottom: 80, left: 140, right: 140}}
          align="justify"
          colors={{ scheme: 'category10' }}
          nodeOpacity={1}
          nodeThickness={18}
          nodeInnerPadding={3}
          nodeSpacing={20}
          nodeBorderWidth={0}
          nodeBorderColor={{ from: 'color', modifiers: [ [ 'darker', 0.8 ] ] }}
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