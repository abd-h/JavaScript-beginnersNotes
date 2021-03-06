/*          Create a Module ScriptPassed
JavaScript started with a small role to play on an otherwise mostly HTML web. Today, it’s huge, and some websites are built almost entirely with JavaScript. In order to make JavaScript more modular, clean, and maintainable; ES6 introduced a way to easily share code among JavaScript files. This involves exporting parts of a file for use in one or more other files, and importing the parts you need, where you need them. In order to take advantage of this functionality, you need to create a script in your HTML document with a type of module. Here’s an example:

<script type="module" src="filename.js"></script>
A script that uses this module type can now use the import and export features you will learn about in the upcoming challenges.

Add a script to the HTML document of type module and give it the source file of index.js
<html>
    <body>
        <script src="index..js" type="module"></script>
    </body>
</html>
*/

/*          Use export to Share a Code Block
Imagine a file called math_functions.js that contains several functions related to mathematical operations. One of them is stored in a variable, add, that takes in two numbers and returns their sum. You want to use this function in several different JavaScript files. In order to share it with these other files, you first need to export it.

export const add = (a, b) => {
    return a +b;
}
 The above is comman way to export a single function, but you can acheive samething like this:
 const add = (a,b) => {
     return a + b;
 }
 export {add, subtract};

 When you export avariable or a function, you can inport it in another file and use it without it having to write a code. You can export multiple things by repeating the first example for each thing you want to export, or place them all in the export statement like this:

 There are two string-related functions in the editor. Export both of them using the method of your choice.
 
 export const uppercaseString = (string) => {
  return string.toUpperCase();
}

const lowercaseString = (string) => {
  return string.toLowerCase()
}
export {lowercaseString}
 */

/*          Reuse JavaScript Code Using import
import allows you to choose which parts of a file or module to load. In the previous lesson, the examples exported add from the arrow-functions.js file. Here's how you can import it to use in another file: */
import { add, subtruct } from "./arrow-functions.js";
console.log(add(2,4));
console.log(subtruct(8, 6));

/*Here, import will find add in ./arrow-functions.js, import just that function for you to use, and ignore the rest. The ./ tells the import to look for the arrow-functions.js file in the same folder as the current file. The relative file path (./) and file extension (.js) are required when using import in this way.

You can import more than one item from the file by adding them in the import statement like this:

import { add, subtract } from './arrow-functions.js';

Add the appropriate import statement that will allow the current file to use the uppercaseString and lowercaseString functions you exported in the previous lesson. These functions are in a file called string_functions.js, which is in the same directory as the current file.

*/
import { divide } from "./arrow-functions.js";
console.log(divide(144, 6));
/*          Use * to Import Everything from a FilePassed
Suppose you have a file and you wish to import all of its contents into the current file. This can be done with the import * as syntax. Here's an example where the contents of a file named math_functions.js are imported into a file in the same directory:

import * as myMathModule from "./math_functions.js";

The above import statement will create an object called myMathModule. This is just a variable name, you can name it anything. The object will contain all of the exports from math_functions.js in it, so you can access the functions like you would any other object property. Here's how you can use the add and subtract functions that were imported:

myMathModule.add(2,3);
myMathModule.subtract(5,3);

*/
import * as arrows from "./arrow-functions.js";
console.log(arrows.add(3, 5));

/*The code in this file requires the contents of the file: string_functions.js, that is in the same directory as the current file. Use the import * as syntax to import everything from the file into an object called stringFunctions

import * as stringFunctions from "string_function.js"
stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");./

/*          Create an Export Fallback with export default
In the export lesson, you learned about the syntax referred to as a named export. This allowed you to make multiple functions and variables available for use in other files.

There is another export syntax you need to know, known as export default. Usually you will use this syntax if only one value is being exported from a file. It is also used to create a fallback value for a file or module.

Below are examples using export default:

export default function add(x, y) {
    return x + y;
} 
export default function (x, y) {
    return x + y;
} 

The first is a named function, and the second is an anonymous function.

Since export default is used to declare a fallback value for a module or file, you can only have one value be a default export in each module or file. Additionally, you cannot use export default with var, let, or const

The following function should be the fallback value for the module. 
Please add the necessary code to do so.*/

