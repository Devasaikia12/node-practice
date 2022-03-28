//Why do we get this weird result from the map method?
// myarray.map(func);
//We want to convert 3 strings into numbers

let result = ['1', '7', '11'].map((ele) => parseInt(ele)); //returns [1, NaN, 3]

console.log(result);
