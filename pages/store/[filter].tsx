import { useState } from 'react/index';
import { getDepartments } from '@/actions/fetch-departments';
import { getProductsPage } from '@/actions/fetch-products';
import LoadMoreButton from '@/components/buttons/LoadMoreButton';
import ProductsGallery from '@/components/galleries/ProductsGallery';
import { PAGE_LIMIT } from '@/config/globals';
import { initializeApolloClient, useApolloClient } from '@/lib/apollo-client';
import IPage from '@/models/IPage';
import IProduct from '@/models/IProduct';

export default function FilteredProductsPage({ initialProducts, departments, query }) {
  const apolloClient = useApolloClient(initialProducts);
  const [page, setPage] = useState<IPage>({
    index: 0,
    data: initialProducts,
    previousData: initialProducts
  });

  const getNewPage = async () => {
    const newPage: IProduct[] = await getProductsPage(
      apolloClient, { start: page.data.length, limit: PAGE_LIMIT, query }
    );

    setPage({
      index: page.index + 1,
      data: page.data.concat(newPage),
      previousData: newPage
    });
  };

  return (
    <>
      <ProductsGallery products={page.data} />
      {page.previousData.length===PAGE_LIMIT ? 
        <LoadMoreButton
          fetcher={getNewPage}
        />
      : null}
    </>
  );
};

export async function getServerSideProps({ query }) {
  const apolloClient = initializeApolloClient();
  const initialProducts = await getProductsPage(apolloClient, {
    start: 0,
    limit: PAGE_LIMIT,
    query
  });
  const departments = await getDepartments(apolloClient);

  return { props: { initialProducts, departments, query } };
};
