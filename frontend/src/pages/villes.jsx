import React from "react";
import CityBox from "../components/CityBox";
import Footer from "../components/footer";
import Header from "../components/Header";
import Image from "../components/Image";
import axios from "axios"

function Villes() {
  return (
    <div>
      <Header />
      <h1>City</h1>

      <CityBox />
      <Image />
      <Footer />
    </div>
  );
}

export default Villes;
