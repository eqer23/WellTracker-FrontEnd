import React, {useState} from "react";
import {FaSearch} from "react-icons/fa";
import "./SearchBar.css"

let LOGIN_URL = import.meta.env.VITE_SERVER_URL

export const SearchBar = ({setResults}) => {
    const [input, setInput] = useState("");
    // Using a dummy json placeholder to get results in search
    const fetchData = (value) => { 
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
            const result = response.data.filter((user) =>{
                return (
                    value &&
                    user &&
                    user.name &&
                    user.name.toLowerCase().includes(value.toLowerCase())
                );
            });
        })
        setResults(results);
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