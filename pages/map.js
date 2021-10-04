import { useRef, useEffect, useState } from "react";
import Head from "next/head";
import Header from "../components/Header";
import mapboxgl from "!mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoidmlsbGl2YWxkIiwiYSI6ImNrcWNnYjRvdDFqaTUyd212NHQzdGN5cGkifQ.Y98cfsnc0_V4f1-6El0Mhw";

const map = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(24.96);
  const [lat, setLat] = useState(60.2);
  const [zoom, setZoom] = useState(10);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/villivald/ckr7gpk7i10kw17mx8gq5lwi6",
      center: [lng, lat],
      zoom: zoom,
    });
    map.current.addControl(
      new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
      })
    );
    map.current.addControl(new mapboxgl.FullscreenControl());
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  useEffect(() => {
    map.current.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
      })
    );
  }, []);

  useEffect(() => {
    map.current.on("click", function (e) {
      var features = map.current.queryRenderedFeatures(e.point, {
        layers: ["koripallopaikat041021"],
      });
      if (!features.length) {
        return;
      }
      var feature = features[0];

      new mapboxgl.Popup({ offset: [0, -15] })
        .setLngLat(feature.geometry.coordinates)
        .setHTML(
          "<h3>" +
            feature.properties.title +
            "</h3>" +
            "<p>" +
            feature.properties.description +
            "</p>" +
            '<a title="Open in new tab" target="_blank" href=' +
            feature.properties.link +
            ">" +
            "Link" +
            "</a>"
        )
        .addTo(map.current);
    });
  });
  return (
    <main>
      <Head>
        <title>Koripallopaikat - Map</title>
        <link rel="icon" href="favicons/favicon.ico" />
      </Head>
      <Header />
      <div ref={mapContainer} className="map-container" />
      <footer>
        <div className="sidebar">
          Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        </div>
      </footer>
    </main>
  );
};

export default map;
