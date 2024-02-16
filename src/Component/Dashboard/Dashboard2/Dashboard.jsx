// Dashboard.js
import React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import { useUserContext } from "../../UserContext";

const Dashboard = () => {
  const { user } = useUserContext();
  const isAdmin = true;

  const userRole = isAdmin ? "Admin" : "User";

  return (
    <>
      <div>
        <Navbar />
        <div className="dashboard-container">
          <Sidebar userRole={userRole} />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
