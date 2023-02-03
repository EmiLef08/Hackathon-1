import { React, useState, useEffect, useRef } from "react";
import { Image as ImageGrommet, Box, Carousel } from "grommet";
import Footer from "../components/Footer";
import Header from "../components/Header";
import imageSamourai from "../assets/images/Samurai.png";
import styles from "../styles/Tokyo.module.css";
import samurai1 from "../assets/images/samurai1.jpeg";
import samurai2 from "../assets/images/samurai2.jpeg";
import samurais from "../assets/images/samurais.jpg";
import "../font/Kashima Demo.otf";
import sound from "../assets/images/tardis-sound (2).mp3";

function Tokyo() {
  const [showPopup, setShowPopup] = useState(false);
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
          className={styles.carousel}
        >
          <Carousel fill="true" play={2000} alignSelf="baseline">
            <ImageGrommet fit="cover" src={samurai1} />
            <ImageGrommet fit="cover" src={samurai2} />
            <ImageGrommet fit="cover" src={samurais} />
          </Carousel>
        </Box>
      </div>
      <div className="hole" />
      <Box fit="cover" className={styles.img}>
        <ImageGrommet src={imageSamourai} alt="fallback image" />
      </Box>
      <div className={styles.text}>
        <Box>
          La vie au temps des samourais était très différente de la vie
          d'aujourd'hui. La société était très hiérarchisée et régie par un
          système de classes. Les samourais étaient considérés comme une classe
          supérieure et ils jouissaient d'un grand respect et d'un statut
          privilégié. Ils étaient responsables de la protection et de la défense
          des terres et des intérêts de leur clan et de leur seigneur. Les
          samourais étaient des guerriers et des combattants chevronnés, formés
          aux arts martiaux et aux armes à feu. Ils étaient également formés à
          l'étiquette et à la conduite et devaient se comporter avec dignité et
          respect. La vie des samourais était très rigide et ils étaient
          strictement tenus de respecter la loi et les devoirs
        </Box>
      </div>
      <div>
        <button
          type="button"
          onClick={() => setShowPopup(true)}
          className="button"
        >
          Trouver le samourai
        </button>
        {showPopup && (
          <div className="popup">
            <p>Bravo, vous avez trouvé !</p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Tokyo;
