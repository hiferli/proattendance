import React, { useState } from "react";
import { employees } from "../../Data"; // Assuming you import the employees data
import SearchInformation from "./SearchInformation";
import Table from "../Table";
import PieAttendance from "../Employee/Charts/PieAttendance";
import HoursLineChart from "../Employee/Charts/HoursLineChart";

const Enquiry = () => {
    const [id, setId] = useState("");
    const [data, setData] = useState(null);
    const [searchResult, setSearchResult] = useState(null);

    const handleSearch = () => {
        // Clear previous search result
        setSearchResult(null);

        // Find the employee with the matching employeeID
        const result = employees.find((employee) => employee.employeeID === id);
        console.log(result);
        setData(JSON.parse(localStorage.getItem(id)));
        console.log(data);

        // Update searchResult state with the found employee or null if not found
        setSearchResult(result);
    };

    return (
        <div>
            <h2>Employee Enquiry</h2>
            <div>
                <label htmlFor="employeeId">Enter Employee ID:</label>
                <input
                    type="text"
                    id="employeeId"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            <div>
                {searchResult ? (
                    <div>
                        <h3>Search Result:</h3>
                        <SearchInformation searchResult={searchResult} />

                        {data ? (
                            <>
                                <Table data={data} />
                                <PieAttendance id={id} />
                                <HoursLineChart id={id} />
                            </>
                        ) : (
                            <p>No attendance logs found!</p>
                        )}
                    </div>
                ) : (
                    <p>No results found.</p>
                )}
            </div>
        </div>
    );
};

export default Enquiry;
