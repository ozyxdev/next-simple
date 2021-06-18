import Head from 'next/head'
import GlobalStyles from '../components/styles/global/GlobalStyles'
import UtilityStyles from '../components/styles/global/UtilityStyles'
import TypographyStyles from '../components/styles/global/TypographyStyles'
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
        <UtilityStyles />
        <TypographyStyles />
        <Component {...pageProps} />
      </Page>
    </ThemeProvider>
  )
}

export default MyApp
