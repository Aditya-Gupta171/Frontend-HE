


import React from "react";
import { useNavigate } from "react-router-dom";
import "./../styles/Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token"); // Check if the user is logged in

  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("Logged out successfully!");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <h1>My App</h1>
      <div>
        {token ? (
          // Show Logout and Home button if logged in
          <>
            <button onClick={() => navigate("/home")}>Home</button>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          // Show Login, Register and Home if not logged in
          <>
            <button onClick={() => navigate("/login")}>Login</button>
            <button onClick={() => navigate("/register")}>Register</button>
            <button onClick={() => navigate("/home")}>Home</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
