import React from "react";
import "./SearchResult.css"
export const SearchResult = ({email}) => {
    return <div className="search-result" onClick={(e) => alert(`You clicked on ${email}`)}>
                {email}
            </div>;
}