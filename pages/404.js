import React from "react";
import Image from "next/image";
import Header from "../components/Header";
import error from "../public/error.svg";

const ErrorPage = () => {
  return (
    <div>
      <Header />
      <div className="errorPage">
        <Image src={error} alt="404 page" width={600} height={600} />
      </div>
    </div>
  );
};

export default ErrorPage;
