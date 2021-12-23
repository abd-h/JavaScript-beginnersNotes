/* Four ways to compare Objects in JavaScript

The Naive. The Simple. The Efficient. And The Hard Yet Beneficial to yourself

You probably think comparing two objects in JavaSctipt is easy. Well, it's easy for the primitive types, not for the objects.

Keep reading to see how hard it is and how you can take advantage of it to improve your coding skills.

1. Reference Identity

Let's say you just want to compare object references regardless of their content, then you can use 
the strick equality ("===") or the loose one ("==").

For example:
*/
let book1 = {
    title: "JavaScript"
};
let book2 = {
    title: "JavaScript"
}
let book3 = {
    title: "Kotlin"
};

let book4 = book1;
let book5 = book1;

// Checking for matching

console.log(book1 === book2); // false
console.log(book3 === book2); // false
console.log(book4 === book5); // false
/*  As you can see, the result book1 === book2 is false despite the equality of their 
content because they have different references.
The same for the book3 === book2.

And since book4 and book5 all point to the same object instance, book1, book4 === book5 us true.
Were rarely compare the object references in real projects. Most of the time, we want to compare the actual 
values inside the objects.

2.  Using JSON.stringify 
First, we convert the JavaScript objects to JSON strings and then compare those strings.

For example:*/
let person1 = {
    name: "Amy", 
    age: 28
};

let person2 = {
    name: "Amy",
    age: 28
};

let person3 = {
    name: "David",
    age: 28
};
const sameObjs = JSON.stringify(person1) === JSON.stringify(person2);
console.log(sameObjs); // returns true

const sameObjs2 = JSON.stringify(person3) === JSON.stringify(person1);
console.log(sameObjs2); // returns false

const sameObjs3 = JSON.stringify(person3) === JSON.stringify(person2);
console.log(sameObjs3); // returns false
/* In the example above, person1 and person2 have the same properties and values,
so JSON.stringify(person1) === JSON.stringify(person2) is true.

For person3, the property name has the different value from person1 and person2. As a result,
JSON.stringify(person3) === JSON.stringify(person1) is false and 
JSON.stringify(person3) === JSON.stringify(person2) is false. 

However, using JSON.stringify() to compare objects has one limitation. If  the properties of  
each object do not come in the same order, it doesn't work.

For example:*/
let newPerson1 = {
    age: 28, 
    name: "Amy"
};

let newPerson2 = {
    name: "Amy",
    age: 28
};
console.log(JSON.stringify(newPerson1) === newPerson2); /* 
newPerson1 and newPerson2 have the same properties and the same values.
The only difference is in newPerson1, the property age appears before name, meanwhile, in newPerson2
name comes before age. In this case, the result of the comparison is false.

3. Using Lodash
To make the comparison thing to be piece of cake, just leverage Lodash.
Let's take the above example in which JSON.stringify is useless and hand it over to Ladash:*/

let personI = {
    age: 28,
    name: "Amy"
};

let personII = {
    name: "Amy",
    age: 28
};
/*_.isEqual(personI, personII) returns true 

To compare two objects we must write a function to handle the complex task.
At first, you think the obvious way to compare two objects is iterating the list of properties
and then comparing their values. Ok lets go for that.*/

function isEqual(obj1, obj2) {
    let newObj = [];
    let props1 = Object.getOwnPropertyNames(obj1);
    let props2 = Object.getOwnPropertyNames(obj2);
    if(props1.length != props2.length) {
        return false;
    }
    for(let i = 0; i < props1.length; i++) {
        let props = props1[i];
        if(obj1[props] !== obj2[props]) {
            return false
        }
    }
    return true;
}
console.log(isEqual(personI, personII)); /* returns true
Not bad for the firs try, huh?
However, this function only works with flat objects, no for the nested ones.
for Example:
*/
let personNested1 = {
    age: 28, 
    name: "Amy",
    department: {
        id: 1,
        name: "DevOps"
    }
};
let personNested2 = {
    age: 28, 
    name: "Amy",
    department: {
        id: 1,
        name: "DevOps"
    }
};
console.log(isEqual(personNested1, personNested2)); /* returns false

Lets upgrade our function to a deep level*/

function isEqual2(obj1, obj2) {
    let props1 = Object.getOwnPropertyNames(obj1);
    let props2 = Object.getOwnPropertyNames(obj2);
   if(props1.length != props2.length) {
       return false
   }
   for(let i = 0; i < props1.length; i++) {
       let prop = props1[i];
       let bothAreObjects = typeof(obj1[prop]) === 'object' && typeof(obj2[prop]) === 'object';
       if((!bothAreObjects&& (obj1[prop] !== obj2[prop]))
       || (bothAreObjects && !isEqual2(obj1[prop], obj2[prop]))) {
           return false;
       }
   }
   return true;
}
console.log(isEqual2([
    { first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));

console.log(isEqual2(personNested1, personNested2)); //* returns true  





console.log("::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::");

function whatIsInAName4(collection, source) {
    let arr = [];
    let srcKey = Object.keys(source);
    console.log(srcKey);
    return collection.filter(a => {
         for(let i = 0; i < srcKey.length; i++) {
             if(!a.hasOwnProperty(srcKey[i]) || a[srcKey[i]] !== source[srcKey[i]]) {
                 return false;
             }
         }
         return true;
    })
   
}

function whatIsInAName2(collection, source) {
    let srcKey = Object.keys(source);
    return collection.filter(obj => {
        return srcKey
                    .map(key => {
                        return obj.hasOwnProperty(key) && obj[key] === source[key];
                    })
                    .reduce((a, b) => a && b);
    });
}

function whatIsInAName3(collection, source){
    let srcKey = Object.keys(source);
    return collection.filter(obj => {
        return srcKey
                    .map(key => {
                        return obj.hasOwnProperty(key) && obj[key] === source[key];
                    })
                    .reduce((a, b) => console.log(b))
    })
}
function whatIsInAName(collection, source){
    let sourceKey = Object.keys(source);
//    console.log(sourceKey);
   return collection.filter(obj => {
       return sourceKey.map(key => {
          return obj[key] === source[key];
       })
       .reduce((a, b) => {
           if(a){
               if(b){
                   return b
               }
           }
       })
   })
}
// console.log(whatIsInAName4([
//     { first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
console.log(whatIsInAName([
    { first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
console.log(whatIsInAName([
    { "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 })); 
//     //returns [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }]
console.log(whatIsInAName([
    { "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }],
    { "apple": 1, "bat": 2 }));
// //return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }
console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }));
console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 }));
console.log(whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3}));