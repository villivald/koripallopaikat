import React from "react";
import { connectToDatabase } from "../../util/mongodb";
import ListCourt from "../../components/ListCourt";
import Header from "../../components/Header";

const index = ({ courts }) => {
  return (
    <div>
      <Header />
      <div className="listCourt">
        {courts.map((court) => (
          <ListCourt court={court} key={court._id} />
        ))}
      </div>
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
