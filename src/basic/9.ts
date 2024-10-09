// як типізувати метод в середині функції? Додаю до обєкту інтерфейса методи і типізую
interface Users {
    name: string;
    age: number;
    lastName?: string;
    sayHello(): string;
    sayBye(): void;
    showAge(useRage: number): string;
};

const user = {
    name: 'Bob',
    age: 12,
    sayHello() {
        return 'Hello'
    },
    sayBye() {
        console.log('By');
    },
    showAge(useRage: number) {
        return `Hi is age ${useRage} es old`
    }
};
// useRage - зовнішній параметр який не відомо що приймає тому його теж треба типізувати

function LogName(name: string) {
    return `name ${name}`
};
console.log(LogName('Alex'));

function lightTrafic(color: "grin" | "yellow" | "red") {
    if (color === "grin") {
        console.log('Go');
    } else if (color === "yellow") {
        console.log('ready');
    } else if (color === "red") {
        console.log('Stop!');
    }
};
console.log(lightTrafic("grin"));
