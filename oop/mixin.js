/*                  Use a Mixin to Add Common Behavior Between Rnrelated Objects

As you have seen, behavior is shared through inheritance. However, there are cases 
when inheritance is not the best solution. Inheritance does not work well for unrelated 
objects like Bird and Airplane. They can both fly, but abird is not a type of Airplane and 
vice versa.

For unrelated objects, it's better to use mixins. A mixin allows other objects to use 
a collection of fuctions.*/

let flyMixin = function(obj) {
    return obj.fly =  function() {
        return"Flying Woooosh!";
    }
};

let bird = {
    name: "Donald",
    numLegs: 2
};

let plane = {
    model: 777,
    numPassengers: 524
};

flyMixin(bird);
flyMixin(plane);

/* Here bird and plane are passed into flyMixin, which then assings the fly function to each object.
now bird and plane can both fly: */

console.log(bird.fly()); // returns Flying Woooosh!
console.log(plane.fly()); // returns Flying Woooosh!

/* Note how the mixin allows for the same fly method to be reused by unrelated objects bird and plane.

Create a mkixin named glideMixin that defines a method name glide. Then use the glideMixin to give 
both bird and boat ability to glide.*/
let boat = {
    name: "Warrior",
    type: "Speed Boat"
};

let glideMixin = function(obj) {
    return obj.glide = () => "I have the ability to glide";
}
glideMixin(bird);
glideMixin(boat);

console.log(bird.glide()); // returns "I have the ability to glide"
console.log(boat.glide()); // returns "I have the ability to glide"
/*;:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

                Use Closure to Protect Properties Within an Object from Being Modified Externally

In the previous challenge, bird had a public property name. It is considered public because it can 
be accessed and changed outside of bird's definition.  */

console.log(bird.name); // returns Donald as shown as set in line 18;

// able to change at will 
bird.name = "Duffy";
console.log(bird.name);// returns "Duffy"

/* Therefore, any part of your code can easily change the name of bird to any value.
Think about thing like passwords and bank account being easily changeable by any 
part of your codebase. That could cause a lot of  issues.

The simplest way to make this public property private is by creating a variable within 
the constructor funtion. This changes the scoper of that variable to be within the constructor 
function versus avariable globally. This way, the variable can only be accessed and changed 
by methods also within the constructor function.*/

function Bird() {
    let hatchedEgg = 10;
    
    this.getHatchedEggCount = (() => hatchedEgg)

}

let ducky = new Bird();
console.log(ducky.getHatchedEggCount()); /* returns 10

Here getHatchedEggCount is a privalege method, because it has access to the private variable hatchedEgg.
This is possible because hatchedEgg is declared in the same context as getHatchedEggCount. In JavaScript, 
a function always has access to the context in which it was created. This is called closure.

Change how weight is declared in the Bird2 function so it is a private variable. then, create a method
getWeight that returns the value of weight 15

function Bird2() {
  this.weight = 15;
}
*/

function Bird2() {
    let weight = 15;

    this.getWeight = (() => weight)
}

let crow = new Bird2();
console.log(crow.getWeight());