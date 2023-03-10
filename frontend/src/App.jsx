import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Grommet } from "grommet";
import { UserContextProvider } from "./context/UserContext";
import Home from "./pages/Home";

import "./App.css";
import Tokyo from "./pages/Tokyo";
import Svalbard from "./pages/Svalbard";
import Quito from "./pages/Quito";
import Boston from "./pages/Boston";
import LosAngeles from "./pages/LosAngeles";

function App() {
  return (
    <Grommet>
      <Router>
        <UserContextProvider>
          <nav>
            <Link to="/" />
            <Link to="/Tokyo" />
            <Link to="/Svalbard" />
            <Link to="/Quito" />
            <Link to="/Boston" />
            <Link to="/LosAngeles" />
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Tokyo" element={<Tokyo />} />
            <Route path="/Svalbard" element={<Svalbard />} />
            <Route path="/Quito" element={<Quito />} />
            <Route path="/Boston" element={<Boston />} />
            <Route path="/LosAngeles" element={<LosAngeles />} />
          </Routes>
        </UserContextProvider>
      </Router>
    </Grommet>
  );
}

export default App;
