import React from "react";

const Table = ({ data }) => {
    return (
        <div style={{ textAlign: 'center', margin: '20px auto', width: '80%' }}>
            <h2>Attendance Data</h2>
            <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                <thead>
                    <tr>
                        <th style={headerCellStyle}>Day</th>
                        <th style={headerCellStyle}>Login Time</th>
                        <th style={headerCellStyle}>Logout Time</th>
                        <th style={headerCellStyle}>Status</th>
                        <th style={headerCellStyle}>Overtime (hours)</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((entry, index) => (
                        <tr key={index}>
                            <td style={cellStyle}>{entry.day}</td>
                            <td style={cellStyle}>{entry.loginTime}</td>
                            <td style={cellStyle}>{entry.logoutTime}</td>
                            <td style={cellStyle}>{entry.status}</td>
                            <td style={cellStyle}>{entry.overtime}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

// Styles for table headers
const headerCellStyle = {
    backgroundColor: '#f2f2f2',
    fontWeight: 'bold',
    border: '1px solid #ddd',
    padding: '8px'
};

// Styles for table cells
const cellStyle = {
    border: '1px solid #ddd',
    padding: '8px'
};

export default Table;
