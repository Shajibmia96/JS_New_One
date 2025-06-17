
// const tingerUser = new Object()

const tingerUser = {};

tingerUser.id = 15700;
tingerUser.name = "Shajib Mia";
tingerUser.address = "Araihazar, Narayangonj";

// console.log(tingerUser);

//  console.log(Object.keys(tingerUser));
//  console.log(Object.values(tingerUser));
//  console.log(Object.entries(tingerUser));
 console.log(tingerUser.hasOwnProperty('names'));
 
 
const regularUser = {
    email : "shajib@gmail.com",
    userfullName :{
         userName : {
            firstName : {
                name: "Shajib"
            }
         }
    }
}

// console.log(regularUser?.userfullName?.userName?.firstName?.name);
// with optional chailing 



  const obj1 = {1 : "b", 2:"a"};

  const obj2 = {4:'B', 5:"6"}
 
  const obj4= Object.assign({} ,obj1, obj2)
  const obj3 = {...obj1, ...obj2}
  //  console.log(obj4);
   
  // console.log(obj3);
  


  const course = {
     name: "MERN Stack",
     price : 999,
     instructor: "Jankar mahabub"
  }

  const {instructor} = course;

  console.log(instructor);
  