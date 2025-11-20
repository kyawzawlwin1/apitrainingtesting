"use client";

import DashboardSidebar from "./DashboardSidebar";
import useAccountStore from "@/Stores/useAccountStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const DashboardLayout = ({ children }) => {
  const { token } = useAccountStore.getState();
  const router = useRouter();
  useEffect(() => {
    if (!token) {
      router.push("/login");
    }
  }, []);

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
