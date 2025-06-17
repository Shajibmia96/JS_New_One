// console.log("Now we Explore function");


function addTwoNumber(num1, num2) {
  if (typeof (num1, num2) == "number") {
    const sum = num1 + num2;

    return sum;
  }
  return "Your Enter a invalid number,Please enter a valid number ";
}

const result = addTwoNumber(34, 44);

// console.log(result , "line number 19");

function checkUser(userName) {

   if(!userName){
      return "Please enter a valid user"
   }
  return `Hello , ${userName} wellcome to our site` ;
}

const UserName = "";

const checkIn = checkUser(UserName);

// console.log(checkIn);


function calculateCardPrice (val1, val2,...num1){

    return num1
}

// console.log(calculateCardPrice(44,56,78,65,1000,2000));


const user = {
    name : "shajib",
    prices : 564
}


function handleUser ( anyObject){
      console.log( `The user name is ${anyObject?.name}. Her Total price is ${anyObject?.price}`);
      
}

handleUser(user)


const myArray = [45,67,54,67,43,67,35];

function handleArray ( getArray) {
       
     return getArray[1]
     
}

console.log(handleArray(myArray));
