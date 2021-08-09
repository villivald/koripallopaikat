import React, { useState } from "react";
import Head from "next/head";
import Header from "../components/Header";
import SearchObject from "../components/SearchObject";
import { Switch, TextField } from "@material-ui/core";
import { connectToDatabase } from "../util/mongodb";
import distance from "../util/distance";
import { useAppContext } from "../context/state";

export default function Search() {
  const state = useAppContext();
  let courts = state.courts;

  const [filter, setFilter] = useState("");
  const [sortByBaskets, setSortByBaskets] = useState(false);
  const [sortBySurface, setSortBySurface] = useState(false);
  const [sortByAddress, setSortByAddress] = useState(false);
  const [sortByDistance, setSortByDistance] = useState(false);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  courts = courts.map((court) => ({
    ...court,
    distance: distance(court.lat, court.lon) / 1000,
  }));

  return (
    <div>
      <Head>
        <title>Koripallopaikat - About</title>
        <link rel="icon" href="favicons/favicon.ico" />
      </Head>
      <Header />
      <div>
        <h2 className="sortFilterTitle">Filter by</h2>
        <div className="sortFilter">
          <TextField
            onChange={handleFilterChange}
            type="text"
            placeholder="Merimiehenkatu, 9"
            label="Address"
          />
        </div>
        <h2 className="sortFilterTitle">Sort by</h2>
        <div className="sortFilter sort">
          Distance:
          <Switch onChange={() => setSortByDistance(!sortByDistance)} />
          Baskets:
          <Switch onChange={() => setSortByBaskets(!sortByBaskets)} />
          Surface type:
          <Switch onChange={() => setSortBySurface(!sortBySurface)} />
          Address:
          <Switch onChange={() => setSortByAddress(!sortByAddress)} />
        </div>
      </div>
      <div className="listCourt search">
        {courts
          .filter((court) =>
            court.address.toLowerCase().includes(filter.toLowerCase())
          )
          .sort((a, b) => sortByDistance && (a.distance > b.distance ? 1 : -1))
          .sort((max, min) => sortByBaskets && min.baskets - max.baskets)
          .sort((a, b) => sortBySurface && (a.surface > b.surface ? 1 : -1))
          .sort((a, b) => sortByAddress && (a.address > b.address ? 1 : -1))
          .map((court) => (
            <SearchObject court={court} key={court._id} />
          ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const { db } = await connectToDatabase();
  const courts = await db.collection("paikat").find({}).toArray();

  return {
    props: {
      courts: JSON.parse(JSON.stringify(courts)),
    },
  };
}
