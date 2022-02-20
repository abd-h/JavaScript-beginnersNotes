/* Partial Application

What is it?
Partial application starts with a function. We take this function and create a new one with one or 
more of its arguments already "set" or partially applied. This sounds odd, but it will reduce the number of parameters needed for our functions.

Let's get some contex around when we could use partial application:  */

const list = (lastJoin, ...items) => {
    const commaSeparated = items.slice(0, -1).join(", ");
console.log(commaSeparated);
    const lastItem = items.pop();

    return `${commaSeparated} ${lastJoin} ${lastItem}`
}
console.log(list("and", "red", "green", "blue"));



const partial = (fn, firstArg) => {
    return (...lastArgs) => {
        return fn(firstArg, ...lastArgs);
    }
}
const listAnd = partial(list, "and");
console.log(listAnd('red', 'green', 'blue')); // red, green and blue