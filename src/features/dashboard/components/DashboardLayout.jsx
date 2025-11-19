"use client";

import DashboardSidebar from "./DashboardSidebar";
import useAccountStore from "@/Stores/useAccountStore";

const DashboardLayout = ({ children }) => {
 
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
