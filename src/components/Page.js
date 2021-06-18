import styled from 'styled-components'
import GlobalStyles from './styles/GlobalStyles'
import TypographyStyles from './styles/TypographyStyles'
import ThemeToggle from './shared/ThemeToggle'

const PageWrapper = styled.div`
  width: 100%;
`
const PageContainerStyles = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
`
const HeaderStyles = styled.header`
  background: var(--color-offBackground);
`

// const HeaderContentStyles = styled(PageContainer)`
//   background: var(--color-offBackground);
// `

function Page({ children }) {
  return (
    <PageWrapper>
      <HeaderStyles>
        <GlobalStyles />
        <TypographyStyles />
        <PageContainerStyles>
          <ThemeToggle />
        </PageContainerStyles>
      </HeaderStyles>
      <PageContainerStyles>{children}</PageContainerStyles>
    </PageWrapper>
  )
}

export default Page
