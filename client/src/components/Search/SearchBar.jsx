import React, {useState} from "react";
import {FaSearch} from "react-icons/fa";
import "./SearchBar.css";
import axios from 'axios';

export const SearchBar = ({setResults}) => {
    const [input, setInput] = useState("");
    // Using a dummy json placeholder to get results in search
    const fetchData = async (value) => { 
        if (!value) return; //exit if the value is empty

        try{
            const response = await axios.get(`http://localhost:3001/searchUsers?query=${value}`);
            const users = response.data;
            
            const emails = users.map(user => user.email);
            console.log(emails);
            setResults(emails);
        } catch (error) {
            console.error("Error fetching search results: ", error);
            setResults([]);
        }
    };

    const handleChange = (value) => {
        setInput(value)

        if(value){
            fetchData(value);
        } else {
            setResults([]);
        }
    };

    return (
        <div className="input-wrapper">
            <FaSearch id="search-icon" />
            <input 
                placeholder="Type to search..."
                value={input}
                onChange={(e) => handleChange(e.target.value)}
            />
        </div>
    );
};