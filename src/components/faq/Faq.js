import { useState } from "react";
import { Accordion, AccordionDetails, AccordionSummary, Grid, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  accordionStyle: {
    border: "1px solid rgba(0, 0, 0, .125)"
  },
  question: {
    fontSize: "200",
    fontWeight: "900",
    fontFamily: "Source Sans Pro, sans",
  },
  answer: {
    fontFamily: "Source Sans Pro, sans"
  }
})

const Faq = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return(
    <Grid container>
      <Grid item xs="1" />
      <Grid item xs="11">
        <h1 id="faq">FAQ</h1>
      </Grid>
      <Grid item xs="2" />
      <Grid item xs="8">
        <Accordion className={classes.accordionStyle} square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography className={classes.question} variant="h5">Who am I?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={classes.answer}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
              sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className={classes.accordionStyle} square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography className={classes.question} variant="h5">What am I?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={classes.answer}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
              sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className={classes.accordionStyle} square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography className={classes.question} variant="h5">Where am I?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={classes.answer}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
              sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className={classes.accordionStyle} square expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
          <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
            <Typography className={classes.question} variant="h5">Why am I?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={classes.answer}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
              sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className={classes.accordionStyle} square expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
          <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
            <Typography className={classes.question} variant="h5">How am I?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={classes.answer}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
              sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Grid>
      <Grid item xs="2" />
    </Grid>
  );
}

export default Faq;