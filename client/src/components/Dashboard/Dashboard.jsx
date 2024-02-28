import React from "react";
import { Box } from "@mui/material";
import Header from "../Header";
import Navbar from "../Navbar/Navbar";

const Dashboard = () => {
    return (
        <div className="home">
            <Navbar />
            <Box m="20px">
                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Header title="DASHBOARD" subtitle="Welcome to Instafit" />
                </Box>
            </Box>
        </div>
    );
};

export default Dashboard;
