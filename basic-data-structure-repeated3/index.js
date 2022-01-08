/*          Use an Array to Store a Collection of Data
The below is an example of the simplest implementation of an array data structure.
This is known as a one-dimensional array, meaning it only has one level, or that it
does not have any other arrays nested within it. Notice it contains booleans, strings 
and numbers among other valid JavaScript data types: */

let simpleArray = ['one', 2, 'three', true, false, undefined, null];
console.log(simpleArray.length);
/* The console.log call display 7

All arrays have length property, which as shown above, can be accessed with the 
syntax Array.length. A more complex implementation of an array can be seen below.
This is known as multi-dimensional array, or an array that contains other arrays.
Notice that this array also contains JavaScript objects, which we will examing very 
closely in our next section, but for now, all you need to know is that arrays are also 
capable of storing complex objects. */

let complexArray = [
    [
        {
            one: 1,
            two: 2
        },
        {
            three: 3,
            four: 4
        }
    ],
    [
        {
            a: "a",
            b: "b"
        },
        {
            c: "c",
            d: "d"
        }
    ]
];  /*
We have defined a variable called your array. Complete the assignment by assigning an array
of atleast 5 element in length to the youArray variable. Your array should comtain at least one string,
one number, and one boolean,
let yourArray; // Change this line   */    

let yourArray =["One more", true, false, 4, undefined, {color: "Red"}]
console.log(yourArray);