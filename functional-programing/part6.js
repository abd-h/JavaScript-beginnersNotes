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
/* The console would display the value [John: 20, Amy: 34, CamperCat: 10]; 

The variable watchList holds an array of objects with information on several movies. 
Use reduce to find average IMBD rating of  directed by Christopher Nolan.
Recall from prior challenges how to filter data and map over it to pull what you need.
You may need to create other variables, and return the  average rating from getRating.
Note that the rating values are saved as strings in the objects and need to be converted into numbers before they are used in any mathmetical operations*/

function getRating(watchList) {
    const cNolanMovies = watchList.filter((m) =>{ 
        if(m.Director === "Christopher Nolan") {
            // console.log(`Title: ${m.Title}, rating: ${m.imdbRating}`);
          return m;
        }
});
   let avarageRating = cNolanMovies.reduce((sum, rating) =>{
       return sum + Number(rating.imdbRating)
   },0);
   return avarageRating / cNolanMovies.length
}
console.log(getRating(watchList));

/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
Use Higher-Order Function map, filter, or reduce to Solve a complex problem.
Now that you have worked through a few challenges using higher-order function like map(), filter(), and reduce(), you now got to apply them to solve a more complex challenge.

Complete the code for the squareList function using any combination of map(), filter(), and reduce().
The function should return a new array containing the squares of only the positive integers(decimal numbers are not integers) when array of real numbers is passed to it. An example of an array of real numbers is [-3, 4.8, 5, 3, -3.2].

Note: Your function should not use any kind of for or while loops or the forEach() Method.
 */
{
    const squareList = arr => {
return arr.filter(num =>{
    if(num > 0){
      return Number.isInteger(num);
    }
  }).map(sqrNum => sqrNum * sqrNum)                                        
}
const l = Math.pow(3, 2);
console.log(l);
const squaredIntegers = squareList(squareList([-3, 4.8, 5, 3, -3.2]));
console.log(squaredIntegers);
}