// Secret to passing interview:: 
/// Ways to tackle the inteview coding questions: 


// 1. Plan 
// Clarify the Problem::
// Ask clarifying question by giving input and outs, show that u can communicate well and do understand the problem 
// talk about 3 different edge cases like negative numbers, empty inputs or input size etc 

// 
// 2. Tak about how to solve the problem
// Start with the dumb solution first not the most optimal.. 
// this could be all intervwer is asking for 
// tell interviewer if you can drop some requirements to solve it first in easy way.. 
// write your thoughts / algoritham in comments and ask interviewer if they are okay with this.. 


// 3. Talk about what you are doing and explain how it is aligned with your outline.. 
// everyone gets stuck with some part of coding.. 
// if you are stuck then move on to next thing and you can come back to it
// do run your code and ask interviewr if they want you to do something else
// write the time complexity and space complexity 
// run it against the edge cases.. keep communicating with the interviewer while doing this.. 
// repeat saying what you have done.. 


// Coding Challenge 1:
// You have an array of employee objects
// Each with properties like name, country, salary, assignType 
// (e.g., 'short-term', 'long-term').
// Write a function that calculates the average salary for employees on
// 'long-term' assignments in a specific country."

// Example Input Good case:
/* [ {id: 1, name: "umer hussain", country: "United Kingdom", salary: 100000, assignmentType: 'longterm'},
{id: 1, name: "umer hussain", country: "United Kingdom", salary: 150000, assignmentType: 'longterm'},
{id: 1, name: "john", country: "United states", salary: 200000, assignmentType: 'shortterm'}]

Exmple Output: 125000

// edge cases::

//1 Empty Input Array 
Example Input: [] 
Output2: null

//2 no matching cases 
Example Input : 

/* [ {id: 1, name: "umer hussain", country: "United Kingdom", salary: 100000, assignmentType: 'shortterm'},
{id: 1, name: "umer hussain", country: "United Kingdom", salary: 150000, assignmentType: 'shortterm'},
{id: 1, name: "john", country: "United states", salary: 200000, assignmentType: 'shortterm'}]
// Output: null

// Invalid salry values like null, undefined, strings
/* [ {id: 1, name: "umer hussain", country: "United Kingdom", salary: null, assignmentType: 'shortterm'},
{id: 1, name: "umer hussain", country: "United Kingdom", salary: undefined, assignmentType: 'shortterm'},
{id: 1, name: "john", country: "United states", salary: 200,000, assignmentType: 'shortterm'}]
// output 200000

*/

// Outline 
// declare a function wihch accepts an array and returns a premitive type i.e. number or null 
// validate input and check if is empty return null,
// if array is not empty then loop through the array to find salries and add them to another array called salries 
// once loop is finished calculate the sum of salries and divide it by number of salries entered
// return this number worked out in last step since this is the average salries

const getAverageSalries = (employees) => {
    let averageSalary = null;
    let salary = [];
    if (!Array.isArray(employees) || employees.length === 0){
        return averageSalary;
    } else {
        for (let i=0; i< employees.length; i++) {
            salary.push(employees[i].salary)
        }
    }
    const totalSalary = salary.reduce(sumReducer);
    const totalEmployees = salary.length;
    averageSalary = totalSalary / totalEmployees
    
    return averageSalary;
}

const sumReducer = (acc, item) => {
    return acc + item
}

const employees = [ 
    {id: 1, name: "umer hussain", country: "United Kingdom", salary: 100000, assignmentType: 'shortterm'},
    {id: 1, name: "umer hussain", country: "United Kingdom", salary: 150000, assignmentType: 'shortterm'},
    {id: 1, name: "john", country: "United states", salary: 200000, assignmentType: 'shortterm'}
]
console.log(getAverageSalries(employees));
