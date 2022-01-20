/*                          Define a Constructor Function            

Construcors are functions that create new objects. They define properties and behaviors 
that will belong to the new object. Think of them as a blueprint for the creation of new objects.

Here is an example of a constructor:*/

function Bird(){
    this.name = "Albert";
    this.color = "blue";
    this.numLegs = 2;
}
/* This constructor defines a Bird object with properties name, color, and numLegs set to  Albert, blue and 
2 respectively. Constructors follow a few conventions:

    1.  Constructors are defined with a capitalized name to distinguish them from other functions that are not constructors.

    2.  Constructors use the keyword this to set properties of the object they will create. Inside the constructor, this refers to the new object it will create.
    
    3.  Constructors define properties and behaviors instead of returning a value as other function might.

    Creat a constructor, dog with ptoperties name, color and numLegs that are set to a string, a string and
    a number respectively.
    */

    function Dog() {
        this.name = "Terrier";
        this.color = "White";
        this.numLegs = 4;
    }

/*              Use a Constructor to Create Objects

Here's the Bird constructor from the previous challenge:*/

let blueBird = new Bird();
/* NOTE: this inside the constructor always refers  to the object being created.

Notice that new operator is used when calling a constructor. This tells JavaScript to create a new instantce of Bird called blueBird. Without the new operator, this inside the constructor would not point to the 
newly created object, giving unexpected results. Now blueBied has all the properties defined inside the Bird constructor:*/
console.log(blueBird.name);
console.log(blueBird.color);
console.log(blueBird.numLegs);
// Just like any other other object, its properties can be accessed and modified:

blueBird.name = "Elvira";
console.log(blueBird.name);

// Use the Dog constructor from the last lesson to reate a new instance of Dog, 
//assigning it to a variable hound

let hound = new Dog();
console.log(hound);
/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

                    Extend Constructors to Recieve Arguments

The Bird and Dog constructors from the laslt challenge worked well. However, notice that all
Birds that are created with the Bird constructor are automatically named Alber, are blue in color and have two legs. What if you want birdsd with different values for name and color? it's possible to change the properties of each bird manually but that would be a lot of work.*/
let swan = new Bird();
swan.name = "Carlos";
swan.color = "white";
/*
Suppose you were writing a program to keep track of hundreds or even thousands of different birds in an 
aviary. it would take a lot of time to create all the birds, then change the propertiesto different values
for every one. To more easily create different bird objects, you can design your bird constructor 
to accept parameters: */

function Birds(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 2;
}
/* Then pass in the values as arguments to difine each unique bird into the Bied constructor: */

let cardinal = new Birds("Bruce", "Red");
console.log(cardinal);
/* This gives a new instance of  Birds with name and color properties set to Bruce and Red
respectively. The numLegs property is still set to 2. The cardinal has these properties: */

console.log(cardinal.name);
console.log(cardinal.color);
console.log(cardinal.numLegs);

/* The constructor is more flexible. It's now possible to define the prperties for each Bird
at the time it is created, which is one way that javeScript constructors are so useful. 
They goup objects together based on shared characteristics and behavior and define a blueprint
that automates their creation.

Create another Dog constructor. This time, set it up to make the parameters name and color,
and have the propertu muLegs fixed at 4. Then create a new Fog saved in a variable terrier. 
pass it two strings as arguments for the name and color properties*/

function Dog2(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
}

let terrier2 = new Birds("Stocky", "Brown");
/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

                Verify an Object's Constructor with instanceof

Anytime a constructor function creates a new object, that is said to be an instance of its constructor. 
JavaScript gives a convenient way to verify this with the instanceof operator. instanceof allows you to compare an object to a constructor, returning true or false based on whether or not that object was 
created with the constructor. Here's an example:*/

let Bird2 = function(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
}
let crow = new Bird2("Alex", "black");
console.log(crow instanceof Bird2);

// If an object is created without using a constructor, instanceof will verfy that it is not an instance of that constructor:

let canary = {
    name: "Mildred",
    color: "Yellow",
    numLegs: 2
};

console.log(canary instanceof Bird2);
/* This instanceof method would return false

Create a new instance of the house constructor, calling it myHouse and passing a number of bedfooms.
Then, use instanceof to verify that it is an instance of House.*/

function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
}

let myHouse = new House(3);
console.log(myHouse instanceof House);