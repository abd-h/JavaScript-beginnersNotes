/*                              Missing Letters
Find the missing letter in the passed letter range and return it.

If all letters are present return undefined*/

function fearNotLetter(str) {
    const alphabet = [
        "a","b","c","d","e","f","g","h","i","j","k","l",
        "m","n","o","p","q","r","s","t","u","v","w","x",
        "y","z"
    ];
    let newStr = str.split(""),
         s = alphabet.slice(alphabet.indexOf(str[0]), alphabet.indexOf(str[str.length -1])+1)
  
    s = s.map(a => {
        if(newStr.indexOf(a) === -1) {
            return a;
        } else if (newStr === a) {
            return undefined;
        }
        return undefined
    })
    return  s.join("")
}
console.log(fearNotLetter("abce")); // should return the string d.

console.log(fearNotLetter("abcdefghjklmno")); // should return the string i.

console.log(fearNotLetter("stvwx")); // should return the string u.

console.log(fearNotLetter("bcdf")); // should return the string e.

console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz")); // should return undefined.