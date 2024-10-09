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