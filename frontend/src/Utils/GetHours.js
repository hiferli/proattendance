export const getBillableHours = (data) => {
    let totalHours = [];

    data.forEach((entry) => {
        // console.log(entry);
        if (entry.loginTime && entry.logoutTime) {
            var timeStart = new Date("01/01/2007 " + entry.loginTime).getHours();
            var timeEnd = new Date("01/01/2007 " + entry.logoutTime).getHours();
            // console.log(entry.loginTime + " --- " + timeStart);

            var hourDiff = timeEnd - timeStart;
            // console.log(hourDiff);
            totalHours.push(hourDiff);
        }
    });

    return totalHours;
};

export const getOvertimeHours = (data) => {
    let totalOvertime = [];

    data.forEach((entry) => {
        const overtimeHours = parseFloat(entry.overtime);
        totalOvertime.push(overtimeHours);
    });

    return totalOvertime;
};

export const getDaysLabel = (data) => {
    let totalDays = [];
    
    data.forEach((entry) => {
        totalDays.push(entry.day);
    })

    return totalDays;
}