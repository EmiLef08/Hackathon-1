import React from "react";
import { Footer as FooterGrommet, Text } from "grommet";

function Footer() {
  return (
    <div>
      <FooterGrommet background="light-4" justify="center" pad="small">
        <Text textAlign="center" size="small">
          © 2019 Copyright Grommet
        </Text>
      </FooterGrommet>
    </div>
  );
}

export default Footer;
