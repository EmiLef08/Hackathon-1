import React from "react";
import CityBox from "../components/CityBox";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Image from "../components/Image";

function City() {
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

export default City;
