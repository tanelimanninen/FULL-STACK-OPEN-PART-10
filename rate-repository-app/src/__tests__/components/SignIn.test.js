import { Text, View, Pressable } from 'react-native';
import { Formik } from 'formik';
import FormikTextInput from '../../components/SignIn/FormikTextInput';
import { render, screen, fireEvent, waitFor } from '@testing-library/react-native';


const SignIn = ({ onSubmit }) => {
    const initialValues = {
        username: '',
        password: '',
    };
  
    return (
      <View>
          <Text>Sign In</Text>
          <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
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
              />
              <Pressable onPress={handleSubmit}>
                <Text>Submit</Text>
              </Pressable>
            </>
          )}
        </Formik>
      </View>
    );
  };

describe('SignIn', () => {
  describe('SignInContainer', () => {
    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
      // render the SignInContainer component, fill the text inputs and press the submit button
      const onSubmit = jest.fn();
      render(<SignIn onSubmit={onSubmit} />);

      //WRITE TO INPUTS AND PUSH SUBMIT-BUTTON
      fireEvent.changeText(screen.getByPlaceholderText("Username"), "matti");
      fireEvent.changeText(screen.getByPlaceholderText("Password"), "password");
      fireEvent.press(screen.getByText('Submit'));

      screen.debug();

      await waitFor(() => {

        expect(onSubmit).toHaveBeenCalledTimes(1);

        expect(onSubmit.mock.calls[0][0]).toEqual({
            username: 'matti',
            password: 'password',
        })
      });
    });
  });
});