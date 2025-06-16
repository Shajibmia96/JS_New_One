

// object literals

const mysym = Symbol("newKey1")
const jsUser1 = {
    name: "Shajib",
    age : 33,
    [mysym] : "hello people",
    email:"shajib@google.com",
    id: [45,67,864],
    "address": "Araihazar,  Narayangonj",
    "fullName" : "Shajib Mia"
}


console.log(jsUser1.address);

console.log(jsUser1.fullName);

console.log(jsUser1[mysym]);

jsUser1.email = "shajib@bicione.com"

Object.freeze(jsUser1)

jsUser1.email = "shajib@bicionewwww.com"

console.log(jsUser1);
