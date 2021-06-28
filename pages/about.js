import Header from "../components/Header";

import Link from "@material-ui/core/Link";

export default function Books({ books }) {
  return (
    <div>
      <Header />
      <div className="aboutContainer">
        <h2>
          App live on{" "}
          <Link href="https://koripallopaikat.vercel.app/">Vercel</Link>
        </h2>
        <h2>
          Source Code on{" "}
          <Link href="https://github.com/villivald/koripallopaikat">
            GitHub
          </Link>
        </h2>
        <h2>
          <Link href="https://koripallopaikat.vercel.app/api/books">API</Link>
        </h2>

        <h2>Made with:</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            justifyItems: "center",
            gap: "15px",
          }}
        >
          <p>
            <Link href="https://nextjs.org/">Next.js</Link>
          </p>
          <p>
            <Link href="https://material-ui.com/">Material UI</Link>
          </p>
          <p>
            <Link href="https://vercel.com/">Vercel</Link>
          </p>
          <p>
            <Link href="https://www.mongodb.com/">MongoDB</Link>
          </p>
          <p>
            <Link href="https://www.mapbox.com/mapbox-gljs">Mapbox GL JS</Link>
          </p>
          <p>
            <Link href="https://www.mapbox.com/mapbox-gljs">
              Alien Government
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
