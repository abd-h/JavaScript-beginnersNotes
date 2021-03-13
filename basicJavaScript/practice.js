// Declaring a Variable
var myName;

/*When JavaScript variables are declared, they have an initial value of undefined. If you do a mathematical operation on an undefined variable your result will be NaN which means "Not a Number". If you concatenate a string with an undefined variable, you will get a literal string of "undefined".*/

//  Assigning value to a variable after you initially declared above
myName = "Abdalla";

// or declare and assign all at the same line

var lastName = "H Jibril";

/*in Javascript all variable and function names are case sensative. So CAPITALAZATION AMTTER. Write variable names in JavaScript in camelCase.*/

// Add two numbers with JavaScript
var addTwoNumbers = 5 +3;  // assigns 8 to myVar

//Subtract numbers in Javascript

var newCost =30 -12; 

//Multiply two Numbers

var multiply = 5 * 5; // assigns 25 to multiply

//  Divide inJavaScript
var divideTwoNumbers = 25 / 5;
console.log(multiply);
console.log(myName);
console.log(newCost);

addTwoNumbers = 35 + 30;

/**
 * Example

5 % 2 = 1 because
Math.floor(5 / 2) = 2 (Quotient)
2 * 2 = 4
5 - 4 = 1 (Remainder)
 */
var remainder = 11 % 3;
console.log(addTwoNumbers);

/**
 * Compound Assignment With Augmented Addition and subtruction Passed
 */

 var myVar = 2;
 var a =10;
 var b =9;
 var c =3;
 // can be done this way as well.
 myVar += 8;
 a -= 2;
 b /= 3;
 c *= 3;
console.log(myVar);// returns 10;
console.log(a);// returns 8;
console.log(b);// returns 3;
console.log(c);// returns 9;

// Increment a Number with JavaScript
 //  var i = 70; 
 // i = i +1 is equivalent of  i++
var i = 70;
 i++;
/**
 * Code	Output
\'	single quote
\"	double quote
\\	backslash
\n	newline
\r	carriage return
\t	tab
\b	word boundary
\f	form feed
Note that the backslash itself must be escaped in order to display as a backslash.
 */

 /**
  * Constructing Strings with Variables
  */
var ourName = "Microsoft";

var ourStr = "Hello our name is " + ourName + " How are you";

console.log(ourStr);
console.log(i);

/**
 * Concatenating Strings with Plus Operator
 */
//Example

var conStr = "I come come first. " + "and come second"
// Watch out for space.
var iCon = "I come First " ;
iCon += "I come Second.";
 console.log(iCon)

/**
 * Find the Length of a StringPassed
 */

 var lastNameLength = 0;
 var myLastName = "Waterfield";
 lastNameLength = myLastName.length;
 console.log(lastNameLength)

 /**
  * Use Bracket Notation to Find the First Character in a String
  */

  var firstLetterOfLastName = myLastName[0];

  console.log(firstLetterOfLastName);
  
/**
 * Use Bracket Notation to Find the Last Character in a StringPassed
 */

 firstName = "Robinson";
 var lastLetter = firstName[firstName.length -1];

 console.log(lastLetter);



 /**
  * Use Bracket Notation to Find the Nth-to-Last Character in a StringPassed
  */

  /**
   * For example, you can get the value of the third-to-last letter
   */
 var  lastLetterOfLastName = myLastName[myLastName.length -3];
 console.log(lastLetterOfLastName);

 // Word Blanks 
 // Mad Libs

 var myNoun = "dog";
 var myAdjective = "big";
 var myVerb = "run";
 var myAdverb = "quickly";

 var wordBlanks = "The " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + ".";
console.log(wordBlanks)


  





 
 


