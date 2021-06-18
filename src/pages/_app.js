import Head from 'next/head'
import GlobalStyles from '../components/styles/GlobalStyles'
import Page from '../components/Page'
import { ThemeProvider } from '../lib/useTheme'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="alternate icon" href="/favicon.png" />
      </Head>
      <Page>
        <GlobalStyles />
        <Component {...pageProps} />
      </Page>
    </ThemeProvider>
  )
}

export default MyApp
