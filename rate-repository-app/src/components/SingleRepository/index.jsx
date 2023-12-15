import { useParams } from 'react-router-native';
import { StyleSheet, FlatList } from 'react-native';


import useSingleRepository from '../../hooks/useSingleRepository';

import RepositoryInfo from './RepositoryInfo';
import ReviewItem from './ReviewItem';
import Text from '../Text';

const styles = StyleSheet.create({
    loading: {
        alignSelf: "center",
        marginTop: 15
    },
});


const SingleRepository = () => {
    const { id } = useParams();
    const { loading, error, repository, reviews } = useSingleRepository(id);

    if (loading) {
        return <Text fontWeight="bold" fontSize="subheading" style={styles.loading}>
            Loading...
        </Text>;
    }
    
    if (error) {
        return <Text>Error: {error.message}</Text>;
    }

    return (
        <FlatList 
            data={reviews}
            renderItem={({ item }) => <ReviewItem review={item} />}
            keyExtractor={({ id }) => id}
            ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
        />
    );
};

export default SingleRepository;