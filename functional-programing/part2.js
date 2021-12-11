/*      3.          Understanding The Hazard of Using Imperative Code
        
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