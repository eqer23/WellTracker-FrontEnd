import React from "react";
import { Box } from "@mui/material";
import Header from "../Header";
import Topbar from "../Global/Topbar";
import Sidebar from "../Global/Sidebar";

const Dashboard = () => {
  return (
    <div>
      <Sidebar />
      <div>
        <div>
        <Topbar />
          <Header title="DASHBOARD" subtitle="Welcome to Instafit" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
