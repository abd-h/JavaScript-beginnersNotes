/*          Use the Rest Parameter with Function Parameters

In order to help us create more flexible functions, ES6 introduces the rest parameter for function parameters. With the rest parameter, you can create functions that take a variable number of arguments. These arguments are stored in an array that can be accessed later from inside the function.

Check out this code:*/

function howMany(...args) {
    return "You have passed " + args.length + " arguments";
}
console.log(howMany(0, 2, 3));
console.log(howMany("string", null, [1, 2, 3], {}));

/*The console would display the strings You have passed 3 arguments. and You have passed 4 arguments..

The rest parameter eliminates the need to check the args array and allows us to apply map(), filter() and reduce() on the parameters array.

Modify the function sum using the rest parameter in such a way that the function sum is able to take any number of arguments and return their sum.

const sum = (x, y, z) => {
  const args = [x, y, z];
  return args.reduce((a, b) => a + b, 0);
}
*/
const sum = (...args) => {
    
    return args.reduce((a,b) => a + b+ 0);
}
console.log(sum(0, 1, 2));// returns 3;
console.log(sum(1, 2, 3, 4));// returns 3;
console.log(sum(5));// returns 3;
console.log(sum(0));// returns 3;

/*          Use the Spread Operator to Evaluate Arrays In-Place
ES6 introduces the spread operator, which allows us to expand arrays and other expressions in places where multiple parameters or elements are expected.

The ES5 code below uses apply() to compute the maximum value in an array:*/
const arr = [6, 89, 3, 45];
const maximus = Math.max.apply(null, arr);
console.log(maximus);
/*maximus would have a value of 89.

We had to use Math.max.apply(null, arr) because Math.max(arr) returns NaN. Math.max() expects comma-separated arguments, but not an array. The spread operator makes this syntax much better to read and maintain.*/

const arr1 = [6, 89, 3, 45];
const maximus1 = Math.max(...arr1);
const maximus2 = Math.min.apply(null, arr1)
console.log(maximus1); // returns 89
console.log(maximus2); // returns 3
/*...arr returns an unpacked array. In other words, it spreads the array. However, the spread operator only works in-place, like in an argument to a function or in an array literal. The following code will not work:

const spread = ...arr1;

Copy all contents of arr1 into another array arr2 using the spread operator.

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [];*/

const arr2 = ["JAN", "FEB", "MAR", "APR", "MAY"];
let arr3;
arr3 = [...arr2]
console.log(arr3);

/*          Use Destructuring Assignment to Extract Values from Objects
Destructuring assignment is special syntax introduced in ES6, for neatly assigning values taken directly from an object.

Consider the following ES5 code: */
const user = {
    name: "John Doer",
    age: 34
};
// const name = user.name;
// const age = user.age;
/*name would have a value of the string John Doe, and age would have the number 34.

Here's an equivalent assignment statement using the ES6 destructuring syntax:*/

const {age, name} = user;
/*Again, name would have a value of the string John Doe, and age would have the number 34.

Here, the name and age variables will be created and assigned the values of their respective values from the user object. You can see how much cleaner this is.

You can extract as many or few values from the object as you want.

Replace the two assignments with an equivalent destructuring assignment. It should still assign the variables today and tomorrow the values of today and tomorrow from the HIGH_TEMPERATURES object.
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

const today = HIGH_TEMPERATURES.today;
const tomorrow = HIGH_TEMPERATURES.tomorrow;
*/
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};
const {today, tomorrow} = HIGH_TEMPERATURES;
console.log(today, tomorrow);

/*          Use Destructuring Assignment to Assign Variables from Objects
Destructuring allows you to assign a new variable name when extracting values. You can do this by putting the new name after a colon when assigning the value.

Using the same object from the last example: */
const user1 = {
    name: "John Lewis",
    age: 200,
    country: "UK"
};
// Here's how you can give new veriables names in the assignment;
const {name: user1Name, age: user1Age} = user1;
/*You may read it as "get the value of user.name and assign it 
to a new variable named user1Name" and so on. 
The value of user1Name would be the string John Lewis, 
and the value of user1Age would be the number 200.*/
console.log(user1);
console.log(user1Name);
console.log(user1Age);

/*Replace the two assignments with an equivalent destructuring assignment. It should still assign the variables highToday and highTomorrow the values of today and tomorrow from the HIGH_TEMPERATURES object. 

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

*/
 const NEW_HIGH_TEPERATURE = {
     yesterday: 75,
    today: 77,
    tomorrow: 80
 }

