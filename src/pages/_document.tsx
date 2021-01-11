import NextDocument, { Head, Html, Main, NextScript } from 'next/document'

interface Props {}
class Document extends NextDocument<Props> {
  render() {
    return (
      <Html lang="ja">
        <Head>
  
        </Head>
        <body className="column1">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document