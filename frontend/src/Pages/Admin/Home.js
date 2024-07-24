import React, { useState } from "react";
import Logs from "../../Components/Admin/Logs";
import Enquiry from "../../Components/Admin/Enquiry";
import Statistics from "../../Components/Admin/Statistics";

const Home = ({ name , id }) => {
    const [mode, setMode] = useState(0)
    return <div>
        <h1>Welcome, {name}</h1>
        <h3>ID: {id} (Admin)</h3>

        <button onClick={() => setMode(1)}>View Statistics</button>
        <button onClick={() => setMode(2)}>Enquire</button>
        <button onClick={() => setMode(3)}>Generate Logs</button>

        <div>
                {mode === 1 ? (
                    <Statistics id={id} />
                ) : mode === 2 ? (
                    <Enquiry />
                ) : mode === 3 ? (
                    <Logs name={name} id={id} />
                ) : <></>}
            </div>
    </div>;
};

export default Home;
