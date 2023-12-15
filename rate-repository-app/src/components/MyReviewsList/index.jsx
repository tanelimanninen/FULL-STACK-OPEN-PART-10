import { FlatList } from 'react-native';

import useMe from '../../hooks/useMe';
import MyReviewItem from './MyReviewItem';
import Text from '../Text';



const MyReviews = () => {
    const { loading, error, data } = useMe(true);

    if (loading) {
        return (
            <Text fontSize="subheading" fontWeight="bold">
                Loading...
            </Text>
        )
    }

    if (error) {
        console.error(error);
        return (
            <Text fontSize="subheading" fontWeight="bold">
                Error loading reviews
            </Text>
        )
    }

    const user = data?.me;
    const reviews = user?.reviews?.edges || [];

    return (
        <FlatList
            data={reviews}
            keyExtractor={(item) => item.node.id}
            renderItem={({ item }) => (
                <MyReviewItem item={item} />
            )}
        />
    )
};

export default MyReviews;