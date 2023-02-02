import React from "react";
import { Image as ImageGrommet, Box } from "grommet";
import imageSamourai from "../assets/images/samourai.png";

function Image() {
  return (
    <Box height="large" width="large">
      <ImageGrommet fit="cover" src={imageSamourai} alt="image" />
    </Box>
  );
}

export default Image;
