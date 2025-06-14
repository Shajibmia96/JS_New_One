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

