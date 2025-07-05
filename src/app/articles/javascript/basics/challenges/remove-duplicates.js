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
// validate input and ensure that input is array, input has objects in it.. so on as a quick check
// further we can do more to see if there is id field present etc.. 

// use foreach loop and create a new aray and add to new array the element if the id is not already there 

// return the new array 

const filterGivenArray = (arr, key) => {
    if (!Array.isArray(arr) || arr.length <= 0 || !['id', 'name', 'department'].includes(key)) return null 

    const returnArr = [];
    arr.forEach((item, i) => {
        //console.log(item, i, key, arr[i])
        if (!returnArr.find(f => f[key] === arr[i][key])) {
            returnArr.push(item)
        }
    })
    return returnArr
}

const employees = [
    { id: 1, name: "John", department: "IT" },
    { id: 2, name: "Jane", department: "HR" },
    { id: 3, name: "Bob", department: "IT" },
    { id: 1, name: "John Smith", department: "Finance" }, // Same id as first
    { id: 4, name: "Alice", department: "HR" }
];

console.log(filterGivenArray(employees, key='IT'))