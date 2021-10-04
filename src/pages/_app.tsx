import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head';

import Layout from '../components/Layout';
import LayoutProvider from '../context/layout';
import DataProvider from '../context/data';
import Web3Manager from '../components/Web3Manager';
import { Web3Provider } from '@ethersproject/providers';
import { Web3ReactProvider } from '@web3-react/core';

function getLibrary(provider: any): Web3Provider {
  return new Web3Provider(provider);
}

export default function App({
  Component,
  pageProps,
}: {
  Component: any;
  pageProps: any;
}) {
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
      <Web3ReactProvider getLibrary={getLibrary}>
        <LayoutProvider>
          <ChakraProvider>
            <Web3Manager>
              <DataProvider>
                <Layout>
                  <Component {...pageProps} />
                </Layout>
              </DataProvider>
            </Web3Manager>
          </ChakraProvider>
        </LayoutProvider>
      </Web3ReactProvider>
    </>
  );
}
