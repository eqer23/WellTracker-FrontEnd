import React from "react";
import "./SearchResultsList.css";
import { SearchResult } from "./SearchResult";
export const SearchResultsList = ({ results }) => {
    return (
    <div className="results-list">
        {
            results.map((user , index) =>{
                return <SearchResult user={user} key={index}/>
            })
        }
    </div>
    );
}