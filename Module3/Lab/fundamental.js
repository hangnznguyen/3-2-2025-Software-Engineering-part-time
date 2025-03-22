//1. What are the results of these expressions? (answer first, then use console.log() to check)

" " + 1 + 0 
console.log ("" + 1 + 0)
//the result is 10
"" - 1 + 0
console.log ("" - 1 + 0)
//the result is -1
true + false
console.log (true + false)
//the result is 1
!true
console.log (!true)
//the result is false
6 / "3"
console.log (6 / "3")
//the result is 2
"2" * "3"
console.log ("2" * "3") 
//the result is 6
4 + 5 + "px"
console.log (4 + 5 + "px")
//the result is 9px
"$" + 4 + 5
console.log ("$" + 4 + 5)
//the result is $45
"4" - 2
console.log ("4" - 2)
//the result is 2
"4px" - 2
console.log ("4px" - 2)
//the result is NaN
" -9 " + 5
console.log (" -9 " + 5)
//the result is -95
" -9 " - 5
console.log (" -9 " - 5)
//the result is -14
null + 1
console.log (null + 1)
//the result is 1
undefined + 1
console.log (undefined + 1)
//the result is 1
undefined == null
console.log (undefined == null)
//the result is true
undefined === null
console.log (undefined === null)
//the result is false
" \t \n" - 2
console.log ("\t\n" - 2)
//the result is NaN

/*2. Which of the below are not giving the right answer? Why are they not correct? How can we
fix them?*/

let three = "3"  // it is string. We need to change to number before we can do the addition 
let four = "4" // it is string. We need to change to number before we can do the addition
let thirty = "30" 



//what is the value of the following expressions?
let addition = three + four 
let addition =  number(three) + number(four) 
console.log (addition)// the value is seven
let multiplication = three * four 
 console.log (multiplication)// the value is 12
let division = three / four
console.log (division)//the value is 0.75
let subtraction = three - four
console.log (subtraction) //the value is -1
let lessThan1 = three < four
console.log (lessThan1) //the value is true
let lessThan2 = thirty < four
console.log (lessThan2)  // the value is false

//3.Which of the following console.log messages will print? Why?

if (0) console.log('#1 zero is true') // won't print 0 is falsy value.  Implicit boolean conversion 0 is false
    if ("0") console.log('#2 zero is true')// will print
    if (null) console.log('null is true') // won't print. Null is falsy value. Implicit boolean conversion null is false
    if (-1) console.log('negative is true')// will print
    if (1) console.log('positive is true')// will print

   /* 4. Rewrite this if using the ternary/conditional operator '?'. Test it with different values for a
and b. What does the ‘+=’ do?*/
let a = 2, b = 3;
let result = `${a} + ${b} is `;
if (a + b < 10) {
result += 'less than 10';
} else {
result += 'greater than 10';
}

let result = `${a} + ${b} is ` + (a + b < 10) ? "less than 10" : " greater than 10";
console.log(result);


/*5.Rewrite the following function using: a) function expression syntax, and b) arrow function
syntax. Test each version to make sure they work the same.*/
function getGreeting(name) {
    return 'Hello ' + name + '!';
    }

//function expression syntax
let getGreeting = function (name){
    return 'Hello ' + name + '!';
    }
  console.log(getGreeting('Mike'));

//arrow function syntax
let getGreeting = (name)=>'Hello ' + name + '!';




// Question 6
const westley = {
    name: 'Westley',
    numFingers: 5
    }
    const rugen = {
    name: 'Count Rugen',
    numFingers: 6
    }
    const inigo = {
    firstName: 'Inigo',
    greeting(person) {
    let greeting = `Hello ${person.name}, my name is ${this.firstName}, my last name is ${this.lastname}`;
    console.log(greeting + this.getCatchPhrase(person));
    },
    getCatchPhrase:(person)=>person.fingers==6? `You killed my father. Prepare to die` : `Nice to meet you`;
}
      
    inigo.greeting(westley)
    inigo.greeting(rugen)


inigo.lastname = "Smith";
console.log(inigo);
//7
const basketballGame = {
    score: 0,
    fouls: 0,
    freeThrow() {
    this.score++;
    return this;
    },
    basket() {
    this.score += 2;
    return this;
    },
    incrementFoul(){
    this.fouls++;
    return this;
    },
    threePointer() {
    this.score += 3;
    return this;
    },
    halfTime() {
    console.log('Halftime score is  ${this.score}, with ${this.fouls} fouls.`);
        return this;
    },
    final() {
        console.log('Final score is ${this.score}, with ${this.fouls} fouls.`);
            return this;
    }
    
};

basketballGame.basket().freeThrow().freeThrow().basket().threePointer().halfTime();

  

// Question 8
const sydney = {
    name: 'Sydney',
    population: 5_121_000,
    state: 'NSW',
    founded: '26 January 1788',
    timezone: 'Australia/Sydney'
}

for(let key in sydney) {
    console.log("key:" + key);
    console.log("value:" + sydney[key]);
}

const melbourne = {
    name: 'Melbourne',
    population: 5_207_000,
    state: 'Vitoria',
    Age: "About 190 years"
}

for ( let key in melbourne) {
    console.log("key:" + key);
    console.log("value:" + melbourne[key]);
}

    //Questions9//
    let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
    let dog1 = 'Bingo';
    let cat1 = { name: 'Fluffy', breed: 'Siberian' };
    let moreSports = teamSports;
    moreSports.push("Swimming");
    moreSports.unshift("Football");
    let dog2 = dog1;
    dog2 = 'Pinada';
    let cat2 = cat1;
    cat1.name = "Baby";
    console.log(teamSports);// Array and objects are stored by reference, when something changes, it will affect the other
    console.log(cat1);// Array and objects are stored by reference, when something changes, it will affect the other
    console.log(dog1); // Strings are stored by simple value, so modifying dog2 won’t affect dog1 after reassigning it.

    let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
    let dog1 = 'Bingo';
    let cat1 = { name: 'Fluffy', breed: 'Siberian' };

    let moreSports = [...teamSports];  


let cat2 = { ...cat1 }; 

// Modify moreSports and cat2 without affecting the originals
moreSports.push("Swimming");
moreSports.unshift("Football");

// Change cat2's name to "Baby", without affecting cat1
cat2.name = "Baby";

console.log(teamSports);  // ["Hockey", "Cricket", "Volleyball"]
console.log(moreSports);  // ["Football", "Hockey", "Cricket", "Volleyball", "Swimming"]
console.log(cat1);        // { name: "Fluffy", breed: "Siberian" }
console.log(cat2);        // { name: "Baby", breed: "Siberian" }

//Question 10
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
    }

    let person1 = new Person ("Larry", 20);
    let person2 = new Person ("Tom", 25);
    
 console.log(person1.name);
 console.log(person1.age);
 console.log(person1.human);
 console.log(person2.name);
 console.log(person2.age);
 console.log(person2.human);

 //d

 class PersonClass { 
    constructor(name, age){
    this.name = name;
    this.age = age;
    this.human = true;
  }
}

let person3 = new person ("Jennifer", 25);
console.log(person3.name);
console.log(person3.age);
console.log(person3.human);

//e

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
    this.canDrive: function() {
        return this.age > 18? true: false;
    };
    }
    
 class PersonClass { 
        constructor(name, age){
        this.name = name;
        this.age = age;
        this.human = true; 
        this.canDrive: function() {
            return this.age > 18? true: false;
        };   
    }}
