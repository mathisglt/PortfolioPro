import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="fr">
        <Head />
        <body style={{ margin: 0 }}>
          <Main />  {/* Le contenu de la page */}
          <NextScript />  {/* Les scripts Next.js nécessaires */}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
