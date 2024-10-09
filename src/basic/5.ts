// 5 типізація enum
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

enum DayOfWeek {
    Monday = 'Monday',
    Tuesday = 'Tuesday',
    Wednesday = 'Wednesday',
    Thursday = 'Thursday',
    Friday = 'Friday',
    Saturday = 'Saturday',
    Sunday = 'Sunday'
}

// const isWeekend = (day: DayOfWeek): boolean => {
//     if (Saturday | Sunday === true) {
//         return `The day is Hollyday ${day}`
//     } else {
//         return This is Wikday
//     }
// }
// function isWeekend(day: DayOfWeek): boolean {
//     if (day.Saturday | day.Sunday === true) {
//         return `The day is Hollyday ${day}`
//     } else {
// return This is Wikday
//     }
// }

enum AnimalIds {
    cat = 'cat',
    dog = 'dog',
    fish = 'fish',
}

type Animal = {
    [AnimalIds.cat]: {
        meow: () => string;
    };
    [AnimalIds.dog]: {
        bark: () => string;
    };
    [AnimalIds.fish]: {
        swim: () => undefined;
    };
};

// Створення об'єктів типу Animal
let cat: Animal[AnimalIds.cat] = {
    meow: () => 'Meow! I am a cat',
};

let dog: Animal[AnimalIds.dog] = {
    bark: () => 'Woof! I am a dog',
};

let fish: Animal[AnimalIds.fish] = {
    swim: () => undefined,
};

export { };
