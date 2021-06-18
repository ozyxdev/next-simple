import Head from 'next/head'
import styled from 'styled-components'

const MainStyles = styled.h2`
  color: var(--color-text);
`
export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="100 Freestylers Dijeron" />
      </Head>

      <MainStyles>hello</MainStyles>
    </div>
  )
}
