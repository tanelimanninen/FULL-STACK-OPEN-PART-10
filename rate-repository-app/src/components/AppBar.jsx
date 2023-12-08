import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';

import theme from '../theme';

import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 25,
    paddingStart: 4,
    backgroundColor: theme.colors.primary
  },
});

const pressAlert = () => {
  console.log("Pressable pushed!");
};

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <AppBarTab text="Repositories" route="/" onPress={pressAlert} />
        <AppBarTab text="Sign In" route="/sign-in" onPress={pressAlert} />
      </ScrollView>
      
    </View>
  );
};

export default AppBar;