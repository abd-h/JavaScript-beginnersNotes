/**
 * Store Multiple Values in one Variable using JavaScript ArraysPassed
 */

 /**
  * With JavaScript array variables, we can store several pieces of data in one place.
  */
  var pasta =["500g", 2];

  // Nest one Array within Another Array
  var sandwitch = [["Peanuts Butter", 2], ["Jelly", 4], ["Bread", 4]];
  console.log(sandwitch);

// Access Array Data with Indexes
var data = pasta[0];
console.log(data);//reads 500g

// Modify Array Data With Indexes
pasta[0] = "1000g";
console.log(pasta);

// Access Multi-Dimensional Arrays With Indexes

// One way to think of a multi-dimensional array, is as an array of arrays.

var multiArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14]
];
var myData = multiArray[2][2];
console.log(myData); // Reads 9;

// Manipulate Arrays With push()
// An easy way to append data to the end of an array is via the push() function.

var morePasta = [["500g",2], ["1kg", 1], 4]
morePasta.push(900);
console.log(morePasta);

// Manipulate Arrays With pop()
// pop() is used to "pop" a value off of the end of an array. We can store this "popped off" value by assigning it to a variable.

var three1 = [1, 4, 6];
var oneDown = three1.pop();
console.log(oneDown); // Reads 6
console.log(three1); // Reads [1, 4]

// Manipulate Arrays With shift()
// If you want to remove the first?
// That's where  .shift() comes in. It works just like .pop(), except it removes the first element instead of the last.

var array2 = [["Thomas", 3], ["Paul", 9], ["Jayson", 3]];
var removeFromMyArray2 = array2.shift();
console.log(removeFromMyArray2); // Reads ["Thomas", 3];
console.log(array2); // Reads [["Paul", 9], ["Jayson", 3]];

// .unshift() works exactly like .push(), but instead of adding the element at the end of the array, unshift() adds the element at the beginning of the array.

// Example
array2.unshift(["Morrison", 25]);
console.log(array2)// Reads array2 = [["Morrison", 25], ["Thomas", 3], ["Paul", 9], ["Jayson", 3]];

// Shopping List consisting of Arrays and Subarrays. 

var shoppingList = [["Banana", 10], ["Tomato", 6], ["Carrots", 15], ["Patatos", 9], ["Onions", 6]];

  