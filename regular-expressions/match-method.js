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
    /*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
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




/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

                Match Anything with Wildcard Period  ( . )
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
/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

Match Single Character with Multiple Possibilities

You learned how to match literal patterns (/literal/) and wildcard character (.). 
Those are the extreams of regular expressions, where one finds the exact match 
and the other finds everything. There are options that are a balance between the 
two extreams.

You can seatch for a literal patterns with some felexibility with character classes.
Character classes allow you to define a group of characters you wish to match by placing 
them inside square ([and]) brackets.

For example, if you want to match bag, big and bug but not bog. 
You can create regex /b[aiu]g/ to do this.
The [aiu] is the character class that will only match the characters a, i, or u. */

let bigStr = "big";
let bagStr = "bag";
let bogStr = "bog";
let bugStr = "bug";
let bgRegex = /b[aiou]g/g;
console.log(bigStr.match(bgRegex));// returns ["big"]
console.log(bagStr.match(bgRegex));// returns ["bag"]
console.log(bogStr.match(bgRegex));// returns ["bog"]
console.log(bugStr.match(bgRegex));// returns ["bug"]
/* In order, the four match calls would return the value ["big"], ["bag"], ["bog"],["bug"] and null.

Use a character classes with vowels (a,e, i, o, u) in you regex vowelRegex to find all the vowels in the string quoteSample.*/

let quoteSample = "Beware of the bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi;
let vowelResult = quoteSample.match(vowelRegex);
console.log(vowelResult);
/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

Match Letters of  the Alphabet

You saw how you can use character set to specify a group of  characters to match,
but that's a lot of  typing when you need to match a large range of characters 
(for example, every letters in the alphabet). fortunately, there's a built in feature 
that makes this short and simple.

Inside a character set, you can define a range of  characters to match using a hyphen
character: -.

For example, to match lowercase letters "a" through "e" you would use [a-e].*/

let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex2 = /[a-e]at/;
catStr.match(bgRegex2);
batStr.match(bgRegex2);
matStr.match(bgRegex2);
// In order, the three match calls would return the values ["cat"], ["bat"], and null.

// Match all the letters in the string quoteSample.

// Note: Be sure to match both uppercase and lowercase letters.

let quoteSample2 = "The quick brown fox jumps over the lazy dog";
let alphabetRegex = /[a-z]/gi;
let alphabetResult = quoteSample2.match(alphabetRegex);
console.log(alphabetResult);
/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
                Match Numbers and Letters of the alphabet
Using the (-) to match a range of characters is not limited to letters. 
It also works to match a range of numbers.                    

For example, /[0-5]/ maches any number between 0 to 5, including 0 and 5.

Also, it's possible to combine a range of letters and numbers in a single character set.
 */
let jennyStr = "Jenny8675309";
let myRegex2 = /[a-z0-9]/ig;
console.log(jennyStr.match(myRegex2));

// Create a single regex that matches a range of letters between "h" and "s", and
// and a range of  numbers between 2 and 6.

let quoteSample3 = "Bluebery 3.141592653s";
let blueRegex = /[h-s2-6]/gi;
let blueResult = quoteSample3.match(blueRegex);
console.log(blueResult.join(" "));

