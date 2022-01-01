/*                      Ristrict Possiple Usernames
Usernames are used everywhere on the internet. They are what give users a unique identity 
on their favorite sites.

You need to check all the usernames in a database. Here are some simple rules that users have 
to follow when creating usernames.

1.  Usernames can only be alpha-numeric characters.

2.  The only numbers in the username have to be at the end. There there can be zero or more of them
    at the end. Username can not start with the number.

3.  Username letters can be lowercase and uppercase.

4.  Username have to be at least two characters long. A two-character username can only use
    alphabet letters as characters.

Change the regex userCheck to fit the constraints listed above.

let username = "JackOfAllTrades";
let userCheck = /change/; // Change this line
let result = userCheck.test(username);
*/

let username = "J%4";
let userCheck = /(^[a-z][a-z]+\d*$)|(^[a-z][\d][\d]\d*$)/i
let checkResult = userCheck.test(username)
console.log(checkResult);
console.log(username.match(userCheck));

/* Code Explanation

1.      Here I started with caret character to control of the beginning so that 
        I can match only if username begins with at least two letters.

2.      I used + character to match that if username has atleast two letters and one or more 
        letters.
        
3.      $ character makes sure that username always ends with numbers that occor zero or moretimes.

4.      | (or) character matchs if first character is a letter and is then followed by two numbers.

5.  Global flag isn't needed bit i flag can be used. it's personal choice.
 */