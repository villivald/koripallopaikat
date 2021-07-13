import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/router";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import Header from "../components/Header";

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
      }, 10000);

      console.log("New court is successfully added");
    } catch (error) {
      console.log("Failed to add court");
    }
  };

  const onSubmit = (data) => {
    const form = {
      address: data.address,
      surface: data.surface,
      type: data.type,
      baskets: data.baskets,
      pic: data.pic,
      link: data.link,
    };
    postData(form);
  };

  return (
    <div>
      <Header />
      <h1 className="addHeader">Add a new basketball court</h1>
      <div className="form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input">
            <TextField
              required
              className={classes.input}
              id="outlined-basic"
              label="Address"
              placeholder="Mannerheimintie, 100"
              {...register("address", { required: true })}
            />
            <TextField
              className={classes.input}
              id="outlined-basic"
              label="Surface"
              placeholder="Asphalt"
              {...register("surface")}
            />
            <TextField
              className={classes.input}
              id="outlined-basic"
              label="Place type"
              placeholder="Outdoor basketball court"
              {...register("type")}
            />
            <TextField
              required
              className={classes.input}
              id="outlined-basic"
              label="Baskets"
              type="number"
              placeholder="4"
              {...register("baskets", { required: true })}
            />
            <TextField
              required
              className={classes.input}
              id="outlined-basic"
              label="Image link"
              placeholder="https://imgur.com/mI1dZ8i"
              {...register("pic", { required: true })}
            />
            <div className="imageUploading">
              <input
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
              ></input>
              <Button
                variant="contained"
                color="primary"
                startIcon={<CloudUploadIcon />}
                onClick={uploadImage}
              >
                Upload
              </Button>
            </div>
            <div className="uploadedLink">
              {url && `Paste this url to the Image Link ⬆ field:  ${url}`}
            </div>
            <TextField
              className={classes.input}
              id="outlined-basic"
              label="Link"
              placeholder="https://nba.com"
              {...register("link")}
            />
          </div>
          {(errors.address || errors.baskets || errors.pic) && (
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
      {visible && (
        <>
          <h2 style={{ textAlign: "center" }}>
            Thank you for contribution. New Court is successfully added to a
            database and will be reviewed soon 👋.
          </h2>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
              Success!
            </Alert>
          </Snackbar>
        </>
      )}
    </div>
  );
}
