/*
        * "Implement a function to remove duplicate items from an array of objects 
           based on a specific key."
example input: 
       const employees = [
    { id: 1, name: "John", department: "IT" },
    { id: 2, name: "Jane", department: "HR" },
    { id: 3, name: "Bob", department: "IT" },
    { id: 1, name: "John Smith", department: "Finance" }, // Same id as first
    { id: 4, name: "Alice", department: "HR" }
];

output should remove duplicate Id 

*/

// outline 
// use Set since set is unique and we are dealing with single key 
// declare a map as seen Set.
// do foreach on employees
// foreach employee check if its key is in seen 
// if its not then add the employee to result arr


const filterGivenArray = (arr, key) => {
    if (!Array.isArray(arr) || arr.length <= 0 || !['id', 'name', 'department'].includes(key)) return null 
    const result = []
    const seen = new Set();

    arr.forEach(e => {
        if (!seen.has(e[key])) {
            seen.add(e[key])
            result.push(e)
        }
    })
    return result;
}

const employees = [
    { id: 1, name: "John", department: "IT" },
    { id: 2, name: "Jane", department: "HR" },
    { id: 3, name: "Bob", department: "IT" },
    { id: 1, name: "John Smith", department: "Finance" }, // Same id as first
    { id: 4, name: "Alice", department: "HR" }
];

console.log(filterGivenArray(employees, key='department'))