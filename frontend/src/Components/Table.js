import React, { useEffect } from "react";

const Table = ({ data }) => {
    return (
        <div>
            <h2>Attendance Data</h2>
            <table>
                <thead>
                    <tr>
                        <th>Day</th>
                        <th>Login Time</th>
                        <th>Logout Time</th>
                        <th>Status</th>
                        <th>Overtime (hours)</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((entry, index) => (
                        <tr key={index}>
                            <td>{entry.day}</td>
                            <td>{entry.loginTime}</td>
                            <td>{entry.logoutTime}</td>
                            <td>{entry.status}</td>
                            <td>{entry.overtime}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
