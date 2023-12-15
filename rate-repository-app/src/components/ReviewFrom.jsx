import { View, StyleSheet, Pressable, Alert } from "react-native";
import * as yup from 'yup';
import useAddReview from "../hooks/useAddReview";
import { useNavigate } from "react-router-dom";

import theme from "../theme";

import Text from "./Text"
import { Formik } from 'formik';
import FormikTextInput from "./SignIn/FormikTextInput";


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
    },
});

//VALIDATION FOR INPUT DATA FIELDS
const validationSchema = yup.object().shape({
    ownerName: yup.string().required('Repository owner name is required'),
    repositoryName: yup.string().required('Repository name is required'),
    rating: yup
      .number()
      .required('Rating is required')
      .min(0, 'Rating must be at least 0')
      .max(100, 'Rating must be at most 100'),
    review: yup.string(),
});



const ReviewForm = () => {
    const [addReview] = useAddReview();
    const navigate = useNavigate();

    //ERROR HERE
    const handleSubmit = async (values) => {
        //console.log('Formik values: ', values);
        const { ownerName, repositoryName, rating, review } = values;
      
        try {
          const response = await addReview({
            ownerName,
            repositoryName,
            rating: parseInt(rating),
            text: review || '',
          });

          //console.log("Data from ReviewForm HandleSubmit: ", response);
          //GET THE REPOSITORY ID FROM RESULT
          const repositoryId = response.repositoryId;
          //console.log(repositoryId);

          //NAVIGATE TO REPOSITORY VIEW
          navigate(`/repository/${repositoryId}`);
        } catch (error) {
          //Handle error, e.g., show an alert
          Alert.alert('Error', 'Failed to create review. Please try again.');
        }
    };
        
    return (
        <View style={styles.container}>
          <Text style={styles.heading} fontWeight="bold" fontSize="heading">
            Create a Review
          </Text>

          <Formik
            initialValues={{
              ownerName: '',
              repositoryName: '',
              rating: '',
              review: '',
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ handleSubmit }) => (
              <>
                <FormikTextInput
                  name="ownerName"
                  placeholder="Repository owner name"
                />
                <FormikTextInput
                  name="repositoryName"
                  placeholder="Repository name"
                />
                <FormikTextInput 
                  name="rating"
                  placeholder="Rating (0-100)"
                />
                <FormikTextInput 
                  name="review"
                  placeholder="Review"
                />
                <Pressable style={styles.button} onPress={handleSubmit}>
                <Text color="textThird" fontSize="subheading">
                    Create
                </Text>
                </Pressable>      
              </>
            )}
          </Formik>
        </View>


    );
};

export default ReviewForm;