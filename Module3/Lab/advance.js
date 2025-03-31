//1
function makeCounter() {
    let currentCount = 0;
    return function() {
    currentCount++;
    console.log(currentCount)
    return currentCount;
    };
    }
    let counter1 = makeCounter();
    let counter2 = makeCounter();

    counter1(); //1
    counter1();//2
    counter1();//3
    counter2();//1
    counter2();//2
    counter2();//3
    

  //b
  
  function makeCounter(startFrom){
    let currentCount = statrtFrom;
    return function() {
        console.log(currentCount)
        return currentCount++;
        };
        }
  
        let counter3 = makeCounter(3);
        let counter4 = makeCounter(5);
    
        counter3(); //3
        counter3();//4
        counter3();//5
        counter4();//5
        counter4();//6
        counter4();//7
 //c

 function makeCounter(incrementBy){
    let currentCount = 0;
    return function() {
        currentCount += incrementBy
        console.log(currentCount)
        return currentCount;
        };
}
  
        let counter5 = makeCounter(5);
        let counter6 = makeCounter(7);
    
        counter5(); //5
        counter5();//10
        counter5();//15
        counter6();//7
        counter6();//14
        counter6();//21

 //2       
 
const delayMsg = (msg)=>
{
    console.log(`This message will be printed after a delay: ${msg}`);
    };
    setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
    setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
    setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
    delayMsg('#4: Not delayed at all')
    setTimeout(delayMsg, 1500, '#5: Delayed by 1500ms');
//a order of the four tests
delayMsg('#4: Not delayed at all');
setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
// # 4 doesn't set the delay, it will come first, afterthat the shortest delay will come next such as 0ms,20ms and 100ms.

//d
let timeoutID= setTimeout (delayMsg, 1500, '#5: Delayed by 1500ms')
clearTimeOut = (timeoutID);


//3

//a

function debounce(func, delay = 1000) {
    let timeoutId; 
     return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
            func(...args); 
        }, delay);
    };
}

//b and c

function debounce(func, ms){
let timeoutId;
// Return a new function that wraps around the original func
return function(...args) {
    // Clear the previous timeout (if any), so we can reset the delay
    clearTimeout(timeoutId);
    // Set a new timeout to call the function after the specified `ms` delay
    timeoutId = setTimeout(() => {
        func(...args);  // Call the function with the provided arguments
    }, ms);  // Use the ms argument for the delay
};
}

function printMe(msg) {
    console.log('printing debounced message');
const debouncedPint = debounce (printMe,1000)  ;  

}




//4
//a
let previous = 0; // The first Fibonacci number
let current = 1;  // The second Fibonacci number

const printFibonacci = setInterval(() => {
    console.log(previous); // Print the current Fibonacci number
    let nextNumber = previous + current; // Calculate the next Fibonacci number
    previous = current; // Move the current number to previous
    current = nextNumber; // Set the current number to the next number
    setTimeout = (()=>{
            console.log("the sequence will be every second");},
    
1000);} // Run every second
 )
//b
function printFibonacciTimeout(){
    console.log(previous); // Print the current Fibonacci number
    let nextNumber = previous + current; // Calculate the next Fibonacci number
    previous = current; // Move the current number to previous
    current = nextNumber; // Set the current number to the next number
    setTimeout(printFibonacciTimeout,1000);
};
    printFibonacciTimeout();
//c

function printFibonacciTimeout2(limit){
    let previous = 0;
    let current = 1;
    let count = 0;

function printNumber(){
        if (count < limit) { 
    console.log(previous); // Print the current Fibonacci number
    let nextNumber = previous + current; // Calculate the next Fibonacci number
    previous = current; // Move the current number to previous
    current = nextNumber; // Set the current number to the next number
    count++;
    setTimeout(printNumber, 1000);}}}
        
    //printNumber();
    printFibonacciTimeout2(6);

    //5
    let car = {
        make: "Porsche",
        model: '911',
        year: 1964,
        
        description() {
        console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
        }
        };
        car.description(); //works
        setTimeout(()=> car.description, 200); /*fails because the function relies on context (this)and is
  
  
        passed as a reference instead of being called FileSystemDirectoryHandle, its context is lost*/

//a 
//setTimeOut(()=>car.description(),200);

 //b
 
 let newCar = {...car, year:2025};
 console.log(newCar);
 //c 
 /*If you change the values of car.make, car.model, or car.year before the setTimeout executes, the delayed description will use the updated values, not the original ones. 
  This happens because description() accesses this.make, this.model, and this.year at the moment it is executed.*/

  //d
 const boundDescription = car.description.bind(car)
 setTimeout( boundDescription,200);

 //e
 let newCar1 = {...car, make:"Toyota"};
 console.log(newCar1);
 const boundDescription1 = car.description.bind(car)
 setTimeout( boundDescription1,200);

