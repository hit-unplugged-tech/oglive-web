// https://nextjs.org/docs/messages/no-page-custom-font
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Alegreya+Sans+SC:wght@300&display=swap"
            rel="stylesheet" />
          <link
            href="https://fonts.googleapis.com/css2?family=Sawarabi+Mincho&display=swap"
            rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;