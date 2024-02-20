import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
// import Navbar from "./components/Navbar/Navbar";
import Register from "./components/Register/Register";
import Login from "./components/LoginForm/LoginForm";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import Dashboard from "./components/Dashboard/Dashboard";
import ResetPassword from "./components/ForgotPassword/ResetPassword";
import ProfessionalRegistration from "./components/ProfessionalRegistration/ProfessionalRegistration";
import Profile from "./components/Profile/Profile/";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/forgot-password" element={<ForgotPassword />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route
          path="/reset-password/:token"
          element={<ResetPassword />}
        ></Route>
        <Route
          path="/pregistration"
          element={<ProfessionalRegistration />}
        ></Route>
        {/* Logic for protected routes. Routes that a user should not be able to access until login */}
        <Route path="/profile" element={<ProtectedRoute />}>
          <Route path="" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
