import { useState, useEffect } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import FitnessCenterOutlinedIcon from "@mui/icons-material/FitnessCenterOutlined";
import RecommendOutlinedIcon from "@mui/icons-material/RecommendOutlined";

// Inside your component
<FitnessCenterOutlinedIcon />

//import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
//import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlineded";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
let URL = import.meta.env.VITE_SERVER_URL;

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

// const Sidebar = () => {
//     const theme = useTheme();
//     const colors = tokens(theme.palette.mode);
//     const [isCollapsed, setIsCollapsed] = useState(false);
//     const [selected, setSelected] = useState("Dashboard");

//     return (
//         <Box
//             sx={{
//                 // Optional: if you want the sidebar to fill the height of the viewport
//                 position: "fixed", // Keeps the sidebar in place during scroll
//                 top: 0, // Aligns the sidebar to the top of the viewport
//                 left: 0,
//                 zIndex: 1100,
//                 "& .pro-sidebar-inner": {
//                     background: `${colors.primary[400]} !important`,
//                 },
//                 "& .pro-icon-wrapper": {
//                     backgroundColor: "transparent !important",
//                 },
//                 "& .pro-inner-item": {
//                     padding: "0px 35px 5px 20px !important",
//                 },
//                 "& .pro-inner-item-hover": {
//                     color: "#868dfb !important",
//                 },
//                 "& .pro-menu-item.active": {
//                     color: "#6870fa !important",
//                 },
//             }}
//         >
//             <ProSidebar collapsed={isCollapsed}>
//                 <Menu iconShape="square">
//                     <IconButton
//                         onClick={() => setIsCollapsed(!isCollapsed)}
//                         style={{
//                             margin: "10px 0 20px 0px",
//                             color: colors.grey[100],
//                             position: "absolute", // Ensure this is always in the same place
//                             top: 10, // Adjust as necessary
//                             left: 10, // Adjust as necessary
//                             zIndex: 1200, // Ensure this is above the sidebar
//                         }}
//                     >
//                         <MenuOutlinedIcon />
//                     </IconButton>

//                     {/* Logo and Menu Icon */}
//                     {/* <MenuItem
//                         onClick={() => setIsCollapsed(!isCollapsed)}
//                         icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
//                         style={{
//                             margin: "10px 0 20px 0px",
//                             color: colors.grey[100],
//                         }}
//                     >
//                         {!isCollapsed && (
//                             <Box
//                                 display="flex"
//                                 justifyContent="space-between"
//                                 alignItems="center"
//                                 ml="15px"
//                             >
//                                 <Typography
//                                     variant="h2"
//                                     color={colors.grey[100]}
//                                 >
//                                     INSTAFIT
//                                 </Typography>
//                                 <IconButton
//                                     onClick={() => setIsCollapsed(!isCollapsed)}
//                                 >
//                                     <MenuOutlinedIcon />
//                                 </IconButton>
//                             </Box>
//                         )}
//                     </MenuItem> */}

//                     {/* User */}
//                     {!isCollapsed && (
//                         <Box>
//                             <Box textAlign="center">
//                                 <img
//                                     alt="profile-user"
//                                     width="180px"
//                                     height="100px"
//                                     src={`src/assets/user.png`}
//                                     style={{
//                                         cursor: "pointer",
//                                         borderRadius: "50%",
//                                     }}
//                                 />
//                             </Box>

//                             <Box textAlign="center">
//                                 <Typography
//                                     variant="h4"
//                                     color={colors.grey[100]}
//                                     fontWeight="bold"
//                                     sx={{ m: "10px 0 0 0" }}
//                                 >
//                                     User's Name
//                                 </Typography>
//                                 <Typography
//                                     variant="h5"
//                                     color={colors.greenAccent[500]}
//                                 >
//                                     Access Level
//                                 </Typography>
//                             </Box>
//                         </Box>
//                     )}

