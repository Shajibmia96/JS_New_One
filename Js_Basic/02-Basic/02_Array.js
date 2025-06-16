const cF = ["Akash", "Sayem", "Tipu", "Sagor"];

const sF = ["Tanvir", "Arman", "Shihab", "Sadikur", "Sagor"]

console.log(cF);

// cF.push(sF)
// console.log(cF);

const allF = cF.concat(sF)

// console.log(allF);


// spaid oparator

const all_newF = [...cF, ...sF]

// console.log(allF);


const another_array = [44, 5, 6, 33, [54, 56, 77,44, 32, 5], 6, 75, [77, 7, [54, 56,5 ,8,[45,67, [54, 67]]],90],54]

// console.log(another_array);

// const real = another_array.flat(Infinity)

// console.log(real);


console.log(Array.isArray("Hello This is Shajib Mia"));
console.log(Array.from("Hello Thisis Shajib Mia"));

console.log(Array.from({name: "Shajib"}));   //interesting topic for interviews


const name = "Shajib";
const age = 22;
const number = "019******"

console.log(Array.of(name, age, number));
