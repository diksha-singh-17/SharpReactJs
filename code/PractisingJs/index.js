// // SCOPE: var is a function scope while let and const is a block scope.

// // {
// //   var a = 10;
// //   let b = 20;
// //   console.log(b);
// // }
// // console.log(a);

// // SHADOWING:
// // function test() {
// //    let a = 10;    //illegal shadowing
// //   if (true) {
// //     var a = 20;   //illegal shadowing
// //     console.log(a);
// //   }
// //   console.log(a);
// // }
// // test();

// // function test() {
// //   const a = 10; //illegal shadowing
// //   if (true) {
// //     var a = 20;  //illegal shadowing
// //     console.log(a);
// //   }
// //   console.log(a);
// // }
// // test();

// // function test() {
// //   var a = 10; //shadowing
// //   if (true) {
// //     let a = 20;
// //shadowing
// //     console.log(a);
// //   }
// //   console.log(a);
// // }
// // test();

// // const d;   syntax error-missing initializer
// // const d;  errro:cannot redeclare
// let b;
// b = 45;
// // let b ; error:syntaxerrro-cannnot redeclare
// console.log(b);
// var g;
// var g;

// // let a;
// // {
// //   let a; //shadowing
// // }

// // HOISTING

// // 1. Creation Phase
// // 2. Execution Phase

// // 1. var and normal function declarations are moved to the top of the scope
// // 2. let and const declarations are not moved to the top of the scope
// // 3. var are initialized with undefined and normal function declarations with whole fn code
// console.log(a); //undefined-hoisting
// var a = 39;
// console.log(a); //39

// demo();

// function demo() {
//   console.log("normal function declaration");
// }

// // const demo = () => {
// //   console.log("arrow function declaration");
// // };

// (() => {
//   console.log("IIFE");
// })();

// // Callback

// function parent(callback) {
//   setTimeout(() => {
//     let data = "testing callback";

//     callback(data);
//   }, 3000);
// }
// function child(data) {
//   console.log("Child", data);
// }
// parent(child);

// // Promises

// const newPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let data = "testing promise";
//     if (data) {
//       reject(data);
//     }
//   }, 5000);
// });

// newPromise
//   .then((data) => console.log(data))
//   .catch((error) => console.log("error", error));

// // async/await

// const example = async () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let data = true;
//       if (data) {
//         resolve("success");
//       } else {
//         reject("error");
//       }
//     }, 2000);
//   });
// };

// async function getData() {
//   try {
//     let res = await example();
//     console.log(res);
//   } catch (err) {
//     console.log(err);
//   }
// }
// getData();

// function callback1(callback) {
//   let data = "new dta";
//   setTimeout(() => {
//     callback(data);
//   }, 1000);
// }

// function callback2(data) {
//   console.log(data);
// }
// callback1(callback2);

// const promise1 = async () => {
//   return new Promise((resolve, reject) => {
//     let res = true;
//     if (res) {
//       resolve("done data");
//     } else {
//       reject("error");
//     }
//   });
// };

// const newPromise12 = async () => {
//   try {
//     let res = await promise1();
//     console.log(res);
//   } catch (err) {
//     console.log(err);
//   }
// };
// newPromise12();

// const promise3 = new Promise((res, rej) => {
//   let data = false;
//   if (data) {
//     res("done");
//   } else {
//     rej("error");
//   }
// });
// promise3
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// // currying
// function curry(a) {
//   return function (b) {
//     console.log("currying:", a + b);
//   };
// }
// curry(2)(3);

// // closures

// function print() {
//   let count = 0;
//   return function () {
//     console.log("closures", count++);
//   };
// }
// let print12 = print();
// print12();
// print12();
// print12();

// // Call, apply and bind --> to access the property of object using function, it temporary links the function with that object

// const obj = { num: 4 };

// const functionCall = function (a) {
//   console.log(this.num + a);
//   return this.num + a;
// };

// console.log(functionCall.call(obj, 6)); //10

// const obj1 = { num1: 6 };

// const functionApply = function (a, b, c) {
//   return this.num1 + a + b + c;
// };

// console.log(functionApply.apply(obj1, [1, 2, 3])); //12

// const functionbind = functionApply.bind(obj1);
// console.log(functionbind(11, 2, 4));

// Promise chaining

const fun1 = new Promise((res, rej) => {
  console.log("fun1");
  res();
});
const fun2 = () =>
  new Promise((res, rej) => {
    console.log("fun2");
    res("hello");
  });
const fun3 = () => {
  return new Promise((res, rej) => {
    console.log("fun3");
    res();
  });
};

fun1
  .then(() => {
    return fun2();
  })
  .then((data) => {
    console.log(data);
  })
  .then(() => {
    return fun3();
  });

// const fun1 = (callback) => {
//   console.log("fun1");
//   callback();
// };
// const fun2 = (callback) => {
//   console.log("fun2");
//   callback();
// };
// const fun3 = () => {
//   console.log("fun3");
// };

// fun1(() => fun2(() => fun3()));
// fun1(() => fun2(fun3));
