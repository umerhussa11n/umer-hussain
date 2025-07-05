// reduce function on the arrays are great to perform data manuplation on the arrays like finding sum of array members or finding product of somehting inside the array etc 
// whats good to remember it that it reduces the output to one number 

// lets find out the sum of all elements in an array.. 
// what are total numbers of badges by all employees 
let employees = [
    {name: "umer", medals: 100},
    {name: "ben", medals: 200},
    {name: "jack", medals: 300}
]

const totalBadges = employees.reduce((acc, item) => {
   return acc + item.medals 
}, 0) 

console.log(totalBadges)

