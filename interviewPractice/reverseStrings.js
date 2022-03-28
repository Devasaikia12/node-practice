// using array reverse method
((str) => {
  const arr = str.split('');
  str = arr.reverse().join('');

  console.log(str);
})('apple');

// -- no array method

((str) => {
  let reverseStr = '';
  for (let char of str) {
    reverseStr = char + reverseStr;
  }
  console.log(reverseStr);
})('saikia');

//-- using array reverse method

((str) => {
  const reverse = str.split('').reduce((acc, ele) => {
    return ele + acc;
  });
  console.log(reverse);
})('Hello');