//                     {/* Menu Items */}
//                     <Box paddingLeft={isCollapsed ? undefined : "10%"}>
//                         <Item
//                             title="Dashboard"
//                             to="/dashboard"
//                             icon={<HomeOutlinedIcon />}
//                             selected={selected}
//                             setSelected={setSelected}
//                         />

//                         <Typography
//                             variant="h6"
//                             color={colors.grey[300]}
//                             // Change Data keyword to change visual subsections on the left sidebar on dashboard
//                             // Same applies to other keywords they aren't bound by name so feel free to edit and change
//                             sx={{ m: "15px 0 5px 20px" }}
//                         >
//                             Data
//                         </Typography>
//                         <Item
//                             title="Manage Team"
//                             to="/Team"
//                             icon={<PeopleOutlinedIcon />}
//                             selected={selected}
//                             setSelected={setSelected}
//                         />
//                         <Item
//                             title="Connections"
//                             to="/Contacts"
//                             icon={<ContactsOutlinedIcon />}
//                             selected={selected}
//                             setSelected={setSelected}
//                         />
//                         <Item
//                             title="Invoices"
//                             to="/Invoices"
//                             icon={<ReceiptOutlinedIcon />}
//                             selected={selected}
//                             setSelected={setSelected}
//                         />

//                         <Typography
//                             variant="h6"
//                             color={colors.grey[300]}
//                             sx={{ m: "15px 0 5px 20px" }}
//                         >
//                             Pages
//                         </Typography>
//                         <Item
//                             title="Profile Form"
//                             to="/Form"
//                             icon={<PersonOutlinedIcon />}
//                             selected={selected}
//                             setSelected={setSelected}
//                         />
//                         <Item
//                             title="Calendar"
//                             to="/Calendar"
//                             icon={<CalendarTodayOutlinedIcon />}
//                             selected={selected}
//                             setSelected={setSelected}
//                         />
//                         <Item
//                             title="FAQs"
//                             to="/FAQ"
//                             icon={<HelpOutlinedIcon />}
//                             selected={selected}
//                             setSelected={setSelected}
//                         />

//                         <Typography
//                             variant="h6"
//                             color={colors.grey[300]}
//                             sx={{ m: "15px 0 5px 20px" }}
//                         >
//                             Charts
//                         </Typography>
//                         <Item
//                             title="Bar Chart"
//                             to="/Bar"
//                             //icon={<BarChartOutlinedIcon />}
//                             selected={selected}
//                             setSelected={setSelected}
//                         />
//                         <Item
//                             title="Pie Chart"
//                             to="/Pie"
//                             //icon={<PieChartOutlineOutlinedIcon />}
//                             selected={selected}
//                             setSelected={setSelected}
//                         />
//                         <Item
//                             title="Line Chart"
//                             to="/Line"
//                             icon={<TimelineOutlinedIcon />}
//                             selected={selected}
//                             setSelected={setSelected}
//                         />
//                         <Item
//                             title="Geography"
//                             to="/Geography"
//                             icon={<MapOutlinedIcon />}
//                             selected={selected}
//                             setSelected={setSelected}
//                         />
//                     </Box>
//                 </Menu>
//             </ProSidebar>
//         </Box>
//     );
// };

