import { View, Text, TextInput, StyleSheet } from 'react-native';
import { GlobalStyles } from '../../constants/styles';


function InputAuth({
  label,
  keyboardType,
  secure,
  onUpdateValue,
  value,
  isInvalid,
}) {
  return (
    <View style={styles.inputContainer}>
      <Text style={[styles.label, isInvalid && styles.labelInvalid]}>
        {label}
      </Text>
      <TextInput
        style={[styles.input, isInvalid && styles.inputInvalid]}
        autoCapitalize={false}
        autoCapitalize="none"
        keyboardType={keyboardType}
        secureTextEntry={secure}
        onChangeText={onUpdateValue}
        value={value}
      />
    </View>
  );
}

export default InputAuth;

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 8,
  },
  label: {
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 4,
    fontSize: 15
  },
  labelInvalid: {
    color: GlobalStyles.colors.error500,
  },
  input: {
    paddingVertical: 8,
    paddingHorizontal: 6,
    backgroundColor: GlobalStyles.colors.primary700,
    borderRadius: 4,
    fontSize: 16,
    elevation: 5
  },
  inputInvalid: {
    backgroundColor: GlobalStyles.colors.primary500,
  },
});