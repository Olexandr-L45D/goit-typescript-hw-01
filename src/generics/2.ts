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

interface AllType {
    name: string;
    position: number;
    color: string;
    weight: number
}

function compare(top: AllType, bottom: AllType): Pick<AllType, "name" | "color" | "position" | "weight"> {
    return {
        name: top.name,
        color: top.color,
        position: bottom.position,
        weight: bottom.weight,
    }
}
console.log(compare);
export { }


