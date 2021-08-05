import React, { useState } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import { Switch, TextField, Box } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import { connectToDatabase } from "../../util/mongodb";

const CourtList = dynamic(() => import("../../components/CourtList"));
const Header = dynamic(() => import("../../components/Header"));

const index = ({ courts }) => {
  const itemsPerPage = 8;
  const [page, setPage] = useState(1);
  const [numberOfPages] = useState(Math.ceil(courts.length / itemsPerPage));
  const [filter, setFilter] = useState(null);
  const [sortByBaskets, setSortByBaskets] = useState(false);
  const [sortBySurface, setSortBySurface] = useState(false);
  const [sortByAddress, setSortByAddress] = useState(false);

  const handleChange = (event, value) => {
    event.preventDefault();
    setPage(value);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };
  return (
    <div>
      <Head>
        <title>Koripallopaikat - Courts</title>
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
        <div className="sortFilter">
          Baskets:
          <Switch onChange={() => setSortByBaskets(!sortByBaskets)} />
          Surface type:
          <Switch onChange={() => setSortBySurface(!sortBySurface)} />
          Address:
          <Switch onChange={() => setSortByAddress(!sortByAddress)} />
        </div>
      </div>
      <div className="listCourt">
        {courts
          .filter((court) =>
            filter
              ? court.address.toLowerCase().includes(filter.toLowerCase())
              : court
          )
          .sort((max, min) => sortByBaskets && min.baskets - max.baskets)
          .sort((a, b) => sortBySurface && (a.surface > b.surface ? 1 : -1))
          .sort((a, b) => sortByAddress && (a.address > b.address ? 1 : -1))
          .slice((page - 1) * itemsPerPage, page * itemsPerPage)
          .map((court) => (
            <CourtList court={court} key={court._id} />
          ))}
      </div>
      <Box component="span" className="pagination">
        <Pagination
          count={numberOfPages}
          page={page}
          onChange={handleChange}
          defaultPage={1}
          color="primary"
          size="large"
          showFirstButton
          showLastButton
        />
      </Box>
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

export default index;
