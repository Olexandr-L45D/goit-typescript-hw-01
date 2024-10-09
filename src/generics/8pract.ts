

// async function fetchData<T>(url: string): Promise<T> {
//     try {
//         const response = await fetch(url);
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         const data: T = await response.json();
//         return data;
//     } catch (error) {
//         console.error("Failed to fetch data:", error);
//         throw error;
//     }
// }







// function safelyParseJson(jsonString: string): unknown {
//     try {
//         const result: unknown = JSON.parse(jsonString);
//         if (typeof result === "object" && result !== null) {
//             return result;  // Type is verified as an object (non-null)
//         }
//     } catch (error) {
//         console.error("Failed to parse JSON:", error);
//     }
//     return null;  // Return null if parsing fails or type is incorrect
// }

// // Example usage:
// const correctJson = '{"name":"John", "age":30}';
// console.log(safelyParseJson(correctJson));  // Output: { name: 'John', age: 30 }

// function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
//     return obj[key];
// }
// ListProdgec - це індексований  - УНІВЕРСАЛЬНИЙ інтерфейс де індекс задаю ключь key
// і він підходить для типізації будь яких обєктів з різними товарами (чи фрукти чи техніка)

// interface ListProdukt {
//     [key: string]: number;
// };

// const fruits: ListProdukt = {
//     apple: 10,
//     orandg: 15,
//     banana: 20,
//     peahc: 5,
// };
// const tehnics: ListProdukt = {
//     auto: 22,
//     moto: 23,
//     track: 25,
//     scooter: 17,
// };
// console.log(fruits);
// console.log(tehnics);

// peahc - персик


// Practyc on Lesson Generic типи - Дженерік - конструкція яка динамічно підставляє тип данних в функції
//  приклад звичайної типїзованої функції з array: number[]
// function getElement(array: number[]) {
//     return array[0];
// };
//  приклад Generic типїзованої функції з  getElement<T>(array: T[]), де <T> це скорочена динамічна змінна типу (різних типів )
function getElement<T>(array: T[]): T | undefined {
    return array[0];
};
const numberArray = [1, 20, 50];
const stringArray = ['hello', 'by', 'world'];
const booleanArray = [{ isActiv: true }, { isActiv: false }, { isActiv: undefined }];
const objectArray = [{ name: 'Alis' }, { name: 'Alisa' }, { name: 'Alina' }];


console.log(getElement(numberArray));
console.log(getElement(stringArray));
console.log(getElement(booleanArray));
console.log(getElement(objectArray));

type Person = {
    name: string;
    age: number;
    location: string;
};

type PersonKeys = keyof Person; //оператор keyof повертає набір ключів: 'name' | 'age' | 'location'

function getPersonInfo(person: Person, key: PersonKeys) {
    return person[key];
}

const john: Person = {
    name: 'John',
    age: 25,
    location: 'NY',
};

// використання ключа в Дженерік
// Тобто ми скористалися 'extends' для обмеження значень 'U' ключами з об'єкта 'T'.
// значення ключів keyof будуть типу string | symbol
function extractValue<T extends object, U extends keyof T>(obj: T, key: U) {
    return obj[key];
}

extractValue({ name: 'John' }, 'name');


console.log(getPersonInfo(john, 'age')); // 25
console.log(getPersonInfo(john, 'name')); // 'John'
// console.log(getPersonInfo(john, 'job')); // Error: Argument of type '"job"' is not assignable to parameter of type 'PersonKeys'.


//  створення екземпляра класу на узагальненому класі
// синтаксис: const instance = new MyClass<number>(); для числа
class KeyValuePair<TKey, TValue> {
    constructor(private key: TKey, private value: TValue) { }

    getKey(): TKey {
        return this.key;
    }

    getValue(): TValue {
        return this.value;
    }
}

const pair1 = new KeyValuePair('name', 'Alice');
//  створення екземпляра класу pair1 на узагальненому класі KeyValuePair
console.log(pair1.getKey()); // 'name'
console.log(pair1.getValue()); // 'Alice'

export { };