import { getFullName, User } from './user';

const heropy: User = {
   firstName: 'heropy',
   lastName: 'park',
   age: 85,
   isValid: true,
};
const fullNmae = getFullName(heropy);

console.log(fullNmae);
console.log(heropy.isValid);
