import React, { useState, useMemo } from "react";
import Head from "next/head";
import { VirtuosoGrid } from "react-virtuoso";

import {
  Switch,
  TextField,
  InputLabel,
  MenuItem,
  FormControl,
  FormControlLabel,
  Select,
} from "@mui/material";

import Header from "../components/Header";
import SearchObject from "../components/SearchObject";

import { connectToDatabase } from "../util/mongodb";
import distance from "../util/distance";

export default function Search({ courts }) {
  const [filter, setFilter] = useState("");
  const [sortByBaskets, setSortByBaskets] = useState(false);
  const [sortBySurface, setSortBySurface] = useState(false);
  const [sortByAddress, setSortByAddress] = useState(false);
  const [sortByDistance, setSortByDistance] = useState(false);
  const [sortByDistrict, setSortByDistrict] = useState(false);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  courts = courts.map((court) => ({
    ...court,
    distance: distance(court.lat, court.lon) / 1000,
  }));

  const [city, setCity] = useState("");
  const handleChangeForm = (event) => {
    setCity(event.target.value);
  };

  if (city === "" || city === "All") {
    courts = courts;
  } else {
    courts = courts.filter((court) => court.city === city);
  }

  const sortedCourts = useMemo(() => {
    return courts
      .filter(
        (court) =>
          court.address.toLowerCase().includes(filter.toLowerCase()) ||
          court.district.toLowerCase().includes(filter.toLowerCase())
      )
      .sort((a, b) => sortByDistance && (a.distance > b.distance ? 1 : -1))
      .sort((max, min) => sortByBaskets && min.baskets - max.baskets)
      .sort((a, b) => sortBySurface && (a.surface > b.surface ? 1 : -1))
      .sort((a, b) => sortByAddress && (a.address > b.address ? 1 : -1))
      .sort((a, b) => sortByDistrict && (a.district > b.district ? 1 : -1));
  }, [
    courts,
    filter,
    sortByDistance,
    sortByBaskets,
    sortBySurface,
    sortByAddress,
    sortByDistrict,
  ]);

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
          <FormControl className="searchForm">
            <InputLabel>City</InputLabel>
            <Select value={city} onChange={handleChangeForm}>
              <MenuItem value={"All"}>All</MenuItem>
              <MenuItem value={"Helsinki"}>Helsinki</MenuItem>
              <MenuItem value={"Espoo"}>Espoo</MenuItem>
              <MenuItem value={"Vantaa"}>Vantaa</MenuItem>
              <MenuItem value={"Turku"}>Turku</MenuItem>
              <MenuItem value={"Tampere"}>Tampere</MenuItem>
              <MenuItem value={"Porvoo"}>Porvoo</MenuItem>
              <MenuItem value={"Lahti"}>Lahti</MenuItem>
              <MenuItem value={"Lohja"}>Lohja</MenuItem>
              <MenuItem value={"Fiskars"}>Fiskars</MenuItem>
            </Select>
          </FormControl>
        </div>
        <h2 className="sortFilterTitle">Sort by</h2>
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          width="150"
          className="amount"
        >
          <g>
            <path
              fill="#82c99b"
              d="M39.7,-51.1C50.6,-38.1,58.2,-24.8,62.9,-9.5C67.5,5.9,69.1,23.3,63.4,39.7C57.6,56,44.5,71.2,29.6,73C14.7,74.7,-2,63.1,-20.1,56.1C-38.3,49.2,-57.9,47,-70.4,35.6C-82.9,24.3,-88.4,3.9,-82,-11.3C-75.6,-26.6,-57.3,-36.6,-41.7,-48.8C-26.1,-60.9,-13,-75.3,0.7,-76.1C14.3,-76.9,28.7,-64.1,39.7,-51.1Z"
              transform="translate(100 100)"
            />
            <text x="45" y="110">
              {`${courts.length} ${courts.length === 1 ? "court" : "courts"}`}
            </text>
          </g>
        </svg>
        <div className="sortFilter sort">
          <FormControlLabel
            control={
              <Switch onChange={() => setSortByDistance(!sortByDistance)} />
            }
            label="Distance"
          />
          <FormControlLabel
            control={
              <Switch onChange={() => setSortByBaskets(!sortByBaskets)} />
            }
            label="Baskets"
          />
          <FormControlLabel
            control={
              <Switch onChange={() => setSortBySurface(!sortBySurface)} />
            }
            label="Surface"
          />
          <FormControlLabel
            control={
              <Switch onChange={() => setSortByAddress(!sortByAddress)} />
            }
            label="Address"
          />
          <FormControlLabel
            control={
              <Switch onChange={() => setSortByDistrict(!sortByDistrict)} />
            }
            label="District"
          />
        </div>
      </div>
      <div className="listCourt search">
        <VirtuosoGrid
          data={sortedCourts}
          itemContent={(_index, court) => (
            <SearchObject court={court} key={court._id} />
          )}
        />
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
