console.log('Hello world!');
// 1. Use strict
// added in ES 5
// use this for Valina Javascript
'use strict';

// 2. Variable, rw(read/write)
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

// 3. Constant, r(read only)
// use const whenever possible.
// only use let iuf variable needs to change.

const daysInWeek = 7;
const maxNumber = 5;

// Note!
// Immutable data types: primitive types, frozen objects (i.e. object.freeze())
// Mutable data types; a;; objects by defaults are muutable in JS
// favor immutable data type always for a few reasons;
// -security
// -thread safety
// reduce human mistakes

// 4. Variable types
// primtive, single item: number, string, boolean, null, undifined, symbol
// object, box container
// function, first-class function

// 메모리 저장 -> primtive(value), object(reference)

const count = 17  // integer
const size = 17.1;  // decimal number
console.log(`value: ${count}, type: ${typeof count}`);  // ??
console.log(`value: ${size}, type: ${typeof size}`);    // ??

// number - speicla numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const nagativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(nagativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use if yet)
// const bigInt = 1233~~n;

// string 
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}!, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}`; // tmplate loterals (sting)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log('value: ' + helloBob + ', type: ' + typeof helloBob);

// boolean
// false: 0, null, undifined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false;
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing =  null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undifined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique idenrifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);  // description으로 string 변환해야 에러가 안남 

// object, real-life object, data structure
const ayoung = {name: 'ayoung', age: 25};
ayoung.age = 20;

// 5. Dynamic typing: dynamically typed language 
// -> 변수를 선언할 때 타입을 정해주는 것이아니라 런타일 할 때 할당된 값에 따라서 타입이 변경될 수 있음 
let text = 'hello';
console.log(`value: ${text}, type: ${typeof text}`);  
text = '1';
console.log(`value: ${text}, type: ${typeof text}`);  
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);  
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);  
// console.log(text.charAt(0));   -> error