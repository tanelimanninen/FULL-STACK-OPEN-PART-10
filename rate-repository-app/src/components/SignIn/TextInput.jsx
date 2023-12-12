import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

import theme from '../../theme';

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 200,
    backgroundColor: theme.colors.cardBG,
    borderColor: theme.colors.borderInput,
    borderWidth: 2,
    borderRadius: 5,
    padding: 5,
    marginTop: 10,
  },
  errorInput: {
    borderColor: 'red',
  },
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [styles.input, style, error && styles.errorInput];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;