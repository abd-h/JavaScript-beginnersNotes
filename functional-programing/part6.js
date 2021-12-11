/*          Use the reduce Method to Analyze Data
Array.prototype.reduce(), or simply reduce(), is the most general of array operations in JavaScript.
You can solve almost any array processing proplem using the reduce methods.

The reduce method allows for more general forms of array processing, and its possiple to show that
both filter and map can be derived as special application of reduced.

The reduce method iterates over each item in an array and raturns a single value(i.e string, number, object, array).

This is achieved via a callback function that is called on each iteration.

The callback function accepts four arguments:
        1.  The first argument is known as the accumilator, which gets assigned the return value of the callback function from the previous iteration. 
        2.  The second is current element being processed.
        3.  The third is index of that element.
        4.  And  the fourth is the array upon which reduce is called.
        
In addition to the callback function,  reduce has an additional parameter which takes 
an initial value for the accumilator.   
If this second parameter is not used, then the first iteration is skipped and the second iteration gets passed the first element of the array as the accumulator.

See below for an an example using reduce on the users array to return the sum of all the user's ages.
for simplicity, the example only uses the first and second argument. */

const usersR = [
    { name: "John",  age: 20},
    { name: "Amy", age: 34},
    { name: "CamperCat", age: 10}
];
const sumOfAges = usersR.reduce((sum, user) => sum + user.age, 0);
console.log(sumOfAges);
/**  The console would display 64 
 
In another example, see how an object can be return containg the names of the users as properties with their ages as values.
*/
const usersObj = usersR.reduce((obj, users) => {
    obj[users.name] = users.age;
    return obj;
}, {});
console.log(usersObj);


