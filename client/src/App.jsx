import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Topbar from "./components/Global/Topbar";
import Sidebar from "./components/Global/Sidebar";
import Dashboard from "./components/Dashboard/Dashboard";
import Team from "./components/Team/Team";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

import Home from "./components/Home/Home";
// import Navbar from "./components/Navbar/Navbar";
import Register from "./components/Register/Register";
import Login from "./components/LoginForm/LoginForm";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import ResetPassword from "./components/ForgotPassword/ResetPassword";
import ProfessionalRegistration from "./components/ProfessionalRegistration/ProfessionalRegistration";
import Profile from "./components/Profile/Profile/";
import ProtectedRoute from "./ProtectedRoute";
import TwoFactorForm from "./components/LoginForm/TwoFactorForm";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSiderbar] = useState(true);

  return (
    <BrowserRouter>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
            <Sidebar isSidebar={isSidebar} />
            <main className="content">
              <Topbar setIsSiderbar={setIsSiderbar} />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/team" element={<Team />} />
                <Route
                  path="/reset-password/:token"
                  element={<ResetPassword />}
                />
                <Route
                  path="/pregistration"
                  element={<ProfessionalRegistration />}
                />
                <Route path="/twofactor" element={<TwoFactorForm />} />
                {/* Logic for protected routes. Routes that a user should not be able to access until login */}
                <Route path="/profile" element={<ProtectedRoute />}>
                  <Route path="" element={<Profile />} />
                </Route>
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
