// Snippets of js code from the freeCodeCamp Basic JavaScript couse.

// Word Blanks

const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Only change code below this line
const wordBlanks = "The " + myAdjective + " " + myNoun + " from the farm " + myVerb + " " + myAdverb + " through the garden."; // Change this line
// Only change code above this line

// Shopping list

const myList = [["Apples", 26], ["Oranges", 13], ["Tofu", 1], ["Noodles", 3], ["Oil", 2]];


// Golf code

const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
if (strokes == 1) {
  return names[0];
} else if (par - strokes > 2) {
  return names[1];
} else if (strokes - par >3) {
  return names[6]
} else {
  return names[(strokes - par)+3];
}
}
console.log(golfScore(1, 1));

// Counting cards

et count = 0;

function cc(card) {
  // Only change code below this line
  switch(card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    count = count + 1;
    break;
    case 7:
    case 8:
    case 9:
    count = count;
    break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
    count = count - 1;
    break;
 }
 if (count > 0){
   return count + " Bet";
 } else if (count < 1) {
   return count + " Hold";
 }
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');


// Fibonnacci Generator from AppBrewery Web Dev Course


