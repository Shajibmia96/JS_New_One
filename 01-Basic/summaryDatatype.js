// How do we get data and access it? The kind of data is called its data type

// Data types in JavaScript can be broadly categorized into two types: primitive and non-primitive (or reference) types.
// Primitive types include:
const primitiveTypes = {
  string: "Hello, World!",
  number: 42,
  boolean: true,
  null: null,
  undefined: undefined,
  symbol: Symbol("unique"),
  bigint: BigInt(12345678901234567890)
};

// Non-primitive types include:
const nonPrimitiveTypes = {
  object: { key: "value" },
  array: [1, 2, 3],
  function: function() { return "I am a function"; }
};



// ************************ Memory Type***********************************


Stack(primitiveTypes);

Heap(nonPrimitiveTypes);

// what is  stack and heap?
// Stack is a memory structure that stores primitive data types and function calls. 
// It operates in a Last In First Out (LIFO) manner, meaning the last item added is the first one to be removed.
function Stack(data) {
  console.log("Stack Memory:");
  for (const key in data) {
    console.log(`${key}: ${data[key]} (Type: ${typeof data[key]})`);
  }
}   

// heap is a memory structure that stores non-primitive data types like objects and arrays.
// It allows for dynamic memory allocation and is managed by the JavaScript engine's garbage collector.


 function Heap(data) {
  console.log("Heap Memory:");
  for (const key in data) {
    if (Array.isArray(data[key])) {
      console.log(`${key}: [${data[key].join(", ")}] (Type: ${typeof data[key]})`);
    } else if (typeof data[key] === 'object') {
      console.log(`${key}: ${JSON.stringify(data[key])} (Type: ${typeof data[key]})`);
    } else {
      console.log(`${key}: ${data[key]} (Type: ${typeof data[key]})`);
    }
  }
}   


