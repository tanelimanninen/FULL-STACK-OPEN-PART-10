import { useQuery } from "@apollo/client";

import { GET_ME } from "../graphql/queries";
import useAuthStorage from "./useAuthStorage";

const useMe = () => {
    const authStorage = useAuthStorage();

    const { loading, error, data } = useQuery(GET_ME, {
        context: async ({ headers }) => {
          try {
            const accessToken = await authStorage.getAccessToken();

            return {
              headers: {
                ...headers,
                authorization: accessToken ? `Bearer ${accessToken}` : '',
              },
            };
          } catch (e) {
            console.log(e);

            return {
              headers,
            };
          }
        },
    });

    return {
        loading,
        error,
        data,
    };
};

export default useMe;