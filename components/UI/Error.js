import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function Error({message}) {
    return (
        <View style={styles.container}>
            <Text style={[styles.text, styles.title]}>An Error Occured</Text>
            <Text style={styles.text}> {message}</Text>
        </View>
        );
}

export default Error;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary400,
    },
    text: {
        textAlign: "center",
        marginBottom: 8
    },
    title: {
        fontSize: 20,
        fontWeight: "bold"
    }
})