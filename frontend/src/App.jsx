import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import User from "./pages/User";

import { UserContextProvider } from "./context/UserContext";

import "./App.css";

function App() {
  return (
    <Router>
      <UserContextProvider>
        <Link to="/" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="users" element={<User />} />
        </Routes>
      </UserContextProvider>
    </Router>
  );
}

export default App;
