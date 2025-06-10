

/// How to remove duplicates from an array if creating a new one is allowed... 
const removeDuplicates = (duplicateArray) => {
    let uniqueArray = [new Set(duplicateArray)]
    return uniqueArray
}
///  
const duplicateArray = [1,2,3,4,5,6,7,8,9,9];   
const u = removeDuplicates(duplicateArray)
console.log(u);

