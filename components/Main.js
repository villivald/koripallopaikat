import MainPageCourt from "./MainPageCourt";
import mainPageCourts from "../data/mainPageCourts";
import News from "./News";
import Footer from "./Footer";

const main = () => {
  return (
    <>
      <div className="container">
        <News />
        {mainPageCourts.map((court) => (
          <MainPageCourt court={court} key={court._id} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default main;
