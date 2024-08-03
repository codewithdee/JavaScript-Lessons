//DECLARING STRING VARIABLES
var firstName = "Alan ";
var lastName = "Turing";

console.log(firstName + lastName)


//ESCPAING LITERAL QUOTES IN STRINGS
var myStr = "I am a \"double quoted\" string variable inside \"double quotes\"";
console.log(myStr);


//QUOTING STRINGS WITH SINGLE QUOTES
var ourStr = 'I am a "double quoted" string inside "single quotes"';
console.log(ourStr);


//CONCATENATING STRINGS WITH PLUS OPERATOR
var myStr = "This is the start. " + "This is the end";
console.log(myStr);


//CONCATENATING STRINGS WITH PLUS EQUALS OPERATOR
var ourStr = "I come first. ";
ourStr += "I come second."
console.log(ourStr)


//CONSTRUCTING STRINGS WITH VARIABLES
var ourName = "freeCodeCamp";
var ourStr = "Hello, our name is " + ourName + ", how are you?"

console.log(ourStr)


//APPENDING VARIABLES TO STRINGS
var anAdjective = "awesome!";
var ourStr = "freeCodeCamp is ";
ourStr += anAdjective;
console.log(ourStr)


//FIND LENGTH OF STRING
var firstLetterOfLastName = "";
var lastName = "Lovelace";

firstLetterOfLastName = lastName[0];

console.log(firstLetterOfLastName);


//STRING IMMUTABILITY
var myStr = "Jello World";
myStr = "Hello World";

console.log(myStr);