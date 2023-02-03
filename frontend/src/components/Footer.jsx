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
            <Text>
              Fais par l'équipe Z : <br />
              Emeline Lefebvre, David Abruzzo, Pierre Aubin et Yohann Deletrez
            </Text>
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
            © 2023 BAD WOLF
          </Text>
        </FooterGrommet>
      </Box>
    </div>
  );
}
export default Footer;
