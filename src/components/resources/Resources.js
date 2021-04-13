import { Grid } from "@material-ui/core";

const Resources = () => {
  return(
    <Grid container>
      <Grid item xs="1" />
      <Grid item xs="11">
        <h1 id="resources">Resources</h1>
      </Grid>
      
      <Grid item xs="2" />
      <Grid item xs="10">
        <ul>
          <li>Check out the following Stanford Magazine article: <a href="https://stanfordmag.org/contents/why-you-cant-just-use-the-endowment-for-that">Stanford Magazine</a></li>
          <li>Learn more through Stanford Fingate: <a href="https://fingate.stanford.edu/managing-funds/endowments#anchor-8021">Stanford Fingate</a></li>
        </ul>
      </Grid>
    </Grid>
  );
}

export default Resources;