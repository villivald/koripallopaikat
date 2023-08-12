import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { useForm } from "react-hook-form";

import mapboxgl from "!mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import MapboxClient from "@mapbox/mapbox-sdk/services/geocoding";

import {
  Snackbar,
  TextField,
  InputLabel,
  Button,
  InputBase,
  Chip,
  MenuItem,
  Alert as MuiAlert,
  CircularProgress,
} from "@mui/material";

import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import CheckIcon from "@mui/icons-material/Check";
import RoomIcon from "@mui/icons-material/Room";
import PublishIcon from "@mui/icons-material/Publish";

import Header from "../components/Header";
import surfaces from "../data/surfaces";
import placeTypes from "../data/placeTypes";

import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";

import styles from "../css/Add.module.css";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function Add() {
  const router = useRouter();
  const [visible, setVisible] = useState(false);

  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");

  const [surface, setSurface] = useState("");
  const [placeType, setPlaceType] = useState("");
  const [address, setAddress] = useState("");

  const [seconds, setSeconds] = useState(20);

  const [uploadingImage, setUploadingImage] = useState(false);

  const handleSurfaceChange = (event) => {
    setSurface(event.target.value);
  };
  const handlePlaceTypeChange = (event) => {
    setPlaceType(event.target.value);
  };

  const uploadImage = () => {
    const data = new FormData();
    setUploadingImage(true);
    data.append("file", image);
    data.append("upload_preset", "villivald");
    data.append("cloud_name", "villivald");

    fetch("https://api.cloudinary.com/v1_1/villivald/image/upload", {
      method: "post",
      body: data,
    })
      .then((resp) => resp.json())
      .then((data) => {
        setUrl(data.url);
        setUploadingImage(false);
      })
      .catch((err) => {
        console.log(err);
        setUploadingImage(false);
      });
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setVisible(false);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const postData = async (form) => {
    try {
      const res = await fetch("/api/courts", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error(res.status);
      }

      setVisible(true);
      setTimeout(() => {
        setVisible(false);
        router.reload("/add");
      }, 20000);

      setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);

      console.log("New court is successfully added");
    } catch (error) {
      console.log("Failed to add court");
    }
  };

  const onSubmit = (data) => {
    const form = {
      address: address,
      surface: surface,
      type: placeType,
      baskets: data.baskets,
      pic: url,
      link: data.link,
      credentials: data.credentials,
    };
    postData(form);
  };

  mapboxgl.accessToken =
    "pk.eyJ1IjoidmlsbGl2YWxkIiwiYSI6ImNrcWNnYjRvdDFqaTUyd212NHQzdGN5cGkifQ.Y98cfsnc0_V4f1-6El0Mhw";

  useEffect(() => {
    let geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      types: "country,region,place,postcode,locality,neighborhood,address,poi",
    });

    geocoder.addTo("#geocoder");

    geocoder.on("result", (e) => setAddress(e.result.place_name));

    geocoder.on("clear", () => setAddress(""));
  }, []);

  const mapContainer = useRef(null);
  const map = useRef(null);
  const lng = 24.96;
  const lat = 60.2;
  const zoom = 10;
  const [coordinates, setCoordinates] = useState([]);
  const [showMap, setShowMap] = useState("none");

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
    let marker = new mapboxgl.Marker({
      draggable: true,
    })
      .setLngLat([lng, lat])
      .addTo(map.current);

    const onDragEnd = () => {
      let lngLat = marker.getLngLat();
      setCoordinates([lngLat.lng, lngLat.lat]);
    };

    marker.on("dragend", onDragEnd);

    map.current.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
      })
    );
  });

  useEffect(() => {
    let mapGeocoder = new MapboxClient({
      accessToken: mapboxgl.accessToken,
    });

    mapGeocoder
      .reverseGeocode({
        query: [coordinates[0], coordinates[1]],
      })
      .send()
      .then((response) => {
        const match = response.body;
        if (
          !match.features[0].place_name.includes("Undefined") &&
          showMap !== "none"
        ) {
          setAddress(match.features[0].place_name);
        }
      });
  });

  const handleHideMap = () => {
    setAddress("");
    setShowMap(showMap === "none" ? "" : "none");
  };

  return (
    <div className={styles.addWrapper}>
      <Head>
        <title>Koripallopaikat - Add new court</title>
        <link rel="icon" href="favicons/favicon.ico" />
      </Head>
      <Header />
      <div className={styles.colored}>
        <h1 className={styles.coloredText}>Add a new basketball court</h1>
      </div>
      <div className={styles["canvas-container"]}>
        <div
          ref={mapContainer}
          className={styles["map-container-small"]}
          style={{ display: showMap }}
        />
      </div>
      {!visible ? (
        <div className={styles.form}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.input}>
              <div id="geocoder" className={styles.addressField}>
                Address *
              </div>
              <p className={styles.or}>OR</p>
              <Button
                className={styles.greenButton}
                variant="contained"
                color={showMap === "none" ? "primary" : "secondary"}
                startIcon={<RoomIcon />}
                onClick={handleHideMap}
              >
                {showMap === "none" ? "Pick from the" : "Hide"} Map
              </Button>
              <h2 className={styles.addressString}>{address}</h2>
              <TextField
                className={styles.inputField}
                select
                label="Surface"
                value={surface}
                onChange={handleSurfaceChange}
              >
                {surfaces.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.value}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                className={styles.inputField}
                select
                label="Place type"
                value={placeType}
                onChange={handlePlaceTypeChange}
              >
                {placeTypes.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.value}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                required
                className={styles.inputField}
                label="Baskets"
                type="number"
                placeholder="4"
                {...register("baskets", { required: true })}
              />
              <div className={styles.imageUploading}>
                <InputLabel required={true} style={{ margin: "10px 0" }}>
                  Image
                </InputLabel>
                <div className={styles.imageUploadBar}>
                  <InputBase
                    inputProps={{ "aria-label": "upload image file" }}
                    type="file"
                    onChange={(e) => setImage(e.target.files[0])}
                  />
                  <Button
                    className={styles.uploadButton}
                    variant="contained"
                    color="primary"
                    startIcon={<CloudUploadIcon />}
                    onClick={uploadImage}
                    disabled={!image}
                  >
                    {uploadingImage ? (
                      <CircularProgress size={48} />
                    ) : (
                      "Upload Image"
                    )}
                  </Button>
                </div>
              </div>
              <div className={styles.addChip}>
                {url && (
                  <Chip
                    className={styles.successChip}
                    label="Image was successfully uploaded"
                    color="primary"
                    icon={<CheckIcon />}
                    variant="outlined"
                  />
                )}
              </div>
              <TextField
                className={styles.inputField}
                label="Court link"
                placeholder="https://nba.com"
                {...register("link")}
              />
              <TextField
                className={styles.inputField}
                label="Your name or link to your account"
                placeholder="@koripallopaikat"
                {...register("credentials")}
              />
            </div>
            {(errors.address || errors.baskets || errors.url) && (
              <Snackbar open={open}>
                <div>
                  <Alert severity="error">
                    Address, Baskets and Picture fields are required
                  </Alert>
                </div>
              </Snackbar>
            )}
            <Button
              variant="contained"
              color="primary"
              type="submit"
              className={styles.greenButton}
              startIcon={<PublishIcon />}
            >
              Submit Court
            </Button>
          </form>
        </div>
      ) : (
        <>
          <h2 className={styles.submitHeader}>
            Thank you for contribution. New Court is successfully added to a
            database and will be reviewed soon 👋.
          </h2>
          <h2 className={styles.submitTimeCounter}>
            This page will refresh in {seconds} seconds.
          </h2>
          <Snackbar open={open} onClose={handleClose}>
            <div>
              <Alert onClose={handleClose} severity="success">
                Success!
              </Alert>
            </div>
          </Snackbar>
        </>
      )}
    </div>
  );
}
