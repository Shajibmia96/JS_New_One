// const name = "shajib";

// repoCount = 101;

// console.log(`Hello, my name is ${name} and i have ${repoCount} repositories.`)

// const gameName = new  String("FootBall");
 
// const  Country = new String ("  Bangladesh   ");

// // console.log(gameName[4]);
// console.log(Country.length)
// // console.log(Country.charAt(4));
// // console.log(Country.indexOf("e"));
// let change = Country.indexOf("a");
// change= "M"

// console.log(Country)
// const newString = Country.substring(3,7);

// console.log(newString); // "gla"

// const reverceString = Country.slice(-10, 5);
// console.log(reverceString); 
// // console.log(Country.toUpperCase())


// // slice => slice(start, end) extracts a section of a string and returns it as a new string, without modifying the original string.
// // The start parameter is zero-based, and the end parameter is exclusive. 

// // splice => splice(start, deleteCount, item1, item2, ...) changes the contents of a string by removing or replacing existing characters and/or adding new characters in place.

// // String methods examples

// // toLowerCase
// console.log(Country.toLowerCase()); // "bangladesh"

// // toUpperCase
// console.log(Country.toUpperCase()); // "BANGLADESH"

// // includes
// console.log(Country.includes("desh")); // true

// // startsWith
// console.log(Country.startsWith("Ban")); // true

// // endsWith
// console.log(Country.endsWith("esh")); // true

// // replace
// console.log(Country.replace("Bangla", "Engla")); // "Englandesh"

// // repeat
// console.log(Country.repeat(2)); // "BangladeshBangladesh"

// // trim
// const messy = "   Hello World!   ";
// console.log(messy.trim()); // "Hello World!"

// // split
// console.log(Country.split("a")); // [ 'B', 'ngl', 'desh' ]

// // concat
// console.log(Country.concat(" is beautiful")); // "Bangladesh is beautiful"

// // padStart
// console.log(Country.padStart(15, "*")); // "***Bangladesh"

// // padEnd
// console.log(Country.padEnd(15, "*")); // "Bangladesh****"

// // valueOf
// console.log(Country.valueOf()); // "Bangladesh"

// // match
// console.log(Country.match(/a/g)); // [ 'a', 'a' ]

// // search
// console.log(Country.search("desh")); // 5

// // lastIndexOf
// console.log(Country.lastIndexOf("a")); // 6

// // localeCompare
// console.log(Country.localeCompare("India")); // 1 (or -1 depending on locale)

// // const  option = "   My dream a is to become a software engineer    .   "
// // console.log(option.trim()); // "My dream a is to become a software engineer."
// // console.log(option.trimStart()); // "My dream a is to become a software engineer.   "
// // console.log(option.trimEnd()); // "   My dream a is to become a software engineer."
// // console.log(Country.charCodeAt(10)); // 66 (ASCII code for 'B')
// // console.log(Country.strip())



const url = "https://shajib%20mia"

const changeUrl = url.replace("%20", "__");

console.log(changeUrl);
const name = new String ("Bangaldesh");

const nameArray = name.split('a')
console.log(nameArray);
console.log(name.includes('desh'))
console.log(name.match('a'))
console.log(name.localeCompare("India"));

