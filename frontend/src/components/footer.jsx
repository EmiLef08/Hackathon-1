import React from "react";
import { Anchor, Footer as FooterGrommet, Text } from "grommet";

function Footer() {
  return (
    <FooterGrommet background="brand" pad="medium">
      <Text>Copyright</Text>
      <Anchor label="About" />
    </FooterGrommet>
  );
}

export default Footer;
