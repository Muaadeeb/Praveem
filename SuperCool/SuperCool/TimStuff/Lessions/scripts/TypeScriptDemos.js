// import {Person} from "./models/person";
var _this = this;
var whileFlag = function () {
    var flag = "Fred";
    while (flag === "Fred") {
        flag = "1";
        console.log(flag);
    }
};
var whileCounter = function () {
    var count = 1;
    while (count < 11) {
        console.log(count);
        count++;
    }
};
var forLoopCars = function () {
    var cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
    var text = "";
    for (var i_1 = 0; i_1 < cars.length; i_1++) {
        text += cars[i_1] + "<br>";
    }
    console.log(text);
};
var buyFruit = function () {
    var appricot = .48;
    var apple = 1.25;
    var orange = 2.23;
    var banana = 3.47;
    var wallet = 10.00;
    var appleCount = 0;
    var orangeCount = 0;
    var bananaCount = 0;
    while (wallet >= 0) {
        if (wallet < .48) {
            var formattedMoney = Number(wallet).toLocaleString('en-US', { style: 'currency', currency: 'USD' });
            console.log("I can not afford to buy any more fruit.  I only have " + formattedMoney + " left.");
            return;
        }
        if (bananaCount === 0) {
            wallet -= banana;
            bananaCount++;
            console.log("Banana @ $" + banana);
        }
        if (orangeCount === 0) {
            wallet -= orange;
            orangeCount++;
            console.log("Orange @ $" + orange);
        }
        if (appleCount === 0) {
            wallet -= apple;
            appleCount++;
            console.log("Apple @ $" + apple);
        }
        wallet -= appricot;
        console.log("Appricot @ $" + appricot);
    }
};
var arrayNormal = function () {
    var myArray = ["HTML", "CSS", "JavaScript", "Python", "Ruby"];
    for (var i_2 = 0; i_2 < myArray.length; i_2++) {
        console.log(myArray[i_2]);
    }
};
var arrayMixed = function () {
    var myArray = [1, true, "ok"];
    for (var i_3 = 0; i_3 < myArray.length; i_3++) {
        console.log(myArray[i_3]);
    }
};
var arrayTwoDemensional = function () {
    var myArray = [[1, 2], [3, 4]];
    for (var i_4 = 0; i_4 < myArray.length; i_4++) {
        console.log(myArray[i_4]);
    }
};
var arrayJagged = function () {
    var myArray = [[10, 20], [30, 40, 50]];
    for (var i_5 = 0; i_5 < myArray.length; i_5++) {
        console.log(myArray[i_5]);
    }
};
// object literal notation.
var me = {
    name: "Timothy Ingledue",
    age: 45
};
var objTest = function () {
    // object constructor.
    var myObject = new Object();
    // assign keys to the object (Do it this way for TypeScript):
    myObject["name"] = "Timothy";
    console.log(myObject["name"]);
};
var objCreateThree = function () {
    var object1 = new Object();
    var object2 = new Object();
    var object3 = new Object();
    object1["person"] = "Timothy";
    object2["animal"] = "Dog";
    object3["metal"] = "Steel";
    console.log(object1["name"]);
    console.log(object2["animal"]);
    console.log(object3["metal"]);
};
var myArray = [1, true, "someValue", [me]];
var newArray = [[1, 2], [3, [me], 4]];
var myObject1 = {
    name: 'Eduardo',
    type: 'Most excellent',
    interests: [1, 2]
};
var myOwnObject = {
    name: "Timothy Ingledue",
    age: 45
};
// introduction to Objects:
var answer1 = (((3 * 90) === 270) || !(false && (!false)) || "bex".toUpperCase() === "BEX");
// here is an array of multiples of 8. But is it correct?
var multiplesOfEight = [8, 16, 24, 32, 40, 58];
// test to see if a number from the array is NOT a true multiple of eight. Real multiples will return false.
var answer2 = multiplesOfEight[5] % 8 !== 0;
// print out the numbers from 1 - 20. The rules:
// for numbers divisible by 3, print out "Fizz".
// for numbers divisible by 5, print out "Buzz".
// for numbers divisible by both 3 and 5, print out "FizzBuzz" in the console.
// otherwise, just print out the number.
var fizzBuzz = function () {
    for (var i_6 = 1; i_6 <= 20; i_6++) {
        if (i_6 % 3 === 0 && i_6 % 5 === 0) {
            console.log("FizzBuzz");
        }
        else if (i_6 % 3 === 0) {
            console.log("Fizz");
        }
        else if (i_6 % 5 === 0) {
            console.log("Buzz");
        }
        else {
            console.log(i_6);
        }
    }
};
var getReview = function (movieName) {
    var review = "";
    switch (movieName) {
        case "Toy Story 2":
            review = "Great story. Mean prospector.";
            break;
        case "Finding Nemo":
            review = "Cool animation, and funny turtles.";
            break;
        case "The Lion King":
            review = "Great songs.";
            break;
        default:
            review = "I don't know!";
            break;
    }
    return review;
};
// accessing Properties
var bob = {
    name: "Bob Smith",
    age: 30
};
var susan = {
    name: "Susan Jordan",
    age: 25
};
// here we save Bob's information using dot notation.
var name1 = bob.name;
var age1 = bob.age;
// finish this code by saving Susan's information using dot notation.
var name2 = susan.name;
var age2 = susan.age;
// the same using bracket notation.
name1 = bob["name"];
age1 = bob["age"];
// finish this code by saving Susan's information using dot notation.
name2 = susan["name"];
age2 = susan["age"];
// here is susan1, in literal notation
var susan1 = {
    name: "Susan Jordan",
    age: 24
};
// define the function multiply. It should take two parameters, x and y, and return the product.
// then call your function, passing in any two arguments.
var multiply = function (x, y) {
    return x * y;
};
//
// here is bob again, with his usual properties
var bob2 = {
    name: "Bob Smith",
    age: 30,
    setAge: function (newAge) {
        this.age = newAge;
    }
};
bob2.setAge(20);
// objects and this.
// start....without additional method.
var susan2 = {
    name: "Susan",
    age: 25,
    setAge: function (newAge) {
        this.age = newAge;
    }
};
susan2.setAge(35);
// continued
var setAge = function (newAge) {
    _this.age = newAge;
};
var susan3 = {
    name: "Susan",
    age: 25,
    setAge: setAge
};
susan3.setAge(35);
alert(this.age);
// end 
// let's make bob and susan again, using our constructor ((See Import Reference)).
// var bob4 = new Person("Bob Smith", 30);
// var susan4 = new Person("Susan Jordan", 25);
// help us make george, whose name is "George Washington" and age is 275
var Person = (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person;
}());
var createPerson = function () {
    var geogre = new Person("George Washington", 275);
    var tim = new Person("Timothy Ingledue", 45);
    console.log(geogre);
    console.log(tim);
};
// constructors in Review. -- start
function Rabbit(adjective) {
    this.adjective = adjective;
    this.describeMyself = function () {
        console.log("I am a " + this.adjective + " rabbit");
    };
}
// now we can easily make all of our rabbits
var rabbit1 = new Rabbit("fluffy");
var rabbit2 = new Rabbit("happy");
var rabbit3 = new Rabbit("sleepy");
rabbit1.describeMyself();
rabbit2.describeMyself();
rabbit3.describeMyself();
// end.
// our person constructor
// function Person(name, age) {
//    this.name = name;
//    this.age = age;
// }
// now we can make an array of people
var family = new Array();
family[0] = new Person("alice", 40);
family[1] = new Person("bob", 42);
family[2] = new Person("michelle", 8);
family[3] = new Person("timmy", 6);
// add the last family member, "timmy", who is 6 years old
// loop through our new array
for (var i = 0; i < family.length; i++) {
    console.log(family[i].name);
}
// we can make a function which takes persons as arguments
// this one computes the difference in ages between two people
var ageDifference = function (person1, person2) {
    return person1.age - person2.age;
};
var alice = new Person("Alice", 30);
var billy = new Person("Billy", 25);
// get the difference in age between alice and billy using our function
var diff = ageDifference(alice, billy);
// new stuff:
// we can make a function which takes persons as arguments
// this one computes the difference in ages between two people
var ageDifference = function (person1, person2) {
    return person1.age - person2.age;
};
// make a new function, olderAge, to return the age of
// the older of two people
var olderAge = function (person1, person2) {
    if (person1.age > person2.age) {
        return person1.age;
    }
    else {
        return person2.age;
    }
};
// let's bring back alice and billy to test our new function
var alice = new Person("Alice", 30);
var billy = new Person("Billy", 25);
console.log("The older person is " + olderAge(alice, billy));
// end new stuff
var spencer = {
    age: 22,
    country: "United States"
};
// make spencer2 here with constructor notation
var spencer2 = new Object();
spencer2["age"] = 22;
spencer2["country"] = "United States";
console.log(spencer2);
// end new stuff
// 3 lines required to make harry_potter
var harry_potter = new Object();
harry_potter["pages"] = 350;
harry_potter["author"] = "J.K. Rowling";
// a custom constructor for book
function Book(pages, author) {
    this.pages = pages;
    this.author = author;
}
// use our new constructor to make the_hobbit in one line
var the_hobbit = new Book(320, "J.R.R. Tolkien");
console.log(the_hobbit);
// end new stuff.
function Circle(radius) {
    this.radius = radius;
    this.area = function () {
        return Math.PI * this.radius * this.radius;
    };
    // define a perimeter method here
    this.perimeter = function () {
        return Math.PI * 2 * this.radius;
    };
}
;
// end new stuff.
function SomeOtherPerson(job, married, speak) {
    this.job = job;
    this.married = married;
    this.speak = function () {
        console.log(speak);
    };
}
var someOtherPersonTest = function () {
    var user = new SomeOtherPerson("Codecademy Student", false, "Hello");
    user.speak();
};
// var james = {
//    job: "programmer",
//    married: false,
//    speak: function (mood) {
//        console.log("Hello, I am feeling " + mood);
//    }
// };
// james.speak("great");
// james.speak("just okay");
// ------------------------------------------------------
// complete these definitions so that they will have
// the appropriate types
var anObj = { job: "I'm an object!" };
var aNumber = 42;
var aString = "I'm a string!";
console.log(typeof anObj); // should print "object"
console.log(typeof aNumber); // should print "number"
console.log(typeof aString); // should print "string"
// ---------------------------------------------------------
var myObj = {
    name: "Tim"
};
console.log(myObj.hasOwnProperty('name')); // should print true
console.log(myObj.hasOwnProperty('nickname')); // should print false
// ---------------------------------------------------------------------------
// var suitcase = {
//    shirt: "Hawaiian"
// };
// if (suitcase.hasOwnProperty('shorts')) {
//    console.log(suitcase.shorts);
// }
// else {
//    suitcase.shorts = "someShorts";
//    console.log(suitcase.shorts);
// }
// --------------------------------------------------------------------------
// let nyc = {
//    fullName: "New York City",
//    mayor: "Bill de Blasio",
//    population: 8000000,
//    boroughs: 5
// };
// for (let property in nyc) {
//    if (nyc.hasOwnProperty(property)) {
//        console.log(property);
//    }
// }
// -----------------------------------------------------------------------------------
// var nyc = {
//    fullName: "New York City",
//    mayor: "Bill de Blasio",
//    population: 8000000,
//    boroughs: 5
// };
//// write a for-in loop to print the value of nyc's properties
// for (var x in nyc) {
//    console.log(nyc[x]);
// }
// ------------------------------------------------------------------------------------
// function Person(name, age) {
//    this.name = name;
//    this.age = age;
// }
//// let's make bob again, using our constructor
// var bob = new Person("Bob Smith", 30);
// var susan = new Person("Susan Jordan", 35);
//// make your own class here
// function Circle(radius) {
//    this.radius = radius;
// }
// ------------------------------------------------------------------------------------
// function Dog(breed) {
//    this.breed = breed;
// }
//// here we make buddy and teach him how to bark
// var buddy = new Dog("Golden Retriever");
// buddy.bark = function () {
//    console.log("Woof");
// };
// buddy.bark();
//// here we make snoopy
// var snoopy = new Dog("Beagle");
//// we need you to teach snoopy how to bark here
// snoopy.bark = function () {
//    console.log("Woot!");
// }
//// this causes an error, because snoopy doesn't know how to bark!
// snoopy.bark();
// --------------------------------------------------------------------------------------
// function Person(name, age) {
//    this.name = name;
//    this.age = age;
// }
//// a function that prints the name of any given person
// var printPersonName = function (p) {
//    console.log(p.name);
// };
// var bob = new Person("Bob Smith", 30);
// printPersonName(bob);
//// make a person called me with your name and age
//// then use printPersonName to print your name
// var me = new Person("Tim", 45);
// printPersonName.me;
//------------------------------------------------------------------------------------------
// function Dog(breed) {
//    this.breed = breed;
// };
//// here we make buddy and teach him how to bark
// var buddy = new Dog("golden Retriever");
// Dog.prototype.bark = function () {
//    console.log("Woof");
// };
// buddy.bark();
//// here we make snoopy
// var snoopy = new Dog("Beagle");
///// this time it works!
// snoopy.bark();
//------------------------------------------------------------------------------------
// function Cat(name, breed) {
//    this.name = name;
//    this.breed = breed;
// }
//// let's make some cats!
// var cheshire = new Cat("Cheshire Cat", "British Shorthair");
// var gary = new Cat("Gary", "Domestic Shorthair");
//// add a method "meow" to the Cat class that will allow
//// all cats to print "Meow!" to the console
// Cat.prototype.meow = function () {
//    console.log("Meow!");
// }
//// add code here to make the cats meow!
// cheshire.meow;
// gary.meow;
//-------------------------------------------------------------------------------------------
//// create your Animal class here
// function Animal(name, legs) {
//    this.name = name
//    this.numLegs = legs
// }
//// create the sayName method for Animal
// Animal.prototype.sayName = function (name) {
//    console.log("Hi my name is " + this.name);
// }
//// provided code to test above constructor and method
// var penguin = new Animal("Captain Cook", 2);
// penguin.sayName();
//----------------------------------------------------------------------------------------------------
// function Animal(name, numLegs) {
//    this.name = name;
//    this.numLegs = numLegs;
// }
// Animal.prototype.sayName = function () {
//    console.log("Hi my name is " + this.name);
// };
//// create a Penguin constructor here
// function Penguin(name, numLegs) {
//    this.name = name;
//    this.numLegs = numLegs;
//    this.sayName = function () {
//        console.log("Hi my name is " + this.name);
//    };
// }
//// create a sayName method for Penguins here
// var pengu = new Penguin("Little Pengu", 2);
// pengu.sayName();
//// our test code
// var theCaptain = new Penguin("Captain Cook", 2);
// theCaptain.sayName();
// ------------------------------------------------------------------------------------------------
// function Animal(name, numLegs) {
//    this.name = name;
//    this.numLegs = numLegs;
// }
// Animal.prototype.sayName = function () {
//    console.log("Hi my name is " + this.name);
// };
//// create a Penguin constructor here
// function Penguin(name, numLegs) {
//    this.name = name;
//    this.numLegs = numLegs;
// }
//Penguin.prototype.sayName = function () {
//    console.log("Hi my name is " + this.name);
//};
//// create a sayName method for Penguins here
//var pengu = new Penguin("Little Pengu", 2);
//pengu.sayName();
//// our test code
//var theCaptain = new Penguin("Captain Cook", 2);
//theCaptain.sayName();
//----------------------------------------------------------------------------------------------------
// the original Animal class and sayName method
//function Animal(name, numLegs) {
//    this.name = name;
//    this.numLegs = numLegs;
//}
//Animal.prototype.sayName = function () {
//    console.log("Hi my name is " + this.name);
//};
//// define a Penguin class
//function Penguin(name) {
//    this.name = name;
//    this.numLegs = 2;
//}
//// set its prototype to be a new instance of Animal
//Penguin.prototype = new Animal();
//----------------------------------------------------------------------------------------------------
// the original Animal class and sayName method
//function Animal(name, numLegs) {
//    this.name = name;
//    this.numLegs = numLegs;
//}
//Animal.prototype.sayName = function () {
//    console.log("Hi my name is " + this.name);
//};
//// define a Penguin class
//function Penguin(name) {
//    this.name = name;
//    this.numLegs = 2;
//}
//// set its prototype to be a new instance of Animal
//Penguin.prototype = new Animal();
//var penguin = new Penguin("Bob");
//penguin.sayName();
//--------------------------------------------------------------------------------------------------------
//function Penguin(name) {
//    this.name = name;
//    this.numLegs = 2;
//}
//// create your Emperor class here and make it inherit from Penguin
//function Emperor(name) {
//    this.name = name;
//}
//Emperor.prototype = new Penguin();
//// create an "emperor" object and print the number of legs it has
//var emperor = new Emperor("littleKing");
//console.log(emperor.numLegs);
//------------------------------------------------------------------------------------------------------------
//// original classes
//function Animal(name, numLegs) {
//    this.name = name;
//    this.numLegs = numLegs;
//    this.isAlive = true;
//}
//function Penguin(name) {
//    this.name = name;
//    this.numLegs = 2;
//}
//function Emperor(name) {
//    this.name = name;
//    this.saying = "Waddle waddle";
//}
//// set up the prototype chain
//Penguin.prototype = new Animal();
//Emperor.prototype = new Penguin();
//var myEmperor = new Emperor("Jules");
//console.log(myEmperor.saying); // should print "Waddle waddle"
//console.log(myEmperor.numLegs); // should print 2
//console.log(myEmperor.isAlive); // should print true
//-------------------------------------------------------------------------------------------------------------
//function Person(first, last, age) {
//    this.firstName = first;
//    this.lastName = last;
//    this.age = age;
//}
//var john = new Person('John', 'Smith', 30);
//var myFirst = john.firstName;
//var myLast = john.lastName;
////declare variable myAge set to the age of the john object.
//var myAge = john.age;
//-----------------------------------------------------------------------------------------------------------
//function Person(first, last, age) {
//    this.firstname = first;
//    this.lastname = last;
//    this.age = age;
//    var bankBalance = 7500;
//}
//// create your Person 
//var john = new Person("John", "Smith", 25);
//// try to print his bankBalance
//console.log(john.bankBalance);
//----------------------------------------------------------------------------------------
//function Person(first, last, age) {
//    this.firstname = first;
//    this.lastname = last;
//    this.age = age;
//    var bankBalance = 7500;
//    this.getBalance = function () {
//        // your code should return the bankBalance
//        return bankBalance;
//    };
//}
//var john = new Person('John', 'Smith', 30);
//console.log(john.bankBalance);
//// create a new variable myBalance that calls getBalance()
//var myBalance = john.getBalance();
//console.log(myBalance);
//------------------------------------------------------------------------------------
//function Person(first, last, age) {
//    this.firstname = first;
//    this.lastname = last;
//    this.age = age;
//    var bankBalance = 7500;
//    var returnBalance = function () {
//        return bankBalance;
//    };
//    // create the new function here
//    this.askTeller = function () {
//        return returnBalance;
//    };
//}
//var john = new Person('John', 'Smith', 30);
//console.log(john.returnBalance);
//var myBalanceMethod = john.askTeller();
//var myBalance = myBalanceMethod();
//console.log(myBalance);
//---------------------------------------------------------------------------------------
//function Person(first, last, age) {
//    this.firstname = first;
//    this.lastname = last;
//    this.age = age;
//    var bankBalance = 7500;
//    this.askTeller = function (pass) {
//        if (pass == 1234) return bankBalance;
//        else return "Wrong password.";
//    };
//}
//var john = new Person('John', 'Smith', 30);
///* the variable myBalance should access askTeller()
//   with a password as an argument  */
//var myBalance = john.askTeller(1234);
//# sourceMappingURL=TypeScriptDemos.js.map