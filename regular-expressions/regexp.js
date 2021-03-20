/*          Regular Expressions
Regular expressions, often shortened to "regex" or "regexp", are patterns that help programmers match, search, and replace text. Regular expressions are very powerful, but can be hard to read because they use special characters to make more complex, flexible matches.

In this course, you'll learn how to use special characters, capture groups, positive and negative lookaheads, and other techniques to match any text you want.               



            Using the Test Method
Regular expressions are used in programming languages to match parts of strings. You create patterns to help you do that matching.

If you want to find the word the in the string The dog chased the cat, you could use the following regular expression: /the/. Notice that quote marks are not required within the regular expression.

JavaScript has multiple ways to use regexes. One way to test a regex is using the .test() method. The .test() method takes the regex, applies it to a string (which is placed inside the parentheses), and returns true or false if your pattern finds something or not.*/

let testStr = "FreeCodeCamp";
let testRegex = /Code/; 
console.log(testRegex.test(testStr));
/*The test methode here returns true;

Apply the regex myRegex on the string myString using the .test() method. 

let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex; // Change this line */
let myString = "Hello World";
let myRegex = /Hello /;
let result = myRegex.test(myString);
console.log(result);

/*          Match Literal Strings
In the last challenge, you searched for the word Hello using the regular expression /Hello/. That regex searched for a literal match of the string Hello. Here's another example searching for a literal match of the string Kevin:*/
let testMyStr = "Hello My Names Kevin";
let testMyRegex = /Kevin/;
console.log(testMyRegex.test(testMyStr));

/*This test call will return true.

Any other forms of Kevin will not match. For example, 
the regex /Kevin/ will not match kevin or KEVIN.*/
let wrongRegex = /keven/;
let wrongResult = wrongRegex.test(myString);
console.log(wrongResult);
// This test call will return false;

/* future challenge will show how to match those other forms as well.

Complete the regex waldoRegex to find "Waldo" in the string waldoIsHiding with a literal match.

let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /search/; // Change this line
let result = waldoRegex.test(waldoIsHiding);
*/
let waldoIsHiding = "somewhere Waldo is hiding this text.";
let waldoRegex = /Waldo/;
let WaldoResult  = waldoRegex.test(waldoIsHiding);
console.log(WaldoResult);

/*          Match a Literal String with Different Possibilities
Using regexes like /coding/, you can look for the pattern coding in another string.

This is powerful to search single strings, but it's limited to only one pattern. You can search for multiple patterns using the alternation or OR operator: |.

This operator matches patterns either before or after it. For example, if you wanted to match the strings yes or no, the regex you want is /yes|no/.

You can also search for more than just two patterns. You can do this by adding more patterns with more OR operators separating them, like /yes|no|maybe/.

Complete the regex petRegex to match the pets dog, cat, bird, or fish.

let petString = "James has a pet cat.";
let petRegex = /change/; // Change this line
let result = petRegex.test(petString);
*/

let petString = "James has  a pet.";
let petRegex = /dog|cat|bird|fish/;
let petResult = petRegex.test(petString);
console.log(petResult);

/*          Ignore Case While Matching
Up until now, you've looked at regexes to do literal matches of strings. But sometimes, you might want to also match case differences.

Case (or sometimes letter case) is the difference between uppercase letters and lowercase letters. Examples of uppercase are A, B, and C. Examples of lowercase are a, b, and c.

You can match both cases using what is called a flag. There are other flags but here you'll focus on the flag that ignores case - the i flag. You can use it by appending it to the regex. An example of using this flag is /ignorecase/i. This regex can match the strings ignorecase, igNoreCase, and IgnoreCase.

Write a regex fccRegex to match freeCodeCamp, no matter its case. Your regex should not match any abbreviations or variations with spaces.

let myString = "freeCodeCamp";
let fccRegex = /change/; // Change this line
let result = fccRegex.test(myString);*/

let myString1 = "freeCodeCamp";
let fccRegex = /freecodecamp/i;
let fccResult = fccRegex.test(myString1);
console.log(fccResult);

/*          Extract Matches
So far, you have only been checking if a pattern exists or not within a string. You can also extract the actual matches you found with the .match() method.

To use the .match() method, apply the method on a string and pass in the regex inside the parentheses.

Here's an example:*/
"Hi, this is awesome practice".match(/awesome/);
let yourString = "Regular experassions";
let yourRegex = /experassions/;
let yourResult = yourString.match(yourRegex);
console.log(yourResult);
/*Here the first match would return ["Hello"] and the second would return ["expressions"].

Note that the .match syntax is the "opposite" of the .test method you have been using thus far:
*/
"String".match(/regex/);
/regex/.test("String");

