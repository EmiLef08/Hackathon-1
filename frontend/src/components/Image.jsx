import React from "react";
import { Image as ImageGrommet, Box } from "grommet";
import imageSamourai from "../assets/images/Pierre_a_picture_of_tokyo_at_the_samurai_age_photo_realistic_4k_daa7bde8-8ca4-4e3a-9c37-2aed13cfce35.png"

function Image() {
  return (
    <Box height="small" width="small">
      <ImageGrommet src={imageSamourai} alt="fallback image" />
    </Box>
  );
}

export default Image;
