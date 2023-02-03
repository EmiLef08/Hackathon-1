import React from "react";
import { Image as ImageGrommet, Box } from "grommet";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LosAngeles from "../assets/images/LosAngeles.jpg";

function Boston() {
  return (
    <div>
      <Header />
      <div>
        <Box fit="contain">
          <ImageGrommet src={LosAngeles} alt="fallback image" />
        </Box>
      </div>
      <Footer />
    </div>
  );
}

export default Boston;
