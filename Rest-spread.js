function showNames(...names){//Rest operator
    console.log(names);
}
showNames("John", "Mary", "David");

//Spread operator

const arr1=[1,2,3];
const arr2=[4,5,6];
const arr3=[...arr1,...arr2];
console.log(arr3);
//Output: [1,2,3]

function sumNumbers(...numbers){
    return numbers.reduce((sum,num)=>sum+num,0)
}
console.log(sumNumbers(1,2,3,4,5,6,7,8,9));

// Rest operator gathers all arguments into the numbers array.
// Spread operator takes the elements of an array and spreads them out as individual arguments.
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5, 6];

console.log(newNumbers); 
