console.log('Hello world!');
// 1. Use strict
// added in ES 5
// use this for Valina Javascript
'use strict';

// 2. Variable
// let (added on ES6), mutable
let glonalName = 'global name'
{
  let name = 'ayoung';
  console.log(name);
  name = 'hello';
  console.log(name);
  console.log(glonalName);
}
console.log(name);
console.log(glonalName);

// var (don't ever use this!)
// var hoisting (move declaration frim bottom to top)
// has no block scope
{
  age = 4;
  var age;
}
console.log(age);

// 3. Constants
// favor immutable data type always for a few reasons;
// -security
// -thread safety
// reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;

// 4. Variable types
// primtive, single item: number, string, boolean, null, undifined, symbol
// object, box container
// function, first-class function

const count = 17  //integer
const 