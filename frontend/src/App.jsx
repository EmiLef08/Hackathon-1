import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import User from "./pages/User";

import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Link to="/" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="users" element={<User />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
