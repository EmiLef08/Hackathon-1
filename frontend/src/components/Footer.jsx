import React from "react";
import { Box, Footer as FooterGrommet, Text } from "grommet";

function Footer() {
  return (
    <div>
      <Box align-items="bottom">
        <FooterGrommet background="light-4" justify="center" pad="small">
          <Text textAlign="center" size="small">
            © 2019 Copyright Grommet
          </Text>
        </FooterGrommet>
      </Box>
    </div>
  );
}

export default Footer;
