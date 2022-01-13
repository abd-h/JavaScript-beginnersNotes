/*              Access Property Names with Bracket Notation
In the first object challenge we mentioned the use of bracket notation as way to access property
values using the evaluation of a variable. For instance, imagine that our foods object is being
used in a program for a supermarket cash register. We have some function that sets the selectedFood 
and we want to check our foods object for the presence of that food. This might look like:  

let selectedFood = getCurrentFood(scannedItem);
let inventery = foods[selected];

This code will eveluate the value stored in the selectedFood variable and return the value of that 
key in the foods object, or undefined if it is not present. Bracket notation is very useful because sometimes 
object properties are not known before runtime or we need to access them in a more dynamic way.


We've defined a function, checkInventory, which receives a scanned item as an argument.
Return the current value of the scannedItem key in the foods object. assume that only valid keys will be 
provided as an argument to checkInventory.

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

function checkInventory(scannedItem) {
  // Only change code below this line

  // Only change code above this line
}

console.log(checkInventory("apples"));
*/

let foods = {
    apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

function checkInventory(scannedItem) {
    return foods[scannedItem];
}
console.log(checkInventory("bananas"));
/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

                        Use the delete Keyword to Remove Object Properties

Now you know what objects are and their basic features and advantages. In short, they are 
key-value stores which provide flexible, intuitive way to structure data, and, they provide
very fast lookup time. Throughout the rest of these challenges, we will describe several 
common operations you can perform on objects so you can become comfortable applying
these data structures in your programs.

In earlier challengs, we have both added to and modified an object's key-value pairs. 
Here we will see how we can remove a key-value pair from an object.

Let's revisit our foods object example one last time. If we wanted to remove the apples key, 
we can remove it by using the delete keyword like this:*/
delete foods.apples;
console.log(foods);

/* Use the delete keyword to remove the oranges, plums, and strawberries keys from the foods
object. */
delete foods.plums;
delete foods.oranges;
delete foods.strawberries;
console.log(foods);/* returns {bananas: 13, grapes: 35}
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

                        
                                Check if an Object has a property
Now we can add, modify, and remove keys from objects. But what if we just wanted to know if an 
object has a specific property? JavaScript provides us with different ways to do this. One uses the
hasOwnProperty() method and the other uses th in keyword. If we have an object users with a
property of Alan, we could check for its presence in either of the following ways.

users.hasOwnProperty("Alan");
"Alan" in users;
Both of these would return true;

Finish, writing the function so that it returns true if the object passed to it contains all four names,
Alan, Jeff, Sarah and Ryan and returns false otherwise.*/

let newUser = {
    Alan: {
        age: 27,
        online: true
    }, 
    Tom: {
        age: 43,
        online: true
    }
};

let users = {
        Blan: {
        age: 27,
        online: true
    },
    Alan: {
        age: 27,
        online: true
    },
    Jeff: {
        age: 32,
        online: true
    },
    Sarah: {
        age: 48,
        online: true
    },
    Ryan: {
        age: 19, 
        online: true
    }
};

// Checking if property can be found another object.
function comparing(newUser, users) {
    for(user in newUser) {
     if (user in users) {
         return users[user]
     }
    }
}
console.log(comparing(newUser, users));

function isEveryoneHere(userObj) {
    return ("Alan" in userObj &&"Sarah" in userObj && "Jeff" in userObj && "Ryan" in userObj)? true
              : false
}
console.log(isEveryoneHere(users)); /* returns true

                                Iterate Through the keys of an object with a for .... in Statement
Sometimes you may need to iterate through all the keys within an object. This requires a 
specific syntax in JavaScript called a for ... in statement. For our users object, this could 
look like:*/

for (let user in users) {
    console.log(user);
}
console.log("::::::::::::::::::::::::::::::::::::::::::::::::::::::::;;;");
/*This would Alan, Jeff, Sarah, and Ryan - each value on its ownline.

In this statement, we defined a variable user, and as you can see, this variable was reset 
during each iteration to each of the object's keys as the statement looped through the object,
resulting in each user's name being printed on the console.

None: Objects do not maintain an ordering to stored keys like arrays do; thus a key's position 
on an object, or the reletive order in which it appears, is irrelevent when referencing or accessing 
that key.

We've defined a function countOnline which accepts one argument (a users object).
Use a for...in statement within this function to loop through the users object passed into the 
function and return the number of users whose online property is set true. An example of a users object
which could be passed to countOnline is shown below. Each user will have an online property with either 
a true or false value.
const users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

function countOnline(usersObj) {
  // Only change code below this line

  // Only change code above this line
}

console.log(countOnline(users));  */

const users1 = {
    Alan: {
        online: false
    }, 
    Jef: {
        online: true
    }, 
    Sarah: {
        online: false
    }
};

function countOnline(usersObj) {
    let usersLength = [];
       for(user in usersObj) {
        if(usersObj[user]['online']) {
            usersLength.push(user);
        }
    }
    return usersLength.length
}
console.log(countOnline(users1)) // returns 1
 console.log(countOnline({ Alan: { online: true }, Jeff: { online: false }, Sarah: { online: true } })); // returns 2
 console.log(countOnline({ Alan: { online: false }, Jeff: { online: false }, Sarah: { online: false } }));
 /*::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
 
                        Generate an Array of All Object Keys with Object.keys()

We can also generate an array which contains all the keys stored in an object using 
the Object.keys() method and passing in an object as argument. This will return an array with strings representing each properties in the object. Again, there will be no specific order the enteries in an array.

Finish wrinting the getArrayOfUsers function so that it returns an array containing all the properties in the 
object it receives as an argument.

function getArrayOfUsers(obj) {
  // Only change code below this line

  // Only change code above this line
}
*/

const keyUsers = {
    Alan: {
        age: 27,
        online: false
    },
    Jeff: {
        age: 32,
        online: true
    },
    Sarah: {
        age: 32, 
        online: false
    },
    Ryan: {
        age: 19,
        online: true
    }
};

function getArrayOfUsers(obj) {
  return Object.keys(obj)
}
console.log(getArrayOfUsers(keyUsers));
 /*::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
 
                        Modify an Array Stored in an Object
Now you've seen all the basic oprations for JavaScript objects. You can add, modify, and
remove key-value pairs, check if keys exist, and iterate over all the keys in an object. As you 
continue learning JavaScript you will see even more versitile applications of objects. Additionally, 
the Data Structures lessons located in coding interview Prep section of the curriculum also over the
ES6 Map and Set objects, both of which are smililar to ordinary objects but provide some additional 
features. Now that you leatned the basics of arrays and objects, you're fully prepared to begin tackling 
more complex problems using JavaScript!

Take a look at the object we've provided in the code editor. The user object contains three keys. 
The data key contains five keys, one of which contains an array of friends. From this, you can see
how flexible objects are as data structures. We've started writing a function addFriend. Finish writing it 
so that it takes a user object and add the name of the friend argument to the array stored in user.data.friend
and returns that array.
 */

const users2 = {
    name: "Kenneth",
    age: 28,
    data: {
        username: "kennethCodesAllDay",
        joinDate: "March 26, 2016",
        organisation: "freeCodeCamp",
        friends: [
            "Sam",
            "Kira",
            "Tomo"
        ], 
        location: {
            city: "San Francisco",
            state: "California",
            country: "USA"
        }
    }
};

function addFriend(userObj, friend) {
    userObj.data.friends.push(friend);
    return userObj.data.friends;
}
console.log(addFriend(users2, "Peter"));