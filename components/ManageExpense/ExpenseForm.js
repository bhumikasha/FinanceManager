import { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { getFormattedDate } from "../../util/date";
import Button from "../UI/Button";
import Input from "./Input";

function ExpenseForm({submitButtonLabel, onCancel, onSubmit, defaultValues}) {
    const [inputs, setInputs] = useState({
        amount: { 
            value: defaultValues ? defaultValues.amount.toString() : '',
            isValid: true
        },
        date: {
            value: defaultValues ? getFormattedDate(defaultValues.date) : '',
            isValid: true
        },
        description: {
            value: defaultValues ? defaultValues.description : '',
            isValid: true
        }
    });

    function inputChangedHandler(inputIdentifier, enteredValue) { //Only first value should be set as the target property
        setInputs((currentInput) => {
            return {
                ...currentInput,
                [inputIdentifier]: {value: enteredValue, isValid: true}
            }
        })
    }

    function submitHandler() {
        const expenseData = {
            amount: +inputs.amount.value, //+ converts string to a number
            date: new Date(inputs.date.value),
            description: inputs.description.value
        };

        const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
        const dateIsValid = expenseData.date.toString() !== 'Invalid Date';
        const descriptionIsValid = expenseData.description.trim().length > 0;

        if(!amountIsValid || !dateIsValid || !descriptionIsValid){
            // Alert.alert('Invalid Input', 'Please check your input values');
            setInputs((currentInputs) => {
                return {
                    amount: { value: currentInputs.amount.value, isValid: amountIsValid},
                    date: { value: currentInputs.date.value, isValid: dateIsValid},
                    description: {value: currentInputs.description.value, isValid: descriptionIsValid}
                }
            })
            return;
        }

        onSubmit(expenseData);
    }

    const formIsInvalid = !inputs.amount.isValid || !inputs.date.isValid || !inputs.description.isValid;

    return(
        <View style={styles.container}>
            <Input label="Amount" textInputConfig={{
                keyboardType: 'decimal-pad',
                onChangeText: inputChangedHandler.bind(this, 'amount'), //Target amount property of state
                value: inputs.amount.value,
            }}
            invalid= {!inputs.amount.isValid}
            />
            <Input label="Date" textInputConfig={{
                placeholder: 'YYYY-MM-DD',
                maxLength: 10,
                onChangeText: inputChangedHandler.bind(this, 'date'), //Target amount property of state
                value: inputs.date.value
            }}
            invalid= {!inputs.date.isValid}
            />
            <Input label="Description" textInputConfig={{
                multiline: true,
                onChangeText: inputChangedHandler.bind(this, 'description'), //Target amount property of state
                value: inputs.description.value
            }}
            invalid= {!inputs.description.isValid}
            />
            {formIsInvalid && <Text style={styles.errorText}>Invalid Input</Text>}
            <View style={styles.alignTogether}>
                <Button style={styles.button} mode="flat" onPress={onCancel}>Cancel</Button>
                <Button style={styles.button} onPress={submitHandler}>{submitButtonLabel}</Button>
            </View>
        </View>
    )
}

export default ExpenseForm;

const styles = StyleSheet.create({
    container: {
        backgroundColor: GlobalStyles.colors.primary700,
        padding: 30
    },
    alignTogether:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: GlobalStyles.colors.primary700,
        paddingTop: 20
    },
    button: {
        minWidth: 120,
        marginHorizontal: 8
    },
    errorText: {
        color: GlobalStyles.colors.error500,
        fontWeight: "bold",
        textAlign: "center"
    }
})