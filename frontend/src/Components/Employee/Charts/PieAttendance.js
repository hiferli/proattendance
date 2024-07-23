import React, { useEffect, useState } from "react";
import { getAttendanceStatus } from "../../../Utils/GetAttendanceStatus";
import { PieChart } from "@mui/x-charts/PieChart";

const PieAttendance = ({ id }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const employeeData = JSON.parse(localStorage.getItem(id));
        const attendanceStatus = getAttendanceStatus(employeeData);
        setData(attendanceStatus);
        // console.log(attendanceStatus);
    }, []);

    return (
        <div>
            <PieChart
                series={[
                    {
                        data: [
                            { id: 0, value: data.Present, label: "Present" },
                            { id: 1, value: data.Absent, label: "Absent" },
                            { id: 2, value: data.Remote, label: "Remote Work" },
                        ],
                    },
                ]}
                width={400}
                height={200}
            />
        </div>
    );
};

export default PieAttendance;
