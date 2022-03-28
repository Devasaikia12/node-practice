var obj = [
    { 'name': 'P1', 'value': 150 },
    { 'name': 'P1', 'value': 150 },
    { 'name': 'P2', 'value': 200 },
    { 'name': 'P3', 'value': 450 }
];

var holder = {}

obj.forEach(function(val){
	if(holder.hasOwnProperty(val.name)){
		holder[val.name] = holder[val.name] + val.value 
	}else{
		holder[val.name]  = val.value
	}
})

//console.log(holder)

var newObj = []

for(var v in holder){
	newObj.push({name : v,value : holder[v]})
}

//console.log(newObj)


var arr = [{'name':'P1','value':150},{'name':'P1','value':150},{'name':'P2','value':200},{'name':'P3','value':450}];

var result = arr.reduce(function(acc, val){
    var o = acc.filter(function(obj){
        return obj.name==val.name;
    }).pop() || {name:val.name, value:0};
    
    o.value += val.value;
    acc.push(o);
    return acc;
},[]);

console.log(result);







