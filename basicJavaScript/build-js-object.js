/*            Build JavaScript Objects

You may have heard the term object before.

Object  are similar to arrays, except that instead of using index 
to access their data,you access the data in object through 
what are called properties.

Objects are usefull for storing data in a structured way, 
and can represent real world objects, like cat.

Example
 */

var cat = {
    "name" : "Whiskers",
    "legs": 4,
    "tail":1,
    "enemies": ["Water", "Dogs"]
};
// In this example, all the properties are stored as strings, 
such as - "name", "legs", and "tails". However, you can also use 
numbers as properties. You can even omit the quotes for 
single-word string properties, as follows:

var anotherObject = {
    make: "Ford",
    5: "Five",
    "Model": "Mondeo"
};
console.log(typeof anotherObject.make); // returns string
/*However, if your object has any non-string properties, 
JavaScript will automatically typecast them as strings.*/

var newLocal = {
    "name": "Yorshire Terrier",
    "legs": 4,
    "tails": 1,
    "friends": ["chiwawa", "other terriers"]
};
var myDog = newLocal;
console.log(myDog);

/*          Accessing Object Properties with Dot Notation

There are two ways to access the properties of an object: 
dot notation (.) and bracket notation ([]), similar to an array.

Dot notation is what you use when you know the name of the 
property you're trying to access ahead of time.

Here is a sample of using dot notation (.) to read an object's 
property:*/ 

var myObject = {
    prop1: "val1",
    prop2: "va12"
};
var prop1val1 = myObject.prop1; // Returns "val1"
var prop2val2 = myObject.prop2; // Reads "val2"
console.log(prop1val1, prop2val2);
/*prop1val would have a value of the string val1, 
and prop2val would have a value of the string val2.*/

var testObject = {
    "hat": "ballcap",
    "shirt":  "jersey",
    "shoes": "clean"
};
var hatValue = testObject.hat;
var shirtValue = testObject.shirt;
console.log(shirtValue);

// Accessing Object Properties with Bracket Notation

// The second way to access the properties of an object is bracket 
notation ([]). If the property of the object you are trying to 
access has a space in its name, you will need to use bracket 
notation.

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

            /* Accessing Objects with Properties with Veriables
 
Another  use of bracket notation on objects is access a property 
which is stored as value of veriable. This can be very useful 
for iterating through an object's properties or when accessing 
look up table.

     Eample 1 */

var dogs = {
    Fido: "Mutt",
    Hunter: "Doberman",
    Snoop : "Beagle"
};
var myDog1 = "Hunter";
var myBreed = dogs[myDog1]; 
console.log(myBreed); // "Doberman";

// Example 2
/*Another way you can use this concept is when the property's name 
is collected dynamically during the program execution, 
as follows: */

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

// Note that we do not use quotes around the variable name 
when using it to access the property because we are using 
the value of the variable, not the name.

var testObj = {
    12: "Namath",
    16: "Montana",
    19:"Unitas"
};
var playerNumber =16;
var player = testObj[playerNumber];
console.log(player); // Montana

/*          Updating Object Properties

After you've created a JavaScript object, you can update its 
properties at any time just like you would update any other 
variable. You can use either dot or bracket notation to update.

// For example, let's look at ourDog: */

var ourDog = {
    "name":  "Camper",
    "legs": 4,
    "tail": 1,
    "friends":  ["everything"]
};

// Since he's a particularly happy dog, let's change his name to 
"Happy Camper". Here's how we update his object's name 
property: 

ourDog.name = "Happy Camper"; or ourDog["name"] = "Happy Camper"; 

Now when we evaluate ourDog.name, instead of getting "Camper", 
we'll get his new name, "Happy Camper".

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
ourDog.bark = "Woof";
console.log(ourDog.diet="fresh lean meat");
ourDog["speed"] = "30 mph";
console.log(ourDog.speed);
console.log(ourDog)

//  We can delete properties from objects like this:

delete ourDog.diet;
console.log(ourDog);// deletes diet properties;
// ..........................................................

// Using Objects for Lookups

// Objects can be thought of as a key/value storage, 
like a dictionary. If you have tabular data, you can use 
an object to "lookup" values rather than a switch statement 
or an if/else chain. This is most useful when you know that 
your input data is limited to a certain range.

