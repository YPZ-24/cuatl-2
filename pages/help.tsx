import { GetServerSideProps } from "next";
import Head from 'next/head';
import { getDepartments } from "@/actions/fetch-departments";
import { initializeApolloClient } from "@/lib/apollo-client";
import Omnibar from "@/components/navbars/Omnibar";
import Tabbar, { TAB_PAGES } from "@/components/navbars/Tabbar";

export default function HelpPage({ departments }) {
  return (
    <div>
      <Head>
        <title>Cuatl - Ayuda</title>
        <meta name="description" content="Solicita ayuda a nuestro equipo de soporte" />
      </Head>

      <Omnibar menuEntries={departments} />
      Página de contacto
      <Tabbar page={TAB_PAGES.HELP} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const apolloClient = initializeApolloClient();
  const departments = await getDepartments(apolloClient);

  return { props: { departments } };
};
