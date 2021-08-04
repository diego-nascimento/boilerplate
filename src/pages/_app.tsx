import { AppProps } from 'next/dist/next-server/lib/router/router'
import { GlobalStyles } from 'styles/global'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <head>
        <title>React avançado - Boilerplate</title>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
