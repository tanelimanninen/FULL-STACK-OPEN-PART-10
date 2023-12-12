import useRepositories from '../../hooks/useRepositories';
import { FlatList, View, StyleSheet } from 'react-native';

import RepositoryItem from './RepositoryItem';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  container: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  }
});


const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const { repositories } = useRepositories();

  // Get the nodes from the edges array
  const repositoryNodes = repositories
    ? repositories.map(repo => repo.node)
    : [];

  return (
    <View style={styles.container}>
      <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => <RepositoryItem repository={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
    
  );
};

export default RepositoryList;