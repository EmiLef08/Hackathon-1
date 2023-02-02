import React from "react";

import Map from "./Map";
import Time from "./Time";

function grid() {
  return (
    <div
      style={{ display: "grid", gridTemplateColumns: "1fr 2fr" }}
      className="gridHomme"
    >
      <div>
        <Time />
      </div>
      <div style={{ position: "relative", background: "#3c3c3c" }}>
        <Map />
      </div>
    </div>
  );
}

export default grid;
