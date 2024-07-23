import React from "react";

const SearchInformation = ({ searchResult }) => {
    return (
        <div>
            <ul>
                <span>Name: {searchResult.name}</span>
                <br />
                <span>ID: {searchResult.employeeID}</span>
                <br />
                <span>Dept: {searchResult.department}</span>
            </ul>
        </div>
    );
};

export default SearchInformation;