//6

//a, b, c
Function.prototype.delay = function(ms){
    let originalFunction = this;  
    return function(...args) {   
        setTimeout(() => {
            originalFunction.apply(this, args);  
        }, ms);
    };
};
function multiply(a, b,c,d) {
    console.log(a * b* c * d);
}

multiply.delay(500)(5, 5, 5, 3); // Prints 375 after 500ms


//7
class DigitalClock {
    constructor(prefix) {
    this.prefix = prefix;
    }
    display() {
    let date = new Date();
    //create 3 variables in one go using array destructuring
    let [hours, mins, secs] = [date.getHours(), date.getMinutes(), date.getSeconds()];
    if (hours < 10) hours = '0' + hours;
    if (mins < 10) mins = '0' + mins;
    if (secs < 10) secs = '0' + secs;
    console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
    }
    stop() {
    clearInterval(this.timer);
    }
    start() {
    this.display();
    this.timer = setInterval(() => this.display(), 1000);
    }
    }
    const myClock = new DigitalClock('my clock:')
    myClock.start()
//a
class PrecisionClock extends DigitalClock {
      constructor (prefix, precision =  1000){
        super(prefix);
        this.precision = precision;
    }
}
//b

class AlarmClock extends DigitalClock {
    constructor (prefix, wakeupTime = "07:00"){
        super(prefix);
        this.wakeupTime = wakeupTime;
    }
    displayTime() {
        let now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        
        let currentTime = `${hours}:${minutes}`;
        console.log(`${this.prefix} ${currentTime}`);
    
        // Check if it's time to wake up
        if (currentTime === this.wakeupTime) {
          console.log(" Wake Up!");
          this.stop();
        }
      }
    }
    //8

    //a
    function validateStringArg(fn){
    return function(...args){
        if (typeof args[0]!="string"){
            throw new Error("Argument must be a string");}
            return fn(...args);
        }
    }

    //b
    function OrderItems(...items){
        return "You ordered: " + items.join(", ");
}
    
//c 


function validateStringArg(fn){
    return function(...args){
        if (args.length===0){ 
            throw new Error ("No argument were provided");
        }
        
        for (let i = 0 ; i < args.length; i++){
            if (typeof args[i]!="string"){
                throw new Error("Argument must be a string");}
                        }
        }

        return fn(...args); // Call the original function
    };

//d
//exampla normal function:
function greet(name) {
    console.log(`Hello, ${name}`);
}

function validateStringArg(fn) {
    return function (...args) {
        if (typeof args[0] !== "string") {
            throw new Error("Argument must be a string");
        }
        return fn(...args);
    };
}
const validateGreet = validateStringArg(greet) //apply the decorator

try {
    validateGreet("John");  // Works: "Hello, John"
    validateGreet(123);     //  Will throw an error
} catch (error) {
    console.log("non string argment - error:", error.message);
}

//9
//a
function randomDelay(){
 
    let randomTime = Math.floor(Math.random()*20000 +1000);
      const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Executed after ${randomTime} seconds.`);
    }, delayInMilliseconds);
  });

  // Return the promise
  return promise;
}

randomDelay()
  .then((message) => {
    console.log(message); // Logs after a random delay between 1 and 20 seconds
  });

  //b
 
  function randomDelay(){
 
    let randomTime = Math.floor(Math.random()*20000 +1000);
  
    setTimeout(() => {        r
        randomTime %2===0?
            resolve(`Success, resolved after ${randomTime} seconds.`): reject (`failure, Rejected after ${randomTime} seconds.); `)
        },randomTime);
    };
    
//c and d

// Test the function
randomDelay()
    .then(result => console.log(`success${result}`))
    .catch(error => console.error(`Failed: ${error}`));

//10    


async function fetchURLData(url){
    try{
    let response = await fetch("https://jsonplaceholder.typicode.com/users");

   if (response.status === 200) {
    return response.json();

   } else{
    throw new Error(`Request failed with status ${response.status}`);
   }
} catch (error){
    console.log("Error fetching data", error)
}
    
}
// Test with valid URL
fetchURLData("https://jsonplaceholder.typicode.com/posts")
.then (data=>console.log(data) )
.catch(error=>console.log(error));
// Test with invalid URL
fetchURLData("https://jsonplaceholder.ty.com/posts")
.then (data=>console.log(data) )
.catch(error=>console.log(error));
