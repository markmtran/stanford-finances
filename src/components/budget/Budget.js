import BudgetDesc from "./BudgetDesc";
import BudgetRevenue from "./BudgetRevenuePie";
import BudgetExpense from "./BudgetExpensePie";
import { useEffect, useState } from "react";

const Budget = () => {
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
  const divHeight = () => {
    return width < 750 ? 200 : 300;
  }

  return(
    <div id="budget" >
      <BudgetDesc />
      <div id="budget-graphic-div">
        <BudgetRevenue />
        <div style={{height: divHeight()}} />
        <BudgetExpense />
      </div>
    </div>
    
  );
}

export default Budget;