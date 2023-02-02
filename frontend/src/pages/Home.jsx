import React from "react";
import Map from "../components/Map";
import Footer from "../components/footer";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";
import Timer from "../components/TimeJapan";

const [timezone, setTimezone] = useState(0);

const changeTimezone = (newTimezone) => {
  setTimezone(newTimezone);
};
export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.header}>
        <Header />
      </div>
      <h1 className={styles.titre}>Tempus itinerantur</h1>
      <div>
        <Map />
      </div>
      <div>
        <div>
          <Clock timezone={timezone} />
          <button onClick={() => changeTimezone(-1)}>-5</button>
          <button onClick={() => changeTimezone(0)}>0</button>
          <button onClick={() => changeTimezone(1)}>+10</button>
        </div>

        <Timer />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
