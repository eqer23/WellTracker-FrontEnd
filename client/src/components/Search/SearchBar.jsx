import React, {useState} from "react";
import {FaSearch} from "react-icons/fa";
import "./SearchBar.css"

export const SearchBar = ({setResults}) => {
    const [input, setInput] = useState("");
    // Using a dummy json placeholder to get results in search
    const fetchData = (value) => { 
        fetch("http://localhost:5173/searchUsers?value=${value}") // might not work well
        .then((response) => response.json())
        .then((json) => {
            // This json.filter is responsible for filtering results
            // Will need to CHANGE for backend data, only an example rn
            const results = json.filter((user) => {
                // only returns if 
                return (
                    value &&  // there's a value
                    user &&   // a user
                    user.name &&  // the user has a name
                    user.name.toLowerCase().includes(value)); // the name includes the value typed in
            });
            setResults(results);
        });
    }

    const handleChange = (value) => {
        setInput(value)
        fetchData(value)
    }
    return <div className="input-wrapper">
        <FaSearch id="search-icon" />
        <input 
            placeholder="Type to search..."
            value={input}
            onChange={(e) => handleChange(e.target.value)}
        />
    </div>;


}