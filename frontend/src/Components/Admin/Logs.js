import React, { useEffect, useState } from "react";

const Logs = ({ name, id }) => {
    const [data, setData] = useState([]);
 
    useEffect(() => {
        for ( var i = 0, len = localStorage.length; i < len; ++i ) {
            let currentData = JSON.parse(localStorage.getItem( localStorage.key( i ) ));
            console.log(currentData);
            currentData['id'] = id;
            setData((prevData) => [currentData , ...prevData]);
            
        }
        
        console.log("Data visible");
    }, []);

    const downloadLogs = () => {
        // Prepare the data as a text string
        const dataString = data
            .map(
                (session) =>
                    `ID: ${session.id} - Day: ${session.day}, Login Time: ${session.loginTime}, Logout Time: ${session.logoutTime}`
            )
            .join("\n");

        // Create a Blob object from the data string
        const blob = new Blob([dataString], { type: "text/plain" });

        // Create a temporary URL for the Blob
        const url = URL.createObjectURL(blob);

        // Create a link element
        const link = document.createElement("a");
        link.href = url;
        link.download = `${name}_${id}_${new Date()
            .toJSON()
            .slice(0, 10)}_attendancelogs.txt`;

        // Append the link to the body
        document.body.appendChild(link);

        // Trigger the download
        link.click();

        // Cleanup: Remove the link element and revoke the URL
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };

    return (
        <div>
            <button onClick={downloadLogs}>Download Logs</button>
        </div>
    );
};

export default Logs;
