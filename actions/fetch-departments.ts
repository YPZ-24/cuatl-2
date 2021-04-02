import { ApolloClient, gql, NormalizedCacheObject } from '@apollo/client';

import IDepartment from '@/models/IDepartment';

export const getDepartments = async (
  apolloClient: ApolloClient<NormalizedCacheObject>
): Promise<IDepartment[]> => {
  const { error, data } = await apolloClient.query({
    query: gql`
      query getDepartments {
        departments {
          id
          slug
          name
          categories {
            id
            slug
            name
            subcategories {
              id
              slug
              name
            }
          }
        }
      }
    `
  });

  return error ?? data.departments;
};
