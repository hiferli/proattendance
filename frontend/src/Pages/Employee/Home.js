import React, { useState } from "react";
import UploadAttendance from "../../Components/Employee/UploadAttendance";
import AttendanceHistory from "../../Components/Employee/AttendanceHistory";
import Logs from "../../Components/Employee/Logs";

const Home = ({ name, id }) => {
    const [mode, setMode] = useState(0);
    return (
        <div>
            <h1>Welcome, {name}</h1>
            <h3>Emp ID: {id}</h3>
            <button onClick={() => setMode(1)}>Upload Attendance</button>
            <button onClick={() => setMode(2)}>View History</button>
            <button onClick={() => setMode(3)}>Generate Logs</button>

            <div>
                {mode === 1 ? (
                    <UploadAttendance name={name} id={id} />
                ) : mode === 2 ? (
                    <AttendanceHistory name={name} id={id} />
                ) : mode === 3 ? (
                    <Logs name={name} id={id} />
                ) : <></>}
            </div>
        </div>
    );
};

export default Home;
