import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle<{ theme: unknown }>`
    *,
    *:before,
    *:after {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,Arial,sans-serif;
    }

    html,
    body {
        margin: 0;
        padding: 0;
        background-color: ${({ theme }) => theme.colors.background};
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-size: 1.6rem;
        overflow-x: hidden;
    }

    #___gatsby {
        overflow-x: hidden;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    button {
        cursor: pointer;
        padding: 0;
        border: none;
        outline: none;
        background: transparent;
    }

    h1, h2, h3, h4, h5, h6, p {
        margin: 0;
        padding: 0;
    }

    /* react-transition-group */

    .loader-enter {
        transform: translateX(120%);
    }
    .loader-enter-active {
        transition: transform 600ms;
        transform: translateX(0);
    }
    .loader-exit {
        transform: translateX(0);
    }
    .loader-exit-active {
        transition: opacity 200ms;
        transform: translateX(120%);
    }
`;

export default GlobalStyle;
