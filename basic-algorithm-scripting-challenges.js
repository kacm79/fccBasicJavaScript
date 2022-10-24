//Reverse a string

function reverseString(str) {
  let splitString = str.split("");
  let reverseArray = splitString.reverse();
  let newString = reverseArray.join("");
  return newString;
}

//Factorialise a number

function factorialize(num) {

const listOfIntegers = [];
  for (let i = 1; i <= num; i++) {
    listOfIntegers.push(i);
  }

let multipliedResult = 1;
  for (let x = 0; x < num; x++) {
    multipliedResult = multipliedResult*listOfIntegers[x];
  }
  return multipliedResult;
}

//Find the longest word in a string

function findLongestWordLength(str) {
  const splitStr = str.split(" ");

  let wordLength = splitStr[0].length;
  for (let i = 0; i < splitStr.length; i++) {
    if (splitStr[i].length > wordLength) {
      wordLength = splitStr[i].length;
    } 
  }
  return wordLength;
}


//Return the largest numbers in arrays

function largestOfFour(arr) {

  let largestNumbers = [];
  for (let i = 0; i < arr.length; i++) {
 let sortedArray = arr[i].sort(function(a, b){return a-b});
    largestNumbers.push(sortedArray[sortedArray.length -1]);
  }
  return largestNumbers;
}

//Confirm the ending

function confirmEnding(str, target) {

  let actualEnding = str.substring(str.length-target.length, str.length);

if (target == actualEnding) {
  return true;
} return false;
}