// Here is an example of a simple reverse alphabet lookup:

var alpha = {
    1: "Z",
    2: "Y",
    3: "X",
    4: "W",
    // ...
    24: "C",
    25: "B",
    26: "A"
};
alpha[2]; // returns "Y"
alpha[24]; // Returns C
var value = 2;
alpha[value];
console.log(alpha[value]);

function phonaticLookup(val) {
    var result4 = "";
    var lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank"
    };

    result4 = lookup[val];
    return result4
}
console.log(phonaticLookup("echo"));
var result4 = phonaticLookup("bravo");
console.log(result4);

/*          Testing Objects for Properties

Sometimes its useful to check if the property of given object exist 
or not. We can use the .hasOwnProperty(propname) method of objects 
to determine if that object has given property name. 

     .hasOwnProperty() returns true or false if the property is found or not.

// Example*/  

var myObj ={
    top: "hat",
    bottom: "pants"
};
console.log(myObj.hasOwnProperty("top")); // reads true
console.log(myObj.hasOwnProperty("middle")); // reads false

function checkObj(obj, checkProp) {
    if(obj.hasOwnProperty(checkProp)) {
        return obj[checkObj];
    }
    return "Not Found"
}

/*          Manipulating Complex Objects

Sometimes you may want to store data in a flexible Data Structure. 
A JavaScript object is one way to handle flexible data. They allow 
for arbitrary combinations of strings, numbers, booleans, arrays, 
functions, and objects.

// Here's an example of a complex data structure:*/ 

var ourMusic = [
    {
        "artist": "Daft Pank",
        "title": "Home Work",
        "release_year": 1997,
        "format": [
                "CD", "Cassette",
                "LP"
            ],
        "gold": true
    },
];
ourMusic.myMusic = {
    "artist": "MJ",
    "album": "thriller",
    "year": 1988,
    "format": [
        "Cassette",
        "CD",
        "LP"
    ],
    "gold" : true
}
console.log(ourMusic);

/* Accessing Nested Objects

The sub-properties of objects can be accessed by chaining together 
the dot or bracket notation.

// Here is a nested object:*/
var ourStorage = {
    "desk": {
        "drawer": "stapler"
    },
    "cabinet": {
        "top drawer": {
            "folder1": "a file",
            "folder2":  "secrets"
        },
        "bottom drawer": "soda"
    }
    
};
console.log(ourStorage.cabinet["top drawer"]["folder1"]);
console.log(ourStorage.cabinet["top drawer"]["folder2"]);
 
var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};


var gloveBoxContent = myStorage.car.inside["glove box"];
console.log(gloveBoxContent);

/*          Accessing Nested Arrays
As we have seen in earlier examples, objects can contain both nested objects and nested arrays. Similar to accessing nested objects, array bracket notation can be chained to access nested arrays.*/ 

// Example

var ourPet = [
    {
        animalType: "cat",
        names: [
            "Meowzer",
            "fluffy",
            "kit-cat"
        ]
    },
    {
        animalType: "dog",
        names: [
            "spot",
            "bowser",
            "frank"
        ]
    }
];
console.log(ourPet[0].names[1]);
console.log(ourPet[1].names[1]);

var myPlant = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];
var secondTree = myPlant[1].list[1];
console.log(secondTree);

// Record Collection
var collection = {
    2548: {
        albumTitle: "slippery when wet",
        artist: "Bon Jovi",
        tracks: ["Let It Rock", "You Give Love a Bad Name"]
    },
    2468:{
        albumTitle: "1999",
        artist: "Prince",
        tracks: ["1999", "Little Red Corvett"]
    },
    1245: {
        artist: "Robert Palmer",
        tracks: []
    },
    5439: {
        albumTitle: "ABBA GOLD"
    }
};

function updateRecords(object, id, prop, value) {
    if (prop !== "tracks" && value !=="") {
        object[id][prop]= value;
    }
    else if (prop == "tracks" && object[id].hasOwnProperty("tracks") === false) {
        object[id][prop] = value;
    }
    else if (prop ===  "tracks" && value !== "") {
        object[id][prop].push(value);
    }
    else if (value === "") {
        delete boject[id][prop];
    }
    return object;

}
console.log(updateRecords(collection, 5439, 'artist', 'ABBA'));





