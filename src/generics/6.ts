// task 6

type Errors = {
    email?: string[];
    firstName?: string[];
    lastName?: string[];
    phone?: string[];
};

type Form = {
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    phone: string | null;
    errors: Errors;
};

type Params = Omit<Form, 'errors'>;


export { };


// type Errors = {
//     email?: string[];
//     firstName?: string[];
//     lastName?: string[];
//     phone?: string[];
// };

// type Form = {
//     email: string | null;
//     firstName: string | null;
//     lastName: string | null;
//     phone: string | null;
//     errors: Errors;
// };

// // Реалізуйте Params так,
// // щоб унеможливити поле 'errors' з типу Form (приміняю утиліту Omit)
// type Params = Form;