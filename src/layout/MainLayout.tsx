import Navbar from 'components/Header/Header';
import HeaderContextProvider from 'context/HeaderContext';
import SnackbarContextProvider from 'context/SnackbarContext';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyles';
import theme from 'theme/theme';

const MainLayout: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <SnackbarContextProvider>
      <HeaderContextProvider>
        <GlobalStyle />
        <Navbar />
        {children}
      </HeaderContextProvider>
    </SnackbarContextProvider>
  </ThemeProvider>
);

export default MainLayout;
