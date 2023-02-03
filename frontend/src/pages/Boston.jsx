import { Image as ImageGrommet, Box, Carousel } from "grommet";
import React, { useEffect, useRef } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "../styles/Boston.module.css";
import boston1 from "../assets/images/bostonStreet.png";
import boston2 from "../assets/images/boston.png";
import boston3 from "../assets/images/Broadway_theatres_1920.jpg";
import sound from "../assets/images/tardis-sound (2).mp3";
import "../font/Kashima Demo.otf";

function Boston() {
  const audioRef = useRef(null);
  useEffect(() => {
    audioRef.current.play();
  }, []);
  return (
    <div className={styles.bostonEffect}>
      <div style={{ display: "none" }}>
        <audio ref={audioRef} controls>
          <track kind="captions" />
          <source src={sound} type="audio/mpeg" />
        </audio>
      </div>
      <Header />
      <div className={styles.text}>
        <Box>
          Boston pendant l'ère de la Prohibition (1920-1933) était une ville
          marquée par les contradictions de la loi interdisant l'alcool. D'un
          côté, c'était un centre du commerce illégal d'alcool et des
          speakeasies, où les gens défiaient l'interdiction et buvaient en
          secret. De l'autre, la ville abritait un mouvement de tempérance fort
          et des officiels de la loi qui s'efforçaient de faire respecter
          l'interdiction. L'ère était marquée par des descentes fréquentes, des
          arrestations et des guerres de contrebandiers, entraînant une
          augmentation du crime organisé. Malgré les efforts des autorités, la
          Prohibition n'a pas réussi à réduire la consommation d'alcool et a au
          contraire donné naissance à un marché noir florissant et à la
          corruption. La fin de la Prohibition en 1933 a apporté un soulagement
          aux citoyens de Boston, qui pouvaient enfin boire légalement.
        </Box>
      </div>
      <div className="box">
        <Box
          height="large"
          width="Large"
          overflow="hidden"
          className={styles.carouselBoston}
        >
          <Carousel fill="true" play={2000} alignSelf="center">
            <ImageGrommet fit="cover" src={boston1} />
            <ImageGrommet fit="cover" src={boston3} />
            <ImageGrommet fit="cover" src={boston2} />
          </Carousel>
        </Box>
      </div>
      <div className="hole" />
      <Footer />
    </div>
  );
}

export default Boston;
