import React from "react";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";
import Bienvenue from "../assets/images/Bienvenue.png";
import Interieur from "../assets/images/A_interieurdu.png";
import Tardis from "../assets/images/TARDIS.png";
import Map from "../components/Map";
import tardisCouv from "../assets/images/couv-tardis.png";
import style from "../styles/tardis.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.titre}>
        <h1>Bienvenue</h1>
        <div className={styles.picture}>
          <img src={Bienvenue} alt="Bienvenue" />
          <img src={Interieur} alt="A l'intérieur du" />
          <img src={Tardis} alt="TARDIS" />
        </div>
        <p>
          Le Docteur a convaincu le TARDIS de vous octroyer un voyage,
          choissisez bien ! Parmis la liste ci-dessous, vous trouverez des
          villes et des époques, chacune différente d'une autre. Vous pouvez y
          aller pendant une heure. Mais attention ! Ce choix est à vos risques
          et périls.
        </p>
      </div>
      <div className={styles.map}>
        <Map />
      </div>
      <div className={style.tardisFly}>
        <img src={tardisCouv} alt="Tardis" />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
