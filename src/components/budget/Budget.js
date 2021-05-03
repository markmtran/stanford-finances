import BudgetDesc from "./BudgetDesc";
import BudgetRevenue from "./BudgetRevenue";
import BudgetExpense from "./BudgetExpense";

const Budget = () => {
  return(
    <div id="budget">
      <BudgetDesc />
      <BudgetRevenue />
      <BudgetExpense />
    </div>
    
  );
}

export default Budget;