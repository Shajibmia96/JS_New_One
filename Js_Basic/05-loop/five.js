
const coding =  ['js', 'cpp','roby','java','python'];

//    coding.forEach( (val) => { console.log(val);
// })


// for every foreach fuction we get three value,,, item , index,, or full array.

// coding.forEach( (item, idx, arr) => console.log(`this is item ${item} ,this is item index  ${idx} ,this is full array${arr}`)
// )

const students = [
  { id: 1, name: "Shajib", age: 24 },
  { id: 2, name: "Anika", age: 22 },
  { id: 3, name: "Rahim", age: 23 },
  { id: 4, name: "Fatima", age: 25 },
  { id: 5, name: "Karim", age: 21 }
];


students.forEach( (student, idx) => { console.log(student);
})