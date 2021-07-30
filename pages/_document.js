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

        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
        <meta name="theme-color" content="#317EFB" />

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-203458424-1"
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'UA-203458424-1', { page_path: window.location.pathname });
            `,
          }}
        />
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
