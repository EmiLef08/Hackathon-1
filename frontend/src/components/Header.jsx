import React, { useState, useEffect } from "react";
import { Anchor, Header as HeaderGrommet, Nav } from "grommet";
import { Link } from "react-router-dom";

function Header() {
  const [villes, setVilles] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/villes")
      .then((response) => response.json())
      .then((data) => setVilles(data))
      .catch((error) => console.error(error));
  }, []);

  const handleSelect = (e) => {
    if (e.target.value === `Tokio`) {
      window.location.href = "/Tokyo";
    }
    if (e.target.value === `Boston`) {
      window.location.href = "/Boston";
    }
    if (e.target.value === `Svalbard`) {
      window.location.href = "/Svalbard";
    }
    if (e.target.value === `Quito`) {
      window.location.href = "/Quito";
    }
  };

  return (
    <div>
      <box>
        <HeaderGrommet background="#6A4829" pad="medium">
          <Nav direction="row" align="center">
            <Anchor label="Home" href="/" color="#EFD9B0" />
            <form>
              <label>
                Destinations{" "}
                <select onClick={handleSelect}>
                  <option value="">---</option>
                  {villes.map((ville) => (
                    <option key={ville.id} value={ville.id}>
                      {ville.name}
                    </option>
                  ))}
                </select>
              </label>
            </form>
          </Nav>
        </HeaderGrommet>
      </box>
    </div>
  );
}

export default Header;
