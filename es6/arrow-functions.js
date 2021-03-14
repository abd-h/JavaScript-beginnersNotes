/*      Use Arrow Functions to Write Concise Anonymous Functions

In JavaScript, we often don't need to name our functions, especially when passing a function as an argument to another function. Instead, we create inline functions. We don't need to name these functions because we do not reuse them anywhere else.

To achieve this, we often use the following syntax:*/
const myFunc = function () {
    const myVar = value;
    return myVar;
}

/*ES6 provides us with the syntactic sugar to not have to write anonymous functions this way. Instead, you can use arrow function syntax: */
const myArrowFunc = () => {
    const myVarArrow = value;
    return myVarArrow;
}