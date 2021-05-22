import BudgetDesc from "./BudgetDesc";
import BudgetRevenue from "./BudgetRevenue";
import BudgetExpense from "./BudgetExpense";

const Budget = () => {
  return(
    <div id="budget" >
      <BudgetDesc />
      <div id="budget-graphic-div">
        <BudgetRevenue />
        <BudgetExpense />
      </div>
    </div>
    
  );
}

export default Budget;