// export default Sidebar;

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  // Initialize the sidebar as collapsed
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [selected, setSelected] = useState("Dashboard");

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const decodedToken = jwtDecode(localStorage.getItem("session-token"));
        const userId = decodedToken._id;
        console.log("userId: " + decodedToken._id);
        // Send HTTP request to backend
        const response = await axios.get(URL + "data", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("session-token")}`, // Include the session-token cookie in the request headers
            userId: userId,
          },
        });
        console.log("data requested");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        alert(error.response.data.message);
      }
    };

    fetchData(); // Call the fetchData function
  }, []);

  // Function to toggle the sidebar
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      {!isCollapsed && (
        <Box
          onClick={toggleSidebar}
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1099,
          }}
        />
      )}

      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: isCollapsed ? 80 : 256, // Adjust the width based on the collapsed state
          height: "100vh",
          zIndex: 1100,
          background: "rgb(43, 27, 64) !important", // Set the sidebar background color
          // background: `${colors.primary[400]}`,
          // "& .pro-sidebar-inner": {
          //     background: `${colors.primary[400]} !important`,
          // },
          "& .pro-sidebar-inner": {
            backgroundColor: "rgb(43, 27, 64) !important", // Ensure this is set for internal elements too
          },
          "& .pro-icon-wrapper": {
            backgroundColor: "transparent !important",
          },
          "& .pro-inner-item": {
            padding: "0px 35px 5px 20px !important",
          },
          "& .pro-inner-item-hover": {
            color: "#868dfb !important",
          },
          "& .pro-menu-item.active": {
            color: "#6870fa !important",
          },
        }}
      >
        <ProSidebar collapsed={isCollapsed}>
          <Menu iconShape="square">
            <IconButton
              onClick={toggleSidebar}
              style={{
                margin: "10px 0 20px 0px",
                color: colors.grey[100],
                // color: "black",
                position: "absolute",
                top: 10,
                left: 10,
                zIndex: 1200,
              }}
            >
              <MenuOutlinedIcon />
            </IconButton>
            {/* Render the sidebar contents only if it's not collapsed */}
            {!isCollapsed && (
              <Box>
                <Box textAlign="center">
                  <Typography
                    variant="h4"
                    color={colors.grey[100]}
                    // color="black"
                    fontWeight="bold"
                    sx={{ m: "10px 0 0 0" }}
                  >
                    {" "}
                    {data && <h1>{data.firstName}</h1>}
                  </Typography>
                  <Typography variant="h5" color={colors.greenAccent[500]}>
                    {data.role}
                  </Typography>
                </Box>
              </Box>
            )}

            {/* Menu Items */}
            <Box paddingLeft={isCollapsed ? undefined : "10%"}>
              <Item
                title="Dashboard"
                to="/dashboard"
                icon={<HomeOutlinedIcon />}
                // icon={
                //     <HomeOutlinedIcon
                //         style={{ color: "black" }}
                //     />
                // }
                selected={selected}
                setSelected={setSelected}
              />

              <Typography
                variant="h6"
                color={colors.grey[300]}
                // color="black"
                // Change Data keyword to change visual subsections on the left sidebar on dashboard
                // Same applies to other keywords they aren't bound by name so feel free to edit and change
                sx={{ m: "15px 0 5px 20px" }}
              >
                Data
              </Typography>
              <Item
                title="Upload"
                to="/upload"
                icon={<CloudUploadOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Workout Form"
                to="/WorkoutForm"
                icon={<FitnessCenterOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Wellness Form"
                to="/WellnessForm"
                icon={<ReceiptOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />

              <Item
                title="Recommendations"
                to="/Recommendations"
                icon={<RecommendOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />

              <Typography
                variant="h6"
                color={colors.grey[300]}
                // color="black"
                sx={{ m: "15px 0 5px 20px" }}
              >
                Pages
              </Typography>
              <Item
                title="Profile Form"
                to="/Form"
                icon={<PersonOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Calendar"
                to="/Calendar"
                icon={<CalendarTodayOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Chat"
                to="/chat"
                icon={<ChatOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />

              {/* <Typography
                variant="h6"
                color={colors.grey[300]}
                // color="black"
                sx={{ m: "15px 0 5px 20px" }}
              >
                Charts
              </Typography>
              <Item
                title="Bar Chart"
                to="/Bar"
                //icon={<BarChartOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Pie Chart"
                to="/Pie"
                //icon={<PieChartOutlineOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Line Chart"
                to="/Line"
                icon={<TimelineOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Geography"
                to="/Geography"
                icon={<MapOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              /> */}
            </Box>
          </Menu>
        </ProSidebar>
      </Box>
    </>
  );
};

export default Sidebar;
