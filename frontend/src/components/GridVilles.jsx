import React from "react";
import { Image as ImageGrommet } from "grommet";
import imageBoston from "../assets/images/boston.png";
import bostonStreet from "../assets/images/bostonStreet.png";

function gridVille() {
  return (
    <div
      style={{ display: "grid", gridTemplateColumns: "1fr 2fr" }}
      className="gridHomme"
    >
      <div>
        <ImageGrommet src={bostonStreet} alt="fallback image" />
      </div>
      <div style={{ position: "relative" }}>
        <ImageGrommet src={imageBoston} alt="fallback image" />
      </div>
    </div>
  );
}

export default gridVille;
