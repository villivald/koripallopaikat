import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import { Link, Button, CircularProgress } from "@mui/material";

import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import LinkIcon from "@mui/icons-material/Link";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import ReportOutlinedIcon from "@mui/icons-material/ReportOutlined";

import Header from "../../components/Header";
import distance from "../../util/distance";
import { connectToDatabase } from "../../util/mongodb";

import "@splidejs/splide/dist/css/splide.min.css";

import styles from "../../css/Id.module.css";

const Page = ({ courts }) => {
  const router = useRouter();
  const { id } = router.query;
  const currentCourt = courts.filter((court) => court.address === id)[0];

  const d = distance(currentCourt.lat, currentCourt.lon);

  return (
    <div>
      <Head>
        <title>{currentCourt.address}</title>
        <link rel="icon" href="../../favicons/favicon.ico" />
      </Head>
      <Header />
      <div className={styles.idContainer}>
        <div className={styles.idHeaderContainer}>
          <h1 className={styles.idHeader}>{currentCourt.address}</h1>
          {currentCourt.childrenAlert && (
            <Image
              src="/children.png"
              alt="Warning, Children"
              height={40}
              width={40}
            />
          )}
        </div>
        <Splide
          options={{
            rewind: true,
            width: "54rem",
            gap: "1rem",
            rewindSpeed: 1000,
          }}
        >
          <SplideSlide>
            <Image
              className={styles.idPic}
              src={currentCourt.pic}
              width={538}
              height={403}
              alt="Cover image of a court"
            />
          </SplideSlide>
          <SplideSlide>
            <Image
              className={styles.idPic}
              src={currentCourt.pic1 || currentCourt.pic}
              width={538}
              height={403}
              alt="Second image of a court"
            />
          </SplideSlide>
          <SplideSlide>
            <Image
              className={styles.idPic}
              src={currentCourt.pic2 || currentCourt.pic}
              width={538}
              height={403}
              alt="Third image of a court"
            />
          </SplideSlide>
        </Splide>
        <div className={styles.idInfo}>
          <p>Baskets: {currentCourt.baskets}</p>
          <p>Surface: {currentCourt.surface}</p>
          <p>Type: {currentCourt.type}</p>
        </div>
        <h2>Distance: {d > 1000 ? <CircularProgress size={30} /> : d} km</h2>
        {currentCourt.credentials && (
          <h3>
            Added by{" "}
            <Link href={currentCourt.credentials}>
              {currentCourt.credentials.includes("http")
                ? currentCourt.credentials.slice(
                    currentCourt.credentials.indexOf(".com/") + 5,
                    currentCourt.credentials.length
                  )
                : anonymous}
            </Link>{" "}
            ⛹️
          </h3>
        )}
        <div className={styles.idLinks}>
          <Button size="small" href={currentCourt.link} aria-label="court link">
            <LinkIcon className="iconLink" />
          </Button>
          <Button size="small" href={currentCourt.pic} aria-label="court image">
            <ImageOutlinedIcon className="iconLink" />
          </Button>
          <Button
            size="small"
            href={`https://www.google.com/maps/place/${currentCourt.address}+${currentCourt.city}`}
            aria-label="google maps"
          >
            <RoomOutlinedIcon className="iconLink" />
          </Button>
          <Button
            size="small"
            href={`mailto:koripallopaikat@gmail.com?subject=Issue%20with%20${currentCourt.address}%20court&body=Description%20of%20an%20issue:%20`}
            aria-label="report"
            title="Open in new tab"
            target="_blank"
            rel="noopener"
          >
            <ReportOutlinedIcon className="iconLink" />
          </Button>
        </div>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => router.back()}
          className={styles.backButton}
        >
          Back
        </Button>
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const { db } = await connectToDatabase();

  const courts = await db.collection("paikat").find({}).toArray();

  return {
    props: {
      courts: JSON.parse(JSON.stringify(courts)),
    },
  };
}

export default Page;
