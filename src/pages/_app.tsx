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
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🔎</text></svg>"
        />
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
