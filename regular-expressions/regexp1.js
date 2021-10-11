/*          Extract Matches
So far, you have only been checking if a pattern exists or not within a string. 
You can also extract the actual matches you found with the .match()
method.

To use the .match() method, apply the method on a string and pass 
in the regex inside the parentheses.

Here's an example:*/
console.log("Hello World".match(/Hello/g));
let regStr = "Regular expressions";
let regregex = /expressions/g;
let regResult = regStr.match(regregex);
console.log(regResult);
/*Here the first match would return ["Hello"] and the second would return ["expressions"].

Note that the .match syntax is the "opposite" of the .test method you have been musing thus far:*/
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



/*          Find More Than the First Match

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

Sometimes you won't (or don't need to) know the exact characters 
in your patterns. Thinking of all words that match, say, 
a misspelling would take a long time. Luckily, you can save time 
using the wildcard character: .

The wildcard character . will match any one character. 
The wildcard is also called dot and period. 
You can use the wildcard character just like any other 
character in the regex. For example, if you wanted to match hug, 
huh, hut, and hum, you can use the regex /hu./ to match all four 
words.
*/
let humStr = "I'll hum a song";
let hugStr = "Hug hug a Bear";
let hutStr = "I saw people living in huts"
let huRegex = /hu./gi;
console.log(huRegex.test(humStr), humStr.match(huRegex)); 
// returns true, ["hum"]
console.log(huRegex.test(hugStr), hutStr.match(huRegex));
// returns true , ["hut"]
console.log(huRegex.test(hutStr), hugStr.match(huRegex)); 
//returns true, ["Hug, hug"]

/*Complete the regex unRegex so that it matches the strings run, sun, fun, pun, nun, and bun. Your regex should use the wildcard character.*/
let unStr = "The challenge is run, sun, fun, pun, nun, and bun";
let unRegex = /.un/g;
let unResult = unStr.match(unRegex);
console.log(unResult);

/*          Match Single Character with Multiple Possibilities

You learned how to match literal patterns (/literal/) and wildcard character (/ .  /). Those are the extremes of regular expressions, where one finds exact matches and the other matches everything. There are options that are a balance between the two extremes.

You can search for a literal pattern with some flexibility 
with character classes. Character classes allow you to define 
a group of characters you wish to match by placing them 
inside square ([ and ]) brackets.

For example, you want to match bag, big, and bug but not bog. 
You can create the regex /b[aiu]g/ to do this. 
The [aiu] is the character class that will only match the 
characters a, i, or u.

*/
let bagStr = "Match all the following bag, big, bug but not bog";
let bagRegex= /b[aiu]g/g;
console.log(bagStr.match(bagRegex));

/**Use a character class with vowels (a, e, i, o, u) in your 
regex vowelRegex to find all the vowels in the string quoteSample.*/

let newQuoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let quoteRegex = /[a,e,i,o,u]/gi;
console.log(newQuoteSample.match(quoteRegex));

/*          Match Letters of the Alphabet

You saw how you can use character sets to specify a group of 
characters to match, but that's a lot of typing when you need to 
match a large range of characters (for example, every letter in 
the alphabet). Fortunately, there is a built-in feature that makes 
this short and simple.

Inside a character set, you can define a range of characters to 
match using a hyphen character: -.

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

Using the hyphen (-) to match a range of characters is not limited 
to letters. It also works to match a range of numbers.


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


/*Create a single regex that matches a range of letters between h 
and s, and a range of numbers between 2 and 6. Remember to include 
the appropriate flags in the regex.

*/
let quoteSampleOff = "Blueberry 3.141592653s are delicious.";
let quoRegex = /[h-s2-6]/gi;
let quResult = quoteSampleOff.match(quoRegex);
console.log(quResult);

