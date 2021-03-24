/*          Extract Matches
So far, you have only been checking if a pattern exists or not within a string. You can also extract the actual matches you found with the .match() method.

To use the .match() method, apply the method on a string and pass in the regex inside the parentheses.

Here's an example:*/
console.log("Hello World".match(/Hello/g));
let regStr = "Regular expressions";
let regregex = /expressions/g;
let regResult = regStr.match(regregex);
console.log(regResult);
/*Here the first match would return ["Hello"] and the second would return ["expressions"].

Note that the .match syntax is the "opposite" of the .test method you have been using thus far:*/
'string'.match(/regex/g);
/regex/.test('string');
/*Apply the .match() method to extract the string coding.

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /change/; // Change this line
let result = extractStr; // Change this line*/
let extractStr = "Extract the word 'coding' from the srting.";
let codingRegex = /coding/g;
let codingResult = extractStr.match(codingRegex);
console.log(codingResult);



/*          Find More Than the First MatchPassed
So far, you have only been able to extract or search a pattern once.
*/
let repStr = "Repeat, Repeat, Repeat";
let rep1Regex = /Repeat/;
// to search or extract a pattern more than once, you can use the g flag.
let rep2Regex = /Repeat/g;
//And here match returns the value ["Repeat", "Repeat", "Repeat"]
let repResult1 = repStr.match(rep1Regex);
let repResult2 = repStr.match(rep2Regex);
console.log(repResult1, repResult2);
/*Using the regex starRegex, find and extract both Twinkle words from the string twinkleStar.
Note
You can have multiple flags on your regex like /search/gi*/
let twinkleStar = "Twinkle twinkle little Star";
let twinkleRegex = /twinkle/gi;
let twinkleResult = twinkleStar.match(twinkleRegex);
console.log(twinkleResult);

/*          Match Anything with Wildcard Period
Sometimes you won't (or don't need to) know the exact characters in your patterns. Thinking of all words that match, say, a misspelling would take a long time. Luckily, you can save time using the wildcard character: .

The wildcard character . will match any one character. The wildcard is also called dot and period. You can use the wildcard character just like any other character in the regex. For example, if you wanted to match hug, huh, hut, and hum, you can use the regex /hu./ to match all four words.
*/
let humStr = "I'll hum a song";
let hugStr = "Hug hug a Bear";
let hutStr = "I saw people living in huts"
let huRegex = /hu./gi;
console.log(huRegex.test(humStr), humStr.match(huRegex)); // returns true, ["hum"]
console.log(huRegex.test(hugStr), hutStr.match(huRegex));// returns true , ["hut"]
console.log(huRegex.test(hutStr), hugStr.match(huRegex)); //returns true, ["Hug, hug"]

/*Complete the regex unRegex so that it matches the strings run, sun, fun, pun, nun, and bun. Your regex should use the wildcard character.*/
let unStr = "The challenge is run, sun, fun, pun, nun, and bun";
let unRegex = /.un/g;
let unResult = unStr.match(unRegex);
console.log(unResult);

/*          Match Single Character with Multiple Possibilities

You learned how to match literal patterns (/literal/) and wildcard character (/ .  /). Those are the extremes of regular expressions, where one finds exact matches and the other matches everything. There are options that are a balance between the two extremes.

You can search for a literal pattern with some flexibility with character classes. Character classes allow you to define a group of characters you wish to match by placing them inside square ([ and ]) brackets.

For example, you want to match bag, big, and bug but not bog. You can create the regex /b[aiu]g/ to do this. The [aiu] is the character class that will only match the characters a, i, or u.

*/
let bagStr = "Match all the following bag, big, bug but not bog";
let bagRegex= /b[aiu]g/g;
console.log(bagStr.match(bagRegex));

/**Use a character class with vowels (a, e, i, o, u) in your regex vowelRegex to find all the vowels in the string quoteSample.*/

let newQuoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let quoteRegex = /[a,e,i,o,u]/gi;
console.log(newQuoteSample.match(quoteRegex));

/*          Match Letters of the Alphabet

You saw how you can use character sets to specify a group of characters to match, but that's a lot of typing when you need to match a large range of characters (for example, every letter in the alphabet). Fortunately, there is a built-in feature that makes this short and simple.

Inside a character set, you can define a range of characters to match using a hyphen character: -.

For example, to match lowercase letters a through e you would use [a-e].
Match all the letters in the string quoteSample.

Note: Be sure to match both uppercase and lowercase letters.

*/

