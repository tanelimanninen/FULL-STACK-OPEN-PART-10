import { StyleSheet, View, Pressable, Alert } from "react-native";
import * as yup from 'yup';
import { useNavigate } from "react-router-dom";

import useSignUp from "../hooks/useSignUp";
import useSignIn from "../hooks/useSignIn";
import Text from "./Text";
import { Formik } from 'formik';
import FormikTextInput from "./SignIn/FormikTextInput";

import theme from "../theme";

const styles = StyleSheet.create({
    container: {
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center'
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

//VALIDATION FOR INPUT DATA FIELDS
const validationSchema = yup.object().shape({
    username: yup
      .string()
      .required()
      .min(5, "Username min. 5 characters")
      .max(30, "Username max 30 characters"),
    password: yup
      .string()
      .required()
      .min(5, "Password min. 5 characters")
      .max(50, "Password max 50 characters"),
    confirm_password: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Passwords must match')
      .required('Password confirmation is required'),
});


const SignUp = () => {
    const [signUp] = useSignUp();
    const [signIn] = useSignIn();
    const navigate = useNavigate();

    const handleSubmit = async (values) => {
        const { username, password } = values;

        try {
            //CREATE NEW USER
            await signUp({ username, password });
            console.log("new user created", username);
            //ALSO SIGN IN NEW USER
            await signIn({ username, password })
            console.log("new user signed in", username);
            //NAVIGATE TO LIST VIEW
            navigate("/");
        } catch (error) {
            // Handle sign-up error, e.g., show an alert with the error message
            Alert.alert('Error', 'Failed to sign up. Please try again.');
        }

    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading} fontWeight="bold" fontSize="heading">
                Sign Up
            </Text>

            <Formik
              initialValues={{
                username: '',
                password: '',
                confirm_password: ''
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
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
                    <FormikTextInput 
                      name="confirm_password"
                      placeholder="Password confirmation"
                      secureTextEntry
                    />
                    <Pressable style={styles.button} onPress={handleSubmit}>
                      <Text color="textThird" fontSize="subheading">
                        Sign Up
                      </Text>
                    </Pressable>      
                  </>
                )}
          </Formik>
        </View>
    )
};

export default SignUp;