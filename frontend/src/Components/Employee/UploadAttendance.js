import React, { useState } from "react";

const UploadAttendance = ({ name, id }) => {
    const [loginTime, setLoginTime] = useState("");
    const [logoutTime, setLogoutTime] = useState("");
    const [day, setDay] = useState("");
    const [status, setStatus] = useState("Present");
    const [overtime, setOvertime] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        // Validate input fields
        if (!loginTime || !logoutTime || !day || !status) {
            alert("Please fill in all fields.");
            return;
        }

        // Prepare data object
        const log = {
            day,
            loginTime,
            logoutTime,
            status,
            overtime: overtime || 0, // Default to 0 if overtime is empty
        };

        // Store data in localStorage
        if (localStorage.getItem(id) === null) {
            localStorage.setItem(id, "[]");
        }

        let currentLogs = JSON.parse(localStorage.getItem(id));
        currentLogs.push(log);
        localStorage.setItem(id, JSON.stringify(currentLogs));

        // Confirmation message (can be removed in production)
        alert(
            `Submitted Data:\nLogin Time: ${loginTime}\nLogout Time: ${logoutTime}\nDay: ${day}\nStatus: ${status}\nOvertime: ${overtime}`
        );

        // Clear the form after submission
        setLoginTime("");
        setLogoutTime("");
        setDay("");
        setStatus("Present");
        setOvertime("");
    };

    return (
        <div>
            <h2>Enter Daily Attendance</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="loginTime">Login Time:</label>
                    <input
                        type="time"
                        id="loginTime"
                        value={loginTime}
                        onChange={(e) => setLoginTime(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="logoutTime">Logout Time:</label>
                    <input
                        type="time"
                        id="logoutTime"
                        value={logoutTime}
                        onChange={(e) => setLogoutTime(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="day">Day:</label>
                    <input
                        type="date"
                        id="day"
                        value={day}
                        onChange={(e) => setDay(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="status">Status:</label>
                    <select
                        id="status"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        required
                    >
                        <option value="Remote">Remote</option>
                        <option value="Present">Present</option>
                        <option value="Absent">Absent</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="overtime">Overtime (hours):</label>
                    <input
                        type="number"
                        id="overtime"
                        value={overtime}
                        onChange={(e) => setOvertime(e.target.value)}
                    />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default UploadAttendance;
