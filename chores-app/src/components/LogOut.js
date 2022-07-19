import React from "react";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const userRole = localStorage.getItem("userRole");

// eslint-disable-next-line react/prop-types
const LogOut = () => {
  const { logOut } = useUserAuth();
  const navigate = useNavigate();

  const handleLogOut = async (e) => {
    e.preventDefault();
    await logOut();
    localStorage.removeItem("userID");
    localStorage.removeItem("userRole");
    localStorage.removeItem("familyID");
    console.log("localStorage:", userRole);
    navigate("/");
  };
  return (
    <button type="button" onClick={handleLogOut}>
      Log out
    </button>
  );
};

export default LogOut;
