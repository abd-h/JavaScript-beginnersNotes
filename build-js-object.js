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

//  Accessing Objects with Properties with Veriables
 
// Another  use of bracket notation on objects is access a property which is stored as value of veriable. This can be very useful for iterating through an object's properties or when accessing look up table.

//  Eample 1

var dogs = {
    Fido: "Mutt",
    Hunter: "Doberman",
    Snoop : "Beagle"
};
var myDog1 = "Hunter";
var myBreed = dogs[myDog1]; 
console.log(myBreed); // "Doberman";

// Example 2

var someObj = {
    propName: "John"
};
function propPrefix(str) {
    var s = "prop";
    return s + str;
}
console.log(propPrefix("Name"));
var someProp = propPrefix("Name");
console.log(someObj[someProp]);

// Note that we do not use quotes around the variable name when using it to access the property because we are using the value of the variable, not the name.

var testObj = {
    12: "Namath",
    16: "Montana",
    19:"Unitas"
};
var playerNumber =16;
var player = testObj[playerNumber];
console.log(player); // Montana

// Updating Object Properties

// After you've created a JavaScript object, you can update its properties at any time just like you would update any other variable. You can use either dot or bracket notation to update.

// For example, let's look at ourDog:

var ourDog = {
    "name":  "Camper",
    "legs": 4,
    "tail": 1,
    "friends":  ["everything"]
};

// Since he's a particularly happy dog, let's change his name to "Happy Camper". Here's how we update his object's name property: ourDog.name = "Happy Camper"; or ourDog["name"] = "Happy Camper"; Now when we evaluate ourDog.name, instead of getting "Camper", we'll get his new name, "Happy Camper".

// Adding New properties to ourDog object:

ourDog["Usual Owner's"] = "Young Adults";

console.log(ourDog);
//  Reads
// ourDog = {
//     "name":  "Camper",
//     "legs": 4,
//     "tail": 1,
//     "friends":  ["everything"],
//      "Usual Owner":  "Young Adults"
// };

// Changing the whole ourDog object;

ourDog= {
    Terrier: "fearsome",
    speed: "25 mph",
    distance: "5 miles",
    diet: "lean Meat"
};
console.log(ourDog.diet="fresh lean meat");
ourDog["speed"] = "30 mph";
console.log(ourDog.speed);











