//1
function ucFirstLetters(string){
    return string.split('').map(word=> word.charAt(0).toUpperCase() + word.Slice(1)).join
}

//Test
console.log(ucFirstLetters("hello sydney"));
console.log(ucFirstLetters("this is a test"));

//2
function truncate(str, max){
    if (str.length > max){
        return str.slice(0,max) + '...';
    }else {  return str;
    }
}

console.log(truncate("Hang",2));// output Ha...
console.log(truncate("Hello, daddy",5));// output Hello...

const truncate = function(str,max){
    return str.length > max ? str.slice(0, max) + '...' : str;
}
  

// Question 3

const animals = ['Tiger', 'Giraffe']
animals.push("Lion");
animals.push("Deer");
animals.unshift("Snake");
animals.unshift("Dragon");
console.log(animals);

//Sort the values alphabetically

animals.sort();
console.log(animals);
//d
const animals = ['Snake', 'Dragon', 'Tiger', 'Giraffe', 'Lion', 'Deer']

function replaceMiddleAnimal(newValue){
    animals.splice(3,1,'newValue');}
    
    replaceMiddleAnimal("Duck");
console.log(animals);

//e 
function findMatchingAnimals(beginswith){
    const animals = ['Snake', 'Dragon', 'Tiger', 'Giraffe', 'Lion', 'Deer'];
    const filterAnimals = animals.filter(function(animal){
        return animal.toLowerCase().startsWith(beginswith.toLowerCase());
    });}
 return findMatchingAnimals
//4
function camelCase(cssProp){
    let parts = cssProp.split("-");
    let camelCaseString = parts[0] + parts.slice(1).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join("");
    
    
    return camelCaseString;
    
}
    console.log(camelCase("margin-left"));// marginLeft
    console.log(camelCase('background-image')); // backgroundImage
    console.log(camelCase('display')); // display


  // without conditional operator
  function camelCase(cssProp){
    let parts = cssProp.split("-");
    let camelCaseString = parts[0];
    for (let i=1; i<parts.length;i++){
        camelCaseString += parts[i].charAt(0).toUpperCase() + parts[i].slice(1); 
    }}
  return camelCaseString;

    //with condition operatior
    function camelCase(cssProp){
        let parts = cssProp.split("-");
        let camelCaseString = parts[0];
        for (let i=1; i<parts.length;i++)
            camelCaseString += parts[i]? parts[1].charAt(0).toUpperCase() + parts[i].slice(1):
        }
      return camelCaseString;
//5

/* a The code returns the wrong answers because both of them are strings, not the numbers. To use operator +, '
we first need to convert both strings to the number and do the calculate.*/
let fixedTwenty = parseFloat(twentyCents.toFixed(2));
let fixedTen = parseFloat(tenCents.toFixed(2));
console.log(fixedTwenty + fixedTen); 

//b

function currencyAddition(float1,float2){
    let sum = parseFloat(float1)+ parseFloat(float2);
    return sum;
    }
console.log(currencyAddition(2.2 +2.4));

function currencyOperation(float1,float1,operation){
    let result;
    switch (operation) {
        case '+':
            result = parseFloat(float1) + parseFloat(float2); 
            break;
        case '-':
            result = parseFloat(float1) - parseFloat(float2); 
            break;
        case '*':
            result = parseFloat(float1) * parseFloat(float2); 
            break;
        case '/':
            result = parseFloat(float1) / parseFloat(float2);
            break;
           }

    return result;  
}

console.log(currencyOperation(10, 5, '+'));  // 15 

//Question 6
const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow']
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43]

function unique(duplicatesArray){
    const uniqueColours = [...new Set(duplicatesArray)];
    return uniqueColours;
    
}
console.log(unique(colours)) // [ 'red', 'green', 'blue', 'yellow', 'orange' ]
console.log(unique(testScores)) // [ 55, 84, 97, 63, 32, 91, 43 ]
// Create my own array

const books = ["English", "French", "Japanese", "Vietnamese", "English"]
function unique(duplicatesArray){
    const uniqueBooks = [... new Set (dubplicatesArray)];
    return uniqueBooks;
    }
    console.log(unique(books));

//Question 7

//a

const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
    { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
    ];

 function getBookTitle(bookId){
    const book = books.find(book=>book.id==bookId);
   return book? book.title: book not found
 }
    console.log(getBookTitle(2));
    console.log(getBookTitle(4));

   //b 
   function getOldBooks(){
    const oldBook = books.filter(book=>book.year < 1950);
    return oldBooks;
   }

   console.log(getOldBooks());
   //c
   function addGenre(){
    const updatedBooks = books.map(book=>({...book,genre:"classic"}));
    return updatedBooks

   }
   console.log(addGenre());
   //8
   const phoneBookABC = new Map() //an empty map to begin with
   phoneBookABC.set('Annabelle', '0412312343')
   phoneBookABC.set('Barry', '0433221117')
   phoneBookABC.set('Caroline', '021388691')

   //a
   const phoneBookDEF = new Map([
    ["David","123-456-7899"]
    ["Emily", "989-345-7877"]
    ["France", "454-344-1234"]
]);

//d
function printPhoneBook(contacts){
    contacts.forEach(value,key)=>{
 console.log(key + ":" value);
    }};
//e
let combinePhoneBook = new Map ([...phoneBookABC,...phoneBookDEF]);

//f
let names = Array.from(combinePhoneBook.keys()); 
for(let i = 0; i<names.length; i++){
    console.log(names[i]);
}
    

   //Question9
   let salaries = {
    "Timothy" : 35000,p
    "David" : 25000,
    "Mary" : 55000,
    "Christina" : 75000,
    "James" : 43000
    };
    //a 
    function sumSalaries(salaries){
        let total = salaries.reduce(total,salary)=>{
            return total + salary;},0}
        
        
    console.log(total);
    //b
    function topEarner(salaries){
let highestSalary= 0;
let topEarner = "";

for (let name in salaries){
    if (salaries[name]> highestSalary){ 
        highestSalary = salaries[name];  
            topEarner = name;
    return topEarner;
}}}
console.log(topEarner(salaries));
       
 

//10

const today = new Date();
console.log('Current time is ' + today.toLocaleTimeString())
console.log(today.getHours() + ' hours have passed so far today')
//a

console.log(today.getMinutes()+ 'minutes have passed so far today')
//b
console.log(today.getSeconds() + 'seconds have passed so far today')

//c
const birthDate = new Date(1981, 7,11);
const today = new Date();

let ageYears = today.getFullYear() - birthDate.getFullYear();
let ageMonths = today.getMonth() - birthDate.getMonth();
let ageYears = today.getDate() - birthDate.Date();

//d
function daysInBetween(date1,date2){
    const d1 = new Date(date1);
    const d2 =  new Date (date2);

   let differenceInTime = (d1> d2)? (d1-d2):(d2-d1);
   return differenceInTime/(1000*60*60*24);
   }

   console.log(dayyInBetween("2024-12-25", "2024-11-11"));
   console.log(daysInBetween(2025-03-22,2025-03,20));
