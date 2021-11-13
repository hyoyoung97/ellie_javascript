// 1. String concatenation
console.log('my' + 'cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

// 2. Numeric operatiors
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); //divide
console.log(1 * 1); //multiply
console.log(5 % 3); //remainder
console.log(2 ** 3);  //exponentotarion

// 3. Increment add decrement operators
let counter = 2;
const preIncrement = ++counter;
counter = counter + 1;
preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);