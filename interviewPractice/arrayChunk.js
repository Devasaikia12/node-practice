// write a function, chunk(arr,n) return the chunked array of size at the least

// example arr = [1,4,3,14,7,9,12,0]
// [[1,4,3],[14,7,9],[12,0]] = n=3
// [[1,4,3,14,7,9],[12,0]] = n=6

function chunk(arr, n) {
  let newarr = [];

  for (let ele of arr) {
    let lastarr = newarr[newarr.length - 1];
    if (!lastarr || lastarr.length === n) {
      console.log('if', ele);
      newarr.push([ele]);
    } else {
      console.log('else', ele);
      lastarr.push(ele);
    }
    console.log('last', lastarr);
    console.log('new', newarr);
    console.log('----------------');
  }
  console.log(newarr);
}

chunk([1, 4, 3, 14, 7, 9, 12, 0], 3);



const chunk = function(arr,size){
	let res = [];
  for(let i=0;i<arr.length;i += size){
  	console.log(i,i+size);
  	res.push(arr.slice(i,i+size));
  }
  return res;
}


console.log(chunk([1,2,3,4,5,6,7,8,9],2));
