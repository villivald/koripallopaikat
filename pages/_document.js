import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <link
            rel="preload"
            as="image"
            href="/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fimages%2F1.4c0ce015901e9e41811654393844f48d.webp&w=1080&q=75"
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
