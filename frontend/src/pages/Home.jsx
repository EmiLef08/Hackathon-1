import React from "react";
import Grid from "../components/Grid";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";


export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.header}>
        <Header />
      </div>
      <h1 className={styles.titre}>Tempus itinerantur</h1>
      <Grid />
      <div>
        <Footer />
      </div>
    </div>
  );
}
