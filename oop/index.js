/*          Create a Basic JavaScript Object

Think about things people see every day, like cars, shops, and birds. 
Thses are all object: tangible things people can observe and interact with.

What are some qualities of these objects? A car has wheels. Shops sell items. 
Birds have wings.

These qualities, or properties, define what makes up an object. Note that similar objects share 
the same properties, but may have different values for those properties. For example, all cars 
have wheels, but not all cars have the same number of wheels.

Objects in JavaScript are used to model real-world objects, giving them properties and behavior 
just like their real-world counterparts. Here's an example using these concepts to create a duck object:*/
let duck = {
    name: "Aflac", 
    numLegs: 2
};
/*This duck object has two propertu/value pairs: a name of Aflac and a numLegs of  2.

Create adog object with name and numLegs properties, and set them to to astrung and 
a number, respectively.
*/
let dog = {
    name: "Tisotti", 
    numLegs: 4
};
/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
 
                    Use Dot Notation to Access the Properties of an Object
The last challenge created an object with various properties. Now you'll see
how to access the values of those properties. Here's an example:
*/
console.log(duck.name); // returns Aflac
/* Dot notation is used on the object name, duck, followed by the nane of the property, name, 
to access the value of Aflac.

Print both properties of the dog object to your console 
 */
console.log(dog.name, dog.numLegs); /* Tissoti 4 
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

                    Create a Method on an Object
                    
Objects can have a spcial type of property,  called a method.

Methods are properties that are functions. This adds different behavior to an object. 
Her is the duck example with a method:
*/

duck.sayName = function() {
    return "The name of this duck is " + duck.name + ".";
}
console.log(duck.sayName());

/*The example adds the sayName method, which is a fucntion that returns a sentence giving
the name of the duck 

Notice that the method accessed the name property in the return statement using duck.name.
The next challenge will cover another way to do this.

Using the dog object, give it a method called sayLegs. The method should return the sentence 
This dog has 4 legs.
*/

dog.sayLegs = () => `This dog has ${dog.numLegs} legs`;
console.log(dog.sayLegs());

/*::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::;::::::::::::::::::::::::::::::

                    Make Code More Reusable with the this Keyword

The last challeng introduced  a method to the duck object. It used duck.name dot notation to access the value
for the name property within the return statement:

sayNmae: function() {return "The name of this duck is " + duck.name + "."}

While this is avalid way to access the object's property, there is a pitfall here. If the variable name changes, any code referencing the original name would need to be updatedas well. In a short object 
defunution, it  isn't a problem, but if an object has many references to its properties there is a greater chance for error.

Away to avoid these issues is with the this keyword*/

let eagle = {
    name: "Eagle Eye",
    numLegs: 2, 
    sayName(){
        return `The name of this duck is ${this.name}.`
    }
};
console.log(eagle.sayName()); /* returns The name of this duck is Eagle Eye.

this is a deep topic, and the obove example is only one way to use it. In the current context, this refers to 
the object that the method is associated with: duck. If the object's name is changed to mallard, it is not necessary to find all the references to eagle in the code. It makes the code reusable and easier to read.

Modigy the newDog sayLegs method to remove any references to newDog. Use the eagle example for guidance.*/
let newDog = {
  name: "Spotty",
  numLegs: 4, 
  sayLegs() {
    return  `This dog has ${this.numLegs} legs.`
  }
};
console.log(newDog.sayLegs());