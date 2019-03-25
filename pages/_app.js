import React from 'react'
import App, { Container } from 'next/app'
import Meta from '../components/shared/Meta'
import GlobalStyle from '../styles/globalStyle'
import Page from '../components/shared/Page'

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Meta />
        <GlobalStyle />
        <Page>
          <Component {...pageProps} />
        </Page>
      </Container>
    )
  }
}

export default MyApp
