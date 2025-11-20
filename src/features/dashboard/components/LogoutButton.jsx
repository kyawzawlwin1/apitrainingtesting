"use client";
import useAccountStore from "@/Stores/useAccountStore";
import { useRouter } from "next/navigation";
import React from "react";

const LogoutButton = () => {
  const { logout } = useAccountStore();
  const router = useRouter();
  const handleLogout = () => {
    logout();
    router.push("/login")
  };
  return <button onClick={handleLogout}>logout</button>;
};

export default LogoutButton;
