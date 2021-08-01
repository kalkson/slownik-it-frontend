import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ReactElement } from 'react'
import MainLayout from 'layout/MainLayout'

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  )
}

export default MyApp
