import React from "react";
import { useRouter } from "next/router";
import { useGeolocation } from "react-use";
import Button from "@material-ui/core/Button";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import LinkIcon from "@material-ui/icons/Link";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";
import { connectToDatabase } from "../../util/mongodb";
import Header from "../../components/Header";

const Page = ({ courts }) => {
  const router = useRouter();
  const { id } = router.query;
  const currentCourt = courts.filter((court) => court.address === id)[0];

  //DISTANCE
  const state = useGeolocation();
  const lat1 = state.latitude;
  const lon1 = state.longitude;
  const lat2 = currentCourt.lat;
  const lon2 = currentCourt.lon;

  const R = 6371e3;
  const x1 = (lat1 * Math.PI) / 180;
  const x2 = (lat2 * Math.PI) / 180;
  const y1 = ((lat2 - lat1) * Math.PI) / 180;
  const y2 = ((lon2 - lon1) * Math.PI) / 180;

  const a =
    Math.sin(y1 / 2) * Math.sin(y1 / 2) +
    Math.cos(x1) * Math.cos(x2) * Math.sin(y2 / 2) * Math.sin(y2 / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = (R * c) / 1000;

  return (
    <div>
      <Header />
      <div className="idContainer">
        <h1 className="idHeader">{currentCourt.address}</h1>
        <img src={currentCourt.pic} className="idPic" />
        <div className="idInfo">
          <p className="idBaskets">Baskets: {currentCourt.baskets}</p>
          <p className="idSurface">Surface: {currentCourt.surface}</p>
          <p className="idType">Type: {currentCourt.type}</p>
        </div>
        <h1>Distance: {d.toFixed(2)} km</h1>
        <div className="idLinks">
          <Button size="small" href={currentCourt.link} aria-label="court link">
            <LinkIcon className="iconLink" />
          </Button>
          <Button size="small" href={currentCourt.pic} aria-label="court image">
            <ImageOutlinedIcon className="iconLink" />
          </Button>
          <Button
            size="small"
            href={`https://www.google.com/maps/place/${currentCourt.address}+Helsinki`}
            aria-label="google maps"
          >
            <RoomOutlinedIcon className="iconLink" />
          </Button>
        </div>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => router.back()}
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
