interface NewPage2 {
    title: string;
    likes: number;
    accounts: string[];
    status: 'open' | 'close';
};

interface NewPage1 extends NewPage2 {
    details?: {
        createAt: Date;
        updateAt: Date;
    };
};

const page2: NewPage2 = {
    title: 'Python or Js',
    likes: 5,
    accounts: ['Alex'],
    status: 'close',
};

const page1: NewPage1 = {
    title: 'The awesome page',
    likes: 100,
    accounts: ['Max', 'Anton', 'Nikita'],
    status: 'open',
    details: {
        createAt: new Date('2021-01-01'),
        updateAt: new Date('2021-05-01'),
    }
};
















// variable кортедж - accounts: string[];













// Union Type
// function inpUtInput(input: string | number ) {
//     if (typeof input === 'number') {
//         return input.toFixed(2)

//     }
//     else {
//         return input.toUpperCase()
//     }
// }

