import { StyleSheet, Text, TextInput, View } from "react-native";
import {GlobalStyles} from '../../constants/styles';

function Input({label, invalid, style, textInputConfig}) {

    const inputStyles = [styles.input];

    if(textInputConfig && textInputConfig.multiline){
        inputStyles.push(styles.inputMultiline);
    }

    if(invalid) {
        inputStyles.push(styles.invalidInput);
    }

    return(
        <View style={styles.inputContainer}>
            <Text style={styles.label}>{label}</Text>
            <TextInput style={inputStyles} {...textInputConfig}/>
        </View>
    )
}

export default Input;

const styles = StyleSheet.create({
    inputContainer: {
        marginHorizontal: 4,
        marginVertical: 2
    },
    label: {
        fontSize: 16,
        color: GlobalStyles.colors.gray900,
        fontWeight: "bold",
        marginBottom: 4,
    },
    input: {
        backgroundColor: GlobalStyles.colors.primary400,
        padding: 7,
        borderRadius: 6,
        fontSize: 18,
        color: GlobalStyles.colors.accent500,
        marginBottom: 20,
        elevation: 5,
        fontWeight: "bold"
    },
    inputMultiline: {
        minHeight: 100,
        textAlignVertical: 'top',
    },
    invalidInput: {
        color: GlobalStyles.colors.error500,
        fontWeight: "500",
        backgroundColor: GlobalStyles.colors.error50
    }
})