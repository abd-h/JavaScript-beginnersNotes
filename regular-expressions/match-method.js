/*                          Extract Matches
So far, you have only been checking if a pattern exist or not in a string.
You can also extract the actual matches you found with the .match() method. 

To use the .match() method, apply the method on a string and pass a regex inside the parentheses.
Her is an example:   */

"Hello World!".match(/Hello/);

let ourStr = "Regular expressions";
let ourRegex = /expressions/;
let ourResult = ourStr.match(ourRegex);
console.log(ourResult);

/*   Here the first match would return ["Hello"] and the second would return ["expressions"].

    Note that the .match syntax is the "oposite" of the .test method you have been using thus fat:
    
    "string".match(regex);
     regex.test("string");
     
    Apply the .match() method to extract the string coding   */

    let extractStr = "Extract the word coding from it's string";
    let extractRegex = /coding/;
    let extractResult = extractStr.match(extractRegex);
    console.log(extractResult);
    /*::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
                    Find More Than the First Match
So far, you have only been able to extract or search a pattern once.*/
let testStr3 = "Repeat, Repeat, Repeat";
let testRegex3 = /Repeat/;
console.log(testStr3.match(testRegex3));
/* To search or extract a pattern more than once, you can use the g flag. */
let repeatRegex = /Repeat/g;
console.log(testStr3.match(repeatRegex));
// And here the match returns the value ["Repeat", "Repeat", "Repeat"].

/*  Using the regex starRegex, find and extract both Twinkle words from the string twinkleStar.
Note: 
You can have multiple flags on your regex like /search/gi */

let twinkleStar = "Twinkle, twinkle, little starwinkle";
let twinkleRegex = /twinkle/gi;
let twinkleResult = twinkleStar.match(twinkleRegex);
console.log(twinkleResult);




/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

Match Anything with Wildcard Period.
Sometimes you won't (or don't need to) know the exact character in you in your patterns.
Thinking of all words that match, say, a misspelling would take a long time. Luckily, you
can save time using the wildcard character:. 

The wildcard character . will match any one character. The wildcard is also called dot and period.
you can use the wildcard just like any other character in regex. For example, if you wanted to match 
hug, huh, and hum, you can use the regex /hu./ to match all four words.
*/

let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
console.log(huRegex.test(humStr, hugStr));
console.log(huRegex.test(hugStr));
/* Both of these test calls would return true. 

Complete the regex unRegex so that it matches the strings run, sun, fun, pun, nun, and bun. 
Your regex should use the wildcard character.  */

let unStr = "Let's have fun with regular expressions!";
let unRegex = /.un/;
let unResult = unRegex.test(unStr);
let unResult1 = unStr.match(unRegex)
console.log(unResult);
console.log(unResult1);
