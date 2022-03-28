let num = [1,2,3,1,2,5,6,7,2,3,5,6,7,99,99,55]

// using filter
const unique = num.filter((ele,i,arr)=>{
return arr.indexOf(ele) === i
})
//console.log(unique)

// using reduce
const result = num.reduce((cr,ele)=>{
//console.log(cr)
return cr.includes(ele) ? cr : [...cr,ele]
},[]) 

//console.log(result)
//using Set constructor
console.log([...new Set(num)])

// no build-in function
let arrUnique =[]
for(let i=0; i< num.length; i++){
	if(arrUnique.includes(num[i])){
		break
	}else{
		arrUnique.push(num[i])
	}
}