import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { COLORS, QUERIES } from '../utils/constants';
import { Layout } from '../components';
import store from '../app/store';

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();
  console.log(router)

  useEffect(() => {
    if (router.asPath === '/') router.push('/home');
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider theme={{ colors: COLORS, queries: QUERIES }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Provider>
  );
};

export default MyApp;
