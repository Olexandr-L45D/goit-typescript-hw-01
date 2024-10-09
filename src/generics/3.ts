// exemple for Union Type
interface ListProdukts {
    [key: string]: number | null;
};

const fruits: ListProdukts = {
    apple: 1,
    orandg: 5,
    banana: 2,
    vegetables: null,
};
const tehnicsAuto: ListProdukts = {
    auto: 12,
    moto: 25,
    track: 5,
    scooter: 7,
    bicycle: null,
};
console.log(fruits);
console.log(tehnicsAuto);

