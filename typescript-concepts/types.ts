/*
Types
*/

// A simple putput statement
console.log("your code goes here");

// Mentioning types for number addition
function add(n1: number, n2: number) {
    return n1+n2;
}

const result = add(6, 3);
console.log(result); 

// Type number at the time of assignment
let n1: number;
n1 = 5;

// Playing with Objects in type script
const person = {
    name: 'ritesh',
    age: 28
};

console.log(person.name);

let perso1: object;
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
let hobbies: string[];

// declaring a type array of strings and numbers
let hobbies1: (string|number)[];

// Tuples
const tuple1: [number, string] = [1, 'test'];

// Enum name should start with uppercases
enum Role {ADMIN = "test", READ_ONLY = 2};

console.log(Role.ADMIN);

// any type
const test: any = 6;

// declaring a array of any type
let hobbies3: any[];

// unions 
let uniontypes: (string|number) = 2;

// create a alias for unions
type NewType = 'a' | 'b' | 3;

// Literal types - we tell what can be assigned
let names: (NewType)= 'a';