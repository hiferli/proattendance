import React, { useEffect, useState } from "react";
import { LineChart } from '@mui/x-charts/LineChart';
import {
    getBillableHours,
    getDaysLabel,
    getOvertimeHours,
} from "../../../Utils/GetHours";

const HoursLineChart = ({ id }) => {
    const [billableHours, setBillableHours] = useState([]);
    const [overtime, setOvertime] = useState([]);
    const [days, setDays] = useState([]);

    useEffect(() => {
        const employeeData = JSON.parse(localStorage.getItem(id));

        const billableHoursData = getBillableHours(employeeData);
        const overtimeHoursData = getOvertimeHours(employeeData);
        const daysLabelData = getDaysLabel(employeeData);

        console.log(billableHoursData);
        console.log(overtimeHoursData);
        console.log(daysLabelData);

        setBillableHours(billableHoursData);
        setOvertime(overtimeHoursData);
        setDays(daysLabelData);
    }, []);

    return (
        <div>
            <LineChart
                width={750}
                height={500}
                series={[
                    { data: billableHours, label: "Billable Hours" },
                    { data: overtime, label: "Overtime" },
                ]}
                xAxis={[{ scaleType: "point", data: days }]}
            />
        </div>
    );
};

export default HoursLineChart;
