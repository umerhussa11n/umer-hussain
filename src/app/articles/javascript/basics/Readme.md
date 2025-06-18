# Javascript Basics: 
## Primitive Types: 
 Definition: Data that is not object and has no properties and no methods
- There are 7 primitive types in javascript
- string, number, bigint, boolean, undefined, symbol, null
- primitive types are immutable 
- example of immutable: 
``` 
let myString = "Hello"
console.log(myString) // outputs "Hello"

// lets try to mutate
 myString = myString + " World" 
 console.log(myString) // outputs "Hello World", However this is a new memory allocation for string the original still stays in the memory until its garbage collected..  
```

## Examples of Primitive types 

### String: 
```javascript
 - let name = "Umer Hussain"
 - let greeting = "Hello world"
 - let multiline = `This is a new string 
 and it spans across multiple lines`

- template literals = `My Name is ${name} and I said ${greeting}`
- let emptyString = ""
- let singleQuote = 'This uses single quotes'
```

### Number: 
```javascript
let age = 30; // Integer
let price = 99.99; // Floating-point
let zero = 0;
let negative = -10;
let infinity = Infinity; // Special value
let negativeInfinity = -Infinity;
let notANumber = NaN; // NaN is only data in Javascript which is not equal to itself..

// Special number operations
console.log(5 / 0); // Infinity
console.log("hello" * 2); // NaN
console.log(0.1 + 0.2); // 0.30000000000000004 (floating point precision issue)
```

### BigInt: 
```javascript
// For integers larger than Number.MAX_SAFE_INTEGER (2^53 - 1)
let bigNumber = 123456789012345678901234567890n; // Notice the 'n' at the end
let anotherBigInt = BigInt("123456789012345678901234567890");
let maxSafeInteger = BigInt(Number.MAX_SAFE_INTEGER);

// BigInt operations
let sum = 100n + 200n; // 300n
// let invalid = 100n + 200; // TypeError: Cannot mix BigInt and other types
```

### Boolean: 
```javascript
let isActive = true;
let isCompleted = false;
let hasPermission = Boolean(1); // true
let isEmpty = Boolean(0); // false

// Falsy values that convert to false:
Boolean(false);     // false
Boolean(0);         // false
Boolean(-0);        // false
Boolean(0n);        // false (BigInt zero)
Boolean("");        // false (empty string)
Boolean(null);      // false
Boolean(undefined); // false
Boolean(NaN);       // false

// Everything else is truthy
Boolean("false");   // true (non-empty string)
Boolean(42);        // true
Boolean([]);        // true (empty array)
Boolean({});        // true (empty object)
```

### Undefined: 
```javascript
let undeclaredVariable; // undefined
let explicitUndefined = undefined;

function noReturn() {
    // doesn't return anything
}
let result = noReturn(); // undefined

let obj = { name: "John" };
console.log(obj.age); // undefined (property doesn't exist)

// typeof undefined
console.log(typeof undeclaredVariable); // "undefined"
```

### Null: 
```javascript
let emptyValue = null; // Intentionally empty
let resetValue = null; // Used to reset a variable

// Common use cases
let user = null; // No user logged in
let data = null; // No data loaded yet

// typeof null quirk
console.log(typeof null); // "object" (this is a known JavaScript bug)

// Difference between null and undefined
console.log(null == undefined);  // true (loose equality)
console.log(null === undefined); // false (strict equality)
```

### Symbol: 
```javascript
// Unique identifiers
let sym1 = Symbol();
let sym2 = Symbol();
console.log(sym1 === sym2); // false (each symbol is unique)

// Symbols with descriptions
let symWithDesc = Symbol("id");
let anotherSymWithDesc = Symbol("id");
console.log(symWithDesc === anotherSymWithDesc); // false (still unique)

// Global symbol registry
let globalSym1 = Symbol.for("globalKey");
let globalSym2 = Symbol.for("globalKey");
console.log(globalSym1 === globalSym2); // true (same global symbol)

// Using symbols as object keys
let id = Symbol("id");
let user = {
    name: "John",
    [id]: 123 // symbol as property key
};
console.log(user[id]); // 123

// Well-known symbols
let arr = [1, 2, 3];
console.log(arr[Symbol.iterator]); // Built-in iterator function
```

## Type Checking and Conversion

### typeof operator:
```javascript
console.log(typeof "hello");        // "string"
console.log(typeof 42);             // "number"
console.log(typeof 42n);            // "bigint"
console.log(typeof true);           // "boolean"
console.log(typeof undefined);      // "undefined"
console.log(typeof null);           // "object" (JavaScript quirk)
console.log(typeof Symbol("id"));   // "symbol"
```

### Type Conversion Examples:
```javascript
// String conversion
String(123);        // "123"
String(true);       // "true"
String(null);       // "null"
String(undefined);  // "undefined"

// Number conversion
Number("123");      // 123
Number("123.45");   // 123.45
Number(true);       // 1
Number(false);      // 0
Number(null);       // 0
Number(undefined);  // NaN
Number("");         // 0
Number("hello");    // NaN

// Boolean conversion (already shown above)
```

## Key Points to Remember:

1. **Immutability**: All primitive types are immutable - operations create new values
2. **Pass by Value**: Primitives are passed by value, not by reference
3. **No Methods**: Primitives don't have methods, but JavaScript auto-boxes them temporarily
4. **typeof null**: Returns "object" (historical bug in JavaScript)
5. **NaN**: Only value in JavaScript that is not equal to itself (`NaN !== NaN`)
6. **Symbol Uniqueness**: Every Symbol() call creates a unique symbol
7. **BigInt Suffix**: BigInt literals must end with 'n' or use BigInt() constructor

## Auto-boxing Example:
```javascript
// Primitives don't have methods, but JavaScript temporarily wraps them
let str = "hello";
console.log(str.toUpperCase()); // "HELLO" - JavaScript temporarily creates String object
console.log(str.length);        // 5 - Accessing property on temporary String object

// The primitive itself remains unchanged
console.log(str); // "hello"
```