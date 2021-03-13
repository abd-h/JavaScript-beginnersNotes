// Understanding Boolean Values
/**
 * Another data type is the Boolean. Booleans may only be one of two values: true or false. They are basically little on-off switches, where true is "on" and false is "off". These two states are mutually exclusive.
 */
/**
 * Note
Boolean values are never written with quotes. The strings "true" and "false" are not Boolean and have no special meaning in JavaScript.
 *
 */
function welcomToBooleans() {
    return true;
}

1 == true; // reads true
0 == false; // reads true
1 == false; // reads false
0 == true; // reads false


/** 
 * Use Conditional Logic with If Statements

If statements are used to make decisions in code. The keyword if tells JavaScript to execute the code in the curly braces under certain conditions, defined in the parentheses. These conditions are known as Boolean conditions and they may only be true or false.

When the condition evaluates to true, the program executes the statement inside the curly braces. When the Boolean condition evaluates to false, the statement inside the curly braces will not execute.

Psudocode
if (condition is true) {
    statement is executed
}

Example 
 */

function test (myCondition) {
    if (myCondition) {
        return "it was true";
    }
    return "It was false";
}
test(true) // returns "It was true"
console.log(test(false)); // returns "it was false"

function trueOrfalse (wasThatTrue) {
    if (wasThatTrue) {
        return "Yes, that was true";
    }
    return "No, that was false";
}
console.log(trueOrfalse(true));
//.............................................

// 
/**Comparison with the Equality Operator
 
  There are many comparison operators in JavaScript. All of these operators return a boolean true or false value.

The most basic operator is the equality operator ==. The equality operator compares two values and returns true if they're equivalent or false if they are not. Note that equality is different from assignment (=), which assigns the value on the right of the operator to a variable on the left. */

// Example
function equalityTest (myVal) {
    if (myVal == 10) {
        return "Equal";
    }
    return "Not equal";
}
// If myVal is equal to 10, the equality operator returns true, so the code in the curly braces will execute, and the function will return "Equal". Otherwise, the function will return "Not Equal". In order for JavaScript to compare two different data types (for example, numbers and strings), it must convert one type to another. This is known as "Type Coercion". Once it does, however, it can compare terms as follows:

// Coercion
1 == 1 // true
1 == 2 // false
1 == "1" // true
"3" == 3 //true
typeof 3 // returns 'number';
typeof '3' // returns "String"
// --------------------------------------------
function testequal(val) {
    if (val == 12) {
        return "Equal";
    }
    return "Not equal";
}
console.log(testequal(12)); // Reads equal;
//--------------------------------------------

// Comparison with the Strict Equality Operator

// Strict equality (===) is the counterpart to the equality operator (==). However, unlike the equality operator, which attempts to convert both values being compared to a common type, the strict equality operator does not perform a type conversion.

// If the values being compared have different types, they are considered unequal, and the strict equality operator will return false.
// Example
3 === 3 // true
3 === "3" // false
function testStrict(val) {
    if (val ===7) {
        return "Equal";
    }
    return "Not equal";
}
console.log(testStrict(70))

// Comparing different
function compareEquality(a, b) {
    if (a === b) {
        return "Equal";
    }
    return "Not equal";
}
console.log(compareEquality(5, 15)); //returns Not equal
// --------------------------------------------

console.log(typeof 3); // returns Number
console.log(typeof '3'); // returns string

/**
    Comparison with the Inequality Operator

 The inequality operator (!=) is the opposite of the equality operator. It means "Not Equal" and returns false where equality would return true and vice versa. Like the equality operator, the inequality operator will convert data types of values while comparing.
 */
1 != 2 // true
1 != 1 // false
1 != "1" // false
1 != true // false
0 != false // false

function notEqual(val) {
    if (val != 99) {
        return "Not equal";
    }
    return "Equal";
}
console.log(notEqual(19));

/**
        Comparison with the Strict Inequality Operator

 The strict inequality operator (!==) is the logical opposite of the strict equality operator. It means "Strictly Not Equal" and returns false where strict equality would return true and vice versa. Strict inequality will not convert data

 */
// Example
3 !== 3 // false
3 !== "3" // true
4!== 3 // true

function stricklyNotEqual(val) {
    if (val !== 17) {
        return "Not equal";
    }
    return "Equal"
}
console.log(stricklyNotEqual(17));

