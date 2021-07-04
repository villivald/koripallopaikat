import React from "react";
import { useRouter } from "next/router";
import Header from "../../components/Header";

const Page = () => {
  const router = useRouter();

  const { id } = router.query;

  return (
    <div>
      <Header />
      {id}
    </div>
  );
};

export default Page;
