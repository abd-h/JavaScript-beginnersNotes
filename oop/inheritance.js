/*          Use Inheritance So You Don't Repeat Yourself

There's a pronciple in programming called Don't Repeat Yourself(DRY). 
The reason repeated code is a  problem is because any change requires 
fixing code in multiple places. this useally means more work fo programmers
and more room for errors.

Notice in the example below that the describe method is shared by Bird and Dog:*/

function Bird(name) {
    this.name = name; // own property
}
// prototype property
Bird.prototype = {
    constructor: Bird, // constructor is set
    describe() {
        return `My name is ${this.name}`;
    }
};

function Dog(name) {
    this.name = name // own property
}
// prototype property
Dog.prototype = {
    constructor: Dog, // constructor is reset
    describe() {
        return `My name is ${this.name}`
    }
}

// The describe method is repeated in two places. The code can be edited to 
// follow the DRY principle by creating a supertype (or parent) called Animal:

function Animal() { };

Animal.prototype = {
    constructor: Animal, 
    name: function(name) {
        return name;
    },
    discribe() {
        return  `These are not preditors`
    },
    eat(foodtype) {
    return `${foodtype} is delicious`
    }
};

// Since Animal contains describe method, you can remove  it from Bird and Dog:

Bird.prototype = {
    constructor: Bird
};

Dog.prototype = {
    constructor: Dog
};


/*              Inhrit Behaviors from a Supertype

In the previous challenge, you created a supertype called Animal that defined 
behaviors shared by all animals: 

function Animal() { }
Animal.prototype.eat(){
    return `nom nom nom`
};

This and the next challenge will cover how to reuse the methods of Animal inside Bird and Dog 
without defining them again. It uses a technique called inheritance. This challenge covers  the 
first step: make an instance of the supertype (or parent). You already know one way to create an 
instance of Animal using the new operator:*/

let animal = new Animal();
// Tere are some disadvanages when this syntax for ingeritance, which are too conplex
// for the scopre of this challenge. Instead, here's an alternative approach without those disadvantages:

let animal1 = Object.create(Animal.prototype);
/* Object.cteate(obj) creates a neew objext, and sets obj as the new objext's prototype.
REcall that the prototype is like  the "recipe"  for creating an object. By setting the prototype of animal to be the prototype of Animal, you are effectively giving the animal instance the sane "recipe" as ahy other 
instance of Animal. */

console.log(animal1.eat("Pizza")); // returns pizza is delicious
console.log(animal instanceof Animal); // The instanceof method would return true.
/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

                    Set the Child's Prototype to an Instance of the Parent

In the previous challeng you saw the first step for inheriting behavior from the supertype (or parent)
Animal: making a new instance of Animal.

This challenge covers the next step: set the prototype of the subtype (or child)- in this case, Bird-to be an 
insstance of Animal.*/

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);
// Remember that the prototype is like the "recipe" for creating an object. In a way, the recipe for Bird now 
// includes all the key "ingredients" from Animal.

let duck = new Bird("Donald Duck");
console.log(duck.eat("Sandwitch"));
/* duck inherits all of Animal's properties, including the eat method. 
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

                Reset an Inherited Constructor Property
When an object inherits its prototype from another object, it also inherits the supertype's xonstructor 
property.

Here's an example: */

function Birds() { };
Birds.prototype = Object.create(Animal.prototype);
let eagle = new Birds();
Birds.prototype.constructor = Birds
eagle.constructor; /* 
But duck and all instance of Bird should show that they were constructed by  Bird
and not Animal. to do so, you can manually ser the constructor property of Bird to
the Bird object:
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

                Add Methods After Inheritance

A constructor function that inherits its prototype object from a asupertype constructor function can still have its own methods in addition to inherited methods.

For example, Bird is a constructor that inheritss its prototype from Animal2:*/

function Animal3() { };
Animal.prototype.eat = function() {
    return "nom nom nom";
};

function Bird3() { };
Bird3.prototype = Object.create(Animal.prototype);
Bird3.prototype.constructor = Bird3;
/* In addition to what is inherited from Animal, you want to add behavior that is unique to 
Bird objects. Here, Bird will get a fly() function. Functions are added to Bird's prototype the 
same wat as any constructor function: */

Bird3.prototype.fly = function() {
    return `Woosh, I'm flying`;
};
// Now instances of Bird3 will have both eat() and fly() methods;

let duck3 = new Bird3();
console.log(duck3.eat()); // returns nom nom nom
console.log(duck3.fly()); // flying woosh
console.log(duck3.name("Donald"));
console.log(duck3.discribe()); // These are not preditors
/**::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::;
 
            Override Inherited Methods

In previous lessons, you learned that an object can inherit its behavior (methods) from another object 
by referencing its prototypr object:

ChildObject.prototype = Object.create(ParentObject.prototype);
Then the ChildObject received its own methods by chaining them into its prototype:

ChildObject.prototype.methodName = fuction() {...};
It's possible to override an inherited method. It's done  the same way - by adding a method 
to ChildObject.prototype using the same name as the one tone to override. Here's an example 
of Bird overriding the eat() method inherited from the Animal: 

function Animal() { }
Animal.prototype.eat = function() {
    return "nom nom nom";
}

function Bird() { }

Bird.prototype = Object.create(Animal.prototype) 
 */
Bird3.prototype.eat = function() {
    return "Peck Peck Peck"
}
/* If you have an instance let duck = new Bird3(); and you call duck.eat(), this is how 
 JavaScript looks for the method on the prototype chain of duck.

duck => Is eat() defined here? No.
Bird => Is eat() defined here? => Yes. Execute it and stop searching.
Animal => eat() is also defined, but JavaScript stopped searching before reaching this level.
Object => JavaScript stopped searching before reaching this level.


Override the fly() method for Penguin so thatit returns the string Alas, this is a flighless bird.

function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Only change code below this line



// Only change code above this line

let penguin = new Penguin();
console.log(penguin.fly());

 */

function Birdf() { };

Birdf.prototype.fly = function() {
    return "Flying"
}

function Penguin() { };

Penguin.prototype = Object.create(Birdf.prototype);
Penguin.prototype.constructor = Penguin;

Penguin.prototype.fly = function() {
    return "Alas this is flightless Bird";
};

let penguin = new Penguin();
console.log(penguin.fly());






