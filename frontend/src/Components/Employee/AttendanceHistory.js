import React, { useEffect, useState } from "react";
import Table from "../Table";
import PieAttendance from "../Employee/Charts/PieAttendance";
import HoursLineChart from "./Charts/HoursLineChart";

const AttendanceHistory = ({ name, id }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const currentData = localStorage.getItem(id);
        setData(JSON.parse(currentData));
        // console.log("Data visible");
        // console.log(currentData);
    }, []);

    if (!data) {
        return (
            <h1>
                No data found for {name} ({id})
            </h1>
        );
    } else {
        return (
            <div>
                <center>
                    <h2>Session Log</h2>
                    <Table data={data} />
                    <PieAttendance id={id} />
                    <HoursLineChart id={id} />
                </center>
            </div>
        );
    }
};

export default AttendanceHistory;
