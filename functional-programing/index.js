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
console.log(tea4BlackTeamFCC);/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

        3.          Understanding The Hazard of Using Imperative Code
        
Functional programing is good habit. It keeps your code easy to managed and saves you sneaky bugs. But before we get there let's look at an imperative approach to programming to highlight where you may have an issue.

In English (and many other languages), the imperative tense is used to give commands.
Similarly, an imperative style in programming is one that gives the computer a set of statements to perform a task. 

Often the statements change the state of program, like updating global variables.

A classic example is writing a for  loop that gives exact directions to iterate over the indeces of an array.

In contrast, functional programming is form of  declarative programming. You tell the computer what you want done by calling a method or function.

JavaScript offers many predefined methods that handle common tasks so you don't have to write out how the computer should perform them.

For example instead of using the for loop mention above, you could call the map method which handles the details of iterating over an array.

This helps to avoid symentic errors, like the "Off By One Errors" .


Consider the scenario: you browsing the web in your browser, and want to track the tabs you have opened.
Let's try to model this using some simple object-oriented code.

A Window object is made of tabs, and you usually have each have more than one Window opened. The titles of each open site in each Window object is held in an array. After working in the browser (opening new tabs, merging Windows,and closing tabs), you want to print tabs that are still open. Closed tabs are removed from the array and new tabs (for simplicity) get added to the end of it.

The code editor shows an implimentation of this functionality with functions for tabOpened(), tabClosed(), and join(). The array tabs is part of the Window object that stores the name of the open pages. 

    ********* ********* ********* ********
     *                  CHALLENGE TWO                  *
    * ********* ********* ********* ******
   
Examing the code. It's using a method that has side effects in the program, causing incorrect behaviour. The final list of open tabs, stored in finalTabs.tabs, should be ['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 'new tab', 'Netflix', 'YouTube', 'Vine', 'GMail', 'Work mail', 'Docs', 'freeCodeCamp', 'new tab']

Change Window.prototype.tabClosed so that it removes the correct tab.*/

// tab is an array of titles of  each site open within the window.

const Window = function(tabs) {
    this.tabs = tabs; // We keep a record of the array inside the object
};

// When you join two window into one window
Window.prototype.join = function (otherWindow) {
    this.tabs = this.tabs.concat(otherWindow);
    return this;
};

// When you open a new tab at the end
Window.prototype.tabOpen = function(tab){
    this.tabs.push("new tab") // lets you open a new tab for now
    return this;
}

// When you close a tab
Window.prototype.tabClose = function(index) {
    const tabsBeforeIndex = this.tabs.splice(0, index);// Get the tabs before the tab

    const tabsAfterIndex = this.tabs.splice(index + 1);// Gets the tab after tab

    this.tab = tabsBeforeIndex.concat(tabsAfterIndex);// Join them together

    return this;
}


