import { useState, Component } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';

import useRepositories from '../../hooks/useRepositories';
import RepositoryItem from './RepositoryItem';
import Search from './Search';
import Selection from './Selection';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  container: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});


const ItemSeparator = () => <View style={styles.separator} />;

//OLD VERSION OF COMPONENT
/*export const RepositoryListContainer = ({ repositories, selectedOrder, setOrder }) => {
  const [searchKeyword, setSearchKeyword] = useState('');

  const repositoryNodes = repositories
    ? repositories.edges.map((repo) => repo.node) || repositories.map((repo) => repo.node)
    : [];

  //FILTER REPOSITORY NODES BY SEARCH INPUT
  const filteredRepositories = repositoryNodes.filter((repo) =>
    repo.fullName.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredRepositories}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => <RepositoryItem repository={item} />}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={() => 
          <>
            <Search onSearch={setSearchKeyword} />
            <Selection selectedOrder={selectedOrder} setOrder={setOrder} />
          </>
        }
      />
    </View>
  )
};*/

export class RepositoryListContainer extends Component {
  state = {
    searchKeyword: '',
  };

  handleSearch = (searchKeyword) => {
    this.setState({ searchKeyword });
  };

  renderHeader = () => {
    const { selectedOrder, setOrder } = this.props;

    return (
      <>
        <Search onSearch={this.handleSearch} />
        <Selection selectedOrder={selectedOrder} setOrder={setOrder} />
      </>
    );
  };

  render() {
    const { repositories } = this.props;
    const { searchKeyword } = this.state;

    if (!repositories) {
      return null;
    }

    const filteredRepositories = repositories.filter((repo) =>
      repo.node.fullName.toLowerCase().includes(searchKeyword.toLowerCase())
    );

    return (
      <View style={styles.container}>
        <FlatList
          data={filteredRepositories}
          ItemSeparatorComponent={ItemSeparator}
          renderItem={({ item }) => <RepositoryItem repository={item.node} />}
          keyExtractor={(item) => item.node.id}
          ListHeaderComponent={this.renderHeader}
        />
      </View>
    );
  }
}

const RepositoryList = () => {
  const [selectedOrder, setOrder] = useState({ orderBy: 'CREATED_AT', orderDirection: 'DESC' });

  const { repositories } = useRepositories(selectedOrder);

  return (
    <RepositoryListContainer
      repositories={repositories}
      selectedOrder={selectedOrder}
      setOrder={setOrder}
    />
  )
};

export default RepositoryList;