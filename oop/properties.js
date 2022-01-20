/*                  Understand Own Properties

In the following examples, the Teams constructor defines two properties: name and numPlayers:*/

function Team(name) {
    this.name = name;
    this.numPlayers = 23;
}

let team = new Team("Manchester United");
let team2 = new Team("Chelsea");
/* name and numPlaters are called own properties, because they are difined directly on the instance object.
That means that team and team2 each has its own separate copy of these properties. in fact every instance of 
Team will have its own copy of these properties. The following code adds all of the own properties of team to the array ownPops */

let ownPops = [];

for(let property in team) {
    if(team.hasOwnProperty(property)) {
        ownPops.push(property)
    }
}

console.log(ownPops);
// The console would dispay the value ["name", "numPlayers"]

// ADD the own properties of player to the array ownPops1.

function ManUnited(player, position) {
    this.player = player;
    this.position = position;
}

let player = new ManUnited("Anthony Matial", "Forward");
let props = [];

for(let property in player) {
    if(player.hasOwnProperty(property)) {
        console.log(player[property]);
        props.push(property)
    }
}
console.log(props);
/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

                Use Prototype Properties to Reduce Duplicate Code

Since numLegs will probably have the same value for all instances of Bird, you essentially a
duplicated variable numLegs inside each Bird instance.

This may not be an issue when there are only two instance, but imagine if there are millions of 
instances. That would be a lot of duplicated variables.

A better way is to use the prototype of Bird. Properties in the prototype are shared among ALL
instances of Bird. Here's how to add numLegs to the Bird prototype:*/

function Bird() {}
Bird.prototype.numLegs = 2;

let duck = new Bird();
let canary = new Bird();

console.log(duck.numLegs);
console.log(canary.numLegs);
/* Since all instances automatically have the properties on the prototype, think of a prototype as 
"recipe" for creating objects. Note that the prototype for dick and canary is part of the Bird 
 constructor as Bird. prototype. Nearly every object in JavaScript has a prototype which is part of the constructor function that created it.
 
 Add a numLegs property  to the type of Dog*/

 function Dog(name){
     this.name = name;
 }
 Dog.prototype.numLegs = 4;

 let beagle = new Dog("Spotty");
 console.log(beagle.numLegs);