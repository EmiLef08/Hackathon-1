import React, { useEffect, useRef } from "react";
import { Image as ImageGrommet, Box, Carousel } from "grommet";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "../styles/Tokyo.module.css";
import Viking2 from "../assets/images/floki.jpg.webp";
import Viking1 from "../assets/images/Viking.jpg";
import Viking4 from "../assets/images/Viking4.jpg";
import Viking5 from "../assets/images/vikings-7714558_1280.jpg";
import "../font/Kashima Demo.otf";
import sound from "../assets/images/tardis-sound (2).mp3";

function Svalbard() {
  const audioRef = useRef(null);
  useEffect(() => {
    audioRef.current.play();
  }, []);
  return (
    <div>
      <div style={{ display: "none" }}>
        <audio ref={audioRef} controls>
          <track kind="captions" />
          <source src={sound} type="audio/mpeg" />
        </audio>
      </div>
      <Header />
      <div className="box">
        <Box
          height="large"
          width="Large"
          overflow="hidden"
          className={styles.carousselSvalbard}
        >
          <Carousel fill="true" play={2000} alignSelf="center">
            <ImageGrommet fit="cover" src={Viking1} />
            <ImageGrommet fit="cover" src={Viking2} />
            <ImageGrommet fit="cover" src={Viking5} />
          </Carousel>
        </Box>
      </div>
      <div className="hole" />
      <Box fit="cover" className={styles.img}>
        <ImageGrommet src={Viking4} alt="fallback image" />
      </Box>
      <div className={styles.text}>
        <Box>
          La vie des Vikings norvégiens était marquée par leurs traditions de
          navigation et de commerce, ainsi que par leur réputation de pillards
          et de guerriers. A cette époque, les Vikings étaient principalement
          basés en Scandinavie, mais ils avaient établi des colonies dans de
          nombreuses autres parties d'Europe et de l'Atlantique Nord. Ils
          étaient de bons constructeurs de navires et navigateurs, et leurs
          drakar leur permettaient d'entreprendre des voyages pour commercer,
          explorer et piller des terres lointaines. La société viking était
          hiérarchique, avec une forte culture guerrière, mais elle valorisait
          également des compétences telles que la forge, le travail du bois et
          la poésie. Leurs croyances étaient basées sur un panthéon de dieux, et
          ils tenaient de grandes assemblées, telles que la Thing, pour prendre
          des décisions et résoudre des conflits.
        </Box>
      </div>
      <Footer />
    </div>
  );
}

export default Svalbard;
