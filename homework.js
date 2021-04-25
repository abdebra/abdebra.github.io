// Question number
//  1)
const arr = [10,50,40,3,10];

let res = arr.filter(a=>a>20).reduce(function(accumulator,current,index,array){
    accumulator+=current;
    return accumulator;
},0);
console.log(res);

// Question number
// 2 0
const starr = ["john","muhammed", "galata","andi","someone","larman"];
let strRes = starr.filter(function(el,ind,ar){
    return el.length >= 5;
})
let strng = strRes.filter(s=>s.includes('m'))
console.log(strng);

// Question number
//   3)

function MyConst(firstName, lastName, birthDate){
    this.firstName =firstName;
    this. lastName= lastName;
    this.birthDate = birthDate;

}
MyConst.prototype.getFullName =function(){
    return this.firstName + " " +  this.lastName;
}
MyConst.prototype.getAge = function(){
    return new Date().getFullYear()-this.birthDate.getFullYear();
}

const ab =[new MyConst("abdun", "Ebrahim", new Date(2997,06,15)), new MyConst("omar", "abdura", new Date(2009,06,15)), new MyConst("nad", "ahmed", new Date(1998,4,24)), new MyConst("muhammed","hussen",new Date(1980,12,11))];
function greaterThanTwenty(elem, index,array){
    return elem.getAge() < 20;
}
let res = ab.filter(greaterThanTwenty);
console.log(res);
console.log(ab.filter(function(ele, ind,arr){
    return ele.birthDate.getFullYear() > 2000
}).map(function(el,index,array){
    return el.getFullName();
}));
     