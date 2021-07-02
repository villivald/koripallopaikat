import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/router";
import Header from "../components/Header";

export default function Add() {
  const router = useRouter();
  const [visible, setVisible] = useState(false);

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
        router.push("/");
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
          <div className="inputRow">
            Address:{" "}
            <input
              placeholder="Mannerheimintie, 100"
              {...register("address", { required: true })}
            />
          </div>
          <div className="inputRow">
            Surface:
            <input placeholder="Asphalt" {...register("surface")} />
          </div>
          <div className="inputRow">
            Place type:
            <input
              placeholder="Outdoor basketball court"
              {...register("type")}
            />
          </div>
          <div className="inputRow">
            Baskets:
            <input
              placeholder="4"
              {...register("baskets", { required: true })}
            />
          </div>
          <div className="inputRow">
            Picture:
            <input
              placeholder="https://imgur.com/mI1dZ8i"
              {...register("pic", { required: true })}
            />
          </div>
          <div className="inputRow">
            Link:
            <input placeholder="https://nba.com" {...register("link")} />
          </div>
          {(errors.address || errors.baskets || errors.pic) && (
            <span style={{ color: "red" }}>This field is required</span>
          )}
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <input type="submit" style={{ marginTop: "30px" }} />
          </div>
        </form>
      </div>
      <h2 style={{ textAlign: "center" }}>
        {visible &&
          "Thank you for contribution. New Court is successfully added to a database and will be reviewed soon 👋."}
      </h2>
    </div>
  );
}
