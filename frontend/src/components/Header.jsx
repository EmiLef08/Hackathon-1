import React from "react";
import { Anchor, Header as HeaderGrommet, Nav } from "grommet";

function Header() {
  return (
    <div>
      <box>
        <HeaderGrommet background="light-3" pad="small">
          <Nav direction="row">
            <Anchor label="Home" href="/" />
            <Anchor label="Villes" href="/villes" />
          </Nav>
        </HeaderGrommet>
      </box>
    </div>
  );
}

export default Header;
