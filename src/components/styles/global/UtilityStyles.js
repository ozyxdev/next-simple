import { createGlobalStyle } from 'styled-components'

const UtilityStyles = createGlobalStyle`
  .shadow-sm {
    box-shadow: var(--shadow-sm);
  }
  .shadow-default {
    box-shadow: var(--shadow-default);
  }
  .shadow-md {
    box-shadow: var(--shadow-md);
  }
  .shadow-lg {
    box-shadow: var(--shadow-lg);
  }

  .shadow-xl {
    box-shadow: var(--shadow-xl);
  }

  .shadow-xxl {
    box-shadow: var(--shadow-xxl);
  }

  .shadow-inner {
    box-shadow: var(--shadow-inner);
  }

  .container-full-width {
    width: 100vw;
    position: relative;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
  }

  .container {
    max-width: var(--max-width);
    margin: auto 0;
  }

`

export default UtilityStyles
