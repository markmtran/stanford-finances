import BudgetDesc from "./BudgetDesc";
import BudgetRevenue from "./BudgetRevenuePie";
import BudgetExpense from "./BudgetExpensePie";

const Budget = () => {
  return(
    <div id="budget" >
      <BudgetDesc />
      <div id="budget-graphic-div">
        <BudgetRevenue />
        <div style={{height: 300}} />
        <BudgetExpense />
      </div>
    </div>
    
  );
}

export default Budget;