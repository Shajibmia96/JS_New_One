
const userEmail = "";

if(userEmail){
    console.log("Got user email");
    
}else {
   console.log("Don't have user email");
}


// falsy value

// false , 0, -0, BigInt, n0, null, undefiend, NaN


// truthy value

// "0", 'false', " ", [], {}, function(){}

const userName = [];


if(userName.length ==0){
    console.log("hello");
    
}

const emtyObj = {};

if(Object.keys(emtyObj).length == 0){
    console.log('object is empty');
    
}


// Nullish Coalescing Operator (??) : null undefined


let val1;

// val1 = 5 ?? 10;

// val1 = null ?? 10;
// val1 = undefined ?? 12;

val1 = null ?? 12 ??56;

console.log(val1);