/*          Find More Than the First Match
So far, you have only been able to extract or search a pattern once.*/

let testStr1 = "repeat, Repeat, Repeat";
let testRegex1 = /Repeat/;
console.log(testStr1.match(testRegex1));
//Here match would return ["Repeat"].

// To search or extract a pattern more than once, you can use the g flag.
let repeatRegex = /Repeat/g;
console.log(testStr1.match(repeatRegex));// returns [Repeat, Repeat, Repeat];

/*Using the regex starRegex, find and extract both Twinkle words from the string twinkleStar.

Note
You can have multiple flags on your regex like /search/gi*

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /change/; // Change this line
let result = twinkleStar; // Change this line*/

let twinkleStar ="Twinkle, twinkle, little star";
let starRegex = /twinkle/gi;
console.log(twinkleStar.match(starRegex));

/*          Match Anything with Wildcard Period
Sometimes you won't (or don't need to) know the exact characters in your patterns. Thinking of all words that match, say, a misspelling would take a long time. Luckily, you can save time using the wildcard character: .

The wildcard character . will match any one character. The wildcard is also called dot and period. You can use the wildcard character just like any other character in the regex. For example, if you wanted to match hug, huh, hut, and hum, you can use the regex /hu./ to match all four words.
*/
let humStr = "I'll hum a song.";
let humBear = "I'll hug a bear and then got to Pizza Hut, then ";
let humRegex = /hu./;
humBear.concat(humStr)
console.log(humRegex.test(humBear.concat(humStr))
);
/*Complete the regex unRegex so that it matches the strings run, sun, fun, pun, nun, and bun. Your regex should use the wildcard character.

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /change/; // Change this line
let result = unRegex.test(exampleStr);
*/
let exampleStr = " let's have fun with regular experassion run, sun, fun, pun, nun, and bun.";
let unRegex = /un./;
let unResult = unRegex.test(exampleStr);
console.log(unResult);

/*          Match Single Character with Multiple Possibilities
You learned how to match literal patterns (/literal/) and wildcard character (/./). Those are the extremes of regular expressions, where one finds exact matches and the other matches everything. There are options that are a balance between the two extremes.

You can search for a literal pattern with some flexibility with character classes. Character classes allow you to define a group of characters you wish to match by placing them inside square ([ and ]) brackets.

For example, you want to match bag, big, and bug but not bog. You can create the regex /b[aiu]g/ to do this. The [aiu] is the character class that will only match the characters a, i,
let myStrFlexy = "please only select words that begin with big, bag, bug and bog";
let flexyRegex = /b[iau]/;
let flexyResult = myStrFlexy.match(flexyRegex);
console.log(flexyResult);
*/
let bag = "bag, bag";
let big = "big";
let bug = "bug";
let bog = "bog";
let flexyRegex = /b[aiu]g/g;
console.log(bag.match(flexyRegex));
console.log(big.match(flexyRegex));
console.log(bug.match(flexyRegex));
console.log(bog.match(flexyRegex));
/* In order, the four match calls would return the values ["big"], ["bag"], ["bug"], and null.

Use a character class with vowels (a, e, i, o, u) in your regex vowelRegex to find all the vowels in the string quoteSample.

Note: Be sure to match both upper- and lowercase vowels.

Use a character class with vowels (a, e, i, o, u) in your regex vowelRegex to find all the vowels in the string quoteSample.

Note: Be sure to match both upper- and lowercase vowels.

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /change/; // Change this line
let result = vowelRegex; // Change this line
 */
let quoteSample = "Bedware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi;
let vowelResult = quoteSample.match(vowelRegex);
console.log(vowelResult);
//.............................................................................................................

/*Match Letters of the Alphabet
You saw how you can use character sets to specify a group of characters to match, but that's a lot of typing when you need to match a large range of characters (for example, every letter in the alphabet). Fortunately, there is a built-in feature that makes this short and simple.

Inside a character set, you can define a range of characters to match using a hyphen character: -.

For example, to match lowercase letters a through e you would use [a-e]. */

