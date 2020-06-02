# TypeScript

### Steps to configure, complie and run
Install npm - sudo apy install npm  <br />
Install typescript - sudo npm install -g typescript  <br />
Install the npm packages listed in the packagejson file - npm install <br />
Start npm - npm start <br />
Compile typescipt that gets converted to javascript - tsc app.ts (This by default compiles to es3) <br />
To compile to es6 - tsc app.js --target es6 <br />

### Reference 
https://www.youtube.com/watch?v=BwuLxPH8IDs

### TypeScript facts -
All the code that is written in typescript is complied to javascript.
JavaScript is the one that actually runs. <br />
**So why TypeScript?** <br />
Beacuse typescript helps in catching errors at development and fixing them, we cant catch errors through typescript at runtime as JavaScript is the one that runs.

### Variable identifiers -
1. var - scopped globally and locally. Can be redeclared and updated and hoisted. Global scoped var assigned to global object.
2. let - scopped globally and block level. Can't be redeclared and hoisted. Can be updated.  Global scoped let is not assigned to global object.
3. const - scopped globally and block level. Can't be redeclared, updated and hoisted. Global scoped const is not assigned to global object. const objects can be updated.

### TypeScript and JavaScript Types 
1. number - for all types of number such as Float, double etc.
2. string - can be single or double quotes or Back ticks.
3. boolean - true or false
4. Object - example - {age:30}
5. Array - example - [1,2,3,'name']
6. Any - any type

### Eclusive types by TypeScript
1. Tuple  - immutable arrays - [1,2]. Push works on tuple.
2. Enum - example - enum {NEW, OLD}. Gives you an enumerated list. Used to define global constants.
3. Union - having multiple types assigned to a single variable.
4. Literal types - used to assign only a set of specifies values.
5. Type alias - used to create alias for unions.

### Functions

