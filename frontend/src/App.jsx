import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Grommet } from "grommet";
import { UserContextProvider } from "./context/UserContext";
import Home from "./pages/Home";
import UserContextProvider from "./context/UserContext";

import "./App.css";
import Tokyo from "./pages/Tokyo";
import Svalbard from "./pages/Svalbard";
import Quito from "./pages/Quito";
import Boston from "./pages/Boston";

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
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Tokyo" element={<Tokyo />} />
            <Route path="/Svalbard" element={<Svalbard />} />
            <Route path="/Quito" element={<Quito />} />
            <Route path="/Boston" element={<Boston />} />
          </Routes>
        </UserContextProvider>
      </Router>
    </Grommet>
  );
}

export default App;
