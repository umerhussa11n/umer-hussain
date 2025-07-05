/* 
        * "Write a function to validate a simple data structure 
        (e.g., checking if all required fields are present in an employee record)."

        input:
        const employeeRecord = { id:1,name:"John Doe",Age:30, department:"IT" }
        const requiredFields = ['id', 'department']

        output: (boolean) true | false | null

        edge cases: 
        invalid input return null

        invalid input: 
        x,y,z
*/

const hasAllRequiredFields = (record, fields) => {
    // validate
    if ( record === null || typeof record !== 'object' || !Array.isArray(fields) || fields.length <= 0  ) return null

    let hasAllFields = false;
    fields.forEach(field => {
        if (!(field in record)){
            hasAllFields = false
        }
    })
    return hasAllFields

}

const employee = { id:1,name:"John Doe",Age:30, department:"IT" }
const requiredFields = ['irs', 'gender']

console.log(hasAllRequiredFields(employee, requiredFields))


