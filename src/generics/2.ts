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
