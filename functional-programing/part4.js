/*************************************************
 ************************************************
Use the map Method to Extract Data from an Array
 
 So far we have learned to use pure functions to avoid side effects in a program. Also, we have seen the value in having a function only depend on its input arguments.
 
This is only the beginning. As its name suggests, functional programming is centered around a theory of functions.

It would make sense to be able to pass them as arguments to other functions. Functions are considered first class objects in JavaSctipt, which means they can be used like any other objects. They can be saved in a variables, stored in an object, or passed as function arguments.

Let's start with some simple array functions, which are methods on the array object prototype. In this exercise we are looking at Array.prototype.map(), or more simply map.

The map method iterates over each item in an array and returns a new array containing the result of calling the callback function on each element. It does this without mutating the original array.

When the callback is used, it is passed three arguments.
    1.  The first argument is the current element being processed.
    2.  The second is the index of that element.
    3.  And the third is the array which the map method is called.
    
See below for an example using the map method on the users array to return a new array containing only the names of  the users as elements. for simplicity, the example only uses the first argument of the callbak.  
*/
const users = [
    { name: "John", age: 10},
    { name: "Amy", age: 20},
    { name: " comperCat", ager: 10}
]

const names = users.map(user => user.name);
console.log(names);
/*
The console would display the value ["John", " Amy", camperCat] 

    ********* ********* ********* *********
    *                  CHALLENGE SIX                    *
    * ********* ********* ********* *******

*/

const watchList = [
    {
        "Title": "Inception",
        "Year": 2010,
        "Rated": "PG-13",
        "Released": "16 Jul 2010",
        "Runtime": "148 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
        "Language": "English, Japanese, French",
        "Country": "USA, UK",
        "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
        "Poster":"http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg", 
        "Metascore": "74",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
    "imdbID": "tt1375666",
    "Type": "movie",
    "Response": "True"
    },
    {
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "Language": "English",
    "Country": "USA, UK",
    "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
    "imdbID": "tt0816692",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Runtime": "152 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    "Language": "English, Mandarin",
    "Country": "USA, UK",
    "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    "Metascore": "82",
    "imdbRating": "9.0",
    "imdbVotes": "1,652,832",
    "imdbID": "tt0468569",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Runtime": "140 min",
    "Genre": "Action, Adventure",
    "Director": "Christopher Nolan",
    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    "Language": "English, Urdu, Mandarin",
    "Country": "USA, UK",
    "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    "Metascore": "70",
    "imdbRating": "8.3",
    "imdbVotes": "972,584",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "Runtime": "162 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "Language": "English, Spanish",
    "Country": "USA, UK",
    "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    "Metascore": "83",
    "imdbRating": "7.9",
    "imdbVotes": "876,575",
    "imdbID": "tt0499549",
    "Type": "movie",
    "Response": "True"
  }
];

/*
The watchList array holds objects with information on several movies. Use map on watchList to assign a new array of objects to the ratings variable. Each movie in the new array should have only a title key with the name of the film, and a rating key with the IMDB rating. Tha code in the editor currently uses a for loop to do this, so you should replace the loop functionality with your map expression.   */

const ratings = watchList.map(({Title: title, imdbRating: rating}) => {
    return   {title, rating}
});
console.log(ratings);

/***********************************************************************************************
 
            Implement map on Prototype
As you have seen from applying Array.protoype.map(), or simply map()earlier, the map method returns an array of the same length as the one it was called on. It also doesn't alter the original array, as long as its callback function does'n.

In other word, map is a pure function, and its output depends solely on it inputs, Plus, it takes onother function as its argumrnt.

You might learn a lot about the map method if  you implement your own version of it. It is reclommended you use a for loop or array.prototype.forEach().

                            ********* ********* ********* *********
                            *                  CHALLENGE SEVEN                    *
                            * ********* ********* ********* *******
Write your own array.prototype.myMap(), which should behave exactly like Array.prototype.map().
You should not use the built-in map method. The Array instance can be accessed in the myMap method using this.*/

// The global variable
const s  = [23, 65, 98, 5];
Array.prototype.myMap = function(callback) {
    const newArray = [];
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i]))
    }
    return newArray;
}

const new_s = s.myMap(item => item * 2);
console.log('...............................................');
console.log(new_s);
/**********************************************************************************************

Use the filter Method to Extract Data from an aArray

Another useful array function is Array.prototype.filter(), or simply filter().

Filter calls a function on each element of an array and returns new array containing only the elements for which that function returns true. In other words it filters the array, based on the function passed to it. like map it does this without needing to modify the original array.

The callback function accepts three arguments. 
     1.       The first argument is the current element being processed.
     2.       The second is the index of that element.
    3.        The third is the array upon which the filter method waas called.

See below for an example using the filter method on the users array to return new array containing only the users under the age of 30. For simplicity, the example only uses the first argument of the callback.    
*/
const users1 =[
    { name: "John", age: 34},
    { name: "Amy", age: 20},
    { name: "camperCat", age: 10}
];
const usersUnder30 = users1.filter(user => user.age < 30);
console.log('..................................');
console.log(usersUnder30);
/*The console would display the value [ { name: 'Amy', age: 20 }, { name: 'camperCat', age: 10 } ].

The variable watchList holds an array of objects with information on several movies. Use a clombination of filter and map on watchList to assign a new array of objects with only title and rating keys. The new array should only include ohjects where imdbRating is greater than or equal to 8.0. 

Note that the rating values are saved as strinngs un the object and you may need to convert them into numbers to perform mathematical operations on them.

                            ********* ********* ********* *********
                            *                  CHALLENGE SEVEN                    *
                            * ********* ********* ********* ********/

const filteredList = watchList
                                        .map(({Title: title, imdbRating: rating}) => {return {title, rating}})
                                        .filter(i => i.rating >= 8.0)

console.log(filteredList);
/*********************************************************************************************

Implement the filter Method on Prototype

You might learn a lot about the filter method if you implement your own version of it.
It is recomended you usr for loop or Array.prototype.forEach().

Write your own Array.prototype.myFilter(), which should behave exactly like Array.prototype.filter().
You should not use the built in filter method. The Array instance can be accessed in the myFilter method using this.
*/
const s2 = [23, 65, 98, 5,0];

Array.prototype.myFilter = (function(callback) {
    const newArray = [];
    this.forEach(i => {
        let result = callback(i);
        if (result) {
            newArray.push(i)
        }
    })
    return newArray;
});

const new_s3 = s2.myFilter(item => (item % 2 === 1));
console.log(new_s3);
const s5 = []
const s4 = s2.forEach(i => {
    const result = i;
    (result)? s5.push(i) 
    : [];
})
console.log(s5);