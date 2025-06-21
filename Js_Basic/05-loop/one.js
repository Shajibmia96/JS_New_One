console.log("Here we learn about loop");


// for (let index = 0; index < array.length; index++) {
//   const element = array[index];
  
// }
// For loop syntext

for(i =1; i<=10 ;i++){

    // console.log(`Hello World ${i}`);
    
}


for (let i = 1; i <= 10; i++) {

        // console.log( ` 5 * ${i} = ${i*5}`);
         
}

for (let index = 1; index <= 20; index++) {
   if(index ==5){
     // console.log(`detected number ${index}`);
      break;
   }
  //console.log(`This in print ${index}`);
}
for (let index = 1; index <= 20; index++) {
   if(index ==5){
      console.log(`detected number ${index}`);
      continue;
   }
  console.log(`This in print ${index}`);
}