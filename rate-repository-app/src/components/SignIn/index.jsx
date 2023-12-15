import useSignIn from '../../hooks/useSignIn';
import { View, StyleSheet, Pressable, Alert } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from "react-router-dom";

import theme from '../../theme';

import Text from '../Text';
import FormikTextInput from './FormikTextInput';

const styles = StyleSheet.create({
    container: {
      padding: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    heading: {
        marginBottom: 15
    },
    button: {
        padding: 7,
        marginTop: 20,
        backgroundColor: theme.colors.languageBG,
        borderColor: theme.colors.border,
        borderWidth: 2,
        borderRadius: 5,
    }
});


const initialValues = {
    username: '',
    password: '',
};


const validationSchema = yup.object().shape({
    username: yup.string().required('Username is required'),
    password: yup.string().required('Password is required'),
});


const SignIn = () => {
  const [signIn] = useSignIn();

  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const { data } = await signIn({ username, password });
      console.log("Authentication successful", data);

      navigate("/");
    } catch (e) {
      console.log("Error during authentication", e);
      Alert.alert('Error', 'Failed to sign in. Please try again.');
    }


  };

  return (
    <View style={styles.container}>
        <Text style={styles.heading} fontWeight="bold" fontSize="heading">Sign In</Text>

        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {({ handleSubmit }) => (
          <>
            <FormikTextInput
              name="username"
              placeholder="Username"
            />
            <FormikTextInput
              name="password"
              placeholder="Password"
              secureTextEntry
            />
            <Pressable style={styles.button} onPress={handleSubmit}>
              <Text color="textThird" fontSize="subheading">Sign In</Text>
            </Pressable>
          </>
        )}
      </Formik>
    </View>
  );
};


export default SignIn;