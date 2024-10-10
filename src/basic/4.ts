
function showMessage(message: string | number | null): void {
    console.log(message);
}

function calc(num1: number, num2: number): number {
    return num1 + num2;
}

function customError(message: string): never {
    throw new Error('Error');
}
// 4 типізація простої функції
// Функція, яка завжди викидає помилку never



