/*          Search and Replace
Perfom search and replace on the sentence using the arguments provided and return a new sentence.

First argument is the sentence to perform and replace on.

Second argument is the word that you will replacing (before).

Third argument is what you will be replacing the second argument with (after).

Note: Preserve the case of the first character in the original word when you replacing it. For example if you mean to replace the word Book with the dog, it should be replaced as Dog
 */
function myReplace(str, before, after) {
    let s = [],
         newAfter = after.split(" ").slice().join(" "),
         regex = /[A-Z]/,
         newStr = str.split(" ");
    newStr.map((a, b) => (a === before)? s.push(a = b) : []);
    (before[0].match(regex))? newAfter = after[0].toUpperCase().concat(after.slice(1,))
    :newAfter = after[0].toLowerCase().concat(after.slice(1,));
    s = s[0]
    newStr.splice(s, 1, newAfter)
    return newStr.join(" ");
}

console.log(myReplace("Let us go to the store", "store", "mall")); // should return the string Let us go to the mall.

console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting")); // should return the string He is Sitting on the couch.

console.log(myReplace("I think we should look up there", "up", "Down")); // should return the string I think we should look down there.

console.log(myReplace("This has a spellngi error", "spellngi", "spelling")); // should return the string This has a spelling error.

console.log(myReplace("His name is Tom", "Tom", "john")); // should return the string His name is John.

console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms")); // should return the string Let us get back to more Algorithms.
