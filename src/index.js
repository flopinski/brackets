module.exports = function check(str, bracketsConfig) {

let br = bracketsConfig.flat(Infinity);
const bracketsPair = {};

for (let i = 0; i < br.length; i = i + 2) {
  bracketsPair[br[i + 1]] = br[i];
}

let bracketsValues = Object.values(bracketsPair);
let bracketsKeys = Object.keys(bracketsPair);

  let stack = [];

   const findDuplicates = (arr) => {
     let sorted_arr = arr.slice().sort();
     let results = [];
     for (let i = 0; i < sorted_arr.length - 1; i++) {
       if (sorted_arr[i + 1] == sorted_arr[i]) {
         results.push(sorted_arr[i]);
       }
     }
     return results;
   }
   const duplicates = findDuplicates(br)

  for (let k = 0; k < str.length; k++) {
    let currentSymbol = str[k];
    if (stack[stack.length - 1] === currentSymbol && duplicates.includes(currentSymbol)) {
      stack.pop()
    }
    else if (bracketsValues.includes(currentSymbol)) {
      stack.push(currentSymbol);
    } else {
      if (stack.length === 0) {
        return false;
      }
      let topElement = stack[stack.length - 1];
      if (bracketsPair[currentSymbol] === topElement) {
        
        stack.pop();
        
      } else {
        return false;
      }
    }
  }

 
   return stack.length === 0;
}
