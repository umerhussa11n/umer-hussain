/* Scenario: Process text-based data that might represent addresses, policy rules, 
    or other information relevant to global mobility.
    * Example: "Given a string representing a simplified address format 
    (e.g., '123 Main St, Anytown, UK'), parse it into an object with street, city, 
    and country properties."
    */

// assumption all data is always present and if any piece of data is missing it will still have ampty string and comma

/* 
    example input = "Chiragh Desi, 39, house 8, street 12, shirley, croydon, cr0 7qk, united kingdom"
    output = {name: Chiragh Desi, age: 39, addressLineOne: "house 8", AddressLine2: "Street 12", ... }

    outline 
    create a array from this data based on commas
    now each property of object is at a specific index of array 
    loop through array and add a property of the object at specified locatino
    */

const convertToObject = (data) => {
  
  if (!typeof data === 'string' || !data.length > 0)  return

  const arr = data.split(",")
  return {
    name: arr[0]?.trim() || '',
    age: parseInt(arr[1]) || NaN,
    male: arr[8]?.trim() === 'male' ? true : false
  }

};

 const data = "Chiragh Desi  , u, house 8, street 12, shirley, croydon, cr0 7qk, united kingdom, male";
//const data = "";

  console.log(convertToObject(data));