/*
            Comparison with the Greater Than Operator

The greater than ( > ) compares the value of two numbers. If the number to the left is greater than the number to the right, it returns true. Otherwise, it reurns false.

Like the equality operator, greater than operator will convert data types of values while comparing.
*/

// Example
5 > 3 // true
7 > '3' // true
2 > 7 // false
'1' > 9 // false

function testGreaterThan(val) {
    if (val > 100) {
        return "over 100";
    }
    
    if (val > 10) {
        return "over 10";
    }

     return " 10 or under";
}
  console.log(testGreaterThan(9));//returns  10 or under
  console.log(testGreaterThan(99)); // returns over 10
  console.log(testGreaterThan(125)); // returns over 100
// --------------------------------------------

/**
           Comparison with the Greater Than or Equal to Operater 

 The greater than or equal to operator( >= ) compares the values of two numbers. If the number to the left is greater than or equal to the number to the right, it returns  true. Otherwise it returns false.

Like the equality operator, the >= will conver data types while comparing.
 */

// Example

6 >= 6 // true
7 >= "3" // true
2 >= 3 // false
"7" >= 9 // false

function testGreaterThanOrEqual(val) {
    if (val >= 20) {
        return "20 or Over";
    }

    if (val >= 10) {
        return "10 or Over";
    }

    return "Less then 10";
}
console.log(testGreaterThanOrEqual(9));// returns 10 or Over;
// ............................................

/**
            Comparison with the Less Than Operator

            The less than operator (<) compares the values of two numbers. If the number to the left is less than the number to the right, it returns true. Otherwise, it returns false. Like the equality operator, less than operator converts data types while comparing.
 */

//  Example
2 < 5 // true
'3' < 7 // true
5 < 5 // false
3 < 2 // false
'8' < 4 // false

function testLessThan(val) {
    if (val < 25) {
        return "Under 25";
    }
    if (val < 55) {
        return "Under 55";
    }
    return "55 or Over";
}

console.log(testLessThan(54));

//.............................................

/*
            Comparison with the Less Than Or Equal To Operator

 The less than or equal to operator (<=) compares the values of two numbers. If the number to the left is less than or equal to the number to the right, it returns true. If the number on the left is greater than the number on the right, it returns false. Like the equality operator, less than or equal to converts data types.
*/ 

// Examples

4   <= 5  // true
'7' <= 7  // true
5   <= 5  // true
3   <= 2  // false
'8' <= 4  // false

function testLessOrEqual(val) {
    if (val <= 12) {
        return "Smaller Then or Equal to 12"
    }
    
    if (val <= 24) {
        return "Smaller Than or Equal to 24";
    }
    return "More Than 24";
}
console.log(testLessOrEqual(11));
console.log(testLessOrEqual(13));
console.log(testLessOrEqual(25));
//.............................................

/** 
            Comparison with Logical And Operator

Sometimes you will need to test more than one thing at the time. The logical and operator ( && ) returns true if and only if operands to the left and right are true.

The same effect could be acheived by nesting an if statement inside another if:
*/

function nestingTwoIfs(num) {
    if(num > 5){
        if (num < 10){
            return "Yes"
        }
        return "No"
    }
}
console.log(nestingTwoIfs(11)); //reads no
console.log(nestingTwoIfs(9)); //reads yes

// will only return yes if num is greater than 5 or and less than 10. The same logic can be written as: 

function testLogicalAnd(val) {
    if (val > 5 && val <10) {
        return "Yes";
    }
    return "No";
}
console.log(testLogicalAnd(6));
console.log(testLogicalAnd(4));
console.log(testLogicalAnd(11));

    /*
                Comparisons with the Logical or Operator

The logical or operator ( || ) returns true if either of the operand is true. Otherwise, it returns false.

The Logical or operator is composed of two pipe sympols : ( ||).  just obove return key.
    */

function testOrLogical(val) {
    if (val > 10) {
        return "No";
    }
    if (val < 5) {
        return "No";
    }
    return "Yes"
}
// Will return "Yes" only if num is between 5 and  10 (5 and 10 included). The same logic can be written as:

function orLogical(val) {
    if (val > 10 || val < 5) {
        return "No";
    }
    return "Yes";
}

