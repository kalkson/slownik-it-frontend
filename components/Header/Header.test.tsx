/* eslint-disable react/display-name */
import React from 'react'
import { cleanup } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { render } from 'tests/tests-utils'
import theme from 'theme/theme'
import Header from './Header'

jest.mock('next/image', () => () => <></>)

describe('Header component testss', () => {
  afterEach(() => {
    cleanup()
  })

  it('render Header component', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    )

    expect(getByTestId('header-component')).toBeInTheDocument()
  })

  it('test dark/light mode state changing', () => {})
})
