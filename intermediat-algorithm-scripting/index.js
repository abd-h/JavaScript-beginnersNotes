/*  Sum a;ll Numbers in a Range

We'll pass you an array of  two numbers.
Return the sum of  those numbers plus the sum of all th numbers between them.
the lowes number will not always come first.

sumAll([1, 4]) should return a number.
sumAll([1, 4]) should return 10.
sumAll([4, 1]) should return 10.
sumAll([5, 10]) should return 45.
sumAll([10, 5]) should return 45.*/
function sumAll(arr) {
    const newArr = arr.concat().sort((a, b) => a - b);
    let total = [];
    const [arrtotal ] = [total];
    const arr1 = parseInt(newArr.slice(0, 1).join());
    const arr2 = parseInt(newArr.slice(1).join());
    for(let i = arr1; i <= arr2; i++){
        total.push(i);
    }
    return arrtotal.reduce((a, b) => a + b, 0);
}
console.log(sumAll([5, 10]));
console.log(sumAll([10, 5]));
console.log(sumAll([1,4]));
console.log(sumAll([4, 1]));
/*::::::::::::::::::::::::::::::::::::::::::::::::::::::::

Diff Two Arrays
Compare two arrays and return a new array with any of the items found in one of the two given arrays,
but not both. In other words, return the symmetric difference of the two arrays.

Note: You can return the array with its elements in any order.*/
function diffArray(arr1, arr2) {
    const newArr = [];
    arr2.forEach(a => {
        if(arr1.indexOf(a) === -1) {
            newArr.push(a);
        }
    })
    arr1.forEach(a => {
        if(arr2.indexOf(a) === -1) {
            newArr.push(a);
        }
    })
    return newArr;
}
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]));
console.log(diffArray([], ["snuffleupagus", "cookie monster", "elmo"]));
// console.log(diffArray());
// console.log(diffArray());
/*::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

Seek and Destroy

You will be provided with an initial array (the first argument in the destroyer function),
 followed by one or more arguments. Remove all elements from the initial array that are
 the same value as these arguments. */

 function destroyer(arr) {
    const [,...args] = arguments;
    return arr.filter(a => args.indexOf(a) === -1)
}
 console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3)); // returns [1, 1].
 console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)); // returns [1, 5, 1].
 console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5)); // returns [1].
 console.log(destroyer([2, 3, 2, 3], 2, 3)); // returns []
 console.log(destroyer(["tree", "hamburger", 53], "tree", 53)); // returns  ["hamburger"]
 console.log(destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan")); // returns [12,92,65]
/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

                Wherefore art thou
Make function that looks through an array of objects(first argument) and returns an array
of all objects that have matching name and value pairs (second argumrnt).
Each name and value pair of the source objects has to be present in the object
from the collection if it is to be included in the return array.

For example, if the first argument is [
    {first: "Romeo", last: "Montegue"}, {first: "Mercutio", last: "null"},
    {first: "Tybalt", last: "Capulet"}, and the second argument is
    {last: "Capult"}, then you must return the third object from the array (the first argument),
    becausse it contains the name and its value, that wast past the second argument.
] */
function searchObj(a){
    let result = [];
    for(let i = 0; i < a.length; i++){
        result.push(a[i])
    }
    return result
}
function whatIsInAName(collection, source) {
  const enteries1= Object.entries(collection);
  const enteries2  = Object.entries(source);
    return collection.map(a => console.log(a[1][1]))
}

console.log(whatIsInAName([
    { first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
console.log(whatIsInAName([
    { "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }));
console.log(whatIsInAName([
    { "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }],
    { "apple": 1, "bat": 2 }));
console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }));
console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 }));
console.log(whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3}));