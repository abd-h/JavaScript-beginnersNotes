/*              Check For The Presence of an Element With indexOf()
Since arrays can be changed, or mutated, ar anytime, there's no gurentee about 
where a particular piece of data will be on a given array, or if that element even
exists. Luckily, JavaScript provides us with another built-in method, indexOf(), that
allows us to quickly and easily check for the presence of an element on an array.

indexOf() takes an element as a parameter, and when callled it returns the position, 
or index, of that element, or -1 if element does not exist on the array. 
For example:*/

let fruits = ["apples", "pears", "oranges", "peaches", "pears"];
console.log(fruits.indexOf('dates')); // returns -1
console.log(fruits.indexOf('oranges')); // returns 2
console.log(fruits.indexOf('pears')); // returns 1;
/* this is the first index at which each element exist.

indexOf() can be incredibly useful for quickly checking for the presence of  an element on 
an array. We have defined a function, quickCheck, that take an array and an elementa as 
arguments. Modify the function using indexOf() so tnat it returns true if the passed element exist on 
the array, and false if it does't exist. 

function quickCheck(arr, elem) {
  // Only change code below this line

  // Only change code above this line
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
*/

function quickCheck(arr, elem) {
    return (arr.indexOf(elem) >= 0)? true
              : false;
}
console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
// The quickCheck function should return a boolean (true or false), not a string ("true" or "false")

console.log(quickCheck(["squash", "onions", "shallots"], "mushrooms")) //should return false

console.log(quickCheck(["onions", "squash", "shallots"], "onions")) //should return true

console.log(quickCheck([3, 5, 9, 125, 45, 2], 125)); // should return true

console.log(quickCheck([true, false, false], undefined)); // should return false

/* The quickCheck function should utilize the indexOf() method 
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

                Iterate through All an Array's Items Using For Looops
Sometimes when working with arrays, it it very handy to be able to  iterate through each item 
to find one or more elements that we might need, or to  manipulate an array based on which data
items meet a certain set of criteria. JavaScript offers several result (such as every(), forEach(),
map(), etc.), however the technique which is most flexible and offers us the greaters amount 
of control is a simple for loop.

consider the following:*/

function greaterThanTen(arr) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
            if(arr[i] > 10) {
                newArr.push(arr[i]);
            }  
    }
    return newArr;
}
console.log(greaterThanTen([2, 12, 8, 14, 80, 0, 1]));  /* 
Using a for loop, this function iterates through and accesses each element of the array,
and subjects it to a simple tesst that we have created. In this way, we have easily and programmatically
determined data items are greater than 10, and returned a new array, [12,14,80], containing those items.

We have defined a function, filteredArray, which takes arr, a nested array, and elem as arguments, and returns a new array. elem represents an element that may or may not be present on one or more of the arrays nested
within arr. Modify the function, using a for loop, to return a filtered version of the passed the array such that any array nested within arr containing elem has been removed.

function filteredArray(arr, elem) {
  let newArr = [];
  // Only change code below this line

  // Only change code above this line
  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3)); */

function filteredArray(arr, elem) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].indexOf(elem) === -1) {
            
            newArr.push(arr[i])
        } 
    }
    return newArr
}
console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3)); // should retain []
console.log(filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18)); // should return [[10, 8, 3], [14, 6, 23]]
console.log(filteredArray([["trumpets", 2], ["flutes", 4], ["saxophones", 2]], 2)); // should return [["flutes", 4]]

console.log(filteredArray([["amy", "beth", "sam"], ["dave", "sean", "peter"]], "peter")); // should return [["amy", "beth", "sam"]]
/*::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

                    Create complex multi-dimensional arrays
Awsome! You have just learned a ton about array! This has been a fairly high level 
overview, and there is plenty to learn about working with arrays, much of whicj you 
will see in later sections. But before moving on to looking at Objects, let's take one 
more look, and see how array can become a bit more complex than what we have 
seen in previous challenges.

One of the most powerful features when thinking of arrays as data structure, is that 
arrays can contain, or even be completely made up of  other arrays. We have seen arrays that 
contain on infinite depth of arrays that can contain other arrays, each with their own arbitrary
levels of depth, and so on. In this way, an array can very quickly become a very complex data 
structure, known as a multi-dimensional, or nested arrays. Consider the following example:*/

let nestedArray = [
    ["deep"],
    [
        ["deeper"], ["deeper"]
    ],
    [
        [
            ["deepest"], ["deepest"]
        ],
        [
            [
                ["deepest-est"]
            ]
        ]
    ]
];
/* The deep array is nested 2 levels deep. The deeper array are 3 levels deep. 
The deepest array are 4 levels, and the deepest-est is 5 levels.

While this example may seem convoluted, this level  of complexity is not unheard of, 
or even unusual, when dealing with large amount of data. However, we can still very 
easily access the deepest levels of an array this complex with bracket notation,*/
console.log(nestedArray[2][1][0][0][0]); /* This logs the string deepest-est? . 
And now that we know where that peice of data is, we can reset it if we need to:  */
nestedArray[2][1][0][0][0] = "deeper still";
console.log(nestedArray[2][1][0][0][0]); /* Now it logs deeper still.

We have defined a variable, myNestedArrays, set to equal to an array. Modify myNestedArray,
using any combination of strings, numbers, and booleans fot data elements. So that it has 
five levels of depth (remember, the outer-most array is level 1). Somewhere on the third level,
include the string deep, on the fourth level include the string deeper, and on the fifth level 
include the string deepest 

let myNestedArray = [
  // Only change code below this line
  ['unshift', false, 1, 2, 3, 'complex', 'nested'],
  ['loop', 'shift', 6, 7, 1000, 'method'],
  ['concat', false, true, 'spread', 'array'],
  ['mutate', 1327.98, 'splice', 'slice', 'push'],
  ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
  // Only change code above this line
];*/

let myNestedArray = [
  // Only change code below this line
  ['unshift', false, 1, 2, 3, 'complex', 'nested'],
  ['loop', 'shift', 6, 7, 1000, 'method'],
  ['concat', false, true, 'spread', 'array', ['deep']],
  ['mutate', 1327.98, 'splice', 'slice', 'push', [["deeper"]]],
  ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth',[ [['deepest']]]]
  // Only change code above this line
];
console.log(myNestedArray[1]);