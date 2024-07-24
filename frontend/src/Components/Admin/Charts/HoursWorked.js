import React, { useEffect, useState } from "react";
import { extractWorkData } from "../../../Utils/GetTotalWorkedHours";
import { BarChart } from "@mui/x-charts/BarChart";

const HoursWorked = ({ id }) => {
    const [data, setData] = useState({
        workingHours: [],
        overtimeHours: [],
        date: [],
    });

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
        console.log("All values:", allValues);

        try {
            const extractedData = extractWorkData(allValues);
            console.log("Extracted data:", extractedData);
            setData(extractedData);
        } catch (error) {
            console.error("Error extracting work data:", error);
        }
    }, []);

    return (
        <div>
            {data && (
                <BarChart
                    width={500}
                    height={300}
                    series={[
                        { data: data.workingHours, label: "Total Working Hours", id: "Total Working Hours" },
                        { data: data.overtimeHours, label: "Total Overtime Hours", id: "Total Overtime Hours" },
                    ]}
                    xAxis={[{ data: data.date, scaleType: "band" }]}
                />
            )}
        </div>
    );
};

export default HoursWorked;
