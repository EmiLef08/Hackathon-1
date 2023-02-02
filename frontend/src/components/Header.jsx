import React from "react";
import { Anchor, Header as HeaderGrommet, Nav, Grommet } from "grommet";

function Header() {
  return (
    <div>
      <box>
        <Grommet theme="grommet">
          <HeaderGrommet background="light-3" pad="small">
            <Nav direction="row">
              <Anchor label="Home" href="/" />
              <Anchor label="Villes" href="/villes" />
            </Nav>
          </HeaderGrommet>
        </Grommet>
      </box>
    </div>
  );
}

export default Header;
