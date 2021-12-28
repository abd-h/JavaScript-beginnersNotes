/*                              Pig Latin
Pig Latin is a way of altering English Words. The rules are as follows:

        1. If a word begins with constant, take the first constant or constant cluster, 
            move it to the end of the word, and add ay to it
            
        2. If a word begins with a vowel, just add way at the end. 

Translate the provided string to a Pig Latin. Input strings are gruanteed to be English
words in all lowercase.*/

function translatePigLatin(str) {
    let regex = /[^aeiou]*/; // searches for constants that occor one or more times consecutively.
    let s = str.replace(regex, ""); // variable s stores string that is cut off the first letter or cluster of letter from the begning.
    return (s === str)? str.concat("way")// if string begins with vowels just add way at the end
               :s.concat(str.match(regex), "ay");// else concat s to regex and then concat to ay.
}

console.log(translatePigLatin("california")); // should return the string aliforniacay.

console.log(translatePigLatin("paragraphs")); // should return the string aragraphspay.

console.log(translatePigLatin("glove")); // should return the string oveglay.

console.log(translatePigLatin("algorithm")); // should return the string algorithmway.

console.log(translatePigLatin("eight")); // should return the string eightway.

// Should handle words where the first vowel comes in the middle of the word. 
console.log(translatePigLatin("schwartz")) // should return the string artzschway.

// Should handle words without vowels. 
console.log(translatePigLatin("rhythm")); // should return the string rhythmay.