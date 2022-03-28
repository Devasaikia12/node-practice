// write a program to print number 1 to n
// for multiple of 3 print fizz
// for multiple of 5 print buzz
// for mutiple of both 3 and 5 print fizzbuzz

((num) => {
  for (let i = 1; i <= num; i++) {
    // if (i % 3 === 0 && i % 5 === 0) {
    //   console.log('fizzbuzz');
    // } else if (i % 3 === 0) {
    //   console.log('fizz');
    // } else if (i % 5 === 0) {
    //   console.log('buzz');
    // } else {
    //   console.log(i);
    // }
    let val = '';
    i % 3 === 0 && i % 5 === 0
      ? (val = 'fizzbuzz')
      : i % 3 === 0
      ? (val = 'fizz')
      : i % 5 === 0
      ? (val = 'buzz')
      : (val = i);

    console.log(val);
  }
})(15);
