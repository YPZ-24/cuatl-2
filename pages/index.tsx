import Head from 'next/head.js';
import { useContext, useEffect, useState } from 'react/index';

import { getDepartments } from '@/actions/fetch-departments';
import { getProductsPage } from '@/actions/fetch-products';
import LoadMoreButton from '@/components/buttons/LoadMoreButton';
import ProductsGallery from '@/components/galleries/ProductsGallery';
import Footer from '@/components/footers/Footer';
import Omnibar from '@/components/navbars/Omnibar';
import Tabbar, { TAB_PAGES } from '@/components/navbars/Tabbar';
import { PAGE_LIMIT } from '@/config/globals';
import AuthContext from '@/context/AuthContext';
import { initializeApolloClient, useApolloClient } from '@/lib/apollo-client';
import IPage from '@/models/IPage';
import IProduct from '@/models/IProduct';
import { GetServerSideProps } from 'next';

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
      mb-20
      md:my-12
      mt-12
    `
  }
};

export default function HomePage({ initialProducts, departments }) {
  const { login, useSession } = useContext(AuthContext);
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

  useSession();

  useEffect(() => {
    const loginUser = async () => {
      //: login user if the session token is in the route query
      if (location.search) await login(location.search);
    };

    loginUser();
  }, []);

  return (
    <div className={classes.container}>
      <Head>
        <title>Cuatl - La mejor moda artesanal de México</title>
        <meta name="description" content="Encuentra los mejores productos artesanales de México" />
      </Head>

      <Omnibar menuEntries={departments} />

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
      <Footer />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const apolloClient = initializeApolloClient();
  const initialProducts = await getProductsPage(apolloClient, {
    start: 0,
    limit: PAGE_LIMIT
  });
  const departments = await getDepartments(apolloClient);

  return { props: { initialProducts, departments } };
};
