/**
 * Finish the following script to extends the built-in
 * JavaScript String Object
 * so it has a method which will reverse the order of
 * characters in a string and return the resulting reversed string.
 * It should run with code provided.
 *
 * Bonus marks if it ignores punctuation at the end of the String.
 */

String.prototype.flip = function () {
  let str = this;
  let puctuation = /[?.!]/;

  let match = str.match(puctuation);
  let end = '';
  if (match) {
    end = match[0];
    str = str.replace(end, '');
  }

  let reverse = str.split('').reverse().join('') + end;

  return reverse;
};

let str = 'Can I use Google during the interview?';
console.log(str.flip());
