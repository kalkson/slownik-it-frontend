import React, { FC, ReactElement } from 'react'
import { render, RenderOptions, RenderResult } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import theme from 'theme/theme'
import GlobalStyle from 'theme/GlobalStyles'

const AllTheProviders: FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
)

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
): RenderResult => render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }
