/*              Match Characters that Occors One or More Times
Sometimes, you need to match a character (or group of characters) 
that appears one or more times in a row. This means it occurs at least 
onece,and maybe repeated.

You can use the + character to check if that is the case. Remember, the 
character or pattern has to be present consecutively. That is, the character 
has to repeat one after the other.

For example, /a+/g; would find one match in abc and return ["a"]. Because 
of the +, it would also find a single match in aabc and return ["aa"].

If it were instead checking the string abab, it would find two matches and return 
["a", "a"] because the a characters are not in a row - there is a b between then. 
Finally, since there is no a in the string bcd, it wouldn't find a match.

You want  to find matches when the letters s occurs one or more times in Mississippi.
Write a regex that uses the + sign.*/

let difficultSpelling = "Mississipi";
let diffRegex = /s+/g;
let dResult = difficultSpelling.match(diffRegex);
console.log(dResult);
/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::;
                            Match Characters that Occor Zero or More Times
The last challenge you use the + sign to look for characters that occur one or more times.
There's also an option that matches characters that occur zero or more times.

The character to do this is the asterisk: *.*/

let soccerWord = "goooooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let gRegex = /go*/;
let gl = "glove"
console.log(soccerWord.match(gRegex));
console.log(gPhrase.match(gRegex));
console.log(oPhrase.match(gRegex));
/* In order, the three matchs calls would return the values ["goooooooo"], ["g"] and null

For this challenge, chewieQuote has been initialized as the string Aaaaaaaaaaaaaaaarrrgh! behind the scenes.
Create a regex chewieRegex that uses the * character to match an uppercase A character immediatly followed by zero or more lowercase a  characters in chewieQuote. Your regex does not need flags or character classes, and it should not match any other quotes.
 */
let chewieQuote = "Aaaaaaaaaaaaaaaaaaaaaa";
let chewieRegex = /Aa*/;
let chewieResult = chewieQuote.match(chewieRegex);
console.log(chewieResult);
/*::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

                        Find Characters with Lazy Matching
In regular expressions, a greedy match finds the longs possible part of a string theat fits
the regular pattern and returns it as a match. The alternative is called a lazy match, which
finds the smallest possible part of a string that satisfies the regex pattern.

You can apply the regex /t[a-z]*i/ to the string "titanic". This regex is basically a pattern that starts 
with t, ends with i, and has some letters in between.

Regular expressions are by default greedy, so the match would return ["titani"]. It finds the 
largest sub-string possible to fit the pattern.

However, you can use the ? character to change it to lazy matching. "titanic" matched against 
the adjusted regex of  /t[a-z]*?i/; returns ["ti"].

Note: Parsing HTML with regular expressions should be avoided, but pattern matching 
an HTML string with regular expression is completely find.

Fix the regex /<.*>/  to return the HTML tag <h1> and not the text "<h1>Winter is coming</h1>".
Remember the wildcard . in regular expression matches any character.
*/
let text = "<h1>Winter is coming</h1>"
let textRegex = /.*?>/;
let textResult = text.match(textRegex);
console.log(textResult);
/*::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: 

Find One or More Criminals in  a Hunt

Time to pause and test your new regex writing skills. A group of criminals escaped from jail and ran away,
but you don't know how many. However, you fo know that  they stay close together when they are around 
other people. You are resposiple for finding all of the criminals at once.

Here's an example to review how to do this:

The regex /z+/ matches the letter z when it appears one or more times in a row. It will find matches in all 
of the following strings:

"z"
"zzzzzz"
"ABCzzzzz"
"zzzzABC"
"abczzzzzzzzzzzzabc"
But it does not find matches in the following strings since there are no letter z characters:

""
"ABC"
"abcabc"
Write a greedy regex that finds one or more criminals within a group of other people. A criminal is 
represented by the capital letter C.
*/
let criminals = "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC"
let crRegex = /C+/i;
// let crResult = criminals.match(crRegex);
// console.log(crResult);
console.log(criminals);