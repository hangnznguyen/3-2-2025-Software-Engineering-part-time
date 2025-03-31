// Task 1

function prepapringPizza(){
    console.log("Started preparing pizza ...");
}
const madePizza = function(){
    console.log("Made the base");
}
const addSauceCheese = () =>{
    console.log("Added the sauce and cheese");
}
const addTopping = () =>{
    console.log("Added the pizza toppings")
}

const cookPizza = function(){
    console.log("Cooked the pizza");
}

function  PizzaReady(){
    console.log("Pizza is ready");
}

// Task 2

console.log("Started preparing pizza ...");


const madeBase = function(callback){
    setTimeout(()=>{
    console.log("Made the base");
    callback();
    },2000);
}

const addSauceCheese = (callback) =>{
    setTimeout(()=>{
    console.log("Added the sauce and cheese");
    callback();
    },1500);
}
  
const addTopping = (callback) =>{
    setTimeout(()=>{
    console.log("Added the pizza toppings");
    callback();
    },1000);
}

const cookPizza = function(callback){
    setTimeout(()=>{
    console.log("Cooked the pizza");
    callback();
    },1000);
}
        
function  PizzaReady(){
    console.log("Pizza is ready");
  }
  //Task4

  console.log("Started preparing pizza ...");

  const madeBase = async function(){
    await new Promise;
    console.log("Made the base");
    },2000);
