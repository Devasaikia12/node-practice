// find the number of character occurrence in a string
// also find the chracter the occurred most

((str) => {
  let obj = {};
  str = str.split('');

  for (let char of str) {
    // if (obj.hasOwnProperty(char)) {
    //   obj[char]++;
    // } else {
    //   obj[char] = 1;
    // }

    !obj[char] ? (obj[char] = 1) : obj[char]++;
  }

  let maxnum = 0,
    maxchar = '';

  for (let ch in obj) {
    if (obj[ch] > maxnum) {
      maxnum = obj[ch];
      maxchar = ch;
    }
  }
  console.log(obj);
  console.log(`Character that occurred most ${maxchar} times ${maxnum}`);
})('Hello World');
