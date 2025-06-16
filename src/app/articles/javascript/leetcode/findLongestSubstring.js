// To Be Completed...
// Solving leet code problems
// Solving leeet cdde with sliding window pattern 
// Finding the longest substring without repeating characters.. 
// abcdee|
function lengthOfLongestSubstring(s) {
    // let left = 0;
    // let right = 0;
    let maxLength = 0;
    const charSet = new Set();

    console.log(charSet);
    for (let i = 0; i < s.length; i++) {
        charSet.add(inputString[i]);
    }


    return maxLength; 
}
// Example usage:
let inputString = "abcabcbb";

if( process.argv.length < 3 ) {
    console.log ("Incorrect usage, example: node findLongestSubstring.js abcabcbb");
    process.exit(1);
} else {
    inputString = process.argv[2];
}

const result = lengthOfLongestSubstring(inputString);
console.log(`for string:` +  inputString + ` the longest substring is:` + result); // Output: 3 (the substring is "abc")