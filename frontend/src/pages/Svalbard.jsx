import React from "react";
import { Image as ImageGrommet, Box } from "grommet";
import Footer from "../components/Footer";
import Header from "../components/Header";
import imageSamourai from "../assets/images/Samurai.png";

function Svalbard() {
  return (
    <div>
      <Header />
      <div>
        <Box fit="contain">
          <ImageGrommet src={imageSamourai} alt="fallback image" />
        </Box>
      </div>
      <Footer />
    </div>
  );
}

export default Svalbard;
