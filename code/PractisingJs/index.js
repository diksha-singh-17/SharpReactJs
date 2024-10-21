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

//  Call, apply and bind --> to access the property of object using function, it temporary links the function with that object

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
const fun2 = () => {
  return new Promise((res, rej) => {
    console.log("fun2");
    res("hello");
  });
};
const fun3 = () => {
  return new Promise((res, rej) => {
    console.log("fun3");
    rej("failed");
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
  })
  .catch((err) => console.log(err));

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

const posts = [{ title: "POST1" }];
//Do not touch this function
function create2ndPost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push({ title: "POST2" });
      resolve({ title: "POST2" });
    }, 2000);
  });
}
//Do not touch this function
function create3rPost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push({ title: "POST3" });
      resolve({ title: "POST3" });
    }, 3000);
    console.log("pppp", posts);
  });
}

function updateLastUserActivityTime() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(new Date().getTime());
    }, 1000);
  });
}

//Do not touch this function
function deletePost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (posts.length > 0) {
        const poppedElement = posts.pop();
        resolve(poppedElement);
      } else {
        reject("ERROR: ARRAY IS EMPTY");
      }
    }, 1000);
  });
}
// Promise.all([create2ndPost(), create3rPost(), updateLastUserActivityTime()])
//   .then((val) => console.log(val))
//   .then(deletePost)
//   .then((val) => console.log(val))
//   .then(deletePost)
//   .then((val) => console.log(val))
//   .then(deletePost)
//   .then((val) => console.log(val))
//   .catch((err) => console.log(err));

async function demo() {
  let p1 = await create2ndPost();
  let p2 = await create3rPost();
  let p4 = await updateLastUserActivityTime();
  console.log(posts);
  let p3 = await deletePost();

  console.log(p1, p2, p3, p4);
}
demo();
// //Modify the lines below and use .then and .catch smartly to get the correct output.
// create2ndPost()
//   .then(() => {
//     return deletePost();
//   })
//   .then((msg) => {
//     console.log(msg.title);
//   })
//   .then(create3rPost)
//   .then(() => {
//     return deletePost();
//   })
//   .then((msg1) => {
//     console.log(msg1.title);
//   })
//   .then(() => {
//     return deletePost();
//   })
//   .then((msg3) => {
//     console.log(msg3.title);
//   })
//   .then(() => {
//     return deletePost();
//   })
//   .catch((err) => console.log(err));

// const posts = [{ title: "Post One" }, { title: "Post Two" }];

// //Do not touch this function below
// function printPost() {
//   posts.forEach((post) => {
//     console.log(post.title);
//   });
// }

// //Do not touch this function below
// const create3rdPost = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       posts.push({ title: "post Three" });
//       // console.log("three")
//       resolve("three");
//     }, 3000);
//   });
// };

//Do not touch this function below
// function create4thPost() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       posts.push({ title: "post Four" });
// console.log("four")
//       resolve("four");
//     }, 2000);
//   });
// }
// let create5thPost = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     posts.push({ title: "post Fifth" });
// console.log("four")
//     resolve("fifth");
//   }, 1000);
// });
// }

// create3rdPost()
//   .then(() => create4thPost())
//   .then(create5thPost)
//   .then(() => printPost());
// post1post2post5post3post4
// Correct the lines below smartly such that post three gets printed before post four
// printPost();

// create3rdPost()
//   .then((msg) => console.log(msg))
//   .then(printPost)

//   .then(() => {
//     return create4thPost();
//   })
//   .then((msg) => console.log(msg))

//   .then(printPost);

// const blogs = [];

// //Do not touch these functions below at all
// function create1stBlog() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       blogs.push({ title: "BLOG1" });
//       resolve();
//     }, 3000);
//   });
// }

// //Do not touch these functions below at all
// function create2ndBlog() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       blogs.push({ title: "BLOG2" });
//       resolve();
//     }, 2000);
//   });
// }

// function deleteBlog() {
//   //complete this function such that it removes the last element from the blog Array and resolves the deleted blog in 1 second timeout
//   //If no blog present , it breaks the promise with ERROR (reject) in 1 second timeout
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (blogs.length > 0) {
//         const deletedBlog = blogs.pop();
//         resolve(deletedBlog);
//       } else {
//         reject("ERROR");
//       }
//     }, 1000);
//   });
// }

//Call the function in the right way so that we can get the desired output
// create1stBlog()
//   .then(create2ndBlog)
//   .then(() => {
//     return deleteBlog();
//   })
//   .then((msg) => console.log(msg.title))

//   .then(deleteBlog)
//   .then((msg) => console.log(msg.title))
//   .then(deleteBlog)
//   .catch((err) => console.log(err));

// Promise.all([create2ndBlog(), create1stBlog()])
//   .then(() => {
//     return deleteBlog();
//   })
//   .then((val) => {
//     console.log(val.title);
//     return deleteBlog();
//   })
//   .then((val) => {
//     console.log(val.title);
//     return deleteBlog();
//   })

//   .catch((val) => console.log(val));
