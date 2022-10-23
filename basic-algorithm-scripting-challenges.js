//Reverse a string

function reverseString(str) {
  let splitString = str.split("");
  let reverseArray = splitString.reverse();
  let newString = reverseArray.join("");
  return newString;
}
