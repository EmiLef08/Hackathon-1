import React, { useState, useEffect } from "react";
import Footer from "../components/footer";
import Header from "../components/Header";
import Image from "../components/Image";

function Villes() {
  const [cities, setCities] = useState("TOKIO");

  useEffect(() => {
    fetch(`http://localhost:5000/villes`)
      .then((response) => response.json())
      .then((data) => {
        setCities(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <Header />
      <h1>{cities}</h1>
      <Image />
      <Footer />
    </div>
  );
}

export default Villes;
