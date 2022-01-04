/*          Check for All or Non
Sometimes the patterns you want to seatch for may have parts of it that may or
may not exist. However, it may be important to check for them nonetheless.

You can specify the possiple existance of an element with a question mark, ?.

This checks for zero or one of the proceding element. You can think of this symbol as 
the previous element is optional.

For example, there are slight differences in American and British English and you can use the 
question mark to match both spellings.*/

let american = "color";
let english = "colour";
let rainbowRegex = /colou?/;
console.log(rainbowRegex.test(american));
console.log(rainbowRegex.test(english));

// Change the regex favRegex to match both the American English (favorite) and the 
// british English (favourite) version of the word.

let favWord = "favorite";
let favRegex = /favou?rite/
let favResult = favRegex.test(favWord);
console.log(favResult);
/*::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

                    Positive and Negative Lookahead
Lookaheads are patterns that tell JavaScript to look-ahead in your string to check 
for patterns further a long. This can be useful when you want to search for multiple 
patterns over the same string.

There are two kind of lookheads: positive lookaheads and negative lookaheads.

A positive lookaheads will look to make sure the elelment in the search pattern is there,
but won't actually match it. A positive lookaheads is used as (?=...) where the ... is the required part 
that is not matched.

On the other hand, a negative lookahead will look to make sure the element in the search pattern 
is not there. A negative lookahead is used as (?!...) where ... is the pattern that you do not want to be there. The rest of the pattern is return if the negative lookahead is not present.

Lookaheads are a bit confusing but some examples will help.*/

let quit = "qu";
let notquit = "qt";
let quRegex = /q(?=u)/;
let qRegex = /q(?!u)/;
console.log(quit.match(quRegex));
console.log(notquit.match(qRegex));

