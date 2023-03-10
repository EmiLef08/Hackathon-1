import React from "react";
import { Image as ImageGrommet, Box } from "grommet";
import Footer from "../components/Footer";
import Header from "../components/Header";
import quito from "../assets/images/quito.jpg";

function Quito() {
  return (
    <div>
      <Header />
      <div>
        <Box fit="contain">
          <ImageGrommet src={quito} alt="fallback image" />
        </Box>
      </div>
      <Footer />
    </div>
  );
}

export default Quito;