export  function subtraction(x, y) {
  return x - y;
}
export  default function (x, y) {
    return x - y;
}

/*          Import a Default ExportPassed
In the last challenge, you learned about export default and its uses. To import a default export, you need to use a different import syntax. In the following example, add is the default export of the math_functions.js file. Here is how to import it:

import add from "./math_functions.js";

The syntax differs in one key place. The imported value, add, is not surrounded by curly braces ({}). add here is simply a variable name for whatever the default export of the math_functions.js file is. You can use any name here when importing a default

In the following code, import the default export from the math_functions.js file, found in the same directory as this file. Give the import the name subtract.
import subtract from "./math_functions.js"
*/

/*          Create a JavaScript PromisePassed
A promise in JavaScript is exactly what it sounds like - you use it to make a promise to do something, usually asynchronously. When the task completes, you either fulfill your promise or fail to do so. Promise is a constructor function, so you need to use the new keyword to create one. It takes a function, as its argument, with two parameters - resolve and reject. These are methods used to determine the outcome of the promise. The syntax looks like this:

const myPromise = new Promise((resolve, reject) => {

    });
*/

/*          Complete a Promise with resolve and rejectPassed
A promise has three states: pending, fulfilled, and rejected. The promise you created in the last challenge is forever stuck in the pending state because you did not add a way to complete the promise. The resolve and reject parameters given to the promise argument are used to do this. resolve is used when you want your promise to succeed, and reject is used when you want it to fail. These are methods that take an argument, as seen below.

const myPromise = new Promise((resolve, reject) => {
    if(condition) {
        resolve("Promised was fulfilled")
    }
    else {
        reject("Promise rejected");
    }
});

The example above uses strings for the argument of these functions, but it can really be anything. Often, it might be an object, that you would use data from, to put on your website or elsewhere.

Make the promise handle success and failure. If responseFromServer is true, call the resolve method to successfully complete the promise. Pass resolve a string with the value We got the data. If responseFromServer is false, use the reject method instead and pass it the string: Data not received.

const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  let responseFromServer;
  if(responseFromServer) {
    // Change this line
  } else {  
    // Change this line
  }
});

const makeServerRequest = new Promise((resolve, reject) => {
    let responnseFromServer;
    if (responnseFromServer) {
       resolve("We got the data");
    }
    else {
        reject("Data not received");
    }
    
});*/

/*          Handle a Fulfilled Promise with then
Promises are most useful when you have a process that takes an unknown amount of time in your code (i.e. something asynchronous), often a server request. When you make a server request it takes some amount of time, and after it completes you usually want to do something with the response from the server. This can be achieved by using the then method. The then method is executed immediately after your promise is fulfilled with resolve. Here’s an example:

myPromise.then(result => {

});
result comes from the argument given to resolved method.

Add the then method to your promise. Use result as the parameters of its fallback function log result to the console.
*/
const makeServerRequest = new Promise((resolved, reject) =>{
    let responseFromServer = true;
    if(responseFromServer) {
        resolved("We got the data")
    }
    else {
        reject("Data no receivd");
    }
    makeServerRequest.then(result => {
        console.log(result);
    })
});

/*      Handle a Rejected Promise with catch
catch is the method used when your promise has been rejected. It is executed immediately after a promise's reject method is called. Here’s the syntax:
            myPromise.catch(error => {

            });
            error is the argument passed in to the reject method.

Add the catch method to your promise.Use the error as the parameter of its callback function and log error to the console.
*/
 
const makeServerRequest1 = new Promise((resolve, reject) => {
    let responnseFromServer1 =true;
    if (responnseFromServer1) {
        resolve("Data received");
    }
    else {
        reject("Data not received");
    }
    makeServerRequest1.catch(error => {
        console.log(error);
    });
    makeServerRequest1.then(result => {
        console.log(result);
    })
})









