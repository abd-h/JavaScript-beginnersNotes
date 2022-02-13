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
})();
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

function Animal() { };

Animal.prototype = {
    constructor: Animal,
    isApex: true,

}

function BigCat(name, location, speed) {
    this.name = name;
    this.location = location;  
    this.speed = speed; 
}

BigCat.prototype = Object.create(Animal.prototype);
BigCat.prototype.constructor = BigCat;

let lion = new BigCat("Lion", "Eastern Africa", "35mph");
console.log(lion.isApex); // returns true

 /*                           Use an IIFE to Create a Module

An immediately invoked function expression (IIFE) is often used to group related functionality 
into a single object or module. For example, an earlier challenge defined two mixins:*/

function glideMixin(obj) {
    return obj.glide = function() {
        return "Gliding on water";
    }
}
 
function flyMixin(obj) {
    return obj.fly = function() {
        return "Flying, woooosh";
    };
}

// We can group these mixins into a module as follows:

let motionModule = (() => {
    return {
        glideMixin(obj) {
            return obj.glide = (string) => string;
        },
        flyMixin(obj) {
            return obj.fly = (str) => str;
        }
    }
})();

/* Note that you have an immediately invoked function expression (IIFE) that returns an object motionModule.
This returned object contains all og the mixin behaviors as properties of the object. The advantage of the module 
pattern is that all of the motion behaviors can be packaged into a single object that can then be used by other parts
of your code. Here is an example using it: */

motionModule.glideMixin(lion);
motionModule.flyMixin(lion)
console.log(lion.glide("Gliding through air"));
console.log(lion.fly("I can't fly, but I'm super fast!"));

//                  ****            The End         ****