const {today: highToday, tomorrow: highTomorrow} = NEW_HIGH_TEPERATURE;
console.log(NEW_HIGH_TEPERATURE, highToday, highTomorrow);

/*          Use Destructuring Assignment to Assign Variables from Nested Objects
You can use the same principles from the previous two lessons to destructure values from nested objects. */
const user2 = {
    johnDoe : {
        age: 41,
        email: "johnDoe@example.com"
    }
};
/*Here's how to extract the values of object properties and assign them to variables with the same name:*/

// const {johnDoe:{age, email}} = user2;

/*Here's how to extract the values of object properties and assign them to variables with the same name:*/
const {johnDoe: {age: userAge, email: userEmail}} = user2

// const {age: newAge, email: newEmail} = user2.johnDoe;
// console.log(newAge, newEmail);
console.log(userAge, userEmail);

/*Replace the two assignments with an equivalent destructuring assignment. 
It should still assign the variables lowToday and highToday the values of today.low 
and today.high from the LOCAL_FORECAST object.

const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

// Only change code below this line
  
const lowToday = LOCAL_FORECAST.today.low;
const highToday = LOCAL_FORECAST.today.high;*/

const LOCAL_FORECAST = {
    yesterday: {
        low: 61,
        high:77
    },
    today: {
        low: 64,
        high: 77
    },
    tomorrow: {
        low: 68,
        high: 88
    }
};

const {today: {low: lowToday, high: high1Today}} = LOCAL_FORECAST;
console.log(lowToday);
console.log(high1Today);


/*          Use Destructuring Assignment to Assign Variables from Arrays
ES6 makes destructuring arrays as easy as destructuring objects.

One key difference between the spread operator and array destructuring is that the spread operator unpacks all contents of an array into a comma-separated list. Consequently, you cannot pick or choose which elements you want to assign to variables.

Destructuring an array lets us do exactly that:
const [a, b] = [1,  2,  3, 4, 5, 6];
console.log(a, b);
The console will display the values of a and b as 1, 2.

The variable a is assigned the first value of the array, and b is assigned the second value of the array. We can also access the value at any index in an array with destructuring by using commas to reach the desired index:*/ 
const [a, b,,,c] = [1, 2, 3, 4, 5, 6];
console.log(a,b,c);
/* The console will display the values of a, b, and c as 1, 2, 5.

Use destructuring assignment to swap the values of d and e so that d receives the value stored in e, and e receives the value stored in d.  */
let d = 8,  e = 6;
[d, e] = [e,d];

console.log(d, e);

/*          Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements
In some situations involving array destructuring, we might want to collect the rest of the elements into a separate array.

The result is similar to Array.prototype.slice(), as shown below:*/
const [a1, b1, ...arr4] = [1,2, 3, 4, 5, 7];
console.log(a1,b1);
console.log(arr4);
/*The console would display the values 1, 2 and [3, 4, 5, 7].

Variables a1 and b1 take the first and second values from the array. After that, because of the rest parameter's presence, arr4 gets the rest of the values in the form of an array. The rest element only works correctly as the last variable in the list. As in, you cannot use the rest parameter to catch a subarray that leaves out the last element of the original array.

Use destructuring assignment with the rest parameter to perform an effective Array.prototype.slice() so that arr4 is a sub-array of the original array source with the first two elements omitted.

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  // Only change code below this line
  const [,, ...arr] = list;
  
   // Change this line
  // Only change code above this line
  return arr;
}
const arr = removeFirstTwo(source);*/
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
    const [,, ...arr5] = list;
    return arr5;
}
const  arr5 = removeFirstTwo(source)
console.log(arr5);
console.log(source);

/*          Use Destructuring Assignment to Pass an Object as a Function's Parameters
In some cases, you can destructure the object in a function argument itself.

Consider the code below:*/
const profileUpdate = (profileData) => {
    const {name, age, nationality,location} = profileData;
}
// This effectively destructures the object sent into the function. This can also be done in-place:
const profileUpDate1 = ({name1, age1, nationality1, location1}) => {

}
/* When profileData is passed to the above function, the values are destructured from 
the function parameter for use within the function. 

 Use destructuring assignment within the argument to the function half to send only max and min inside the function. 

 const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

// Only change code below this line
const half = (stats) => (stats.max + stats.min) / 2.0;  returns 28.015, this is without destructuring parameters
// Only change code above this line*/
 const stats = {
     max: 56.78,
     standard_deviation: 4.34,
     median: 34.54,
     mode: 23.87,
     min:-0.75,
     avarage: 35.85
 };
 const half = ({max ,min}) => (max + min) / 2;
 console.log(half(stats));