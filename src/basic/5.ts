type Weekdays = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday';
type Weekend = 'Saturday' | 'Sunday';

type DayOf = Weekdays | Weekend;

enum DayOfWeek {
    Monday = 'Monday',
    Tuesday = 'Tuesday',
    Wednesday = 'Wednesday',
    Thursday = 'Thursday',
    Friday = 'Friday',
    Saturday = 'Saturday',
    Sunday = 'Sunday'
}

function isWeekend(day: DayOfWeek) {
    return day
}

// console.log(statusDay(DayOfWeek.Monday));

// function isWeekend(day: DayOfWeek): boolean {
//     if (Saturday | Sunday === true) {
//         return Weekend;
//     } else {
//         Weekdays;
//     }
// }

//task 5 типізація enum - для угрупування
// enum DayOfWeek {
//     Monday,
//     Tuesday,
//     Wednesday,
//     Thursday,
//     Friday,
//     Saturday,
//     Sunday
// }

// const isWeekend = (day) => {
// }

