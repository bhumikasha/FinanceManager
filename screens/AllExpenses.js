import { useContext } from "react";
import ExpensesOutput from "../components/expenses/ExpensesOutput";
import { ExpensesContext } from "../store/ExpensesContext";

function AllExpenses() {
    const expensesCtx = useContext(ExpensesContext);
    return <ExpensesOutput expenses={expensesCtx.expenses} expensesPeriod="Total" fallbackText="No Fallback expenses found"/>
}

export default AllExpenses;