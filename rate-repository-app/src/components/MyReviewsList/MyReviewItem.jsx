import { StyleSheet, View } from 'react-native';

import { ratingNumber, formatDate } from '../../functions';
import Text from '../Text';
import theme from '../../theme';

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

const MyReviewItem = ({ item }) => {
    return (
        <View style={styles.reviewContainer} key={item.node.id}>
            <View style={styles.reviewHeader}>
                <View style={styles.reviewRating}>
                    <Text color="textSecondary" fontSize="heading">{ratingNumber(item.node.rating)}</Text>
                </View>

                <View style={styles.reviewUser}>
                    <Text fontWeight="bold">{item.node.repository.ownerName}/{item.node.repository.name}</Text>
                    <Text color="textSecondary" fontWeight="normal">{formatDate(item.node.createdAt)}</Text>
                </View>
            </View>

            <View style={styles.reviewText}>
                <Text>{item.node.text}</Text>
            </View>
        </View>
    )
};

export default MyReviewItem;