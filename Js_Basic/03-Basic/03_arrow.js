

const user = {
     name : "Shajib",
     logIn : true,
     wellcomeMassage : function (){
        //  console.log(`${this.name}, Wellcome back`);
        //  console.log(this);
         
     }
}


// user.wellcomeMassage()
// user.name = "Sadikka"
// user.wellcomeMassage()

// console.log(this);

function chai () {
     const userName = "Shajib"
    // console.log(this.userName);
    
}

chai()


const arraw =() => {
       const username = "Shajib Mia";
      //  console.log(this);
       
      // console.log("This is a arrow function");     
}

arraw()


// const addTwo = (num1 , num2) => {
//        return num1 + num2;
// }


// const addTwo = (num1 , num2) => num1 + num2;

const addTwo = (num1 , num2) => ({name : "Shajib Mia"});
// console.log(addTwo(45,6));

// ( (name) => {
//    console.log(`Hello this is ${name}`);
   
// }
// ) ("shajib")


( (userName) => {
    console.log(`hello, ${userName}`);
    
}) ("shajib");

(function chai () {
    console.log("Hello bro this is a new addition a science");
    
}) ()