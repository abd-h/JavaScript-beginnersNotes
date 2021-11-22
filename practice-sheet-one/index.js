// call, apply and bind
/* We've already know that a function is a special type of object
    1. A function has a hidden optional name property; it can have a name  or it can be anonymous if you don't have name
    2. A function has a code property that contains  the code  and that code property is invocble so we can run the code
    3. All Javascript functions all so get access to some especial methodes ie call(), apply() and bind()

    And all three of these have to do with the this variable and the argument you pass the funcion as well.
    Let's have look at the example below*/

    let person = {
        firstName: "James",
        lastName: "Bond",
        fullName(){
            let fullName = `${this.firstName} ${this.lastName}`
            return fullName;
        }
    };
    console.log(person.fullName());
    
    let logName = function (lang1, lang2) {
        return `logged: ${this.fullName()}
    ......................................`
    }.bind(person)

    let logPersonName = logName('eng', "es")
    console.log(logPersonName);
    
    let logName1 = function (lang1, lang2) {
        return `logged: ${this.fullName()}
        ************************`
    }

    let logPersonName1 = logName.bind(person)
    console.log(logPersonName1('eng', "es"));
    