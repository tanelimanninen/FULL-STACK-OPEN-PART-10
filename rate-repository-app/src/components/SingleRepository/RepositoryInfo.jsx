import { StyleSheet, View, Pressable, Linking } from 'react-native';

import RepositoryItem from '../RepositoryList/RepositoryItem';
import Text from '../Text';

import theme from '../../theme';

const styles = StyleSheet.create({
    infoContainer: {
        padding: 10,
        marginTop: 15
    },
    button: {
        alignItems: "center",
        padding: 7,
        marginTop: 20,
        backgroundColor: theme.colors.languageBG,
        borderColor: theme.colors.border,
        borderWidth: 2,
        borderRadius: 5,
    },
})

const RepositoryInfo = ({ repository }) => {
    const handlePress = () => {
        console.log("Git button pushed")

        if (repository.url) {
            Linking.openURL(repository.url)
        } else {
            console.warn("Repository is not available")
        }
    };

    return (
        <View style={styles.infoContainer}>
            <RepositoryItem repository={repository} />
            
            <Pressable style={styles.button} onPress={handlePress}>
              <Text color="textThird" fontSize="subheading">GitHub</Text>
            </Pressable>
        </View>
    );
};

export default RepositoryInfo;