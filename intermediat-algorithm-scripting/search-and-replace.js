/*          Search and Replace
Perfom search and replace on the sentence using the arguments provided and return a new sentence.

First argument is the sentence to perform and replace on.

Second argument is the word that you will replacing (before).

Third argument is what you will be replacing the second argument with (after).

Note: Preserve the case of the first character in the original word when you replacing it. For example if you mean to replace the word Book with the dog, it should be replaced as Dog
 */
function myReplace(str, before, after) {
    let s = [];
    let d =[];
    let regex = /[A-Z]/;
    let newStr = str.split(" ");
    console.log(newStr);
   newStr.map((a, b, c) => {
       if (a === before){
           s.push(a = b)
       }
    })
    s = s[0]
    newStr.splice(s, 1);
    return newStr
}

console.log(myReplace("Let us go to the store", "store", "mall")); // should return the string Let us go to the mall.

console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting")); // should return the string He is Sitting on the couch.

console.log(myReplace("I think we should look up there", "up", "Down")); // should return the string I think we should look down there.

console.log(myReplace("This has a spellngi error", "spellngi", "spelling")); // should return the string This has a spelling error.

console.log(myReplace("His name is Tom", "Tom", "john")); // should return the string His name is John.

console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms")); // should return the string Let us get back to more Algorithms.