import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { ModalProvider } from "styled-react-modal";

import { COLORS, QUERIES } from '../utils/constants';
import { Layout } from '../components';
import store from '../app/store';

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();

  useEffect(() => {
    if (router.asPath === '/') router.push('/home');
  }, [router]);

  return (
    <ModalProvider>
      <Provider store={store}>
        <ThemeProvider theme={{ colors: COLORS, queries: QUERIES }}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </Provider>
    </ModalProvider>
  );
};

export default MyApp;
