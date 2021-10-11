import Document, { Html, Head, Main, NextScript } from "next/document";
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="description"
            content="A curated collection of public basketball courts in the Helsinki Metropolitan Area. Everyone is welcome to submit their local court."
          />
          <meta name="monetization" content="$ilp.uphold.com/jzMkjAp8m9FZ" />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://koripallopaikat.com/" />
          <meta property="og:title" content="Koripallopaikat" />
          <meta
            property="og:description"
            content="A curated collection of public basketball courts in the Helsinki Metropolitan Area. Everyone is welcome to submit their local court."
          />
          <meta
            property="og:image"
            content="https://villivald.com/koripallopaikat/Brand/IMG_2626.jpg"
          />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://koripallopaikat.com/" />
          <meta property="twitter:title" content="Koripallopaikat" />
          <meta
            property="twitter:description"
            content="A curated collection of public basketball courts in the Helsinki Metropolitan Area. Everyone is welcome to submit their local court."
          />
          <meta
            property="twitter:image"
            content="https://villivald.com/koripallopaikat/Brand/IMG_2626.jpg"
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
        </Head>

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
