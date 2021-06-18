import { createGlobalStyle } from 'styled-components'

const TypographyStyles = createGlobalStyle`
  blockquote, dd, dl, figure, h1, h2, h3, h4, h5, h6, hr, p, pre {
    margin: 0;
  }

  p {
    font-size: 2.2rem;
    line-height: 140%;
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

  a {
    text-decoration: none;
    font-weight: 600;
    color: var(--color-primary);
    position: relative;
    font-size: inherit;


    ::before {
      bottom: 0.3em;
      content: '';
      background: var(--color-primaryLight);
      width: 100%;
      position: absolute;
      height: 0.2em;
      z-index: -1;
      opacity: 0.8;
      transition: all cubic-bezier(.7,-0.29,.44,1.42) 250ms;
    }

    :hover {
      ::before {
        height: 1em;
      }
    }
  }
`

export default TypographyStyles
