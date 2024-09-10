import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { Poppins } from 'next/font/google';
import Head from 'next/head';
import React, { ComponentType, Fragment, ReactElement, ReactNode } from 'react';

import '@/styles/globals.css';
import '@/styles/_colors.scss';

const queryClient = new QueryClient();

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  adjustFontFallback: false,
});

type Page<P = {}> = NextPage<P> & {
  // eslint-disable-next-line no-unused-vars
  getLayout?: (page: ReactElement) => ReactNode;
  layout?: ComponentType;
};

type Props = AppProps & {
  Component: Page;
};

export default function CodebaseNextTS(props: Props) {
  const {
    Component,
    pageProps: { session, ...pageProps },
  } = props;

  const getLayout = Component.getLayout ?? ((page) => page);
  const Layout = Component.layout ?? Fragment;

  return (
    <>
      <Head>
        <title>Codebase Next TS</title>
        <meta name='description' content='A codebase that was built using Next.JS, React.JS and Typescript' />

        <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=5.0' />

        <link rel='icon' href='/favicon.ico' type='image/x-icon' />

        <meta httpEquiv='content-language' content='id' />
        <meta name='geo.country' content='ID' />
        <meta name='geo.placename' content='Indonesia' />

        <meta name='keywords' content='codebase, next.js, react.js, typescript' />

        <meta name='author' content='Place author here' />

        <meta property='og:type' content='website' />
        <meta property='og:title' content='Codebase Next TS' />
        <meta property='og:description' content='A codebase that was built using Next.JS, React.JS and Typescript' />
        <meta property='og:url' content='https://placeyoururlhere.com/' />
        <meta property='og:site_name' content='Codebase Next TS' />
        <meta property='og:locale' content='en_US' />

        <meta name='twitter:title' content='Codebase Next TS' />
        <meta name='twitter:description' content='A codebase that was built using Next.JS, React.JS and Typescript' />

        <link rel='canonical' href='https://placeyoururlhere.com/' />
      </Head>

      <QueryClientProvider client={queryClient}>
        <main className={poppins.className}>
          <Layout>{getLayout(<Component {...pageProps} />)}</Layout>
          <div id='modal' />
        </main>
      </QueryClientProvider>
    </>
  );
}
