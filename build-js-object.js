// Build JavaScript Objects
// You may have heard the term object before.

// Object  are similar to arrays, except that instead of using index to access their date, you access the data tin object through what are called properties.
// Objects are usefull for storing data in a structured way, and can represent real world objects, like cat.

// Example

var cat = {
    "name" : "Whiskers",
    "legs": 4,
    "tail":1,
    "enemies": ["Water", "Dogs"]
};
// In this example, all the properties are stored as strings, such as - "name", "legs", and "tails". However, you can also use numbers as properties. You can even omit the quotes for single-word string properties, as follows:

var anotherObject = {
    make: "Ford",
    5: "Five",
    "Model": "Mondeo"
};

var newLocal = {
    "name": "Yorshire Terrier",
    "legs": 4,
    "tails": 1,
    "friends": ["chiwawa", "other terriers"]
};
var myDog = newLocal;
console.log(myDog);

// Accessing Object Properties with Dot Notation

// There are two ways to access the properties of an object: dot notation (.) and bracket notation ([]), similar to an array.

// Dot notation is what you use when you know the name of the property you're trying to access ahead of time.

// Here is a sample of using dot notation (.) to read an object's property:

var myObject = {
    prop1: "val1",
    prop2: "va12"
};
var prop1val1 = myObject.prop1; // Returns "val1"
var prop2val2 = myObject.prop2; // Reads "val2"
console.log(prop1val1, prop2val2);

var testObject = {
    "hat": "ballcap",
    "shirt":  "jersey",
    "shoes": "clean"
};
var hatValue = testObject.hat;
var shirtValue = testObject.shirt;
console.log(shirtValue);

// Accessing Object Properties with Bracket Notation

// The second way to access the properties of an object is bracket notation ([]). If the property of the object you are trying to access has a space in its name, you will need to use bracket notation.

// Example

var myOutWear = {
    attire: "Formal",
    type: "Two Peice Suit",
    color: "Charcoal",
    "FootWear": "Shoes",
    "Footwear Color": "Dark Brown"
};
var footwear = myOutWear['FootWear'];
console.log(typeof myOutWear);

var testObject1 = {
    "an entree": "humberger",
    "my side": "veggies",
    "the drink": "water"
};

var entreeValue = testObject1["an entree"];
var drinkValue = testObject1["the drink"];
console.log(entreeValue, drinkValue);






