// import React from "react";
// import "./Register.css";

// const Register = () => {
//     return (
//         <div className="wrapper">
//             <form>
//                 <h1>Register</h1>

//                 <div className="user-roles">

//                 </div>
//             </form>
//         </div>
//     );
// };

// export default Register;

import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Register.css";

const Register = () => {
    const history = useHistory();
    const [selectedUserRole, setSelectedUserRole] = useState("");

    const handleUserRoleChange = (event) => {
        setSelectedUserRole(event.target.value);
    };

    const handleRegisterSubmit = (event) => {
        event.preventDefault();

        // Here you can perform any additional registration logic
        // For now, let's navigate to a different page based on the selected user role
        switch (selectedUserRole) {
            case "client":
                history.push("/client-registration");
                break;
            case "professional":
                history.push("/professional-registration");
                break;
            case "admin":
                history.push("/admin-registration");
                break;
            default:
                // Handle default case or show an error
                break;
        }
    };

    return (
        <div className="wrapper">
            <form onSubmit={handleRegisterSubmit}>
                <h1>Register</h1>

                <div className="user-roles">
                    <label>
                        <input
                            type="radio"
                            value="client"
                            checked={selectedUserRole === "client"}
                            onChange={handleUserRoleChange}
                        />
                        Client
                    </label>

                    <label>
                        <input
                            type="radio"
                            value="professional "
                            checked={selectedUserRole === "professional"}
                            onChange={handleUserRoleChange}
                        />
                        Fitness Professional
                    </label>

                    <label>
                        <input
                            type="radio"
                            value="admin"
                            checked={selectedUserRole === "admin"}
                            onChange={handleUserRoleChange}
                        />
                        Admin Team
                    </label>
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Register;
