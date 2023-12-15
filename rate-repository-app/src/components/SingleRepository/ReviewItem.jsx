import { StyleSheet, View } from 'react-native';
import Text from '../Text';
import theme from '../../theme';

import { formatDate } from '../../functions';
import { ratingNumber } from '../../functions';

const styles = StyleSheet.create({
    reviewContainer: {
        flexDirection: "column",
        flexGrow: 1,
        padding: 25,
        margin: 10,
        backgroundColor: theme.colors.cardBG,
        borderRadius: 10 / 2,
        borderWidth: 0.5,
        borderColor: theme.colors.borderCard
    },
    reviewHeader: {
        flexDirection: "row",
        flexGrow: 0,
        alignItems: "center",
        marginBottom: 20
    },
    reviewRating: {
        flexGrow: 0,
        width: 45,
        height: 45,
        justifyContent: "center",
        alignItems: "center",
        borderColor: theme.colors.languageBG,
        borderWidth: 2,
        borderRadius: 22.5,
        padding: 5
    },
    reviewUser: {
        flexGrow: 1,
        paddingStart: 20
    },
    reviewText: {
        marginBottom: 10,
        maxWidth: 300,
        alignItems: "flex-start",
    }
});

const ReviewItem = ({ review }) => {
    return (
        <View style={styles.reviewContainer}>
            <View style={styles.reviewHeader}>
                <View style={styles.reviewRating}>
                    <Text color="textSecondary" fontSize="heading">{ratingNumber(review.rating)}</Text>
                </View>

                <View style={styles.reviewUser}>
                    <Text fontWeight="bold">{review.user.username}</Text>
                    <Text color="textSecondary" fontWeight="normal">{formatDate(review.createdAt)}</Text>
                </View>
            </View>

            <View style={styles.reviewText}>
                <Text>{review.text}</Text>
            </View>
        </View>
    );
};

export default ReviewItem;