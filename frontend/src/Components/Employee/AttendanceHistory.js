import React, { useEffect, useState } from "react";

const AttendanceHistory = ({ name, id }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const currentData = localStorage.getItem(id);
        setData(JSON.parse(currentData));
        console.log("Data visible");
        console.log(currentData);
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
                    <table>
                        <thead>
                            <tr>
                                <th>Day</th>
                                <th>Login Time</th>
                                <th>Logout Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((session, index) => (
                                <tr key={index}>
                                    <td>{session.day}</td>
                                    <td>{session.loginTime}</td>
                                    <td>{session.logoutTime}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </center>
            </div>
        );
    }
};

export default AttendanceHistory;