function testOrLogical1(val) {
    if (val < 10 || val > 20) {
        return " Outside";
    }
    return "Inside";
}
console.log(testOrLogical1(11)); // returns Inside
console.log(testOrLogical1(9)); // returns Outside
console.log(testOrLogical1(21)); // returns Outside
//:::::::::::::::::::::::::::::::::::::::::::::

/*
            // Introducing Else statement

When a condition for an if  statement is true, the block of code following it is executed. What if that condition is false? Normanlly nnothing would happend. With else statement, an alternate block of code be executed.   
*/ 

// two if statements
function testElse(val) {
    var result = "";
    if (val > 10) {
        result = "Bigger than 10";
    } 
    if (val <= 10) {
        result = "10 or Less"
    }
        return result;
}

// With Else statement

function testWithElse(val) {
    var newResult = "";
    if (val > 10) {
        newResult = "Bigger than 10";
    } 
    else{
        newResult = "10 or Smaller "
    }
    return newResult
}
var newResult = testWithElse(6);
console.log(newResult);

// Indroducing Else If Statement

// If you have multiple conditions that need to be address, you can chain if statements together with if lese statements.

function testIfElse(val) {
    if (val > 15) {
        return "Bigger Than 15";
    } 
    else if(val < 5) {
        return "smaller Than 5";
    }
    else {
        return "Between 5 and 15";
    }
}

// Logical Order in If Else Statements

// The function is executed from top to bottom so you will want to be careful of what statement comes first:

function foo(x) {
    if (x < 1){
        return "Less then one";
    }
    else if (val < 2) {
        return "Less than two";
    }
    else {
        return "Greater than or equal to two";
    }
}

// And the second just switches the order of the statement.

function bar(x) {
    if (x < 2) {
        return "Less than two"
    }
    else if (x < 1) {
        return "Less than one"
    }
    else {
        return "Greater than or equeal to two";
    }
}

//  While these two functions look nearly identical if we pass a number to both we get different outputs

console.log(foo(0)) //returns "Less than one"
console.log(bar(0)) // returns " Less than two"

//  Chaning If  Else Statement

// if / else statements can be chained together for complex logic. Here is example of pseudocode of multiple chained if / else if statement

function testSize(num) {
    if (num < 5) {
        return "Tiny";
    }
    else if (num < 10) {
        return "Small";
    }
    else if(num  < 15) {
        return "Medium";
    }
    else if (num < 20) {
        return "Large";
    }
    else {
        return "Huge"
    }

}
console.log(testSize(4))

// Golf Code Chellenge

// n the game of golf each hole has a par meaning the average number of strokes a golfer is expected to make in order to sink the ball in a hole to complete the play. Depending on how far above or below par your strokes are, there is a different nickname.

// Your function will be passed par and strokes arguments. Return the correct string according to this table which lists the strokes in order of priority; top (highest) to bottom (lowest):

var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
    if (strokes === 1){
  return names[0];
    } 
    else if (strokes <= par - 2){
    return names[1];
    } 
    else if (strokes === par -1) {
    return names[2];
    } 
    else if (strokes === par){
    return names[3];
    }
    else if (strokes === par + 1){
       return  names[4];
    }
    else if (strokes === par + 2) {
        return names[5]
    }
    else if(strokes >= par + 3) {
       return  names[6];
    }
  
}
console.log(golfScore(4, 1)); // should return "Hole-in-one!"
console.log(golfScore(4, 2)); // should return "Eagle"
console.log(golfScore(5, 2)); // should return "Eagle"
console.log(golfScore(4, 3)); // should return "Birdie"
console.log(golfScore(4,  4)) // should return "Par"
console.log(golfScore(1, 1)) // sould return "Hole-in-one!"
console.log(golfScore(5, 5)) // should return "Par"
console.log(golfScore(4, 5)) // should return "Bogey"
console.log(golfScore(4, 6)) // should return "Double Bogey"
console.log(golfScore(4, 7)) // should return "Go Home!"
console.log(golfScore(5,  9)) // should return "Go Home!"

/*
Selecting from Many Options with Switch Statement

If you have many options to choose from, use a switch statement. 
A switch statement tests a value and can have many case statements which define various posible values. Statements are execuetd from the first matched value until break is encountered.

Here is example of a switch statement
*/

