"use client";
import React, { useEffect } from "react";
import DashboardSidebar from "./DashboardSidebar";
import useAccountStore from "@/Stores/useAccountStore";

const DashboardLayout = ({ children }) => {
  const { token } = useAccountStore();
  console.log(token);
  useEffect(() => {
    if (token) {
      console.log("you have been login");
    } else {
      console.log("you are not login");
    }
  }, [token]);
  return (
    <>
      <div className="grid grid-cols-12">
        <div className="col-span-4">
          <DashboardSidebar />
        </div>
        <div className="col-span-8">{children}</div>
      </div>
    </>
  );
};

export default DashboardLayout;
