import { useContext, useState } from 'react/index';
import { getDepartments } from '@/actions/fetch-departments';
import { getProductsPage } from '@/actions/fetch-products';
import LoadMoreButton from '@/components/buttons/LoadMoreButton';
import ProductsGallery from '@/components/galleries/ProductsGallery';
import Tabbar, { TAB_PAGES } from '@/components/navbars/Tabbar';
import { PAGE_LIMIT } from '@/config/globals';
import AuthContext from '@/context/AuthContext';
import { initializeApolloClient, useApolloClient } from '@/lib/apollo-client';
import IPage from '@/models/IPage';
import IProduct from '@/models/IProduct';

const classes = {
  container: `
    h-screen
    max-w-screen
  `,

  gallery: {
    container: `
      h-3/4
      md:h-auto
      md:overflow-visible
      overflow-y-auto
      px-7
      py-12
      top-0
      w-full
    `,
    loadButton: `
      flex
      flex-nowrap
      flex-row
      justify-center
      my-12
    `
  }
};

export default function FilteredProductsPage({ initialProducts, departments, query }) {
  const { useSession } = useContext(AuthContext);
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

  useSession();

  return (
    <div className={classes.container}>

      <div className={classes.gallery.container}>
        <ProductsGallery products={page.data} />

        <div className={classes.gallery.loadButton}>
          <LoadMoreButton
            disabled={!page.previousData.length}
            fetcher={getNewPage}
          />
        </div>
      </div>

      <Tabbar page={TAB_PAGES.HOME} />
    </div>
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
