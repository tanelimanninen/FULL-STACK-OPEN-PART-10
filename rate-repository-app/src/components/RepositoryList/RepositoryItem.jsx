import { useNavigate } from "react-router-dom";

import { View, StyleSheet, Image, Pressable } from 'react-native';

import { formatNumber } from "../../functions";
import { ratingNumber } from "../../functions";
import theme from '../../theme';
import Text from '../Text';


const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        flexGrow: 1,
        padding: 15,
        backgroundColor: theme.colors.cardBG,
        borderRadius: 10 / 2,
        borderColor: theme.colors.borderCard,
        borderWidth: 1
    },
    avatar: {
        width: 45,
        height: 45,
        borderRadius: 45 / 2,
      },
    headerContainer: {
        flexDirection: "row",
        flexGrow: 1,
        marginBottom: 10
    },
    avatarContainer: {
        flexGrow: 0,
        paddingRight: 15,
    },
    userInfoContainer: {
        flexGrow: 1,
        maxWidth: 175
    },
    languageContainer: {
        flexGrow: 1,
        alignItems: "center",
        maxWidth: 90,
        maxHeight: 25,
        backgroundColor: theme.colors.languageBG,
        borderRadius: 5,
    },
    statsContainer: {
        flexDirection: 'row',
        flexGrow: 1,
        justifyContent: 'space-around',
    },
    statContainer: {
        flexGrow: 0,
        alignItems: "center"
    }
});


const CardHeader = ({ image, name, description, language }) => {
    return (
        <View style={styles.headerContainer}>
            <View style={styles.avatarContainer}>
                <Image style={styles.avatar} source={{ uri: image }} />
            </View>
            <View style={styles.userInfoContainer}>
                <Text fontWeight="bold" fontSize="subheading">{name}</Text>
                <Text fontWeight="normal" fontSize="body">{description}</Text>
            </View>
            <View style={styles.languageContainer}>
                <Text color="textThird" fontWeight="normal" fontSize="subheading">{language}</Text>
            </View>
        </View>
    );
}

const CardStats = ({ stars, forks, reviews, rating }) => {
    return (
        <View style={styles.statsContainer}>
            <View style={styles.statContainer}>
                <Text fontWeight="bold" fontSize="subheading">{formatNumber(stars)}</Text>
                <Text fontSize="subheading">Stars</Text>
            </View>

            <View style={styles.statContainer}>
                <Text fontWeight="bold" fontSize="subheading">{formatNumber(forks)}</Text>
                <Text fontSize="subheading">Forks</Text>
            </View>

            <View style={styles.statContainer}>
                <Text fontWeight="bold" fontSize="subheading">{reviews}</Text>
                <Text fontSize="subheading">Reviews</Text>
            </View>

            <View style={styles.statContainer}>
                <Text fontWeight="bold" fontSize="subheading">{ratingNumber(rating)}</Text>
                <Text fontSize="subheading">Rating</Text>
            </View>
        </View>
    )
}


const RepositoryItem = ({ repository }) => {
    const navigate = useNavigate();

    if (!repository) {
        return <Text>Repository not found</Text>;
    }

    const handlePress = () => {
        navigate(`/repository/${repository.id}`);
    };

    return (
        <Pressable onPress={handlePress}>
            <View style={styles.container} testID="repositoryItem">
                <CardHeader 
                    image={repository.ownerAvatarUrl}
                    name={repository.fullName}
                    description={repository.description}
                    language={repository.language}
                />

                <CardStats
                    stars={repository.stargazersCount}
                    forks={repository.forksCount}
                    reviews={repository.reviewCount}
                    rating={repository.ratingAverage}
                />
            </View>
        </Pressable>
    );
};

export default RepositoryItem;