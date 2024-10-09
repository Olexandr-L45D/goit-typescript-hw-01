// generics/1.ts
// можна спробувати утиліту Parameters
// type MyFunctionType = (a: string, b: number, c: boolean) => void;

// type MyParametersType = Parameters<MyFunctionType>;
// Результат: [string, number, boolean]

import axios from 'axios';

// async function fetchData<T>(url: T): Record<string, number> {
//     try {
//         const response = await axios.get(url);
//         return response.data;
//     } catch (error) {
//         throw new Error(`Error fetching from ${url}: ${error}`);
//     }
// }





// ListProdgec - це індексований  - УНІВЕРСАЛЬНИЙ інтерфейс де індекс задаю ключь key 
// і він підходить для типізації будь яких обєктів з різними товарами (чи фрукти чи техніка)

interface ListProdukt {
    [key: string]: number;
};

const fruits: ListProdukt = {
    apple: 10,
    orandg: 15,
    banana: 20,
    peahc: 5,
};
const tehnics: ListProdukt = {
    auto: 22,
    moto: 23,
    track: 25,
    scooter: 17,
};
console.log(fruits);
console.log(tehnics);

// peahc - персик
