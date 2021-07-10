import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { connectToDatabase } from "../../util/mongodb";
import Header from "../../components/Header";

const Page = ({ courts }) => {
  const router = useRouter();
  const { id } = router.query;

  const currentCourt = courts.filter((court) => court.address === id)[0];
  return (
    <div>
      <Header />
      <div className="idContainer">
        <h1>{currentCourt.address}</h1>
        <img src={currentCourt.pic} width={538} height={403} />
        <p>Baskets: {currentCourt.baskets}</p>
        <p>Surface: {currentCourt.surface}</p>
        <p>Type: {currentCourt.type}</p>
        <Link
          key={currentCourt._id}
          href={`${currentCourt.link}`}
          as={`${currentCourt.link}`}
        >
          Link
        </Link>
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

export default Page;