let catStr = "Ciat";
let batStr = "bat";
let matStr = "mat";
let nuMatStr = "Mat" + 45;
let bgRegex = /[a-z][a-z][a-z]t|[a-z][a-z]t|[a-z][a-z]t|[0-9][0-9]/gi;
let nuRegex = /[a-z][a-z]t|[0-9][0-9]/gi
console.log(catStr.match(bgRegex));
console.log(batStr.match(bgRegex));
console.log(matStr.match(bgRegex));
console.log(nuMatStr.match(nuRegex)); //return  ["Mat, 45"]

let anotherStr = "The quick brown fox jumps over the lazy dog.";
let qRegex = /[a-z]/gi;
let anotherResult = anotherStr.match(qRegex)
console.log(anotherResult);

/*          Match Numbers and Letters of the Alphabet
Using the hyphen (-) to match a range of characters is not limited to letters. It also works to match a range of numbers.

For example, /[0-5]/ matches any number between 0 and 5, including the 0 and 5.

Also, it is possible to combine a range of letters and numbers in a single character set.
*/
let jennyStr = "Jenny8675309, Jery8675309";
let jennyRegex = /je[a-z]ny[0-9][0-9][0-9][0-9][0-9][0-9]./gi;
let nuJennyRegex = /[a-z0-9^ ]+/gi
let jennyResult = jennyStr.match(jennyRegex);
let nuJennyResult =jennyStr.match(nuJennyRegex)
console.log(jennyResult);
console.log(nuJennyResult);


/*Create a single regex that matches a range of letters between h and s, and a range of numbers between 2 and 6. Remember to include the appropriate flags in the regex.
*/
let quoteSampleOff = "Blueberry 3.141592653s are delicious.";
let quoRegex = /[h-s2-6]/gi;
let quResult = quoteSampleOff.match(quoRegex);
console.log(quResult);

/*Match Single Characters Not Specified
So far, you have created a set of characters that you want to match, but you could also create a set of characters that you do not want to match. These types of character sets are called negated character sets.

To create a negated character set, you place a caret character (^) after the opening bracket and before the characters you do not want to match.
for example:  /[^aeiou]/g
matches all characters that are not a vowel. Note that characters like ., !, [, @, / and white space are matched - the negated vowel character set only excludes the vowel characters.

    Create a single regex that matches all characters that are not a number or a vowel. Remember to include the appropriate flags in the regex.
*/
let miceStr = "3 3blind mice.";
let miceRegex = /[^0-9a-i. ]/gi;
let mcRegex = /[0-3a-z^ ]+/gi
let miceResult = miceStr.match(miceRegex);
let mcResult = miceStr.match(mcRegex);
console.log(miceResult);
console.log(mcResult);

/*
Match Characters that Occur One or More Times

Sometimes, you need to match a character (or group of characters) that appears one or more times in a row. This means it occurs at least once, and may be repeated.

You can use the + character to check if that is the case. Remember, the character or pattern has to be present consecutively. That is, the character has to repeat one after the other.

For example, /a+/g would find one match in abc and return ["a"]. Because of the +, it would also find a single match in aabc and return ["aa"].

If it were instead checking the string abab, it would find two matches and return ["a", "a"] because the a characters are not in a row - there is a b between them. Finally, since there is no a in the string bcd, it wouldn't find a match.

You want to find matches when the letter s occurs one or more times in Mississippi. Write a regex that uses the + sign.*/
let riversName = "Mississippi";
let ssRegex = /s+/g;
let wholeName = /[a-z]+/gi;
let ssResult = riversName.match(ssRegex) 
let nameResult = riversName.match(wholeName);
console.log(ssResult); 
console.log(nameResult); 

/*Match Characters that Occur Zero or More Times

The last challenge used the plus + sign to look for characters that occur one or more times. There's also an option that matches characters that occur zero or more times.

The character to do this is the asterisk or star: *.*/
let soccerWord= "3 Goal";
let gPhrase = "gut23 feeling";
let  oPhrase = "Ov12er the moon";
let newPhrase = "We've  won"
let soccerRegex = /[^0-9 ][a-z0-9][^ 0-9 ].*/ig;
let scoreResult = soccerWord.match(soccerRegex);
console.log(scoreResult);
console.log(gPhrase.match(soccerRegex));
console.log(oPhrase.match(soccerRegex));
console.log(newPhrase.match(soccerRegex));

/*For this challenge, chewieQuote has been initialized as the string Aaaaaaaaaaaaaaaarrrgh! behind the scenes. Create a regex chewieRegex that uses the * character to match an uppercase A character immediately followed by zero or more lowercase a characters in chewieQuote. Your regex does not need flags or character classes, and it should not match any of the other quotes.

*/
let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/;
let chewieResult = chewieQuote.match(chewieRegex);
console.log(chewieResult);

