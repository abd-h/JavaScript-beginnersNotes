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
/*************************************************
 *************************************************

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
     /********* ********* ********* ********
     *                  CHALLENGE THREE                *
    * ********* ********* ********* ******/
// When you close a tab
Window.prototype.tabClose = function(index) {
    const tabsBeforeIndex = this.tabs.slice(0, index);// Get the tabs before the tab

    const tabsAfterIndex = this.tabs.slice(index + 1);// Gets the tab after tab

    this.tab = tabsBeforeIndex.concat(tabsAfterIndex);// Join them together

    return this;
}

// Let's create three browser windows
 const workWindow = new Window(['GMAIL', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']);// Your mailbox, drive, and other work sites
 const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']);// Social sites

const videoWindow = new Window(['Netflix', 'YouTube', 'Vimo', 'Vine'])// Entertainment site

// Now perform the tab opening, closing and other operations

const finalTabs = socialWindow
                .tabOpen()//  Open a new tab for cat memes
                .join(videoWindow.tabClose(2))// Close third tab in window and join
                .join(workWindow.tabClose(1).tabOpen);
console.log(finalTabs.tabs);                

/*************************************************
 ************************************************* 
 

 Avoid Mutations and Side Effects Using Functional Programming

 If you haven't already figured it out, the issue in the previous challenge was with the splice call in the tabClose() function. 

 Unfortunately, splice changes the original array it is called on, so the second call to it used the modified array, and gave unexpected results.

 This is small example of much larger partten- you call a function on avariable, array, or an object, and the function changes the variable or something in the object.

 One of the core principles of functional programming is to not change anythings. Change leads to bugs. It's easier to prevent bugs knowing that your function don't change anything, including the function arguments or any global variable.

 The previous example didn't have any complicated operations, but the splice method change the original array, and resulted in a bug.

Recall that in funtional programming, change or altering things is called mutation, and the outcome is called a side effect. A function, ideally, should be a pure function, meaning that it will not cause side effects.

Let's try to master this discipline and not alter any variable or object in our code.

    ********* ********* ********* ********
    *                  CHALLENGE FOUR                 *
    * ********* ********* ********* ******

Fill in the code for the function incremener so it returs a the value of the global variable fixedValue incremented by one.
 */

// The global variable
let fixedValue = 4;

function incrementer() {
    let count = fixedValue;
   
}
console.log(incrementer());
console.log(incrementer());
/*************************************************
 ************************************************
 
Pass Arguments to Avoid Extenal Dependance in a Function

The last challenge was a step closer to functional programming principles, but there's still something missing.

We didn't alter the global variable value, but the function incrementer would not work without the global variable fixedValue being there.

Anothe principle of functional programming is to always declare your dependencies explicitly. This means if a function depends on a variable or object being present, then pass that variable or object directly into the function as an argument.

There are several good consequences from this principle.
The function is easier to test, you know exactly what input it takes, and it won,t on anything else in your program.

This can give more confindence when you alter, remove, or add new code. You would know what you can or cannot change and you can see where the potential traps are.

Finally, the function wouldl always produce the same output for the same set of outputs, no matter what part of the code executes it.

    ********* ********* ********* *********
    *                  CHALLENGE FIVE                 *
    * ********* ********* ********* *******
Let's update the incrementer function to clearly declare its dependencies.

Write the incrementer function so it takes an argument, and then returns a result after increasing the value by one.

*/

let fixedValue2 = 4;
function incrementer2(number) {
    number++
    return number;
}
console.log(incrementer2(fixedValue2));
console.log(fixedValue2);

/*************************************************
 ***********************************************
 
Refactor Global Variables out of functions

So far, we have seen two distinct priciples for functional programming:

    1.    Don't alter a variable or object - create new 
          variables or objects and return them if need be from a function. 
          Hint: using something like const newArr = arrVar, 
          where arrVar is an array will simply is an array will simply create a reference to the existing variable and not a copy. 
          So changing the value in newArr would change the value in arrVar.
          
    2.   Declare function parameters - any computation inside a function depends only the arguments passed to the fumction and not any global object or variable.
    
Adding one to a number is not very exciting, but we can apply these principles with arrays or more complex objects. 

    ********* ********* ********* *********
    *                  CHALLENGE FIVE                     *
    * ********* ********* ********* *******
    
Rewrite the code so the global array bookList is not changed inside either function. The add function should add the given bookname to the end of the array passed to it and return a new array(list). The remove function should remove a given bookName from an array passed to it.

Note: Both functions should return an array, and any new parameters should be added be added before the bookName parameter.
      */

