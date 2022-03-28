/**
 * Write a script that will find all the vowels [a,e,i,o,u] inside any string
 * and then flip the order of only the vowels. If there is an odd number of vowels
 * then the one in the middle stays in the same position. Complete this task with the
 * fewest number of loops and iterations as possible.
 * Eg:
 * cottage => cettago
 * hello => holle
 * sauce => seuca
 * javascript => jivascrapt
 */
const vowelsFlip = (str) => {
  let regVowels = /[aeiou]/g;
  let newarr = str.toLowerCase().split('');

  let vowels = str.match(regVowels);

  newarr.forEach((ch, i) => {
    if (['a', 'e', 'i', 'o', 'u'].includes(ch)) {
      newarr[i] = vowels.pop();
    }
  });

  return newarr.join('');
};

//console.log(vowelsFlip('hello'));

//---- another method

const filpVowels = (word) => {
  let matches = Array.from(word).reduce((acc, curr, idx) => {
    if (['a', 'e', 'i', 'o', 'u'].includes(curr)) {
      acc.push(idx);
    }
    return acc;
  }, []);

  console.log(matches);
};

console.log(filpVowels('javascript'));
