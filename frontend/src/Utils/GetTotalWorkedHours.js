export const extractWorkData = (data) => {
    let workingHours = [];
    let overtimeHours = [];
    let date = [];

    // Iterate through each month's data
    data.forEach(month_data => {
        month_data.forEach(day_data => {
            // Extract relevant fields
            let day = day_data.day;
            let loginTime = day_data.loginTime;
            let logoutTime = day_data.logoutTime;
            let status = day_data.status;
            let overtime = parseInt(day_data.overtime); // Convert overtime to integer

            // Calculate working hours if status is 'Present'
            if (status === 'Present') {
                if (loginTime !== '00:00' && logoutTime !== '00:00') {
                    // Calculate working hours in 24-hour format
                    let [login_hour, login_minute] = loginTime.split(':').map(Number);
                    let [logout_hour, logout_minute] = logoutTime.split(':').map(Number);
                    let working_hours = (logout_hour + logout_minute / 60) - (login_hour + login_minute / 60);
                    workingHours.push(working_hours);
                } else {
                    workingHours.push(0); // Edge case, although status is 'Present', but no login/logout times
                }
                overtimeHours.push(overtime);
                date.push(day);
            }
        });
    });

    return { workingHours, overtimeHours, date };
}