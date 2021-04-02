import { ApolloProvider, NormalizedCacheObject } from '@apollo/client';
import { AppProps } from 'next/app';
import "tailwindcss/tailwind.css";

import { AuthProvider } from '@/context/AuthContext';
import { OrderProvider } from '@/context/OrderContext';
import { useApolloClient } from '@/lib/apollo-client';

function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApolloClient(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <AuthProvider>
        <OrderProvider>
          <Component {...pageProps} />
        </OrderProvider>
      </AuthProvider>
    </ApolloProvider>
  );
};

export default App;