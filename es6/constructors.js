/*          Use class Syntax to Define a Constructor Function
ES6 provides a new syntax to create objects, using the class keyword.

It should be noted that the class syntax is just syntax, and not a full-fledged class-based implementation of an object-oriented paradigm, unlike in languages such as Java, Python, Ruby, etc.

In ES5, we usually define a constructor function and use the new keyword to instantiate an object. 

var spaceShuttle = function(targetPlanet) {
    this.targetPlanet = targetPlanet;
}
var zeus = spaceShuttle('Jupiter');
The class syntax simplyreplacesthe constructor function creation*/

            class SpaceShuttle {
                constructor(targetPlanet) {
                    this.targetPlanet = targetPlanet;
                }
            }
            const zeus = new SpaceShuttle('Jupiter');
            console.log(zeus.targetPlanet);

/*It should be noted that the class keyword declares a new function, to which a constructor is added. This constructor is invoked when new is called to create a new object.

Note: UpperCamelCase should be used by convention for ES6 class names, as in SpaceShuttle used above.

The constructor method is a special method for creating and initializing an object created with a class. You will learn more about it in the Object Oriented Programming section of the JavaScript Algorithms And Data Structures Certification.

Use the class keyword and write a constructor to create the Vegetable class.

The Vegetable class allows you to create a vegetable object with a property name that gets passed to the constructor.*/

class Vegetable {
    constructor (name) {
        this.name = name;
    }
}

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot';

/*          Use getters and setters to Control Access to an Object
You can obtain values from an object and set the value of a property within an object.

These are classically called getters and setters.

Getter functions are meant to simply return (get) the value of an object's private variable to the user without the user directly accessing the private variable.

Setter functions are meant to modify (set) the value of an object's private variable based on the value passed into the setter function. This change could involve calculations, or even overwriting the previous value completely.*/

class Book {
    constructor (author) {
        this._author = author;
    }
    //getter
    get writer (){
        return this._author;
    }
    // setter 
    set writer(updateAuthor){
        this._aurthor = updateAuthor;
    }
}
const novel = new Book("Kill Zone");
console.log(novel.writer);

/*The console would display the strings anonymous and newAuthor.

Notice the syntax used to invoke the getter and setter. They do not even look like functions. 
Getters and setters are important because they hide internal implementation details.

Note: It is convention to precede the name of a private variable with an underscore (_). 
However, the practice itself does not make a variable private.

...............................................................................................................

Use the class keyword to create a Thermostat class. 
The constructor accepts a Fahrenheit temperature.

In the class, create a getter to obtain the temperature in Celsius and a setter to set the temperature in Celsius.

Remember that C = 5/9 * (F - 32) and F = C * 9.0 / 5 + 32, where F is the value of temperature in Fahrenheit, and C is the value of the same temperature in Celsius.

Note: When you implement this, you will track the temperature inside the class in one scale, either Fahrenheit or Celsius.

This is the power of a getter and a setter. You are creating an API for another user, who can get the correct result regardless of which one you track.

In other words, you are abstracting implementation details from the user.

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius*/

class Thermostat {
    constructor(Fahrenheit){
        this.Fahrenheit = Fahrenheit;
    }
    //getters
    get temperature () {
       return (5 / 9) * (this.Fahrenheit -32);
    }
    //setter
    set temperature(Celsius) {
       this.Fahrenheit = (Celsius * 9.0) / 5 + 32;
      
    }
}
const thermos  = new Thermostat(76);

let temp = thermos.temperature;

thermos.temperature = 26;
temp =thermos.temperature; 
console.log(temp);

