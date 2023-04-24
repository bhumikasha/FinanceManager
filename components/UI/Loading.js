import { View, ActivityIndicator, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function Loading() {
    return (
    <View style={styles.container}>
        <ActivityIndicator size="large" color="black" />
    </View>
    );
}

export default Loading;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary400,
    }
})