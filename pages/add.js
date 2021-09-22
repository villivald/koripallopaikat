import { useForm } from "react-hook-form";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { makeStyles } from "@material-ui/core/styles";
import Snackbar from "@material-ui/core/Snackbar";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import InputBase from "@material-ui/core/InputBase";
import MuiAlert from "@material-ui/lab/Alert";
import Chip from "@material-ui/core/Chip";
import MenuItem from "@material-ui/core/MenuItem";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import CheckIcon from "@material-ui/icons/Check";
import RoomIcon from "@material-ui/icons/Room";
import Header from "../components/Header";
import surfaces from "../data/surfaces";
import placeTypes from "../data/placeTypes";
import mapboxgl from "!mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import MapboxClient from "@mapbox/mapbox-sdk/services/geocoding";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";

const useStyles = makeStyles(() => ({
  input: {
    minWidth: "280px",
  },

  submit: {
    margin: "20px 0 10px 0",
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function Add() {
  const classes = useStyles();
  const router = useRouter();
  const [visible, setVisible] = useState(false);

  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");

  const [surface, setSurface] = useState("");
  const [placeType, setPlaceType] = useState("");
  const [address, setAddress] = useState("");

  const [seconds, setSeconds] = useState(20);

  const handleSurfaceChange = (event) => {
    setSurface(event.target.value);
  };
  const handlePlaceTypeChange = (event) => {
    setPlaceType(event.target.value);
  };

  const uploadImage = () => {
    const data = new FormData();
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
      })
      .catch((err) => console.log(err));
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
    <div>
      <Head>
        <title>Koripallopaikat - Add new court</title>
        <link rel="icon" href="favicons/favicon.ico" />
      </Head>
      <Header />
      <div className="colored">
        <h1 className="coloredText">Add a new basketball court</h1>
      </div>
      <div className="canvas-container">
        <div
          ref={mapContainer}
          className="map-container-small"
          style={{ display: showMap }}
        />
      </div>
      {!visible ? (
        <div className="form">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input">
              <div id="geocoder">Address *</div>
              <p className="or">OR</p>
              <Button
                variant="contained"
                color={showMap === "none" ? "primary" : "secondary"}
                startIcon={<RoomIcon />}
                onClick={handleHideMap}
              >
                {showMap === "none" ? "Pick from the" : "Hide"} Map
              </Button>
              <h2 className="addressString">{address}</h2>
              <TextField
                className={classes.input}
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
                className={classes.input}
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
                className={classes.input}
                label="Baskets"
                type="number"
                placeholder="4"
                {...register("baskets", { required: true })}
              />
              <div className="imageUploading">
                <InputLabel required={true} style={{ margin: "10px 0" }}>
                  Image
                </InputLabel>
                <InputBase
                  inputProps={{ "aria-label": "naked" }}
                  type="file"
                  onChange={(e) => setImage(e.target.files[0])}
                />
                <Button
                  className="uploadButton"
                  variant="contained"
                  color="primary"
                  startIcon={<CloudUploadIcon />}
                  onClick={uploadImage}
                >
                  Upload
                </Button>
              </div>
              <div className="addChip">
                {url && (
                  <Chip
                    label="Image was successfully loaded"
                    color="primary"
                    icon={<CheckIcon />}
                    variant="outlined"
                  />
                )}
              </div>
              <TextField
                className={classes.input}
                label="Link"
                placeholder="https://nba.com"
                {...register("link")}
              />
              <TextField
                className={classes.input}
                label="Your name or link to your account"
                placeholder="@koripallopaikat"
                {...register("credentials")}
              />
            </div>
            {(errors.address || errors.baskets || errors.url) && (
              <Snackbar open={open}>
                <Alert severity="error">
                  Address, Baskets and Picture fields are required
                </Alert>
              </Snackbar>
            )}
            <Button
              variant="contained"
              color="primary"
              type="submit"
              className={classes.submit}
            >
              Submit
            </Button>
          </form>
        </div>
      ) : (
        <>
          <h2 className="submitHeader">
            Thank you for contribution. New Court is successfully added to a
            database and will be reviewed soon 👋.
          </h2>
          <h2 className="submitTimeCounter">
            This page will refresh in {seconds} seconds.
          </h2>
          <Snackbar open={open} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
              Success!
            </Alert>
          </Snackbar>
        </>
      )}
    </div>
  );
}
