import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import City from "./pages/City";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/" />
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="City" element={<City />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
