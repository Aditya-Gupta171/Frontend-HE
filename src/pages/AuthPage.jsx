import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("You must log in to access this page.");
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="page">
      <h1>Welcome to the Protected Page!</h1>
      <p>You are successfully authenticated.</p>
    </div>
  );
};

export default AuthPage;
