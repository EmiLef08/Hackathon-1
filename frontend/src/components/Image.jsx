import React from "react";
import { Image as ImageGrommet, Box } from "grommet";

function Image() {
  return (
    <Box height="small" width="small">
      <ImageGrommet
        src="//v2.grommet.io/assets/IMG_4245_not_exists.jpg"
        alt="fallback image"
      />
    </Box>
  );
}

export default Image;
