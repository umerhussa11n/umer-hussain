//* "You have a list of travel expenses for different employees,
//  each with an employeeId, category, and amount.
// Write a function that calculates the total expense per employee or per category."

/* 
input: travelExpenses = [
{ employeeId: 1, category: "travel", amount:100 }
{ employeeId: 1, category: "food", amount:10 }
{ employeeId: 1, category: "food", amount:30 }
{ employeeId: 1, category: "hotel", amount:20 }
{ employeeId: 1, category: "hotel", amount:20 }
{ employeeId: 2, category: "travel", amount:100 }
{ employeeId: 2, category: "food", amount:200 }
{ employeeId: 2, category: "food", amount:20 }
]

output aggregateExpenses = [
{ employeeId:1, category: "food", totalAmount: 40 }
{ employeeId:1, category: "travel", totalAmount: 100 }
{ employeeId:1, category: "hotel", totalAmount: 20 }
{ employeeId:1, category: "travel", totalAmount: 100 }
{ employeeId:1, category: "food", totalAmount: 220 }
}]
*/

// edge cases empty input array, category field missing from array return empty array 

// write a function which takes employeeExpenses array 
// do a quick validation check to validate input 
// aggregate this arrya with employee and category.. 

const aggregateEmployeeExpenses = (employeeExpenses) => {
   if (!Array.isArray(employeeExpenses) || employeeExpenses.length ===0 
        //!employeeExpenses.every(e => e.amount && Number.isInteger(e.amount) && e.amount >=0 )
) return  [];
 
        const result = []
        const seen = new Set();

        employeeExpenses.forEach(expense => {
            //console.log(expense)
            const key = `${expense.employeeId}-${expense.category}`
            //console.log({ key })
            if (!seen.has(key)){
                seen.add(key);
                const amount = employeeExpenses
                .filter(e => e.employeeId === expense.employeeId && e.category === expense.category)
                .reduce((acc, item) => {
                    return acc + item.amount
                }, 0); 
               console.log(`employeeId: ${expense.employeeId} key: ${key} amount: ${amount} `)     
                
                 result.push({
                    employeeId: expense.employeeId,
                    category: expense.category,
                    totalAmount: amount
            })
            }
        })

} 


const employeeExpenses = [
{ employeeId:1, category: "food", amount: 40 },
{ employeeId:1, category: "travel", amount: 100 },
{ employeeId:1, category: "hotel", amount: 20 },
{ employeeId:1, category: "travel", amount: 100 },
{ employeeId:1, category: "food", amount: 220 },
]

const aggregateExpense = aggregateEmployeeExpenses(employeeExpenses)
console.log(aggregateExpense);
