import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;500;800&display=swap" rel="stylesheet" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <meta name="description" content="Palavras de Paz" />
          <meta name="title" content="ONG Palavras de Paz" />
          <meta name="description" content="Voluntário é um cidadão que ao perceber diferenças sociais, disponibiliza o seu tempo para atuar em pró de outros seres humanos e assim contribui com um mundo novo." />

          {/* <!-- Open Graph / Facebook --/> */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.facebook.com/palavrasdepaz.br/" />
          <meta property="og:title" content="ONG Palavras de Paz" />
          <meta property="og:description" content="Voluntário é um cidadão que ao perceber diferenças sociais, disponibiliza o seu tempo para atuar em pró de outros seres humanos e assim contribui com um mundo novo." />
          <meta property="og:image" content="https://www.palavrasdepaz.org/_next/static/media/logo.a78a7b1d.svg" />

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}