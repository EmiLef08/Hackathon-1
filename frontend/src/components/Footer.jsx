import React, { useState } from "react";
import { Box, Footer as FooterGrommet, Text, Layer } from "grommet";

function Footer() {
  const [showLayer, setShowLayer] = useState(false);

  return (
    <div>
      {showLayer && (
        <Layer
          onEsc={() => setShowLayer(false)}
          onClickOutside={() => setShowLayer(false)}
        >
          <Box pad="medium" gap="small" width="medium">
            <Text>This is a pop up!</Text>
          </Box>
        </Layer>
      )}
      <Box direction="column" justify="end">
        <FooterGrommet
          background="light-4"
          justify="center"
          pad="small"
          onClick={() => setShowLayer(true)}
        >
          <Text textAlign="center" size="small">
            A propos
          </Text>
        </FooterGrommet>
      </Box>
    </div>
  );
}
export default Footer;
