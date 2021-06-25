import React from "react";
import { useState } from "react";
import ReactMapGL from "react-map-gl";
import Header from "../components/Header";
import Footer from "../components/Footer";

const map = () => {
  const [viewport, setViewport] = useState({
    width: 400,
    height: 400,
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8,
  });

  return (
    <div>
      <Header />
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.ACCESS_TOKEN}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
      />

      <Footer />
    </div>
  );
};

export default map;
