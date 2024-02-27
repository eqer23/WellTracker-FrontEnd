import { ColorModeContext, useMode } from "./theme";
import { CssBaseLine, ThemeProvider } from "@mui/material";

// Dashboard elements (not all elements might be used as of now)
import Topbar from "./Components/Global/Topbar";
import Sidebar from "./Components/Global/Sidebar";
import Team from "./Components/Dashboard/Team";
// import Invoices from "./Components/Dashboard/Invoices";
import Contacts from "./Components/Dashboard/Contacts";
// import Bar from "./Components/Dashboard/Bar";
// import Form from "./Components/Dashboard/Form";
// import Line from "./Components/Dashboard/Line";
// import Pie from "./Components/Dashboard/Pie";
// import FAQ from "./Components/Dashboard/FAQ";
// import Geography from "./Components/Dashboard/Geography";
// import Calendar from "./Components/Dashboard/Calendar";

// import logo from "./logo.svg";
// import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import React, { useState, useEffect } from "react";

import LoginForm from "./Components/LoginForm/LoginForm";
import Dashboard from "./Components/Dashboard/Dashboard";
import Role from "./Components/Role/Role";
import ClientRegistration from "./Components/ClientRegistration/ClientRegistration";
import ProfessionalRegistration from "./Components/ProfessionalRegistration/ProfessionalRegistration";

// links all pages together through Routes
function App() {
  const [theme, colorMode] = useMode();
  // const [message, setMessage] = useState("");

  // useEffect(() => {
  //     fetch("http://localhost:8000/message")
  //         .then((res) => res.json())
  //         .then((data) => setMessage(data.message));
  // }, []);
  return (
    <Router>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseLine />
          <div className="App">
            <Sidebar />
            <Routes>
              <Route path="/" element={<LoginForm />} exact />
              <Route path="/" element={<Dashboard />} />
              <Route path="/Team" element={<Team />} />
              <Route path="/Contacts" element={<Contacts />} />
              <Route path="/Invoices" element={<Invoices />} />
              <Route path="/Form" element={<Form />} />
              <Route path="/Bar" element={<Bar />} />
              <Route path="/Pie" element={<Pie />} />
              <Route path="/Line" element={<Line />} />
              <Route path="/FAQ" element={<FAQ />} />
              <Route path="/Geography" element={<Geography />} />
              <Route path="/Calendar" element={<Calendar />} />
              <Route path="/Role" element={<Role />} />
              <Route
                path="/ClientRegistration"
                element={<ClientRegistration />}
              />
              <Route
                path="/ProfessionalRegistration"
                element={<ProfessionalRegistration />}
              />
            </Routes>

            <main className="Content">
              <Topbar />
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </Router>
  );
}

export default App;

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import LoginForm from "./Components/LoginForm/LoginForm";
// import Dashboard from "./Components/Dashboard/Dashboard";
// import Role from "./Components/Role/Role";
// import ClientRegistration from "./Components/ClientRegistration/ClientRegistration";

// function App() {
//     return (
//         <Router>
//             <div className="App">
//                 <Routes>
//                     <Route path="/" element={<LoginForm />} exact />
//                     <Route path="/Dashboard" element={<Dashboard />} />
//                     <Route path="/Role" element={<Role />} />
//                     <Route
//                         path="/ClientRegistration"
//                         element={<ClientRegistration />}
//                     />
//                 </Routes>
//             </div>
//         </Router>
//     );
// }

// export default App;

// starter code

// function App() {
//     return (
//         <div className="App">
//             <LoginForm />
//             <Dashboard />
//         </div>
//     );
// }

/* <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
        Edit <code>src/App.js</code> and save to reload.
    </p>
    <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
    >
        Learn React
    </a>
</header>; */
