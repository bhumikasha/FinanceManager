import { useContext, useEffect, useLayoutEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import ExpenseForm from '../components/ManageExpense/ExpenseForm';
import IconButton from '../components/UI/IconButton';
import Loading from '../components/UI/Loading';
import { GlobalStyles } from '../constants/styles';
import { ExpensesContext } from '../store/ExpensesContext';
import Email from '../util/email';
import { deleteExpense, storeExpense, updateExpense } from '../util/http';

function ManageExpenses({route, navigation}) { //Since this is a screen component, we will directly have the navigation prop
    const [sendMail, setSendMail] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    
    const expensesCtx = useContext(ExpensesContext)
    
    const editedExpenseId = route.params?.expenseId; //checks if params is defined
    const isEditing = !!editedExpenseId; //convert value into a bool: !val would be false and !! would be true

    const selectedExpense = expensesCtx.expenses.find(
        (expense) => expense.id === editedExpenseId
    )

    useLayoutEffect(() => {
        //We should not call setOptions directly in a component, should be always used with UseEffect or UseLayoutEffect
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense'
        });
    }, [navigation, isEditing]);

    async function deleteExpenseHandler() {
        setIsSubmitting(true);
        await deleteExpense(editedExpenseId);
        // setIsSubmitting(false);
        expensesCtx.deleteExpense(editedExpenseId);
        navigation.goBack();
    }

    function cancelHandler() {
        navigation.goBack();
    }

    async function confirmHandler(expenseData) {
        setIsSubmitting(true);
        if(isEditing) {
            //Editing an expense
            expensesCtx.updateExpense(editedExpenseId, expenseData);
            await updateExpense(editedExpenseId, expenseData);
        } else {
            //Adding an expense
            const id = await storeExpense(expenseData);
            expensesCtx.addExpense({...expenseData, id: id});
        }
        navigation.goBack();
    }

    if(isSubmitting) {
        return <Loading />
    }

    return (<View style={styles.container}>
    <ExpenseForm onCancel={cancelHandler} submitButtonLabel={isEditing ? 'Update' : 'Add'} onSubmit={confirmHandler} defaultValues = {selectedExpense}/>
        {isEditing && <View style={styles.deleteContainer}>
        <IconButton icon="trash" color={GlobalStyles.colors.error500} size={36} onPress={deleteExpenseHandler}/>
        </View>
        }
    </View>);
}

export default ManageExpenses;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: "#f6f6f6"
    },
    deleteContainer: {
        paddingTop: 8,
        backgroundColor: GlobalStyles.colors.primary700,
        alignItems: 'center'
    }
})