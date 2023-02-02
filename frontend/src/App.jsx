import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";

import User from "./pages/User";

import { UserContextProvider } from "./context/UserContext";



import "./App.css";
import Villes from "./pages/villes";

function App() {
  return (
    <Router>

      <UserContextProvider>
        <Link to="/" />

      <div>
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
