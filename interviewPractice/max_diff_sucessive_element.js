//--- Given an unsorted array , find the maximum difference in successive element in an array in sorted way

const findMaxDiff = (array) => {
  if (array.length == 0) {
    return 0;
  }
  array.sort((a, b) => a - b);
  let maxDiff = 0;
  for (let i = 1; i < array.length; i++) {
    let diff = array[i] - array[i - 1];
    maxDiff = Math.max(maxDiff, diff);
  }
  return maxDiff;
};

console.log(findMaxDiff([2, 5, 14, 68, 33, 49]));
