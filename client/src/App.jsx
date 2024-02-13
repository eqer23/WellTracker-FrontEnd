import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
// import Navbar from "./components/Navbar/Navbar";
import Register from "./components/Register/Register";
import Login from "./components/LoginForm/LoginForm";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import Dashboard from "./components/Dashboard/Dashboard";
import NewPassword from "./components/ForgotPassword/NewPassword";
import ProfessionalRegistration from "./components/ProfessionalRegistration/ProfessionalRegistration";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/register" element={<Register />}></Route>
                <Route
                    path="/forgotpassword"
                    element={<ForgotPassword />}
                ></Route>
                <Route path="/dashboard" element={<Dashboard />}></Route>
                <Route path="/newpassword" element={<NewPassword />}></Route>
                <Route
                    path="/pregistration"
                    element={<ProfessionalRegistration />}
                ></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
