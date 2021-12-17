/*  Apply Functional Programming to Convert Strings to URL Slugs

The last several challenges covered a number of useful array and  string methods 
that follow functional programming principes. We also learned about reduce, which is a powerful methad 
used to reduce problems to simpler forms. From computer averages to sorting, any array operations can be achieved by applying it. Recall that map and filter are spcial cases of reduce.

Let's combine what've learned to solve a practical problem.

Many content management sites(CMS) have the titles of a post added to part of a URL for 
simple bookmarking purposes. For example, if you a Medium post titled Stop Using Reduce, 
it's likely the URL would have some form of the string in it (.../stop-using-reduce).
You may have already notice this on freeCodeCamp site. */

function urlSlug(title) {
    const slugs = title.toLowerCase()
                                    .split(" ")
                                    .filter(a => (a !== "")? a : a)
    return slugs.join("-")
}
console.log(urlSlug(" Winter is coming"));
console.log(urlSlug("Winter is coming"));
console.log(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone"));
console.log(urlSlug("Hold The Door"));
/*::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

Use the every Method to Check that Every Element in an Array meets the criteria.

The every method works in an array to check every element passes a particular test.
It returns Boolean value - true all value meet the criteria,false if not.

For example, the following code would check if every element in the numbers array is less than 10:*/
const numbers = [1,5,8,0,10,11];
const lessThanTen = numbers.every(a => a < 10);
console.log(lessThanTen); // returns false here!

/* Use the every method inside the checkPositive function to check if every element in arr is positive.
The function should return Boolean value */

function checkPositive(arr) {
    return arr.every(a => a > 0)
}
console.log(checkPositive([1, 2, 3, -4, 5]));
/*::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

Use the some Method to Check that any Element in an Array Meets the Criteria

The some method works with arrays to check if any element passes a particular test.
It returns a Boolean value - true if any of the values meets the criteria, false if not.

For example, the following code would check if any element in the numbers2 array is less than 10:*/

const numbers2 = [10, 50, 8,220, 110, 11];
const areLessThan = numbers2.some(a => a < 10);
console.log(areLessThan); // returns true

/*Use the some method inside the checkPositive2 function to check if any element in an array is positive.
The function should return a Boolean value. */

function checkPositive2(arr) {
   return arr.some(a => a > 0 )
}
console.log(checkPositive2([1, 2, 3, -4, 5]));