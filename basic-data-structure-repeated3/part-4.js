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
console.log(greaterThanTen([2, 12, 8, 14, 80, 0, 1]));