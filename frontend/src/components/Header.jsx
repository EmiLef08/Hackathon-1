import React from "react";
import { Anchor, Header as HeaderGrommet, Nav, Grommet } from "grommet";

function Header() {
  return (
    <div>
      <box>
        <Grommet>
          <HeaderGrommet background="#6A4829" pad="medium" align="center">
            <Nav direction="row">
              <Anchor label="Home" href="/" />
              <Anchor label="Villes" href="/Villes" />
            </Nav>
          </HeaderGrommet>
        </Grommet>
      </box>
    </div>
  );
}

export default Header;
