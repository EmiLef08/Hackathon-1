import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Grommet } from "grommet";
import Home from "./pages/Home";
import { UserContextProvider } from "./context/UserContext";

import "./App.css";
import Villes from "./pages/villes";

function App() {
  return (
    <Grommet theme="grommet">
      <Router>
        <div>
          <nav>
            <Link to="/" />
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="villes" element={<Villes />} />
          </Routes>
        </div>
      </Router>
    </Grommet>
    <Router>
      <UserContextProvider>
        <nav>
          <Link to="/" />
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="villes" element={<Villes />} />
        </Routes>
      </UserContextProvider>
    </Router>
  );
}

export default App;
