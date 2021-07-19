import React, { useRef, useEffect, useState } from "react";
import Header from "../components/Header";
import mapboxgl from "!mapbox-gl";

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
        layers: ["koripallo"],
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
    <div>
      <Header />
      <div ref={mapContainer} className="map-container" />
      <footer>
        <div className="sidebar">
          Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        </div>
      </footer>
    </div>
  );
};

export default map;
