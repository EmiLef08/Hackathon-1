import React from "react";
import { Box, Footer as FooterGrommet, Text } from "grommet";

function Footer() {
  return (
    <div>
      <Box direction="column" justify="end">
        <FooterGrommet background="light-4" justify="center" pad="small">
          <Text textAlign="center" size="small">
            © 2023 BAD WOLF
          </Text>
        </FooterGrommet>
      </Box>
    </div>
  );
}

export default Footer;
