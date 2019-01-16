function isWeekend(){
    const todayDate = new Date();
    const day = todayDate.getDay();
    
    var dayName = {
        0: "Weekend",
        6: "Weekend",
        weekday: "Weekday"
    }

    return dayName[day] || dayName.weekday;
}

console.log(isWeekend());