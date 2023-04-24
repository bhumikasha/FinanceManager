import { StyleSheet, View, Text } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import ChartF from "../../util/charts";
import Email from "../../util/email";

function ExpensesSummary({expenses, periodName}) {
    const expensesSum = expenses.reduce((sum, expense) => {
        return sum + expense.amount;
    }, 0);
    
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.period}> {periodName} </Text>
                <Text style={expensesSum > 0 ? styles.sum : styles.negativesum}> ₹{expensesSum.toFixed(2)} </Text>
            </View> 

            <View style={styles.rowAlign}>
                <ChartF expenses={expenses}/>
            </View>
        </>
    );
}

export default ExpensesSummary;

const styles = StyleSheet.create({
    rowAlign: {
        flexDirection: 'row',
    },
    container: {
        backgroundColor: GlobalStyles.colors.primary700,
        alignItems: "center",
    },
    period: {
        fontSize: 18,
        textAlign: "left",
        fontWeight: "bold",
        color: GlobalStyles.colors.gray500,
        verticalAlign: "top"
    },
    sum: {
        fontSize: 26,
        fontWeight:900,
        color: GlobalStyles.colors.primary50
    },
    negativesum: {
        fontSize: 26,
        fontWeight: 900,
        color: GlobalStyles.colors.error500 
    }
})