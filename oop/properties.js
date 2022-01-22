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
 /*::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::;
 
                        Iterate Over All Properties

You have now seen two kinds of properties: own properties and prototype properties.
Own properties are defined dirextly on the object instance inself. and prototype properties
are defined on the prototype. */

function Cat(name) {
    this.name = name; // own property
}

Cat.prototype.numLegs = 4; // prototype property

let tiger = new Cat("Indian Tiger");
let lion = new Cat("King of the Jungle")
/* Here is how you add tiger's own properties to the array ownProps2 and prototype properties 
to the array prototypeProps. */

let ownProps2 = [];
let prototypeProps = [];

for(let props in tiger) {
    if(tiger.hasOwnProperty(props)) {
        ownProps2.push(props)
    } else {
        prototypeProps.push(props)
    }
}

console.log(ownProps2);// would display ["name"]
console.log(prototypeProps); // would display ["numLegs"]

/*              Understand the Constructor Property

There is a special constructor property located on the object instances duck and beagle that 
were created in the previous challengs: */

console.log(duck.constructor === Bird);
console.log(beagle.constructor === Dog);
/*both of these console.log calls would dsplay true in the console.

Note that the constructor property is a reference to the constructor function that created the instance.
The advantage of the constructor is that it's possible to check for this property to find out what kind of object its. Here's an example of how this could be used:
*/
function joinBirdFraternity(candidate) {
    return (candidate.constructor === Bird)? true : false;;
}
console.log(joinBirdFraternity(duck));