/*Match Single Characters Not Specified
So far, you have created a set of characters that you want to 
match, but you could also create a set of characters that you 
do not want to match. These types of character sets are called 
negated character sets.

To create a negated character set, you place a caret character (^) 
after the opening bracket and before the characters you do not want 
to match.
for example:  /[^aeiou]/g
matches all characters that are not a vowel. Note that characters 
like ., !, [, @, / and white space are matched - the negated 
vowel character set only excludes the vowel characters.


    Create a single regex that matches all characters that are not 
a number or a vowel. Remember to include the appropriate flags 
in the regex.
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

Sometimes, you need to match a character (or group of characters) 
that appears one or more times in a row. This means it occurs at 
least once, and may be repeated.

You can use the + character to check if that is the case. 
Remember, the character or pattern has to be present consecutively. That is, the character has to repeat one after the other.

For example, /a+/g would find one match in abc and return ["a"]. 
Because of the +, it would also find a single match in aabc and 
return ["aa"].

If it were instead checking the string abab, it would find 
two matches and return ["a", "a"] because the a characters are 
not in a row - there is a b between them. Finally, since there is 
no a in the string bcd, it wouldn't find a match.

You want to find matches when the letter s occurs one or more times in 
Mississippi. Write a regex that uses the + sign.*/
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
let chewieQuote = "Aaaaaaaaaaaaaaaarrrghz!";
let chewieStr = "He made a fair move. Screaming about it can't help you.";
let chewieStr1 = "Let him have it. It's not wise to upset a Wookiee.";
let chewieRegex = /Aa*/g;
let chewieResult = chewieQuote.match(chewieRegex);
console.log(chewieResult);
console.log(chewieStr.match(chewieRegex));
console.log(chewieStr1.match(chewieRegex));

/*Find Characters with Lazy Matching

In regular expressions, a greedy match finds the longest possible part of a string that fits the regex pattern and returns it as a match. The alternative is called a lazy match, which finds the smallest possible part of the string that satisfies the regex pattern.

You can apply the regex /t[a-z]*i/ to the string "titanic". This regex is basically a pattern that starts with t, ends with i, and has some letters in between.

Regular expressions are by default greedy, so the match would return ["titani"]. It finds the largest sub-string possible to fit the pattern.

However, you can use the ? character to change it to lazy matching. "titanic" matched against the adjusted regex of /t[a-z]*?i/ returns ["ti"].

Note: Parsing HTML with regular expressions should be avoided, but pattern matching an HTML string with regular expressions is completely fine.

Fix the regex /<.*>/ to return the HTML tag <h1> and not the text "<h1>Winter is coming</h1>". Remember the wildcard . in a regular expression matches any character.

*/
let text = "<h1>Winter is Coming</h1>";
let textStr = "Winter is coming";
let tRegex= /w[a-z].*?n/gi;
let textRegex = /<.*?>/g;
console.log(text.match(textRegex));
console.log(textStr.match(tRegex));

/*          Find One or More Criminals in a Hunt
Time to pause and test your new regex writing skills. A group of criminals escaped from jail and ran away, but you don't know how many. However, you do know that they stay close together when they are around other people. You are responsible for finding all of the criminals at once.

Here's an example to review how to do this:*/
let zStr = "z, zzzz, ABCzzzz, abczzzzzzzzzzz";
let noZstr = " ABC abcabc";
let zRegex = /[z]+/g;
console.log(zStr.match(zRegex));
/*Write a greedy regex that finds one or more criminals within a group of other people. A criminal is represented by the capital letter C.*/
let cStr = "C";
let ccStr = "CC";
let cccStr = "P1P5P4CCCcP2P6P3.";
let ccccStr = "P6P2P7P4P5CCCCCP3P1";
let emptyStr = "";
let p123Str = "P1P2P3";
let fiftyStr = 
"P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCP3.";
let ccRegex = /C+/gi;
let cRegex = /[c]+/gi;
console.log(cStr.match(cRegex));
console.log(ccStr.match(cRegex));
console.log(cccStr.match(cRegex));
console.log(cccStr.match(ccRegex));
console.log(ccccStr.match(cRegex));
console.log(p123Str.match(cRegex));
console.log(emptyStr.match(cRegex));
console.log(fiftyStr.match(cRegex).length);

/*      Match Beginning String Patterns
Prior challenges showed that regular expressions can be used to look for a number of matches. They are also used to search for patterns in specific positions in strings.

In an earlier challenge, you used the caret character (^) inside a character set to create a negated character set in the form [^thingsThatWillNotBeMatched]. Outside of a character set, the caret is used to search for patterns at the beginning of strings.
*/
let firstStr ="Ricky is first and can be found";
let rickyRegex = /^ricky/gi;
let ricRegex = /^[\w]+/ig;
console.log(firstStr.match(rickyRegex));
console.log(firstStr.match(ricRegex));

/*Match Ending String PatternsPassed
In the last challenge, you learned to use the caret character to search for patterns at the beginning of strings. There is also a way to search for patterns at the end of strings.

You can search the end of strings using the dollar sign character $ at the end of the regex.

*/
let theEnding = "This is never ending story";
let noEnding = "Sometimes the story has to end"
let storyRegex = /story$/g;
console.log(theEnding.match(storyRegex));
console.log(noEnding.match(storyRegex));
console.log(storyRegex.test(theEnding));
console.log(storyRegex.test(noEnding));

