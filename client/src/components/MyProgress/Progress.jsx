import React from 'react';
import { Box, useTheme } from '@mui/material';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Global/Sidebar';
import WorkoutTracker from '../Fitness/WorkoutTracker';

function Progress() {
  const theme = useTheme(); // This hook gets the theme object

  return (
    <div className="progress-container">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="sidebar">
        <Sidebar />
      </div>
      <Box
        sx={{
          gridArea: 'content',
          padding: 2,
          margin: 'auto',
          maxWidth: 800,
          backgroundColor: theme.palette.primary.main,
          borderRadius: theme.shape.borderRadius, // Using theme values
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          color: 'white', // Ensuring text is readable
          overflowY: 'auto', // Allows for scrolling within the component
        }}
      >
        <WorkoutTracker />
      </Box>
    </div>
  );
}

export default Progress;
