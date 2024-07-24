import React from "react";
import Domains from "./Charts/Domains";
import HoursWorked from "./Charts/HoursWorked";

const Statistics = ({ id }) => {
    return (
        <div>
            <Domains />
            <HoursWorked id={id} />
        </div>
    );
};

export default Statistics;
