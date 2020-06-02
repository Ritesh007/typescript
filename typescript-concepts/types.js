/*
Types
*/
// A simple putput statement
console.log("your code goes here");
// Mentioning types for number addition
function add(n1, n2) {
    return n1 + n2;
}
const result = add(6, 3);
console.log(result);
// Type number at the time of assignment
let n1;
n1 = 5;
// Playing with Objects in type script
const person = {
    name: 'ritesh',
    age: 28
};
console.log(person.name);
let perso1;
perso1 = {
    name: 'ritesh',
    age: 28,
    hobbies: ['sports', 'movies', 3]
};
//Playing with arrays in Typescript
const person1 = {
    name: 'ritesh',
    age: 28,
    hobbies: ['sports', 'movies', 3]
};
// declaring a type array of strings
let hobbies;
// declaring a type array of strings and numbers
let hobbies1;
// Tuples
const tuple1 = [1, 'test'];
// Enum name should start with uppercases
var Role;
(function (Role) {
    Role["ADMIN"] = "test";
    Role[Role["READ_ONLY"] = 2] = "READ_ONLY";
})(Role || (Role = {}));
;
console.log(Role.ADMIN);
// any type
const test = 6;
// declaring a array of any type
let hobbies3;
// unions 
let uniontypes = 2;
// Literal types - we tell what can be assigned
let names = 'a';
