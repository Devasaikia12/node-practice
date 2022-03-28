function mutation(arr) {
  let firstArr = arr[0].toLowerCase();
  let secondArr = arr[1].toLowerCase();

  for (let i of secondArr) {
    if (firstArr.indexOf(i) === -1) return false;
  }

  return true;
}

console.log(mutation(['hello', 'hey']));
console.log(mutation(['Alien', 'line']));
