import { useState } from 'react/index';
import { getProductsPage } from '@/actions/fetch-products';
import LoadMoreButton from '@/components/buttons/LoadMoreButton';
import ProductsGallery from '@/components/galleries/ProductsGallery';
import { PAGE_LIMIT } from '@/config/globals';
import { initializeApolloClient, useApolloClient } from '@/lib/apollo-client';
import IPage from '@/models/IPage';
import IProduct from '@/models/IProduct';
import { GetServerSideProps } from 'next';

export default function HomePage({ initialProducts }) {

  const apolloClient = useApolloClient(initialProducts);
  const [page, setPage] = useState<IPage>({
    index: 0,
    data: initialProducts,
    previousData: initialProducts
  });

  const getNewPage = async () => {
    const newPage: IProduct[] = await getProductsPage(
      apolloClient, { start: page.data.length, limit: PAGE_LIMIT }
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

export const getServerSideProps: GetServerSideProps = async () => {
  const apolloClient = initializeApolloClient();
  const initialProducts = await getProductsPage(apolloClient, {
    start: 0,
    limit: PAGE_LIMIT
  });
  return { props: { initialProducts } };
};
