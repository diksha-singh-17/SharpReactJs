// SCOPE: var is a function scope while let and const is a block scope.

// {
//   var a = 10;
//   let b = 20;
//   console.log(b);
// }
// console.log(a);

// SHADOWING:
// function test() {
//    let a = 10;    //illegal shadowing
//   if (true) {
//     var a = 20;   //illegal shadowing
//     console.log(a);
//   }
//   console.log(a);
// }
// test();

// function test() {
//   const a = 10; //illegal shadowing
//   if (true) {
//     var a = 20;  //illegal shadowing
//     console.log(a);
//   }
//   console.log(a);
// }
// test();

// function test() {
//   var a = 10; //shadowing
//   if (true) {
//     let a = 20;
//shadowing
//     console.log(a);
//   }
//   console.log(a);
// }
// test();

// const d;   syntax error-missing initializer
// const d;  errro:cannot redeclare
let b;
b = 45;
// let b ; error:syntaxerrro-cannnot redeclare
console.log(b);
var g;
var g;

// let a;
// {
//   let a; //shadowing
// }

// HOISTING

// 1. Creation Phase
// 2. Execution Phase

// 1. var and normal function declarations are moved to the top of the scope
// 2. let and const declarations are not moved to the top of the scope
// 3. var are initialized with undefined and normal function declarations with whole fn code
console.log(a); //undefined-hoisting
var a = 39;
console.log(a); //39

demo();

function demo() {
  console.log("normal function declaration");
}

// const demo = () => {
//   console.log("arrow function declaration");
// };

(() => {
  console.log("IIFE");
})();
