import React, { useState } from "react";

function Id() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [photo, setPhoto] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // authentification ici...
    setIsLoggedIn(true);
    setPhoto("/path/to/photo.jpg");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="Login">
      {isLoggedIn ? (
        <div>
          <img src={photo} alt="Id" />
          <button type="button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
}

export default Id;
