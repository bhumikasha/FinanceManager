import { StyleSheet, Pressable, View, Text } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { getFormattedDate } from "../../util/date";
import { useNavigation } from '@react-navigation/native';

function ExpenseItem({id, description, amount, date}) {
    // Since this component is not directly used as a screen and is somewhere used internally
    // so, it'll not have default navigation prop, that gets passed by default to the components
    // that's why we will have to use useNavigation Hook to navigate to different component(s)
    const navigation = useNavigation();

    function expensePressHandler(){
        navigation.navigate('ManageExpense', {
            expenseId: id //This id to be fetched in ManagedExpenses
        });
    };

    return <Pressable onPress={expensePressHandler} 
    style={({pressed})=> pressed && styles.pressed}
    >
    <View style={styles.container}>
        <View style={styles.expenseItem}>
            <Text style={amount>0 ? [styles.textBase, styles.description] : styles.negativeAmount}>{description}</Text>
            <Text style={amount>0 ? styles.textBase : styles.negativeAmount}>{getFormattedDate(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
            <Text style={amount>0 ? styles.amount : styles.negativeAmount}>{amount.toFixed(2)}</Text>
        </View>
    </View>
    </Pressable>
}

export default ExpenseItem;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: GlobalStyles.colors.primary700,
        flex:1,
        marginBottom: 8,
        borderRadius: 10,
        
        shadowColor: GlobalStyles.colors.primary50,
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 4
    },
    expenseItem: {
        padding: 12,
        justifyContent: "space-between",
        elevation: 1,
    },
    textBase: {
        color: GlobalStyles.colors.primary50
    },
    description: {
        fontSize: 16,
        marginBottom: 4,
        fontWeight: "bold"
    },
    amountContainer: {
        backgroundColor: 'white',
        padding: 8,
        marginHorizontal: 10,
        flex:1,
        maxWidth: 100,
        marginLeft: "auto",
        alignSelf: "center",
        borderRadius: 6
    },
    amount: {
        color: GlobalStyles.colors.primary50,
        fontWeight: 900
    },
    negativeAmount: {
        color: GlobalStyles.colors.error500,
        fontWeight: 900,
        fontSize: 16
    },
    pressed: {
        opacity: 0.75
    }
});