import React from "react";
import Map from "../components/Map";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <div>
        <h1>Tempus itinerantur</h1>
      </div>
      <div>
        <Map />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
