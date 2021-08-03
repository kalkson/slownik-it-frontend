import Navbar from 'components/Header/Header'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from 'theme/GlobalStyles'
import theme from 'theme/theme'

const MainLayout: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Navbar />
    {children}
  </ThemeProvider>
)

export default MainLayout
