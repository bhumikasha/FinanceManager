import { StyleSheet, Text, View} from "react-native";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

function ExpensesOutput({expenses, expensesPeriod, fallbackText}) {
    let content;

    if(expenses.length <= 0) {
        content = <Text style={styles.infoText}>{fallbackText}</Text>
    }

    return (
        <View style={styles.container}>
            {/* Summary */}
            <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
            {content}
            {/* List of Expenses */}
            <ExpensesList expenses={expenses} />
        </View>
    )
}

export default ExpensesOutput;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 40
    },
    infoText: {
        color: '#787878',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 32,
        fontWeight: "bold"
    }
})