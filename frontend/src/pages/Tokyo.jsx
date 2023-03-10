import React, { useState, useEffect, useRef } from "react";
import { Image as ImageGrommet, Box, Carousel, Button } from "grommet";
import Footer from "../components/Footer";
import Header from "../components/Header";
import imageSamourai from "../assets/images/Samurai.png";
import styles from "../styles/Tokyo.module.css";
import samurai1 from "../assets/images/samurai1.jpeg";
import samurai2 from "../assets/images/samurai2.jpeg";
import samurais from "../assets/images/samurais.jpg";
import "../font/Kashima Demo.otf";
import gif from "../assets/images/Samurai_coupe.mp4";
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
      <Box fit="cover" className={styles.img}>
        <ImageGrommet src={imageSamourai} alt="fallback image" />
      </Box>
      <Box
        justify="center"
        height="Large"
        width="Large"
        fill="true"
        alignSelf="baseline"
      >
        <Button
          type="button"
          onClick={() => setShowPopup(true)}
          className="button"
          display="none"
        >
          {" "}
          Trouver le samourai{" "}
        </Button>
        {showPopup && (
          <div className="popup">
            <p>Bravo, vous avez trouv?? !</p>
            <video type="video/mp4" src={gif} autoPlay loop muted>
              <track kind="captions" />
            </video>
          </div>
        )}
      </Box>
      <div className={styles.text}>
        <Box>
          La vie au temps des samourais ??tait tr??s diff??rente de la vie
          d'aujourd'hui. La soci??t?? ??tait tr??s hi??rarchis??e et r??gie par un
          syst??me de classes. Les samourais ??taient consid??r??s comme une classe
          sup??rieure et ils jouissaient d'un grand respect et d'un statut
          privil??gi??. Ils ??taient responsables de la protection et de la d??fense
          des terres et des int??r??ts de leur clan et de leur seigneur. Les
          samourais ??taient des guerriers et des combattants chevronn??s, form??s
          aux arts martiaux et aux armes ?? feu. Ils ??taient ??galement form??s ??
          l'??tiquette et ?? la conduite et devaient se comporter avec dignit?? et
          respect. La vie des samourais ??tait tr??s rigide et ils ??taient
          strictement tenus de respecter la loi et les devoirs
        </Box>
      </div>
      <Footer />
    </div>
  );
}

export default Tokyo;
