// using countOnly function to count the letters
const countOnly = function(sentence, obj1) {
  let resultObj = {};
  let num = 0;
  for (let j in obj1) {
    num = 0;
    for (let i = 0; i < sentence.length; i++) {
      //console.log(firstNames[i] , j , obj1[j]);
      if (sentence[i] === j) {
        num++;
        resultObj[sentence[i]] = num;
      }
    
    }
    
  }
  return resultObj;
};

//using letterFind function creating an object with unique letters first
const letterToFind = function(sentence) {
  let result = {};
  let num = 0;
  let kal = sentence[0];

  for (let i = 0; i < sentence.length; i++) {
    kal = sentence[i];
    for (let j = 0; j < sentence.length; j++) {
      if (kal === sentence[j]) {
        result[sentence[j]] = true;
      }
      
    }
  }
  return result;
};

//Sentence that we need to work on
const sentence = "lighthouse in the house";

//using letterFind function creating an object with unique letters first
console.log(letterToFind(sentence));

//using countOnly function to find the total unique letters
const result1 = countOnly(sentence,letterToFind(sentence));

console.log(result1);

//console.log(letterToFind("lighthouse in the house"));