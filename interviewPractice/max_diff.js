// find the maximum difference in an array element

const maxDiff = (arr) => {
  let newArr = Array.from(new Set(arr)).sort((a, b) => b - a);
  return newArr[0] - newArr[newArr.length - 1];
};

console.log(maxDiff([2, 3, 4, 5, 6, 3, 4, 9, 12, 34, 12]));
