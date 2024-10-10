

export enum UserRole {
    admin = 'admin',
    editor = 'editor',
    guest = 'guest',
}
type RoleTranslations = Record<UserRole, string>

const RoleDescription: RoleTranslations = {
    admin: 'Admin User',
    editor: 'Editor User',
    guest: 'Guest User',
};

// console.log(RoleDescription);

export { };




// task 5
// export enum UserRole {
//     admin = 'admin',
//     editor = 'editor',
//     guest = 'guest',
// }
// // Замініть наступний код на версію за допомогою Record
// const RoleDescription = {
//     admin: 'Admin User',
//     editor: 'Editor User',
//     guest: 'Guest User',
// };