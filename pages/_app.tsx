import { ApolloProvider } from '@apollo/client';
import { AppProps } from 'next/app';
import "tailwindcss/tailwind.css";
import { AuthProvider } from '@/context/AuthContext';
import { OrderProvider } from '@/context/OrderContext';
import { useApolloClient } from '@/lib/apollo-client';
import Layout from './Layout';
import {ThemeProvider, CssBaseline} from '@material-ui/core'
import themeConfig from '../utils/themeConfig'
import { SnackbarProvider } from 'notistack';

function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApolloClient(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <AuthProvider>
        <OrderProvider>
          <ThemeProvider theme={themeConfig}>
            <CssBaseline/>
            <SnackbarProvider
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right'
              }}
            >
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </SnackbarProvider>
          </ThemeProvider>
        </OrderProvider>
      </AuthProvider>
    </ApolloProvider>
  );
};

export default App;
