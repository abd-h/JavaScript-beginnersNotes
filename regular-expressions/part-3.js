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