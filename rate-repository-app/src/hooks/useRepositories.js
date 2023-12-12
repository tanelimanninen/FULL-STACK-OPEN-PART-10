import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
  const { data, loading, error, refetch } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
  });

  if (loading) {
    // Loading state
    return { repositories: null, loading, refetch };
  }

  if (error) {
    // Error state, you might want to handle the error appropriately
    console.error('Error fetching repositories:', error.message);
    return { repositories: null, loading, refetch };
  }

  // Check if data is available and has the expected structure
  const repositories = data?.repositories?.edges || [];

  //console.log('Repositories:', repositories);

  return { repositories, loading, refetch };
};

export default useRepositories;