/*          Match All Letters and Numbers
Using character classes, you were able to search for all letters of the alphabet with [a-z]. This kind of character class is common enough that there is a shortcut for it, although it includes a few extra characters as well.

The closest character class in JavaScript to match the alphabet is \w. This shortcut is equal to [A-Za-z0-9_]. This character class matches upper and lowercase letters plus numbers. Note, this character class also includes the underscore character (_).
*/
let varNames1 = "important_Var";
let number1 = 45;
let longHandRegex = /[a-zA-Z0-9_]+/;
let shortHandRegex = /[\w+]/g;
console.log(longHandRegex.test(varNames1));
console.log(longHandRegex.test(number1));
console.log(shortHandRegex.test(number1));

/*Use the shorthand character class \w to count the number of alphanumeric characters in various quotes and strings.*/
let someStr ="The five boxing wizards jump quickly.";
let someRegex = /\w+/g;
let someResult = someStr.match(someRegex).length;
console.log(someResult);

/**         Match Everything But Letters and Numbers
 * You've learned that you can use a shortcut to match alphanumerics [A-Za-z0-9_] using \w. A natural pattern you might want to search for is the opposite of alphanumerics.

You can search for the opposite of the \w with \W. Note, the opposite pattern uses a capital letter. This shortcut is the same as [^A-Za-z0-9_].
 */
let shortHand1 = /\W/g;
let sentence = "Coding!";
let number2 = "42%";
console.log(sentence.match(shortHand1));// returns !;
console.log(number2.match(shortHand1));//returns %;
/**
 * Use the shorthand character class \W to count the number of non-alphanumeric characters in various quotes and strings.

 */
let quoteStr = "The five boxing wizards jump quickly.";
let noNumber = /\W/g; 
let nonNumLength = quoteStr.match(noNumber).length;
console.log(nonNumLength);//returns 6

/**         Match All Numbers
You've learned shortcuts for common string patterns like alphanumerics. Another common pattern is looking for just digits or numbers.

The shortcut to look for digit characters is \d, with a lowercase d. 
This is equal to the character class [0-9], which looks for a single 
character of any number between zero and nine.

Use the shorthand character class \d to count how many digits are in movie titles. 
Written out numbers ("six" instead of 6) do not count.

 */
let movieName2 = "2001: A Space Odyssey";
let movieRegex = /\d/g;
let movieRegex1 = /\d+/g;
let movieResult1 = movieName2.match(movieRegex)
let movieResult2 = movieName2.match(movieRegex1)
let movieResult3 = movieName2.match(movieRegex).length;
let movieResult4 = movieName2.match(movieRegex1).length;
console.log(movieResult1);
console.log(movieResult2);
console.log(movieResult3);
console.log(movieResult4);

/**
 * Match All Non-Numbers
The last challenge showed how to search for digits using the shortcut \d with a lowercase d. You can also search for non-digits using a similar shortcut that uses an uppercase D instead.

The shortcut to look for non-digit characters is \D. This is equal to the character class [^0-9], which looks for a single character that is not a number between zero and nine.
 */
let movieName3 = "2001: A Space Odyssey";
let movieRegex2 = /\D/g;
let movieRegex3 = /\D+/g;
let movieResult5 = movieName3.match(movieRegex2)
let movieResult6 = movieName3.match(movieRegex3)
let movieResult7 = movieName3.match(movieRegex).length;
let movieResult8 = movieName3.match(movieRegex1).length;
console.log(movieResult5);
console.log(movieResult6);
console.log(movieResult7);
console.log(movieResult8);

/**Restrict Possible UsernamesPassed
Usernames are used everywhere on the internet. They are what give users a unique identity on their favorite sites.

You need to check all the usernames in a database. Here are some simple rules that users have to follow when creating their username.

1.  Usernames can only use alpha-numeric characters.

2.  The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.

3.  Username letters can be lowercase and uppercase.

4.  Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.

 */
let userName2 = "JackOfAllTrades";
let userCheck1 = /^[a-z][a-z]+\d*$|[a-z]\d\d+$/i;
let usernameResult = userName2.match(userCheck1);
console.log(usernameResult);
/**Code Explanation
^ - start of input
[a-z] - first character is a letter
[a-z]+ - following characters are letters
\d*$ - input ends with 0 or more digits
| - or
^[a-z] - first character is a letter
\d\d+ - following characters are 2 or more digits
$ - end of input*/




