import React from "react";
import "./Dashboard.css";
import { Box } from "@mui/material";
import Header from "../Header";

const Dashboard = () => {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to Instafit" />
      </Box>
    </Box>
  );
};

export default Dashboard;
