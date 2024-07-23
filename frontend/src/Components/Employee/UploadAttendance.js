import React, { useState } from "react";

const UploadAttendance = ({ name, id }) => {
    const [loginTime, setLoginTime] = useState("");
    const [logoutTime, setLogoutTime] = useState("");
    const [day, setDay] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        // Validate input fields
        // TODO: Add some more validatoins
        if (!loginTime || !logoutTime || !day) {
            alert("Please fill in all fields.");
            return;
        }

        // Example: You can perform further validation or processing here
        // For simplicity, just displaying the collected data in this example
        alert(
            `Submitted Data:\nLogin Time: ${loginTime}\nLogout Time: ${logoutTime}\nDay: ${day}`
        );

        const log = {
            day,
            loginTime,
            logoutTime,
        };

        if (localStorage.getItem(id) === null) {
            localStorage.setItem(id, "[]");
        }

        let currentLogs = JSON.parse(localStorage.getItem(id));
        currentLogs.push(log);
        localStorage.setItem(id, JSON.stringify(currentLogs));
        console.log("False");

        // Clear the form after submission (optional)
        setLoginTime("");
        setLogoutTime("");
        setDay("");
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
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default UploadAttendance;
