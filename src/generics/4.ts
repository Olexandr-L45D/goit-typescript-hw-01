// task 4 -  Оновлення користувача
type User = {
    id: number;
    name: string;
    surname: string;
    email: string;
    password: string;
}

function createOrUpdateUser(initialValues: Partial<User>): User {
    const defaultUser: User = {
        id: Date.now(),
        name: '',
        surname: '',
        email: '',
        password: '',
    };

    return { ...defaultUser, ...initialValues };
}

const newUser = createOrUpdateUser({
    email: 'user@mail.com',
    password: 'password123'
});
// console.log(newUser);
export { };












