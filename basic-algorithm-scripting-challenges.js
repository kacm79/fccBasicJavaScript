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

