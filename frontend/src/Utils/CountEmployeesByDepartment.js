export const countEmployeesByDepartment = (employees) => {
    // Create an object to store department counts
    const departmentCounts = {};

    // Count employees in each department
    employees.forEach((employee) => {
        if (departmentCounts[employee.department]) {
            departmentCounts[employee.department]++;
        } else {
            departmentCounts[employee.department] = 1;
        }
    });

    // Convert departmentCounts object to array of objects
    const departmentCountArray = Object.keys(departmentCounts).map((key) => ({
        name: key,
        value: departmentCounts[key],
    }));

    console.log(departmentCountArray);

    return departmentCountArray;
};
