/*  Make a Person

Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAnd lastName);

Run the test to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. The methods must be the only available means of interacting with the object.
*/

const Person = function(firstAndLast) {
    let first = firstAndLast.split(" ").slice(0,1).join(" ");
    let last = firstAndLast.split(" ").slice(1).join(" ");
    let fullname = firstAndLast.split(" "). slice(). join(" ");

    this.getFirstName = function() {
        return first
    }
    
    this.getLastName = function() {
        return last;
    }
    this.getFullName = function() {
        return `${this.getFirstName()} ${this.getLastName()}`
    }

    this.setFirstName = function(name) {
        return first = first.replace(first, name);
    }

    this.setLastName = function(name) {
          return last = last.replace(last, name)
    }

      this.setFullName = function(setFirstAndLast) {
        first = setFirstAndLast.split(" ").slice(0, 1).join(" ");
        last = setFirstAndLast.split(" "). slice(1).join(" ");
        return fullname = `${setFirstAndLast}`;
    }
}
let bob = new Person("Bob Ross");
console.log(bob instanceof Person); // true
console.log(bob.firstName);
console.log(bob.lastName);
console.log(bob.getFirstName()); // Bob
console.log(bob.getLastName()); // Ross
console.log(bob.getFullName()); // Bob Ross
bob.setFirstName("Haskell")
console.log(bob.getFullName()); // Haskell Ross
bob.setLastName("Curry");
console.log(bob.getFullName());  //Haskell Curry
bob.setFullName("Haskel Curry")
console.log(bob.getFirstName()); // Haskell 
console.log(bob.getLastName()); // Curry
console.log(Object.keys(bob).length);

