/*          Return part of an Array Using the slice Method
The slice method returns a copy of certain elements of an array. 
It can take two arguments, the first gives the index of  where to begin the slice, 
the second is the index where to end the slice(and it's non inclusive).

If arguments are not provided, the default is to start at the beginning of  the array 
through the end, which is easy way to make a copy of an entire array.

The slice method does not mutate the original array, but returns a new one.

Here is an example*/
const arr = ["Cat", "Dog", "Tiger", "Zebra"];
const newArray1 = arr.slice(1, 3);
console.log("....................................................");
console.log(newArray1);
// newArray1 would have ["Dog", "Tiger"]

                            /********* ********* ********* *********
                            *                  CHALLENGE SEVEN                    *
                            * ********* ********* ********* ********/
/* Use the slice method in the sliceArray function to return part of the anim array 
given the provided beginSlice and endSlice indeces. 
The function should return an array.*/      

function sliceArray(anim, beginSlice, endSlice) {
    return anim.slice(beginSlice, endSlice);
}

const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
console.log(sliceArray(inputAnim, 1, 3));
console.log(":::::::::::::::::::::::::::::::::::::::::::::");
/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

Remove Elements from an Array Using slice instead of splice

A common pattern while working with arrays is when you want remove items and keep the rest  of the array.
JavaScript offers the splice method for this, which takes an arguments for the index of where to start removing items, then the number of  items to remove. if the secod argument is not provided, the default is to remove items through  to the end. However, the splice method mutates the original array it is called on.

Here's an example:*/

const cities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];

console.log(cities);
const spliceCities = cities.splice(3,1);
console.log(spliceCities);
console.log(cities);

/* Here splice returns the string London and deletes it from the cities array.
cities will have the value  ["Chicago", "Delhi", "Islamabad", "Berlin"].

As we saw in the last challenge, the slice mehtod does not mutate the original array, 
but returns a new one which can be saved into a variable. Recall thatthe slice method take two arguments for the indices tohin and the slice(the end is non-inclusive), and returns those items in a new array.

Using the slice method instead of splice helps to avoid any array-mutating side effects.*/

                            /********* ********* ********* *********
                            *                  CHALLENGE SEVEN                    *
                            * ********* ********* ********* ********/

/* Rewrite the function nonMutatingSplice by using slice instead of splice.
It should limit the provided cities array to a length of 3, and return a new array with only the first three items.

Do not mutate the original array ptovided to the function.

function nonMutatingSplice(cities) {
  // Only change code below this line
  return cities.splice(3);

  // Only change code above this line
}

const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
nonMutatingSplice(inputCities);*/  

function nonMutatingSplice(cities) {
    const copyCities = cities.slice();
    copyCities.splice(3);
    return copyCities;
}
const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
console.log(nonMutatingSplice(inputCities));