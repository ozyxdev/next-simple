import styled from 'styled-components'
import ThemeToggle from './shared/ThemeToggle'

const PageWrapper = styled.div`
  width: 100%;
`
const PageContainerStyles = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 2rem;
`
const HeaderStyles = styled.header`
  background: var(--color-offBackground);
`

function Page({ children }) {
  return (
    <PageWrapper>
      <HeaderStyles>
        <PageContainerStyles>
          <ThemeToggle />
        </PageContainerStyles>
      </HeaderStyles>
      <PageContainerStyles>{children}</PageContainerStyles>
    </PageWrapper>
  )
}

export default Page
