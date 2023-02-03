import React from "react";
import { Box } from "grommet";
import gridVille from "../components/GridVilles";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Boston() {
  return (
    <div>
      <Header />
      <div>
        <Box>
          <gridVille />
        </Box>
      </div>
      <Footer />
    </div>
  );
}

export default Boston;
