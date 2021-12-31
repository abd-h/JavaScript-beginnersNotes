/*              DNA Pairing
The DNA strand is missing the pairing element. Take each character, 
get it's pair, and return the result as a 2d array.

Base pair are a pair of AT and CG. Match the missing element to provide the 
character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C, G"], ["G, C"]]

The character and its pair are paired up in an array, and all the array are grouped into one 
encapsulating array. */

function pairElement(str) {
    let newStr = []
    str.split("")
        .forEach(a => 
            (a === "G")? newStr.push(["G", "C"])
            :(a === "C")? newStr.push(["C", "G"])
            :(a === "A")? newStr.push(["A", "T"])
            : newStr.push(["T", "A"])
        );
    return newStr;
}
console.log(pairElement("GCG")); // should return [["G", "C"], ["C, G"], ["G, C"]]
console.log(pairElement("ATCGA")); // should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].

console.log(pairElement("TTGAG")); // should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].

console.log(pairElement("CTCTA")); // should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].