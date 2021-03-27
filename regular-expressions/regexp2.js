/**         Match Whitespace
The challenges so far have covered matching letters of the alphabet and numbers. You can also match the whitespace or spaces between letters.

You can search for whitespace using \s, which is a lowercase s. This pattern not only matches whitespace, but also carriage return, tab, form feed, and new line characters. You can think of it as similar to the character class [ \r\t\f\n\v]. */
let whiteSpace = "Whitespace. Whitespace everywhere";
let whitespace = "Whitespace is important in separating words"
let spaceRegex = /\s/g;
let noSpace = /\s\w\D.+/g;
console.log(whiteSpace.match(spaceRegex));
console.log(whitespace.match(spaceRegex).length);
console.log(whiteSpace.match(noSpace));

/**         Match Non-Whitespace Characters
You learned about searching for whitespace using \s, with a lowercase s. You can also search for everything except whitespace.

Search for non-whitespace using \S, which is an uppercase s. This pattern will not match whitespace, carriage return, tab, form feed, and new line characters. You can think of it being similar to the character class [^ \r\t\f\n\v]. */
