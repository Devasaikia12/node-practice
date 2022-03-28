// ASI, object literals, square bracket syntax, hoisting
// what happens when you run this code? why?
// how would you fix it?

// let a = {
//   a: 123,
// }[a].forEach(function (x) {
//   console.log(x);
// });

///

let b = {
  a: 123,
};
b = [b].forEach(function (c) {
  console.log(c);
});
