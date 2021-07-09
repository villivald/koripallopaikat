import React from "react";
import dynamic from "next/dynamic";
import { connectToDatabase } from "../../util/mongodb";

const CourtList = dynamic(() => import("../../components/CourtList"));
const Header = dynamic(() => import("../../components/Header"));

const index = ({ courts }) => {
  return (
    <div>
      <Header />
      <div className="listCourt">
        {courts.map((court) => (
          <CourtList court={court} key={court._id} />
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
