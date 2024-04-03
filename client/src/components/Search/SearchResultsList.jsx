import React from "react";
import "./SearchResultsList.css";
import { SearchResult } from "./SearchResult";
export const SearchResultsList = ({ results }) => {
    return (
    <div className="results-list">
        {
            results.map((email , index) =>{
                return <SearchResult email={email} key={index}/>
            })
        }
    </div>
    );
}