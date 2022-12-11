import React, { useEffect, useState } from 'react';
import { Layout } from '../components';
import type { AppProps } from 'next/app'

import { GoogleAnalytics } from "nextjs-google-analytics";

import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <GoogleAnalytics trackPageViews gaMeasurementId='G-3KHE49GZBF' />
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
