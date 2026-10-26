enum WeekDay {
    Monday = "Monday",
    Tuesday = "Tuesday",
    Wednesday = "Wednesday",
    Thursday = "Thursday",
    Friday = "Friday",
    Saturday = "Saturday",
    Sunday = "Sunday",
}

function isWeekend(day: WeekDay): boolean {
    return day === WeekDay.Saturday || day === WeekDay.Sunday;
}

export {};
