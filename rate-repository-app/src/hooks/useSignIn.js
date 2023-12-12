import { useMutation, useApolloClient } from "@apollo/client";
import { AUTHENTICATE_USER } from "../graphql/mutations";
import useAuthStorage from "./useAuthStorage";


const useSignIn = () => {
    const authStorage = useAuthStorage();
    const [mutate, result] = useMutation(AUTHENTICATE_USER);
    const apolloClient = useApolloClient();
  
    const signIn = async ({ username, password }) => {
        const { data, error } = await mutate({
            variables: {
                credentials: {
                    username,
                    password,
                },
            },
        });

        //TOKEN FROM THE RESPONSE
        const accessToken = data?.authenticate?.accessToken?.toString();
        console.log("access token: ", accessToken);

        if (accessToken) {
            //STORE IN ASYNC STORAGE
            await authStorage.setAccessToken(accessToken);

            //RESET APOLLO CLIENT STORE
            await apolloClient.resetStore();

            console.log('Token set to Async Storage');
        }
      
        return { data, error };          
    };
  
    return [signIn, result];
};

export default useSignIn;