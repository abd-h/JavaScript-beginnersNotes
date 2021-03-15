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
to a new variable named userName" and so on. 
The value of userName would be the string John Lewis, 
and the value of userAge would be the number 200.*/
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
