import { Pressable, StyleSheet } from 'react-native';
import { Link } from "react-router-native";

import Text from './Text';

const styles = StyleSheet.create({
  tab: {
    paddingStart: 12,
  },
});

const AppBarTab = ({ text, route, onPress }) => {
    return (
        <Pressable onPress={onPress}>
          <Link to={route}>
            <Text fontWeight="bold" fontSize="heading" color="textPrimary" style={styles.tab}>
                {text}
            </Text>
            </Link>
        </Pressable>
    );
};

export default AppBarTab;