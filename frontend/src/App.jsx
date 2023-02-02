import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Villes from "./pages/villes";

function App() {
  return (
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
  );
}

export default App;
