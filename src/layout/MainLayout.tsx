import Navbar from 'components/Header/Header';
import HeaderContextProvider from 'context/HeaderContext';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyles';
import theme from 'theme/theme';

const MainLayout: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <HeaderContextProvider>
      <GlobalStyle />
      <Navbar />
      {children}
    </HeaderContextProvider>
  </ThemeProvider>
);

export default MainLayout;
