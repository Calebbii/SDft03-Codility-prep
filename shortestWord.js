// Feature: Find the shortest word in an array

//   Scenario: Array contains multiple words
//     Given an array of strings
//       | word1 | word2 | word3 |
//       | apple | pear  | banana|
//     When the shortest word is found
//     Then the result should be "apple"


// BEGIN
//     SET shortestWord to null
//     FOR each word in the array
//         IF shortestWord is null or the current word is shorter than shortestWord
//             SET shortestWord to the current word
//         END IF
//     END FOR
//     RETURN shortestWord
// END


const words = ['America', 'Austria', 'Russia', 'India', 'Kenya', 'UK'];

function getShortestWord(w) {
  let shortestWord = w[0];
  for(let i = 1;i < w.length; i++) {
    // it's just short circuit condition
    shortestWord.length > w[i].length && (shortestWord = w[i]);
  }
  return shortestWord;
}

console.log(getShortestWord(words));
