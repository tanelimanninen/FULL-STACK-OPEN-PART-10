import { useMutation } from '@apollo/client';
import { ADD_REVIEW } from '../graphql/mutations';

//THIS SHOULD BE OK
const useAddReview = () => {
  const [mutate, result] = useMutation(ADD_REVIEW);

  const addReview = async (review) => {
    try {
        const response = await mutate({ variables: { review } });
        //console.log("data from useAddReview: ", response);

        return response.data.createReview;
      } catch (error) {
        // Handle the error here
        console.error('Error adding review:', error);

        throw error; // Re-throw the error to propagate it to the caller
      }
  };


  return [addReview, result];
};

export default useAddReview;
