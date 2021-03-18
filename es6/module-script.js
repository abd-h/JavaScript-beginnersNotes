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



