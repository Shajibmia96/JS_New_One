
const myArr = [12,4,5,7,8,65,4]

// console.log((myArr));


// ************************* Array Methods*****************************

//  myArr.push(3)
//  myArr.pop()
//  console.log(myArr.find());
 
// console.log(myArr.length);
// console.log((myArr));

// console.log(myArr.includes(9));

// console.log(myArr.indexOf(5));
// console.log(myArr.indexOf(19));


// ********************* slice, splice methods **********************************


const newArray = [23,56,7,5,4];

console.log("A", newArray);

// const newArray1 = newArray.slice(1,4);
// console.log("C", newArray1);

const newArray1 = newArray.splice(1,3);
console.log("C", newArray1);

console.log("B", newArray);
// slice() copies part of an array without changing it, while splice() changes the array by adding or removing elements.


