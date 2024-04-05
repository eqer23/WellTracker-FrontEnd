import { useState } from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Home from "./components/Home/Home";
import Register from "./components/Register/Register";
import Login from "./components/LoginForm/LoginForm";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import Dashboard from "./components/Dashboard/Dashboard";
import Team from "./components/Team/Team";
import ResetPassword from "./components/ForgotPassword/ResetPassword";
import ProfessionalRegistration from "./components/ProfessionalRegistration/ProfessionalRegistration";
import Profile from "./components/Profile/Profile/";
import ProtectedRoute from "./ProtectedRoute";
import TwoFactorForm from "./components/LoginForm/TwoFactorForm";
import Chat from "./components/Chat/Chat";
import Calendar from "./components/Calendar/Calendar";
import Upload from "./components/Upload/Upload";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <BrowserRouter>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/team" element={<Team />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/upload" element={<Upload />} />
            <Route
              path="/reset-password/:token"
              element={<ResetPassword />}
            ></Route>
            <Route
              path="/pregistration"
              element={<ProfessionalRegistration />}
            ></Route>
            <Route path="/twofactor" element={<TwoFactorForm />}></Route>
            {/* Logic for protected routes. Routes that a user should not be able to access until login */}
            <Route path="/profile" element={<ProtectedRoute />}>
              <Route path="" element={<Profile />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
