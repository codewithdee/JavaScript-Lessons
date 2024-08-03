//BRACKET NOTATION TO FIND NTH CHARACTER IN STRING
var firstName = "Dennis";
var secondLetterOfLastName = firstName[1];

console.log(secondLetterOfLastName);


//BRACKET NOTATION TO FIND LAST CHARACTER IN STRING
var firstName = "Dennis";
var lastLetterOfFirstName = firstName[firstName.length - 1];

console.log(lastLetterOfFirstName )


//BRACKET NOTATION TO FIND NTH-TO-LAST CHARACTER IN STRING
var firstName = "Dennis";
var thirdToLastLetterOfFirstName = firstName[firstName.length - 3];

console.log(thirdToLastLetterOfFirstName);


//WORD BLANKS
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result = "";
    result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb;

    return result;
}

console.log(wordBlanks("dog", "big", "ran", "quickly")) 


//STORE MULTIPLE VALUES WITH ARRAYS
var ourArray = ["Front", "Left", 25, 7];
console.log(ourArray);


//NESTED ARRAYS
var ourArray = [["The universe", 42], ["everything", 101010]];
console.log(ourArray);


//ACCESS ARRAY DATA WITH INDEXES
var ourArray = [50, 60, 70];
var ourData = ourArray[1];
console.log(ourData);


//MODIFY ARRAY WITH INDEXES
var ourArray = [18, 64, 99];
ourArray[1] = 45;
console.log(ourArray);

//ACCESS MULTI-DIMENSIONAL ARRAYS WITH INDEXES
var myArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [[10, 11, 12], 13, 14]];
myData = myArray[3][0][0];
console.log(myData);


//MANIPULATE ARRAYS WITH PUSH()
var ourArray = ["stimpson", "J", "cat"];
ourArray.push("happiness", "joy");
console.log(ourArray);

