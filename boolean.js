// Understanding Boolean Values
// Another data type is the Boolean. Booleans may only be one of two values: true or false. They are basically little on-off switches, where true is "on" and false is "off". These two states are mutually exclusive.

// Note
// Boolean values are never written with quotes. The strings "true" and "false" are not Boolean and have no special meaning in JavaScript.
function welcomToBooleans() {
    return true;
}

1 == true; // reads true
0 == false; // reads true
1 == false; // reads false
0 == true; // reads false


// Use Conditional Logic with If Statements

// If statements are used to make decisions in code. The keyword if tells JavaScript to execute the code in the curly braces under certain conditions, defined in the parentheses. These conditions are known as Boolean conditions and they may only be true or false.

// When the condition evaluates to true, the program executes the statement inside the curly braces. When the Boolean condition evaluates to false, the statement inside the curly braces will not execute.

// Psudocode
// if (condition is true) {
//     statement is executed
// }

// Example 

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

// Comparison with the Equality Operator

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

// Comparison with the Inequality Operator

// The inequality operator (!=) is the opposite of the equality operator. It means "Not Equal" and returns false where equality would return true and vice versa. Like the equality operator, the inequality operator will convert data types of values while comparing.
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

// Comparison with the Strict Inequality Operator

// The strict inequality operator (!==) is the logical opposite of the strict equality operator. It means "Strictly Not Equal" and returns false where strict equality would return true and vice versa. Strict inequality will not convert data

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

// Comparison with the Greater Than Operator

// The greater than ( > ) compares the value of two numbers. If the number to the left is greater than the number to the right, it returns true. Otherwise, it reurns false.

// Like the equality operator, greater than operator will convert data types of values while comparing.

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

//   Comparison with the Greater Than or Equal to Operater 

// The greater than or equal to operator( >= ) compares the values of two numbers. If the number to the left is greater than or equal to the number to the right, it returns  true. Otherwise it returns false.

// Like the equality operator, the >= will conver data types while comparing.

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

//  Comparison with the Less Than Operator

//  The less than operator (<) compares the values of two numbers. If the number to the left is less than the number to the right, it returns true. Otherwise, it returns false. Like the equality operator, less than operator converts data types while comparing.

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

// Comparison with the Less Than Or Equal To Operator
// The less than or equal to operator (<=) compares the values of two numbers. If the number to the left is less than or equal to the number to the right, it returns true. If the number on the left is greater than the number on the right, it returns false. Like the equality operator, less than or equal to converts data types.

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

//  Comparison with Logical And Operator

// Sometimes you will need to test more than one thing at the time. The logical and operator ( && ) returns true if and only if oerand to the left and right are true.

// The same effect could be acheived by nesting an if statement inside another if:

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

    // Comparisons with the Logical or Operator

// The logical or operator ( || ) returns true if either of the operand is true. Otherwise, it returns false.

// The Logical or operator is composed of two pipe sympols : ( ||).  just obove return key.

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

// Introducing Else statement

// When a condition for an if  statement is true, the block of code following it is executed. What if that condition is false? Normanlly nnothing would happend. With else statement, an alternate block of code be executed.    

// two if statements
function testElse(val) {
    var result = "";
    if (val > 10) {
        return "Bigger than 10";
    } 
    if (val <= 10) {
        return "10 or Less"
    }
    return result
}

// With Else statement

function testWithElse(val) {
    var newResult = "";
    if (val > 10) {
        return "Bigger than 10";
    } 
    else{
        return "10 or Smaller "
    }
    return newResult;
}
newResult = testWithElse(6);
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

