import React from "react";
import { useNavigate } from "react-router-dom";
import "./SearchResult.css"


// might have a problem with user being an actual email that doesn't have an ID associated with it
export const SearchResult = ({ user }) => {
    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate(`/profile/view/${user._id}`); // MIGHT HAVE TO CHANGE USER ID
    };

    return <div className="search-result" onClick={handleRedirect}>
        {user.firstName} {user.lastName} - {user.email}
        </div>;
}