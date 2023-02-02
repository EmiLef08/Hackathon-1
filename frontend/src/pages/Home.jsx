import React from "react";
import Grid from "../components/Grid";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.titre}>
        <h1>Bienvenue</h1>
        <img src="../assets/images/Bienvenue.png" alt="Bienvenue" />
        <img src="../assets/images/A intérieur du.png" alt="A l'intérieur du" />
        <img src="../assets/images/TARDIS.png" alt="TARDIS" />
      </div>
      <Grid />
      <div>
        <Footer />
      </div>
    </div>
  );
}
