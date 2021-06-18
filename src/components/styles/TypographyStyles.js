import { createGlobalStyle } from 'styled-components'

const TypographyStyles = createGlobalStyle`
  blockquote, dd, dl, figure, h1, h2, h3, h4, h5, h6, hr, p, pre {
    margin: 0;
  }
  
  p {
    font-size: 2rem;
  }

  h1 {
    font-size: 8rem;
  }

  h2 {
    font-size: 6.4rem;
  }

  h3 {
    font-size: 4.8rem;
  }

  h4 {
    font-size: 3.4rem;
  }

  .small {
    font-size: 1.5rem;
  }
`

export default TypographyStyles
