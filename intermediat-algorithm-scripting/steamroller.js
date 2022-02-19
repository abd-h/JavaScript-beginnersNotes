/** Steamroller 
 * Flatten a nested array. You must account for varying levels of nesting.
 
    function steamrollArray(arr) {
    return arr;
    }

    steamrollArray([1, [2], [3, [[4]]]]);
    */

    // Solved using the reduced method
    function steamrollArray(arr) {
        return arr.reduce((flattenArr, array) => {
            return flattenArr.concat(Array.isArray(array)? steamrollArray(array)
                                        : array)
        }, []);
    }
    console.log(steamrollArray([[["a"]], [["b"]]])) // should return ["a", "b"].

    console.log(steamrollArray([1, [2], [3, [[4]]]]))// should return [1, 2, 3, 4].

    console.log(steamrollArray([1, [], [3, [[4]]]]))// should return [1, 3, 4].

    console.log(steamrollArray([1, {}, [3, [[4]]]]))// should return [1, {}, 3, 4].


// Solved using for loop 

    function steamrollArray2(arr) {
        let result = [];
        for (let i = 0; i < arr.length; i++) {
            (Array.isArray(arr[i]))? result = result.concat(steamrollArray2(arr[i]))
            : result.push(arr[i])
        }
        return result
    }
    console.log(":::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::");
    console.log(steamrollArray2([[["a"]], [["b"]]])) // should return ["a", "b"].

    console.log(steamrollArray2([1, [2], [3, [[4]]]]))// should return [1, 2, 3, 4].

    console.log(steamrollArray2([1, [], [3, [[4]]]]))// should return [1, 3, 4].

    console.log(steamrollArray2([1, {}, [3, [[4]]]]))// should return [1, {}, 3, 4].

 
    // Solved using Array method

  Array.prototype.steamrollArray3 = function() {
        let flattenArr = [];
        for (let i = 0; i < this.length; i++) {
            (Array.isArray(this[i]))? flattenArr = flattenArr.concat(this[i].steamrollArray3())
            : flattenArr.push(this[i]);
        }
        return flattenArr
    }
 const a = [[["a"]], [["b"]]],
          b = [1, [2], [3, [[4]]]],
          c = [1, [], [3, [[4]]]],
          d = [1, {}, [3, [[4]]]];
console.log("::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::")
console.log(a.steamrollArray3());
console.log(b.steamrollArray3());
console.log(c.steamrollArray3());
console.log(d.steamrollArray3());
    