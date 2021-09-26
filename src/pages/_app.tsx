import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head';

import Layout from '../components/Layout';
import LayoutProvider from '../context';

export default function App({ Component, pageProps }: any) {
  return (
    <>
      <Head>
        <title>NFT Activity</title>
        <meta name="description" content="NFT Activity" />
        {/* <link rel="shortcut icon" href="/favicon.png" /> */}
      </Head>
      <LayoutProvider>
        <ChakraProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>
      </LayoutProvider>
    </>
  );
}
