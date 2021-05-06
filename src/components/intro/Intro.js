import Header from "./Header";
import IntroDesc from "./IntroDesc";

const Intro = () => {

  return(
    <div id="intro">
      <Header />
      <div style={{position: "relative"}}>
        <div id="intro-div"/>
        <IntroDesc />
      </div>
    </div>
  )
}

export default Intro;