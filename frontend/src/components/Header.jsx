import React from "react";
import { Anchor, Header as HeaderGrommet, Nav } from "grommet";

function Header() {
  return (
    <div>
      <box>
        <HeaderGrommet background="#6A4829" pad="medium">
          <Nav direction="row" align="center">
            <Anchor label="Home" href="/" color="#EFD9B0" />
            <Anchor label="Villes" href="/villes" color="#EFD9B0" />
          </Nav>
        </HeaderGrommet>

      </box>
    </div>
  );
}

export default Header;
