
const number = [1,2,3,4,5,6,7,8,9,10];

// const newNum = number.map( (num)=> num+10 );

// console.log(newNum);


const newNum = number.map( (num) => num * 10)
                     .map( (num) => num + 1)
                     .filter((num) => num >= 50 && num <= 90)

  console.log(newNum);
  
