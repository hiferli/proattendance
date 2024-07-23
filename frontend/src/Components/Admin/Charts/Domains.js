import React, { useEffect, useState, PureComponent } from "react";
import { countEmployeesByDepartment } from "../../../Utils/CountEmployeesByDepartment";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import { employees } from "../../../Data";

const Domains = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(countEmployeesByDepartment(employees));
        console.log(data);
        console.log(countEmployeesByDepartment(employees));
    }, []);

    const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        percent,
        index,
    }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text
                x={x}
                y={y}
                fill="white"
                textAnchor={x > cx ? "start" : "end"}
                dominantBaseline="central"
                fontSize={10}
            >
                {`${data[index].name}: ${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    return (
        <div style={{height: '50vh', width: '100%' }}>
           { data ?
            <ResponsiveContainer width="100%" height="100%">
                <PieChart width={400} height={400}>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={150}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={COLORS[index % COLORS.length]}
                            />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
            : <p>No data</p>}
        </div>
    );
};

export default Domains;
