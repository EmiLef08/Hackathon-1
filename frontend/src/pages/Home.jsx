import React from "react";
import Map from "../components/Map";
import Footer from "../components/footer";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";

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
        <Footer />
      </div>
    </div>
  );
}
