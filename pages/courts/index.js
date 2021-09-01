import React, { useState } from "react";
import Head from "next/head";
import { Box } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import { connectToDatabase } from "../../util/mongodb";
import Court from "../../components/Court";
import Header from "../../components/Header";
import { useAppContext } from "../../context/state";

const index = () => {
  const state = useAppContext();
  let courts = state.courts;

  const itemsPerPage = 8;
  const [page, setPage] = useState(1);
  const numberOfPages = Math.ceil(courts.length / itemsPerPage);

  const handleChange = (event, value) => {
    event.preventDefault();
    setPage(value);
  };

  return (
    <main>
      <Head>
        <title>Koripallopaikat - Courts</title>
        <link rel="icon" href="favicons/favicon.ico" />
      </Head>
      <Header />
      <div className="listCourt">
        {courts
          .slice((page - 1) * itemsPerPage, page * itemsPerPage)
          .map((court) => (
            <Court court={court} key={court._id} />
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
    </main>
  );
};

export async function getStaticProps() {
  const { db } = await connectToDatabase();

  const courts = await db.collection("paikat").find({}).toArray();

  return {
    props: {
      courts: JSON.parse(JSON.stringify(courts)),
    },
  };
}

export default index;
