import MainPageCourt from "./MainPageCourt";
import News from "./News";

import mainPageCourts from "../data/mainPageCourts";

import styles from "../css/Main.module.css";

export default function Main() {
  return (
    <>
      <div className={styles.container}>
        <News />
        {mainPageCourts.map((court) => (
          <MainPageCourt court={court} key={court._id} />
        ))}
      </div>
    </>
  );
}
