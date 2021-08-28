import Navbar from 'components/Header/Header';
import HeaderContextProvider from 'context/HeaderContext';
import SnackbarContextProvider from 'context/SnackbarContext';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyles';
import theme from 'theme/theme';
import Head from 'next/head';
import 'animate.css';
import LoadingContextProvider from 'context/LoadingContext';

const MainLayout: React.FC = ({ children }) => (
  <>
    <Head>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
      />
    </Head>
    <ThemeProvider theme={theme}>
      <LoadingContextProvider>
        <SnackbarContextProvider>
          <HeaderContextProvider>
            <GlobalStyle />
            <Navbar />
            {children}
          </HeaderContextProvider>
        </SnackbarContextProvider>
      </LoadingContextProvider>
    </ThemeProvider>
  </>
);

export default MainLayout;
