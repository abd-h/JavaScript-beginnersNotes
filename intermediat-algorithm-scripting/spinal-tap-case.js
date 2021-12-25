/* Spinal Tap Case
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.*/
function isUpperCase(str){
    return /^[A-Z]*$/.test(str);
}
console.log(isUpperCase("FOO"));
console.log(isUpperCase("fOa"));
console.log(isUpperCase());
function spinalCase(str){
  return str.split(" ")
                .filter(a => {
                   for(let i = 0; i < a.length; i++) {
                       console.log(a[1]);
                   }
                })
}



console.log(spinalCase("This Is Spinal Tap"))  // returns the string this-is-spinal-tap.

console.log(spinalCase("thisIsSpinalTap"))  // returns the string this-is-spinal-tap.

console.log(spinalCase("The_Andy_Griffith_Show"))  // returns the string the-andy-griffith-show.

console.log(spinalCase("Teletubbies say Eh-oh"))  // returns the string teletubbies-say-eh-oh.

console.log(spinalCase("AllThe-small Things"))  // returns the string all-the-small-things.

let spinalTapStr = "thisIsSpinalTap";

function spinalTap(str) {
    let s = [];
    let t = [];
    let strRegex = /[a-z]/;
    let strRegex2 = /[A-Z]/;

    
      let newStr = "";
    if(str[0] == str.match(strRegex)[0]) {
         newStr += str.indexOf(str.match(strRegex2));
         s.push(str.slice(str.indexOf(str.match(strRegex2))))
         s.unshift("-")
         s.map(a => t.push(a[0].toLowerCase().concat(a.slice(1))))
         
         
    }
    return t
}
console.log(spinalTap(spinalTapStr));