let catStr = "cat";
let batStr = "bat, Bat dart";
let matStr = "mat";
let bgRex = /[a-e]at/g;
console.log(catStr.match(bgRex), batStr.match(bgRex), matStr.match(bgRex));

/*In order, the three match calls would return the values ["cat"], ["bat"], and null.

Match all the letters in the string quoteSample.

Note: Be sure to match both uppercase and lowercase letters.

Your regex alphabetRegex should match 35 items.

Your regex alphabetRegex should use the global flag.

Your regex alphabetRegex should use the case insensitive flag.

let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /change/; // Change this line
let result = alphabetRegex; // Change this line
*/

let quoteSample1 = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi;
let quoteResult = quoteSample1.match(alphabetRegex);
console.log(quoteResult);

/*          Match Numbers and Letters of the Alphabet
Using the hyphen (-) to match a range of characters is not limited to letters. It also works to match a range of numbers.

For example, /[0-5]/ matches any number between 0 and 5, including the 0 and 5.

Also, it is possible to combine a range of letters and numbers in a single character set. */
let jennyStr = "Jenny8675309";
let jennyRegex = /[a-z0-9)]/gi;
let jennyResult = jennyStr.match(jennyRegex);
console.log(jennyResult);

/*Create a single regex that matches a range of letters between h and s, and a range of numbers between 2 and 6. Remember to include the appropriate flags in the regex.

let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /change/; // Change this line
let result = myRegex; // Change this line*/

let quoteSample2 = "Blueberry 3.141592653s are delicious.";
let myRegex1 = /[h-s2-6]/gi;
let result1 = quoteSample2.match(myRegex1);
console.log(result1);

/*          Match Single Characters Not Specified
So far, you have created a set of characters that you want to match, but you could also create a set of characters that you do not want to match. These types of character sets are called negated character sets.

To create a negated character set, you place a caret character (^) after the opening bracket and before the characters you do not want to match.

For example, /[^aeiou]/gi matches all characters that are not a vowel. Note that characters like ., !, [, @, / and white space are matched - the negated vowel character set only excludes the vowel characters.
    
Create a single regex that matches all characters that are not a number or a vowel. Remember to include the appropriate flags in the regex.

let quoteSample = "3 blind mice.";
let myRegex = /change/; // Change this line
let result = myRegex; // Change this line*/
let quoteSample3 = "3 blind mice.";
let myRegex2 = /[^aeiu0-9]/gi;
let myResult = quoteSample3.match(myRegex2);
console.log(myResult);

/*          Match Characters that Occur One or More Times

Sometimes, you need to match a character (or group of characters) that appears one or more times in a row. This means it occurs at least once, and may be repeated.

You can use the + character to check if that is the case. Remember, the character or pattern has to be present consecutively. That is, the character has to repeat one after the other.

For example, /a+/g would find one match in abc and return ["a"]. Because of the +, it would also find a single match in aabc and return ["aa"].

If it were instead checking the string abab, it would find two matches and return ["a", "a"] because the a characters are not in a row - there is a b between them. Finally, since there is no a in the string bcd, it wouldn't find a match.

You want to find matches when the letter s occurs one or more times in Mississippi. Write a regex that uses the + sign.*/
let letterS = "Mississippi";
let sRegex = /s+/gi;
let sResult = letterS.match(sRegex);
console.log(sResult);

/*          Match Characters that Occur Zero or More Times

The last challenge used the plus + sign to look for characters that occur one or more times. There's also an option that matches characters that occur zero or more times.

The character to do this is the asterisk or star: *.*/
let soccerWord = "gooooooooale";
let gPhrase = "ggut feeling";
let oPhrase = "Over the moon";
let goRegex = /go*/;
console.log(soccerWord.match(goRegex));
console.log(gPhrase.match(goRegex));
console.log(oPhrase.match(goRegex));

/*In order, the three match calls would return the values ["goooooooo"], ["g"], and null.

For this challenge, chewieQuote has been initialized as the string Aaaaaaaaaaaaaaaarrrgh! behind the scenes. Create a regex chewieRegex that uses the * character to match an uppercase A character immediately followed by zero or more lowercase a characters in chewieQuote. Your regex does not need flags or character classes, and it should not match any of the other quotes.


// Only change code below this line
let chewieRegex = /change/; // Change this line
// Only change code above this line*/
let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/;
let chewieResult = chewieQuote.match(chewieRegex);
console.log(chewieResult);
