/*
   1.    Learn About Functional Programming
Functional programming is a style of programming where solutions are simple, 
isolated functions, without any side effects outside of the function scope: 
INPUT -> PROCESS -> OUTPUT

Functional programming is about:

    .   Isolated functions - there is no dependence on the state of the program, 
    which includes global variables that are subject to change

    .   Pure functions - the same input always gives the same output

    .   Functions with limited side effects - any changes, or mutations, 
    to the state of the program outside the function are carefully controlled
    

  
    ********* ********* ********* ********
     *                  CHALLENGE ONE                  *
    * ********* ********* ********* ******
   



    The members of freeCodeCamp happened to love tea

In code editor, the prepareTea function  and getTea function are already defined for you. Call the getTea function to get 40 cups of tea, for  the team, and store them in the tea4TeamFCC variable.
 */

// Function that returns a string representing a cup of green tea
const prepareTea = () => `green tea`;

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/

/*
Given a function (representing the type) and number of cups needed. the following function returns an array of strings (each representing a cup of a specific type of tea) */

const getTea = (numberOfCups) => {
    const cups = [];
    for (let i = 1; i <= numberOfCups; i+=1) {
        const cup = prepareTea();
        cups.push(cup)
    }
    return cups
}
const tea4TeamFCC = getTea(40);
console.log(tea4TeamFCC);
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

/*

    2.   Understand Functionl Programing Terminology

The FFC Team had a mood swing and now wants two types of  tea and black tea.
General Facts: Client mood swings are pretty common.

With that information, we'll need to re visit the getTea function from last challenge to 
handle a various tea requests. We can modify getTea to accept a function as prameter 
to be able to change the type of tea it prepares. This makes getTea more flexible, 
and gives the programer more control when client requests change.

    But first, let's cover some functional terminology:

    .   Callback are the functions that are slipped or passed to other methods, 
    for example in filter, the callback function tells javascript the criteria for 
    how to filter an array.

    .   Functions that can be assign to a variable, and into another function, or return from another function just like any other normal value, are called first class functions. In Javascript all functions are first class functions

    .   The functions that take a function as argument, or return a function as  a return value are called higher order function.k

    .   When functions are passed in to or returned from onather function, then those functions which are passed or return can be called Lambada
*/

/*          CHALLENGE TWO

Prepare 27 cups of green tea and 13 cups of black tea and store them tea4GreenTeamFCC and tea4BlackTeamFCC variables, respectively.

Note that the getTea function has to be modified.so that it takes function as first argument.

Note: The data (the number of cups of tea) is supplied as last argument.*/

// Black Tea function
const blackTea = () => {
    return `Black Tea`;
}

// Green Tea Function
const greenTea = () => {
    return `Green Tea`;
}

function choiceOfTea(prepareTea, numberOfCups) {
    const teaCups = [];
    for (let i = 1; i <= numberOfCups; i++) {
        const teaCup = prepareTea();
        teaCups.push(teaCup);
    }
    
    return teaCups;
}
const teaForBlackTeamFCC = choiceOfTea(greenTea, 27);
const teaForGreenTeamFCC = choiceOfTea(blackTea, 13);

console.log(teaForBlackTeamFCC);
console.log(teaForGreenTeamFCC);



// Dynamic Tea type function
const prepareTeaType = (teaType) => {
    return teaType;
} 

function dynamicChoiceOfTea(prepareTea, numberOfCups) {
    const teaCups = [];
    for (let i = 1; i <= numberOfCups; i++) {
        const teaCup = prepareTea;
        teaCups.push(teaCup);
    }
    console.log(prepareTea);
    return teaCups;
}

const tea4GreenTeamFCC = dynamicChoiceOfTea(prepareTeaType(`Black Tea`), 27);

const tea4BlackTeamFCC = dynamicChoiceOfTea(prepareTeaType("Green Tea"), 13);

console.log(tea4GreenTeamFCC);
console.log(tea4BlackTeamFCC);
