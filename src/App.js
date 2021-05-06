import './App.css';
import Budget from './components/budget/Budget';
import Faq from './components/faq/Faq';
import Footer from './components/footer/Footer';
import Intro from "./components/intro/Intro";
import Navbar from './components/nav/Navbar';
import Resources from './components/resources/Resources';
import Sankey from './components/sankey/Sankey';
import Timeline from './components/timeline/Timeline';
import Hamburger from './components/nav/Hamburger';


const App = () => {
  return(
    <div>
      <Intro />
      <Navbar />
      <Hamburger />
      <Budget />
      <Sankey />
      <Timeline />
      <Faq />
      <Resources />
      <Footer />
    </div>
  );
}

export default App;
