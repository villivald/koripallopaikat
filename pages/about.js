import Link from "@material-ui/core/Link";
import Image from "next/image";
import Header from "../components/Header";
import lighthouse from "../public/lighthouse.gif";

export default function Books() {
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
          <Link href="/api/savedCourts">API</Link>
        </h2>

        <h2>Made with:</h2>
        <div className="aboutLinks">
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
            <Link href="https://react-hook-form.com/">React Hook Form</Link>
          </p>
        </div>
        <Image src={lighthouse} alt="404 page" width={300} height={148} />
      </div>
    </div>
  );
}
