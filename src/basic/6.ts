//
interface User {
    name: string;
    age: number;
    email: string;
    address?: string;
};

const mango = {
    name: 'Mango',
    age: 30,
    email: 'john@example.com',
    address: {
        city: 'New York',
        country: 'USA'
    }
};

const poly = {
    name: 'Mango',
    age: 30,
    email: 'john@example.com'
};




// 6 unknown
// function safParsJson(jsonString: string) {
//     try {
//         const result: unknown = JSON.parse(jsonString);
//         if (typeof result === "object" && result !== null) {
//             return result;
//             // Type is verified
//         }
//     } catch (error) {
//         console.error("Failed to parse - error!!!");
//     }
//     return null;
// };
// console.log(safParsJson);
// 6 enum


enum VehicleType {
    Car = "Renault",
    Truck = "Marsedas",
    Motorcycl = "Sudzuki"
};
function getVistrac(vehicle: VehicleType): string {
    return `The vehicle is ${vehicle}.`;
};

console.log(getVistrac(VehicleType.Car));
console.log(getVistrac(VehicleType.Motorcycl));


function calcTotal(arr: number[]) {
    return arr.reduce((acc, el) => acc + el, 0)
};
const numberArr = [10, 20, 30, 40]

console.log(calcTotal(numberArr));
// перший варіант -зробити типизацію ключів в середині дужок присовюючи аргументу
// function calcTotaluserObj(arr: { name: string; age: number }[]) {
//     return
// };
// const userObj = [
//     { name: 'Bob', age: 15 },
//     { name: 'Job', age: 20 },
//     { name: 'Pob', age: 25 },
// ]
// console.log(calcTotaluserObj(userObj));
// другийй варіант НАЙКРАЩИЙ!!! -зробити типизацію ключів через ключове слово тайп в обєкті: type Users = {} і передати його в функцію
type Users = {
    name: string;
    age: number;
};
function newUserObj(arr: Users[]) {
    return arr
};
const usObj = [
    { name: 'Bim', age: 18 },
    { name: 'Jip', age: 22 },
    { name: 'Pub', age: 27 },
]
console.log(newUserObj(usObj));

