function largestOfFour(arr) {
  let largestArr = [];
  for (let ele of arr) {
    let largest = Number.NEGATIVE_INFINITY;
    for (let m of ele) {
      if (m > largest) largest = m;
    }
    //console.log(largest);
    largestArr.push(largest);
  }

  return largestArr;
}

let res = largestOfFour([
  [17, 23, 25, 12],
  [25, 7, 34, 48],
  [4, -10, 18, 21],
  [-72, -3, -17, -10],
]);

console.log(res);
