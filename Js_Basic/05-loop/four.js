// for in loop to use in object, because there for of not work properly.

const myObject = {
      js : "Javascript",
      c : "C Programming",
      cpp: "C plus plus",
      java : "Java"
}

for ( const key in myObject){
   // console.log(`${key} is use for ${myObject[key]}`);
    
}


const programmming = ['js', 'cpp','roby','java','python'];


for ( const key in programmming){
    console.log(programmming[key]);
    
}