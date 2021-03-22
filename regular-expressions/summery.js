//Regular experassion Index

/*Using the test Methode  

The .test() method takes the regex, applies it to a string (which is placed inside the parentheses), and returns true or false if your pattern finds something or not.

Examples*/
let testStr = "FreeCodeCamp";
let testRegex = /Code/; 
console.log(testRegex.test(testStr)); //test call will return true;

/*           OR |  OPERATOR
You can search for multiple patterns using the alternation or OR operator: |.*/
let petString = "James has  a pet.";
let petRegex = /dog|cat|bird|fish/;
let petResult = petRegex.test(petString);
console.log(petResult);

/*            Ignore Case While Matching
An example of using this flag is /ignorecase/i. This regex can match the strings ignorecase, igNoreCase, and IgnoreCase.*/
let myString1 = "freeCodeCamp";
let fccRegex = /freecodecamp/i;
let fccResult = fccRegex.test(myString1);
console.log(fccResult);

// To search or extract a pattern more than once, you can use the g flag.
let repeatRegex = /Repeat/g;
console.log(testStr1.match(repeatRegex));// returns [Repeat, Repeat, Repeat];

/*Match Anything with Wildcard Period
For example, if you wanted to match hug, huh, hut, and hum, you can use the regex /hu./ to match all four words.
*/
let humStr = "I'll hum a song.";
let humBear = "I'll hug a bear and then got to Pizza Hut, then ";
let humRegex = /hu./;
humBear.concat(humStr)
console.log(humRegex.test(humBear.concat(humStr))
);
/*          Match Single Character with Multiple Possibilities
You can search for a literal pattern with some flexibility with character classes. Character classes allow you to define a group of characters you wish to match by placing them inside square ([ and ]) brackets.

For example, you want to match bag, big, and bug but not bog. You can create the regex /b[aiu]g/ to do this. The [aiu] is the character class that will only match the characters a, i, u*/

let bag = "bag, bag";
let big = "big";
let bug = "bug";
let bog = "bog";
let flexyRegex = /b[aiu]g/g;
console.log(bag.match(flexyRegex));
console.log(big.match(flexyRegex));
console.log(bug.match(flexyRegex));
console.log(bog.match(flexyRegex));

/*Using the hyphen (-) to match a range of characters is not limited to letters. It also works to match a range of numbers.
Also, it is possible to combine a range of letters and numbers in a single character set. */
let jennyStr = "Jenny8675309";
let jennyRegex = /[a-z0-9)]/gi;
let jennyResult = jennyStr.match(jennyRegex);
console.log(jennyResult);

/*You could also create a set of characters that you do not want to match. These types of character sets are called negated character sets. 

Create a single regex that matches all characters that are not a number or a vowel. Remember to include the appropriate flags in the regex.*/

let quoteSample3 = "3 blind mice.";
let myRegex2 = /[^aeiu0-9]/gi;
let myResult = quoteSample3.match(myRegex2);
console.log(myResult);

/*Sometimes, you need to match a character (or group of characters) that appears one or more times in a row. This means it occurs at least once, and may be repeated.

For example, /a+/g would find one match in abc and return ["a"]. Because of the +, it would also find a single match in aabc and return ["aa"].

f it were instead checking the string abab, it would find two matches and return ["a", "a"] because the a characters are not in a row - there is a b between them. Finally, since there is no a in the string bcd, it wouldn't find a match.*/

let letterS = "Mississippi";
let sRegex = /s+/gi;
let sResult = letterS.match(sRegex);
console.log(sResult);

 /*Match Characters that Occur Zero or More Times

The last challenge used the plus + sign to look for characters that occur one or more times. There's also an option that matches characters that occur zero or more times.

The character to do this is the asterisk or star: *.*/
let soccerWord = "gooooooooale";
let gPhrase = "ggut feeling";
let oPhrase = "Over the moon";
let goRegex = /go*/;
console.log(soccerWord.match(goRegex));
console.log(gPhrase.match(goRegex));
console.log(oPhrase.match(goRegex));
/*In order, the three match calls would return the values ["goooooooo"], ["g"], and null.*/