function lowerCase(lowerCaseLetter) {
    switch (lowerCaseLetter) {
        case "a":
            console.log("A");
            break;
        case "b":
            console.log(B)   ; 
    
            break;
    }
}
/*
Case values are tested with strict eqality ( === ). 
The break tells JavaScript to stop executing statement. If break is omitted next statement will be exacuted.
*/ 

function caseInSwitch(val) {
    var newAnswer = "";
    switch (val) {
        case 1:
            newAnswer = "alpha";
            break;
        case 2:
            newAnswer = "beta";
            break;
        case 3:
            newAnswer ="gamma";
            break;
        case 4:
            newAnswer = "delta";  
            break;
    }
    return newAnswer;
}
console.log(caseInSwitch(1));

/*
            Adding a Default Option in Switch Statements
In a switch statement you may not be able to specify all possible values as case statements. Instead, you can add the default statement which will be executed if no matching case statements are found. Think of it like the final else statement in an if/else chain.

A default statement should be the last case.        */

function testDefault(val) {
    var answer2 = "";
    switch (val) {
        case "a":
            answer2 = "apple";
            break;
        case "b":
           answer2 ="bird";
            break;
        case "c":
            answer2 = "cat"
            break;
    
        default:
            answer2 = "stuff";
            break;
    }
    return answer2;
}

console.log(testDefault("c"));

/*          Multiple Identical Options in Switch Statements

// If the break statement is omitted from a switch statement's case, the following case statement(s) are executed until a break is encountered. If you have multiple inputs with the same output, you can represent them in a switch statement like this:     */ 
function sequentialSizes(val) {
    var result3 = "";
    switch(val) {
        case 1:
        case 2:
        case 3:
            result3 = "Low";
            break;
        case 4:
        case 5:
        case 6:
            result3 = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            result3 = "High";
    }
    return result3;
}
console.log(sequentialSizes(5));

/*          Replacing If  / Else Chains with switch
if you have many options to choose from, a switchstatement can be easier to write than many chainedif else statements. The following: */ 

function chainedIfElse(val) {
    var chainedIfs = "";
    if(val ===1) {
        chainedIfs = "a";
    }
    else if (val === 2) {
        chainedIfs = "b";
    }
    else {
        chainedIfs = "c";
    }
    return chainedIfs;
}
function notChainedIf(val) {
    var notChained = "";
    switch(val) {
        case 1:
            notChained = "a";
            break;
        case 2:
            notChained = "b";
            break;
        default:
            notChained = "c";
    }
    return notChained;
}

function chainToSwitch(val) {
    var answer = "";
    switch(val) {
        case "bob":
            answer = "Marley";
            break;
        case 42:
            answer = "The Answer";
            break;
        case 1:
            answer = "There is no #1";
            break;
        case 99:
            answer = "Missed me by this much!";
            break;
        case 7:
            answer = "Ate Nine";
    }
    return answer;
}
console.log(chainToSwitch(7));

// Returning Boolean Values from functions

// You may recall from Comparison with the Equality Operator that all comparison operators return a bolean true or false value.

// Sometimes people use an if / else statement to do a comparison, like this

function isEqualTo(a, b) {
    if (a === b){
        return true;
    }
    else {
        return false;
    }
}
console.log(isEqualTo(9, 10)); // returns false

// But theres better way to do this . Since === returns true or false we can return the result of the comparison:

function equalTo(a, b) {
    return a === b;
}
console.log(equalTo(10, 10));// returns true

// Return Ealy Pattern for Function

// When a return statement is reached, the execution of the current function stops and control returns to the calling location.

function myFun(params) {
    console.log("Hello");
    return "World";
    console.log("byebye");
}
// The above outputs "Hello" and returns "World", but "byebye" is never output, because function exits at the return statement.

function abTest(a, b) {
   if (a < 0 || b < 0) {
       return `The answer is ${undefined}`;
   }
   return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
console.log(abTest(3, -3));


// Counting Cards 
var count = 0;
function cc(cards) {
    switch(cards) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
         count++;
         break;
        case 10:
        case 'J':
        case 'Q':
        case 'K':
        case 'A':
        count--;
         break;
    }
    if (count > 0) {
        return count + " Bet";
    }
    else {
        return count + " Hold";
    }
}
console.log(cc(2), cc(3), cc(7), cc('K'), cc('A'));






