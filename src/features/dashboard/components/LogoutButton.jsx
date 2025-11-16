"use client"
import React from "react";

const LogoutButton = () => {
  const handleLogout = () => {
    console.log("u logged out");
  };
  return <button onClick={handleLogout}>logout</button>;
};

export default LogoutButton;
