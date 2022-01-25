/*              Change the Prototype to a New Object

Up until now you have been  adding properties to the prototype individually:*/

function Bird(name) {
    this.name = name;
}

Bird.prototype.numLegs = 4;
// This becomes tedious after more than a few properties.

Bird.prototype.eat = function() {
    console.log("Nom nom nom");
}

Bird.prototype.describe = function() {
    console.log("My name is " + this.name);
}

/** A more a efficient way is to set the prototype to a new object that already contains the properties.
This way, theproperties are added all at once: */

function FootballLeague(name){
    this.name = name;
}

FootballLeague.prototype = {
    // constructor: FootballLeague, // Remember to always set the constructor Property when changing the prototype.
    numOfTeams : 20,
    country: "England & Wales",
    govBody: "The Football Association",
    describe: function() {
        console.log("The " + this.name + " is one finest football Leagues in Europe");
    }
};

let premierLeague = new FootballLeague("Premier League");
console.log(premierLeague.govBody);
console.log(premierLeague.describe());
/*::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

        Remember to Set the Constructor Property when Chenging the prototype to a new object.

It erases the constructor property! This property can be  used to check which constructor function created the instance, but since the property has been overwritten, it now gives false result:*/

console.log(premierLeague.constructor === FootballLeague) // false
console.log(premierLeague.constructor === Object) // true
console.log(premierLeague instanceof FootballLeague) // true

/* To fix this, whenever a prototype is manually set to a new object, remember to define the constructor property: */

FootballLeague.prototype = {
    constructor: FootballLeague,
    numOfTeams : 20,
    country: "England & Wales",
    govBody: "The Football Association",
    describe: function() {
        console.log("The " + this.name + " is one finest football Leagues in Europe");
    }
}

let pL= new FootballLeague("Premier League");
console.log("::::::::::::::::::::::::::::::::::::::");
console.log("constructor property is set this time round so will get: ", pL.constructor === FootballLeague) // true
console.log(pL.constructor === Object) // false
console.log(pL instanceof FootballLeague) // true
/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::;

                Understand Where an Object's Prototype Comes From

Just like people inherit genes from their parents, an object inherits its prototype directly from the 
constructor function that created it. For example, here the Bird constructor creates the duck object:*/

function Bird(name) {
    this.name = name;
}

let duck = new Bird('Donald');
// duck inherits its prototype from the Bird constructor function. You can show this relationship with the
// isPrototypeOf  method:

console.log(Bird.prototype.isPrototypeOf(duck)); /* true 
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

Understand the Prototype Chain

All objects in JavaScript (with a few exceptions) have a prototype. also an object's prototype itself is an object.

function Bird(name) {
    this.name = name;
}*/

console.log(typeof Bird.prototype); /* returns Object
Because a prototype is an object, a prototype  can have its own prototype! in this case, the prototype of 
Bird.prototype is Object.prototype:*/

console.log(Object.prototype.isPrototypeOf(Bird.prototype)); /* returns true
How is this useful? You may recall the hasOwnProperty method from a previous challenge:
 */
console.log(duck.hasOwnProperty("name")); /* returns true

The hasOwnProperty method is defined in Object.prototype, which can be accessed by Bird.prototype, 
which can then be accessed by duck. This is an example of thr prototype chain. In this ptrototype chain, 
Bird is  the supertype for duck, while duck is the subtype. Object is a supertype for both Bird and duck.
Object is a supertype for all objects in JavaScript. Therefore, any object can use  the hasOwnProperty 
method.

Modify the code to show the correct prototype chain.

function Dog1(name) {
  this.name = name;
}

let beagle1 = new Dog1("Snoopy");

Dog1.prototype.isPrototypeOf(beagle1);  // yields true

// Fix the code below so that it evaluates to true
???.isPrototypeOf(Dog1.prototype);*/

function Dog1(name) {
    this.name = name;
}

let beagle1 = new Dog1("Snoopy");

// Checks if beagle1 is prototype of Dog1;
console.log(Dog1.prototype.isPrototypeOf(beagle1)); // yeald true

console.log(Object.prototype.isPrototypeOf(Dog1.prototype));





