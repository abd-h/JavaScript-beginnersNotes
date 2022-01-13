/*              Add Key-Value Pairs to JavaScript Objects
At their most basic, objects are just collections of key-value pairs.
In other words, they are peices of data (values) mapped to unique
identifiers called properties (keys). Take a look at an example: */
const takkenCharacter = {
    player: "Hwoarang", 
    fightingStyle: "Tae Kwon Doe",
    human: true 
}; 
/* The above code defines a Takken video game character object called 
takkenCharacter. It has three properties, each of which map to a specific 
value. If you want to add an additional property, such as "origin", 
it can be done by assingning origin to the object: */

takkenCharacter.origin = "South Korea";
/* This uses dot notation. If you were to observe the takkenCharacter object, 
it will now include the origin property.  Hwoarang also had distinct har. 
You can add this property with bracket notation by doing: */

takkenCharacter["hair color"] = "dyed orange";
/* Bracket notation is required if your property has a space in it or if you want to  
use a variable to name the property. in the above case, the property is enclosed in 
quotes to denote it as a string and will be added exactly as shown. Without the quotes,
it will be evaluated as a variable and the name of the property will be whatever value 
the variable is. Here is an example: */

const eyes = "eye color";

takkenCharacter[eyes] = "brown";
console.log(takkenCharacter);
/* After adding all the example, the object will look like this: 
{
  player: 'Hwoarang',
  fightingStyle: 'Tae Kwon Doe',
  human: true,
  origin: 'South Korea',
  'hair color': 'dyed orange',
  'eye color': 'brown'
};

A food object has been created with three entries. Using the syntax of your 
choice, add three more entries to it: banana with the value of 13, grapes with
the value of 35, and strawburries with the value of 27.

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};

// Only change code below this line

// Only change code above this line

console.log(foods);*/

let foods = {
    apples: 25, 
    oranges: 32,
    plums: 28
};

foods["banana"] = 13;
foods.grapes = 35;
foods.strawberries = 27;

console.log(foods); /*
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

                Modify an Object Nested Within an Object
Now let's take a look at a slightly more complex object. Objects properties 
can be nested to an arbitrary depth, and their values can be any type of data 
supported by JavaSctipt, including arrays and even other objects. consider the 
following: */

let nestedObject = {
    id: 288026951564,
    date: "December 31, 2016", 
    data: {
        totalUsers: 99,
        online: 80,
        onlineStatus: {
            active: 67,
            away: 13, 
            busy: 8
        }
    }
}; /*
nestedObject has three properties: id (value is number), date (value is string), 
and data (value is an object with nested structure). While structure can quickly 
become complex, we can still use the same notation to access the information we need. 
To assign the value 10 to the busy property of the nested onlineStatus object, we use 
the dot notation to reference the property: */

nestedObject.data.onlineStatus.busy = 10;
console.log(nestedObject.data.onlineStatus.busy); /* returns 10;

Here we've defined an object userActivity, which incluedes another object nested within it.
set the value of the value of the online key to 45.
let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};

// Only change code below this line

// Only change code above this line

console.log(userActivity);
*/
let userActivity = {
    id: 23894201352, 
    date: "January 1, 2017",
    data: {
        totalUsers: 51,
        online: 42 
    }
};

userActivity.data.online = 45;
console.log(userActivity.data.online);

