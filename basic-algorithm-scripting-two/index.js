/*Convert Celsius to FahrenheitPassed
The algorithm to convert from Celsius to Fahrenheit is the temperature 
in Celsius times 9/5, plus 32.

You are given a variable celsius representing a temperature in Celsius. 
Use the variable fahrenheit already defined and assign it the Fahrenheit 
temperature equivalent to the given Celsius temperature. Use the algorithm 
mentioned above to help convert the Celsius temperature to Fahrenheit.*/

function convertToF(celsius) {
    let fahrenheit = (celsius * 9) / 5 +  32;
    return fahrenheit;
}

console.log(convertToF(0)); //  should return a number
console.log(convertToF(-30)); // return a value of -22
console.log(convertToF(-10)); // return a value of 14
console.log(convertToF(0));  //return a value of 32
console.log(convertToF(20));  // return a value of 68
console.log(convertToF(30));  // return a value of 86
/*....................................................................................................

Reverse a String

            Reverse the provided string.
You may need to turn the string into an array before you can reverse it.
Your result must be a string.*/

function reverseString(str) {   
  return str.split("") 
                .reverse( )
                .join("");
}

console.log(reverseString("hello"));
console.log(reverseString("hello")); // returns a string.
console.log(reverseString("hello")); // returns the string olleh.
console.log(reverseString("Howdy") );// returns the string ydwoH.
console.log(reverseString("Greetings from Earth")); // returns the string htraE morf sgniteerG.
/*...........................................................................................................

Factorialize a NumberPassed
Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

Only integers greater than or equal to zero will be supplied to the function.*/
function factorialize(num) {
  if(num === 0){
      return 1;
  }
  else {
      return num * factorialize(num - 1);
  }
}
console.log(factorialize(5));//returns a number.
console.log(factorialize(5)); //returns 120.
console.log(factorialize(10)); // returns 3628800.
console.log(factorialize(20)); // returns 2432902008176640000.
console.log(factorialize(0)); // returns 1
