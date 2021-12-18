/*  Sum all Numbers in a Range
 
We'll pass you an array of  two numbers.
Return the sum of  those numbers plus the sum of all th numbers between them.
the lowes number will not always come first.

sumAll([1, 4]) should return a number.
sumAll([1, 4]) should return 10.
sumAll([4, 1]) should return 10.
sumAll([5, 10]) should return 45.
sumAll([10, 5]) should return 45.*/
function sumAll(arr) {
    const newArr = arr.concat().sort((a, b) => a - b);
    let total = [];
    const [arrtotal ] = [total];
    const arr1 = parseInt(newArr.slice(0, 1).join());
    const arr2 = parseInt(newArr.slice(1).join());
    for(let i = arr1; i <= arr2; i++){
        total.push(i);
    }
    return arrtotal.reduce((a, b) => a + b, 0);
}
console.log(sumAll([5, 10]));
console.log(sumAll([10, 5]));
console.log(sumAll([1,4]));
console.log(sumAll([4, 1]));
/*::::::::::::::::::::::::::::::::::::::::::::::::::::::::

Diff Two Arrays
Compare two arrays and return a new array with any of the items found in one of the two given arrays,
but not both. In other words, return the symmetric difference of the two arrays.

Note: You can return the array with its elements in any order.*/
function diffArray(arr1, arr2) {
    const newArr = [];
    arr2.forEach(a => {
        if(arr1.indexOf(a) === -1) {
            newArr.push(a);
        }
    })
    arr1.forEach(a => {
        if(arr2.indexOf(a) === -1) {
            newArr.push(a);
        }
    })
    return newArr;
}
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]));
console.log(diffArray([], ["snuffleupagus", "cookie monster", "elmo"]));
// console.log(diffArray());
// console.log(diffArray());