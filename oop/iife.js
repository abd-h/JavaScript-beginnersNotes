/*              Understanf theImmediately Invoked Function Expression (IIFE)

A common pattern in JavaScript is to excute a function as soon as it is declared:*/


(function() {
    console.log("Chirp, Chirp, Chirp");
})();


// or  arrow function
(() => console.log("Chirp, Chirp"))();

/* This is an anonymous function expression that executes right away, and outputs Chirp, Chirp immedietely.

Note that the function has no name and is not stored in a variable. The two parantheses () ar the end of the 
function expression cause it to be immediately executed or invoked. This pattern is known as an ummediately invoked function expression or IIFE.

Rewrite the function makeNest and remove its call so instead its an anonymous immediately invoked function expression (IIFE).

function makeNest() {
  console.log("A cozy nest is ready");
}

makeNest();*/

(function() {
    console.log("A cozy nest is ready");
})()


