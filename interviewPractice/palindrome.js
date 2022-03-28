/**
 * Write a function to determine if the supplied string is a palindrome
 * Eg:  radar,  racecar, kayak, and redder are all palidromes
 * They are the spelled same backwards and forwards
 */

let palindrome = function (word) {
  let len = word.length;
  let first = word.substring(0, Math.floor(len / 2));
  let last = word.substring(len - Math.floor(len / 2));

  let flip = last.split('').reverse().join('');
  return first === flip;
};

console.log(palindrome('radar')); //true ra -> ar
console.log(palindrome('redder')); //true red -> der
console.log(palindrome('window')); //false win -> dow
