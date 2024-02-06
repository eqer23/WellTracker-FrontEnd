//import logo from "./logo.svg";
//import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginForm from "./Components/LoginForm/LoginForm";
import Dashboard from "./Components/Dashboard/Dashboard";
import Role from "./Components/Role/Role";

// links all pages together through Routes
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<LoginForm />} exact />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/Role" element={<Role />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

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
