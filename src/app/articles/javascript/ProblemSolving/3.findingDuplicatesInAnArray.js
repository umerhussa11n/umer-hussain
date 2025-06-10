const strArray = ["a", "b", "c", "d", "a", "b"]

const duplicates = findDuplicates(strArray);
console.log(`duplicate is:` + duplicates);


// simply return the first duplicate found..
function findDuplicates(arr) {
  let temp = []
  let duplicates = ""
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
    // if temp array does not have the value already then add it to temp array 
    if (!temp.find(t => t === arr[i])) {
      temp.push(arr[i])
    } else {
      duplicates += " " +arr[i]
    }
  }
  return duplicates
}