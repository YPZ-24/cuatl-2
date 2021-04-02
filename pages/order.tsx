import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useContext, useState } from 'react';

import { getDepartments } from '@/actions/fetch-departments';
import PaymentButton from '@/components/buttons/PaymentButton';
import Omnibar from '@/components/navbars/Omnibar';
import Tabbar, { TAB_PAGES } from '@/components/navbars/Tabbar';
import OrderResumeTable from '@/components/tables/OrderResumeTable';
import OrderTable from '@/components/tables/OrderTable';
import AuthContex from '@/context/AuthContext';
import { initializeApolloClient } from '@/lib/apollo-client';

export default function OrderPage({ departments }) {
  const { user, useSession } = useContext(AuthContex);
  const [order, setOrder] = useState([]);

  useSession();

  return (
    <div className="h-screen max-w-full">
      <Head>
        <title>Cuatl - Bolsa de compras</title>
        <meta name="description" content="Tu bolsa de compras" />
      </Head>

      <Omnibar menuEntries={departments} />

      <div className="md:bg-bse md:shadow md:m-12 md:p-12 md:rounded-xl">

        <h1 className="md:font-display md:text-3xl md:mb-12">Bolsa de compras</h1>

        <div
          style={{ maxHeight: 'calc(100% - 6rem)' }}
          className="md:flex md:flex-row md:flex-nowrap"
        >
          {
            order.length === 0 ?
              <p
                className="md:w-full md:flex md:flex-row md:flex-nowrap md:justify-center md:items-center md:text-center"
              >
                Parece que aún no tienes productos en tu bolsa.
              <br />
              ¡Vamos, agrega algunos!
            </p>
              :
              <div className="md:grid md:grid-cols-4 md:gap-12 md:w-full">
                <div className="md:col-span-2">
                  <OrderTable order={order} />
                </div>

                <div className="md:col-span-1 md:col-start-4">
                  <OrderResumeTable order={order} />
                </div>

                <div className="md:col-span-full md:justify-self-end md:mt-12">
                  <PaymentButton order={order} />
                </div>
              </div>
          }
        </div>
      </div>

      <Tabbar page={TAB_PAGES.BAG} />
    </div>

  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const apolloClient = initializeApolloClient();
  const departments = await getDepartments(apolloClient);

  return { props: { departments } };
};

