import { useQuery } from '@apollo/client';
import { GET_SINGLE_REPOSITORY } from '../graphql/queries';

const useSingleRepository = (repositoryId) => {
    const { loading, error, data } = useQuery(GET_SINGLE_REPOSITORY, {
      fetchPolicy: 'cache-and-network',
      variables: { repositoryId },
    });
  
    return {
      loading,
      error,
      repository: data ? data.repository : null,
      reviews: data && data.repository ? data.repository.reviews.edges.map((edge) => edge.node) : [],
    };
};
  
export default useSingleRepository;