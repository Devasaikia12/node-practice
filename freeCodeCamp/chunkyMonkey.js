// function chunkArrayInGroups(arr, size) {
//   let result = [];

//   while (arr.length > 0) {
//     // result.push(arr.slice(0, size));
//     // arr = arr.slice(2);

//     result.push(arr.splice(0, size));
//   }
//   return result;
// }

// console.log(chunkArrayInGroups(['a', 'b', 'c', 'd'], 2));

function frankenSplice(arr1, arr2, n) {
  arr2.splice(n, 0, ...arr1);

  return arr2;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
console.log(
  frankenSplice(['claw', 'tentacle'], ['head', 'shoulders', 'knees', 'toes'], 2)
);
