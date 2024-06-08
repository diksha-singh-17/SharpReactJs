//spread operator

const arr = [1, 2, 3, 4];
const newArr = [...arr, 5, 6];
console.log(newArr);

const obj = {
  name: "John",
};

const newObj = {
  ...obj,
  age: 55,
};
console.log(newObj);

// Rest operator

const sum = (...a) => {
  return a.filter((i) => i == 11);
};

console.log(sum(1, 2, 3, 11));

// destructing

const numbers = [1, 2, 3, 4, 5];
[x, , y] = numbers;
console.log(x, y);

const objF = { a: "new", b: 2 };
const { a, b } = objF;
console.log(a, b);
