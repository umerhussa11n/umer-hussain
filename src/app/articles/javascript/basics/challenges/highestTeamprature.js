/* 
TEMPERATURE TRACKING PUZZLE

Given:
- An array called `delta` representing temperature changes throughout the day
- `n` represents the number of temperature changes recorded
- Starting temperature is 0°C at the beginning of the day

Task:
Find the MAXIMUM temperature reached during the day.

Constraints:
- 1 <= n <= 100
- -100 <= delta[i] <= 100 (each temperature change)

Example:
- Starting temp: 0°C
- delta = [5, -3, 8, -2, 4]
- Temperature progression: 0 → 5 → 2 → 10 → 8 → 12
- Maximum temperature: 12°C

Your task: Implement function `findMaxTemperature(delta)`
*/

// Example test cases:
const testCase1 = [5, -3, 8, -2, 4];        // Expected: 12
const testCase2 = [-1, -2, -3, -4];         // Expected: 0 (starting temp)
const testCase3 = [10, -5, 3, -8, 15];      // Expected: 15
const testCase4 = [2, 3, -10, 5, 8];        // Expected: 5

// TODO: Implement your solution here
function findMaxTemperature(delta) {
    // Your code here
    // outline 
    // create a array for storing all tempratures as day progresses called tempratures
    // go thorugh each delta of change in temprature and add it to the previous / current temprature 
    // push this to the temprature array 
    if (!Array.isArray(delta) || delta.length <= 0 ) return null;

    let tempratures = []
    let currentTempeature = 0
    tempratures.push(currentTempeature)
    
    delta.forEach((tempDelta) => {

        currentTempeature += tempDelta
        tempratures.push(currentTempeature);
    });
    
    // sort the array: 
    const maxTemp = tempratures.sort((a, b) =>  b - a)[0]
    return maxTemp

}

// Test your function
console.log('Test 1:', findMaxTemperature(testCase1)); // Should output: 12
console.log('Test 2:', findMaxTemperature(testCase2)); // Should output: 0
console.log('Test 3:', findMaxTemperature(testCase3)); // Should output: 15
console.log('Test 4:', findMaxTemperature(testCase4)); // Should output: 5