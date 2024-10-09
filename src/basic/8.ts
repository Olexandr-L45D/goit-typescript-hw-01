// різниця між тип та інтерфейс
// interface
// коли ставимо знак питання до ключа перед двокрапкою то вказуєм що цей параметр не обовязковий
// і може не використовуватись --- lastName?: string;
// (часто пишуть в Реакті для Пропсів)
interface Users {
    name: string;
    age: number;
    lastName?: string;
};
// type 
type User = {
    name: string;
    age: number;
    lastName?: string;
};
// як типізувати метод в середині функції?
type Weekdays = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri';
type Weekend = 'Sat' | 'Sun';

type Day = Weekdays | Weekend;

type DayTranslations = Record<Day, string>;

const translations: DayTranslations = {
    Mon: 'Понеділок',
    Tue: 'Вівторок',
    Wed: 'Середа',
    Thu: 'Четверг',
    Fri: "П'ятниця",
    Sat: 'Субота',
    Sun: 'Неділя',
};

export { };