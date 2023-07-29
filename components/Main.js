import MainPageCourt from "./MainPageCourt";
import News from "./News";

import mainPageCourts from "../data/mainPageCourts";

const main = () => {
  return (
    <>
      <div className="container">
        <News />
        {mainPageCourts.map((court) => (
          <MainPageCourt court={court} key={court._id} />
        ))}
      </div>
    </>
  );
};

export default main;
