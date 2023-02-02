import React from "react";
import { Image as ImageGrommet, Box } from "grommet";
import imageSamourai from "../assets/images/Samurai.png";

function Image() {
  return (
    <Box height="small" width="small">
      <ImageGrommet src={imageSamourai} alt="fallback image" />
    </Box>
  );
}

export default Image;
