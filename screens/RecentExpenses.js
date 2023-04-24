import { useContext, useEffect, useState } from "react";
import ExpensesOutput from "../components/expenses/ExpensesOutput";
import Loading from "../components/UI/Loading";
import { ExpensesContext } from "../store/ExpensesContext";
import { getDateMinusDays } from "../util/date";
import { fetchExpenses } from "../util/http";

function RecentExpenses() {
    const [isFetching, setIsFetching] = useState(true);

    const expensesCtx = useContext(ExpensesContext);

    useEffect(()=>{
        async function getExpenses() {
            setIsFetching(true);
            const expenses = await fetchExpenses();
            setIsFetching(false);
            expensesCtx.setExpenses(expenses);
        }
        getExpenses();
    }, []);

    if(isFetching) {
        return <Loading />
    }

    const recentExpenses = expensesCtx.expenses.filter((expense) => {
        const today = new Date();
        const date7DaysAgo = getDateMinusDays(today, 7);

        return expense.date > date7DaysAgo;
    });
    return (
    <ExpensesOutput expenses={recentExpenses} expensesPeriod="Last 7 days" fallbackText="Please register an Expense to continue"/>
    );
}

export default RecentExpenses;