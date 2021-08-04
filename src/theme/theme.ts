import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  breakpoints: {
    desktop: '1366px',
    laptop: '1024px',
    tablet: '768px',
    mobileXL: '576px',
    mobileL: '420px',
    mobile: '375px',
    mobileS: '315px',
  },

  media: {
    desktop: `(min-width: 1366px)`,
    laptop: `(min-width: 1024px)`,
    tablet: `(min-width: 768px)`,
    mobileXL: `(min-width: 576px)`,
    mobileL: `(min-width: 420px)`,
    mobile: `(min-width: 375px)`,
    mobileS: `(min-width: 315px)`,
  },

  colors: {
    background: '#F8F4F4',
  },
};

export default theme;
