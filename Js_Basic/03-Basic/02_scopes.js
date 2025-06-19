

let number = 25;

//console.log(number);


if(true){

     const number = 40;
    // console.log(number ," this print for block scope");
     
}

// console.log(number, "this is print for global scope");



function one () {
      const userName = "Shajib Mia";

       function two(){
          const  website = "www.shajib.com";
          console.log(userName);
          
       }
        
        //  console.log(website);
         
         two()

}

one()


