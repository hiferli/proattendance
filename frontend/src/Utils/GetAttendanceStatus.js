export const getAttendanceStatus = (data) => {
    // Initialize an object to store counts
    const counts = {
        Present: 0,
        Absent: 0,
        Remote: 0,
    };

    // Count occurrences of each status
    data.forEach((entry) => {
        console.log(entry.status);
        if(entry.status == "Present") counts.Present++;
        else if(entry.status == "Remote") counts.Remote++;
        else counts.Absent++;
    });

    // console.log(counts);
    
    return counts;
};
