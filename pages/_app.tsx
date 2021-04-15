import { ApolloProvider } from '@apollo/client';
import { AppProps } from 'next/app';
import "tailwindcss/tailwind.css";
import { AuthProvider } from '@/context/AuthContext';
import { OrderProvider } from '@/context/OrderContext';
import { useApolloClient } from '@/lib/apollo-client';
import Layout from './Layout';

function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApolloClient(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <AuthProvider>
        <OrderProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </OrderProvider>
      </AuthProvider>
    </ApolloProvider>
  );
};

export default App;
