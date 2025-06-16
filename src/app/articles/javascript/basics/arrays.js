// All About Javascript Arrays.. 

// this way of defining the array is not recomended as it can leave holes in array
const myArray = new ArrayList()
console.log(myArray)

// declare an array
const numbersArray = [1,2,3,4,5,6,7,8,9]
console.log(numbersArray)

// add an element to end of array...
numbersArray.push(10)
console.log(`10 added:`, numbersArray)

// add element to end of array..
numbersArray.pop()
console.log(`remove last item:`, numbersArray)

// remove element from start of array..
numbersArray.shift()
console.log(`remove first item`, numbersArray)

// add element to start of array
numbersArray.unshift(1)
console.log(`add 1 again to the start of array`, numbersArray)


// merge two array using concat..
const anotherNumbersArray = [100,101,102,103,104,105,106,107]
const bigArray = numbersArray.concat(anotherNumbersArray)
console.log(bigArray)

// create a shallow copy of the array
const shallowCopy = bigArray.slice(0, bigArray.length - 1)
console.log(`shallow copy of big array`, shallowCopy)

// operation on each element of the array
bigArray.forEach( (n, i, arr) => { 
    console.log(i, n)
    n = n * 100 // this doesnot change the bigArray 
    bigArray[i] = arr[i] * 100 // this will change the big array..
    console.log(`100 times n is:`, n)
})
console.log(`multiple of array`, bigArray)
// cleaner solution for this is to use map on array 
const multipleArray = bigArray.map(z => z = z*100)
console.log(`multiple of array using map function`, multipleArray)



// sort the array
console.log(multipleArray.sort())

// sorting string by default string function works..
// sorting numbers in javascript arrays requires numbers comparison function

const numbers = [10, 2, 8, 1, 100, 20];
console.log("Original numbers:", numbers);

// INCORRECT default sort for numbers!
numbers.sort();
console.log("Incorrectly sorted numbers (default):", numbers);
// Output: [1, 10, 100, 2, 20, 8]  (Because "10" comes before "2" as a string)

numbers.sort((a, b) => a - b)
console.log("correctly sorted numbers (default):", numbers);

numbers.sort((a,b) => b -a)
console.log("correctly sorted numbers (desc):", numbers);

// sorting array of objects 
const users = [
  { name: "umer hussain", age: 35 },
  { name: "nial hussain", age: 1 },
  { name: "mashal rehman", age: 31 }
]

console.log(users)

users.sort( (a,b) => a.name - b.name)
console.log(`sorted users`, users)