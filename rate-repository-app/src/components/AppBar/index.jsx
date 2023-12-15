import { View, StyleSheet, ScrollView, Pressable } from 'react-native';
import Constants from 'expo-constants';

import theme from '../../theme';

import useMe from '../../hooks/useMe';
import useAuthStorage from '../../hooks/useAuthStorage';
import { useApolloClient } from '@apollo/client';
import AppBarTab from './AppBarTab';
import Text from '../Text';

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 25,
    paddingStart: 4,
    backgroundColor: theme.colors.primary
  },
  signOut: {
    marginStart: 6,
    marginEnd: 10
  }
});


const AppBar = () => {
  const { data } = useMe();
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const handleSignOut = async () => {
    //REMOVE CURRENT ACCESS TOKEN
    await authStorage.removeAccessToken();
    //RESET APOLLO CLIENT STORE
    await apolloClient.resetStore();

    console.log("Access token removed and APOLLO CLIENT STORE IS RESET");
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <AppBarTab text="Repositories" route="/" />
        
        {data?.me && (
          <>
            <AppBarTab text="Create Review" route="/create-review" />
            <AppBarTab text="My Reviews" route="/my-reviews" />
          </>
        )}

        {data?.me ? (
          <Pressable onPress={handleSignOut}>
            <Text fontWeight="bold" fontSize="heading" style={styles.signOut}>Sign Out</Text>
          </Pressable>
          ) : (
            <>
              <AppBarTab text="Sign In" route="/sign-in" />
              <AppBarTab text="Sign Up" route="/sign-up" />
            </>
        )}
      </ScrollView>
      
    </View>
  );
};

export default AppBar;