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


//Repeat a string repeat a string

function repeatStringNumTimes(str, num) {
  let repeatedStringArray =[];
  for (let i = 0; i < num; i++) {
    repeatedStringArray.push(str);
  }
  return repeatedStringArray.join("");
}


//Truncate a string

function truncateString(str, num) {
if (str.length > num) {
  return str.substr(0, num) + "...";
  } return str; 
}


//Title case in a string

function titleCase(str) {
 const splitSentence = str.toLowerCase().split(" ");
 let capitalisedSentence =[];
 for (let i=0; i < splitSentence.length; i++) {
   capitalisedSentence.push(splitSentence[i].charAt(0).toUpperCase() + splitSentence[i].substring(1));
 }
 return capitalisedSentence.join(" ");
}


//Slice and splice

function frankenSplice(arr1, arr2, n) {
let bothArrays = arr2.slice();
  bothArrays.splice(n, 0, ...arr1);
return bothArrays;
}


//Where do I belong

function getIndexToIns(arr, num) {
arr.push(num);
  arr.sort(function(a, b){return a-b});
  const findTheIndex = (i) => i === num;
return arr.findIndex(findTheIndex);
}


//Mutations

function mutation(arr) {
  let element1 = arr[0].toLowerCase().split('');
  let element2 = arr[1].toLowerCase().split('');
  for (i = 0; i < element2.length; i++) {
    if (element1.indexOf(element2[i]) === -1) {
      return false;
    }
  } return true;
}


//Chunky Monkey

function chunkArrayInGroups(arr, size) {
  let newArr = [];
  for (let i = 0; i < Math.ceil(arr.length/size); i++) {
      newArr.push(arr.slice(i*size, i*size+size));
  }
  return newArr;
}




