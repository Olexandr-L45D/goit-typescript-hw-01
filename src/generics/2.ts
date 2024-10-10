// exemple task2
// type AllType = {
//     name: string;
//     position: number;
//     color: string;
//     weight: number
// }

// function compare(top, bottom): AllType {
//     return {
//         name: top.name,
//         color: top.color,
//         position: bottom.position,
//         weight: bottom.weight,
//     }
// }
// в top можуть бути значення "name" | "color" в bottom можуть бути "position" | "weight".А повертає функція об'єкт типу AllType

interface AllType {
    name: string;
    position: number;
    color: string;
    weight: number
}
type UserTopInfo = Pick<AllType, "name" | "color">;
type UserBottomInfo = Pick<AllType, "position" | "weight">;

function compare(top: UserTopInfo, bottom: UserBottomInfo): AllType {
    return {
        name: top.name,
        color: top.color,
        position: bottom.position,
        weight: bottom.weight,
    }
}
// console.log(compare);
export { }




