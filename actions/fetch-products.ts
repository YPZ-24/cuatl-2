import { ApolloClient, gql, NormalizedCacheObject } from '@apollo/client';

import IProduct from '@/models/IProduct';

interface IPageFilter {
  start: number;
  limit: number;
  query?: any
};

export const getProductsPage = async (
  apolloClient: ApolloClient<NormalizedCacheObject>,
  filter: IPageFilter
): Promise<IProduct[]> => {
  const formatFilters = () => {
    let formattedFilters = '';

    if (filter.query) {
      if (filter.query.department) {
        formattedFilters += `
          departments: { slug: "${filter.query.department}" }
        `;
      }

      if (filter.query.category) {
        formattedFilters += `
          categories: { slug: "${filter.query.category}" }
        `;
      }

      if (filter.query.subcategory) {
        formattedFilters += `
          subcategories: { slug: "${filter.query.subcategory}" }
        `;
      }
    }

    return formattedFilters;
  };

  const { error, data } = await apolloClient.query({
    query: gql`
      query getProductsPage(
        $where: JSON! = {
          active: true
          ${formatFilters()}
        }
      ) {
        products(start: ${filter.start}, limit: ${filter.limit}, where: $where) {
          id
          slug
          name
          price
          offers(where: { active: true }) {
            id
          }
          cover {
            alternativeText
            url
          }
        }
      }
    `
  });

  return error ?? data.products.filter((product: IProduct) => product !== null);
};

export const getProductBySlug = async (
  apolloClient: ApolloClient<NormalizedCacheObject>,
  slug: string
): Promise<IProduct> => {
  const { error, data, loading } = await apolloClient.query({
    query: gql`
      query getProduct($where: JSON! = { active: true, slug: "${slug}" }) {
        products(where: $where) {
          id
          name
          description
          media {
            mime
            url
          }
          meta_description
          meta_title
          offers(where: { active: true }) {
            id
            name
            description
            discount
          }
          price
          variants(where: {active: true}) {
            id
            color
            pattern
            size
            stock
          }
        }
      }
    `
  });

  return error ?? data.products[0];
};
