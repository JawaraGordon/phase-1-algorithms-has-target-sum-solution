// /
// Write your algorithm here
// create a for loop
/*  for (var i = 0; i < array.length; i++) 
  
  function compareNums() {
    // write logic that add each set of iterated numbers
   let addArrayNumberPairs = i + i;}
  // write logic that compares the sum of each pair to the target
  if (addArrayNumberPairs === target) {
    return true;
  }
  return false; */
// make an if, else statement that returns true / false
// console log result
// }

function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    const complement = target - array[i];
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] === complement) return true;
    }
  }

  return false;
}
/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here

  I need to make a function called hasTargetSum that receives two sets of arguments; an array of integers and a target integer hasTargetSum([1,2,3,4],8)

  The function needs to return true if any pair of the numbers in the array adds up to the target number outside of the array.

  I will need to create a code block that iterates through the array, adding each set of numbers together while comparing that sum to the second argument integer. I will need to do this until there is a match and true is returned, or until there are no more items left in the array which will return false.

  The result of this process will be logged to the console 


*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-1, 2, 7, 4], 6));
}

module.exports = hasTargetSum;
