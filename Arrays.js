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
console.log(data);

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


  