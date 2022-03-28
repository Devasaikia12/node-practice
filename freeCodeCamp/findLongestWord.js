function findLongestWordLength(str) {
  //   let longest = '';
  //   let reverseArr = str.split(' ');
  //   for (let word of reverseArr) {
  //     if (word.length > longest.length) longest = word;
  //   }
  //   return longest.length;

  return str.split(' ').sort(function (a, b) {
    return b.length - a.length;
  })[0].length;
}

console.log(
  findLongestWordLength('The quick brown fox jumped over the lazy dog')
);
