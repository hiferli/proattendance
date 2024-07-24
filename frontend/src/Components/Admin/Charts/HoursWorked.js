import React, { useEffect, useState } from "react";
import { extractWorkData } from "../../../Utils/GetTotalWorkedHours";
import { BarChart } from "@mui/x-charts/BarChart";

const HoursWorked = ({ id }) => {
    const [data, setData] = useState([]);
    const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
    const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
    const xLabels = [
        "Page A",
        "Page B",
        "Page C",
        "Page D",
        "Page E",
        "Page F",
        "Page G",
    ];

    useEffect(() => {
        function getAllLocalStorageValues() {
            const localStorageValues = [];
            for (let i = 0; i < localStorage.length; i++) {
                const valueString = localStorage.getItem(localStorage.key(i));
                try {
                    const parsedValue = JSON.parse(valueString);
                    localStorageValues.push(parsedValue);
                } catch (error) {
                    console.error(
                        `Error parsing value at key '${localStorage.key(i)}':`,
                        error
                    );
                }
            }
            return localStorageValues;
        }

        // Example usage:
        const allValues = getAllLocalStorageValues();
        console.log(allValues);

        setData(extractWorkData(allValues));
    }, []);

    return (
        <div>
            <BarChart
                width={750}
                height={500}
                series={[
                    { data: data.workingHours, label: "Total Working Hours", id: "Total Working Hours" },
                    { data: data.overtimeHours, label: "Total Overtime Hours", id: "Total Overtime Hours" },
                ]}
                xAxis={[{ data: data.date, scaleType: "band" }]}
            />
        </div>
    );
};

export default HoursWorked;
