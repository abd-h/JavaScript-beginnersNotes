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
    else if(num > 10 &&  num < 15) {
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
    if (strokes === 1 || par === 1) {
        return "Hole-in-one!";
    }
    else if (strokes <= par -2) {
        return "Eagle";
    }
    else if ( strokes === par -1) {
        return "Birdie";
    }
    else if (strokes === par) {
        return "Par";
    }
    else if (strokes === par + 1) {
        return "Bogey";
    }
    else if (strokes === par + 2) {
        return "Double Bogey";
    }
    else {
        return "Go Home!";
    }
    return names
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

//  Selecting from Many Options with Switch Statement

// If you have many options to choose from, use a switch statement. A switch statement tests a value and can have many case statements which define various posible values. Statements are execuetd from the first matched value until break is encountered.

//  Here is example of a switch statement

function lowerCase(loweCaseLetter) {
    switch (lowerCaseLetter) {
        case "a":
            console.log("A");
            break;
        case "b":
            console.log(B)   ; 
    
            break;
    }
}
// case values are tested with strict eqality ( === ). The break tells JavaScript to stop executing statement. If break is omitted next statement will be exacuted.

function caseInSwitch(val) {
    var newAnswer = "";
    switch (val) {
        case 1:
            return "alpha";
            break;
        case 2:
            return "beta";
            break;
        case 3:
            return "gamma";
            break;
        case 4:
            return "delta";  
            break;
    }
    return newAnswer;
}
console.log(caseInSwitch(1));

// Adding Default Option in Switch statements

// In a switch statement you may not be able to specify all possible values as case statements. Instead , you can add default statement which will be executed if  no matching case statements are found. Think of it like the final else statement in an if / else chain.

//  A default statement should be the last case.

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

console.log(testDefault("a"));

// Multiple Identical Options in Switch Statements

// If the break statement is omitted from a switch statement's case, the following case statement(s) are executed until a break is encountered. If you have multiple inputs with the same output, you can represent them in a switch statement like this:

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
