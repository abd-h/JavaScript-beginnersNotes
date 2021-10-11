/*          Create Strings using Template Literals

A new feature of ES6 is the template literal. 
This is a special type of string that makes creating complex 
strings easier.

Template literals allow you to create multi-line strings 
and to use string interpolation features to create strings.

Consider the code below:*/
const person = {
    name: "Zodiac Hasbro",
    age: 56
};

const greetings = `Hello, my name is ${person.name}! 
                   and I am ${person.age} years old.`;
console.log(greetings);

/*The console will display the strings Hello, 
my name is Zodiac Hasbro! and I am 56 years old..

A lot of things happened there. Firstly, 
the example uses backticks (`), not quotes (' or "), 
to wrap the string. Secondly, notice that the string is multi-line,
both in the code and the output. This saves inserting \n within strings. 

The ${variable} syntax used above is a placeholder. 
Basically, you won't have to use concatenation with the + operator anymore. 
To add variables to strings, you just drop the variable in a 
template string and wrap it with ${ and }. 

Similarly, you can include other expressions in your string literal, 
for example ${a + b}. This new way of creating strings gives 
you more flexibility to create robust strings.

Use template literal syntax with backticks to create 
an array of list element (li) strings. 
Each list element's text should be one of the array elements 
from the failure property on the result object and have a 
class attribute with the value text-warning. 
The makeList function should return the array of list item strings.

Use an iterator method (any kind of loop) to get the desired 
output (shown below).

[
  '<li class="text-warning">no-var</li>',
  '<li class="text-warning">var-on-top</li>',
  '<li class="text-warning">linebreak</li>'
]

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  // Only change code below this line
  const failureItems = [];
  

  // Only change code above this line

  return failureItems;
}

const failuresList = makeList(result.failure);
*/
const  result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"], 
    skipped: ["noextra-semi", "no-dup-keys"]
};
function makeList(arr) {
    const failureItems = [];
    for (let i = 0; i <arr.length; i++){
        failureItems.push(`<li class="text-warning">${arr[i]}</li>`)
    }
    return failureItems
}
const failuresList = makeList(result.failure)
console.log(failuresList);

/*      Write Concise Object Literal Declarations 
        Using Object Property Shorthand

ES6 adds some nice support for easily defining object literals.

Consider the following code:
const getMousePosition = (x, y) => ({
    x: x,
    y: y
});
getMousePosition is a simple function that returns an object containing two properties. ES6 provides the syntactic sugar to eliminate the redundancy of having to write x: x. You can simply write x once, and it will be converted tox: x (or something equivalent) under the hood. Here is the same function from above rewritten to use this new syntax:*/

const getMousePosition = (x, y) => ({x, y});
console.log(getMousePosition("twenty third", "No 10"));

/* Use object property shorthand with object 
literals to create and return an object with name, 
age and gender properties.

const createPerson = (name, age, gender) => {
  // Only change code below this line
  return {
    name: name,
    age: age,
    gender: gender
  };
  // Only change code above this line
};*/
const createPerson = (name, age, gender) => ({name, age, gender});
console.log(createPerson("James Bond",  34, "Male") );

/*          Write Concise Declarative Functions with ES6

When defining functions within objects in ES5, 
we have to use the keyword function as follows:*/
const person1 = {
    name: "Thomas",
    sayHello: function () {
        return `Hello My name ${this.name}.`;
    }
};
const greeter =person1.sayHello();
console.log(greeter);

/*With ES6, you can remove the function keyword and colon 
altogether when defining functions in objects. 
Here's an example of this syntax:*/
 
const person2 = {
    name: "Nicholas Anelka",
    age: 34,
    sayHi () {
        return `Hi my names ${this.name}.`;
    }  
};

/* Refactor the function setGear inside the object bicycle 
to use the shorthand syntax described above.
// Only change code below this line
const bicycle = {
  gear: 2,
  setGear: function(newGear) {
    this.gear = newGear;
  }
};
// Only change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);*/
const bicycle = {
    gear: 2,
    setGear (newGear) {
        return `${this.gear = newGear}.`
    }
};
bicycle.setGear(3);
console.log(bicycle.gear);
