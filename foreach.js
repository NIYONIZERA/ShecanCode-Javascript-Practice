const fruits=["apple","orange","pineapple","pawpaw","mango","banana"];
let fruit = fruits[Math.floor(Math.random()*fruits.length)];
console.log(fruit);
const newFruit1=fruits.forEach((item,index)=>
    {
console.log(`The fruit ${item} has index ${index}`);
                }
)
//slice(0, 3) extracts elements from index 0 to 2 (excluding index 3).
//It returns a new array containing the first three fruits.
const newFruit2= fruits.slice(0,3);
console.log(newFruit2);

// By using filter 
const newFruit3=fruits.filter((fruit,index)=>index>=3)
console.log(newFruit3);



