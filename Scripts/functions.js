<<<<<<< HEAD
console.log("functions.js file");

let name = "Michael";
let lastName = "Scott";
console.log("Hello " + name +  lastName + ", welcome to javascript world!");

console.log(`Hello ${name} ${lastName} ${1 +1} welcome to javascript world` );

// function declaration
function sayHello(){
    console.log("Hello cohort 55");
}

// Call the function
sayHello();
sayHello();

// Example 2 
function greet(name){
    console.log(`Hello ${name} , welcome!`)
}

greet("Roland");
greet("joseph");

//example 3

function greet2(name1, name2){
    console.log(`Hello ${name1} and ${name2} welcome`)
}

greet2("Rpland", "Joseph");
greet2("Koiree", "Edward");
greet2("Leo", "Nar");

//Example 4 
//prompt("What is your age");


/*

function sayMyName(){
    let name2 = prompt("What is your name?");
    let age2 = prompt("what is your age");

    console.log(`Your name is ${name2} and you are ${age2} years old`);
}

sayMyName();

//example 5 with the numbers
function add(num1=0, num2=0){
    console.log(`the addition between ${num1} and ${num2} = ${num1+num2}`);
    document.write(`the addition between ${num1} and ${num2} = ${num1+num2} <br>`);
}

add(10,2);
add(57.66, 790.66);
add(1000, 5648);


add(55);
add();



function doubleNumber(num){
  console.log(`The double of ${num} is ${num*2}`);
}

doubleNumber(8);
doubleNumber(4); // Should print: 8
doubleNumber(10); // Should print: 20


// Button click event
function login(){
  alert("You have successfully logged in!");
  console.log("executing login function");
}

/* challenge */
function doubleNumber(num1){
    console.log(`the double number of   = ${num1 + num1}`);
}

doubleNumber(4)
doubleNumber(10)

function combineNames(firstName = "unknown", lastName = "unknown"){
    console.log(`${firstName} ${lastName}`);
}

combineNames("nar", "rasaily")


var message = "in global";
    console.log("global: message = " + message);

var a = function(){
    var message = "inside a";
    console.log("a: message = " + message);

}

function b () {
    console.log("b: message = " + message);
    
}
b();

a();


function doubleNumber(num){
    console.log(`The double of ${num} is ${num*2}`)
}

doubleNumber(5);
doubleNumber(4);
=======
console.log("functions.js file");

let name = "Michael";
let lastName = "Scott";
console.log("Hello " + name +  lastName + ", welcome to javascript world!");

console.log(`Hello ${name} ${lastName} ${1 +1} welcome to javascript world` );

// function declaration
function sayHello(){
    console.log("Hello cohort 55");
}

// Call the function
sayHello();
sayHello();

// Example 2 
function greet(name){
    console.log(`Hello ${name} , welcome!`)
}

greet("Roland");
greet("joseph");

//example 3

function greet2(name1, name2){
    console.log(`Hello ${name1} and ${name2} welcome`)
}

greet2("Rpland", "Joseph");
greet2("Koiree", "Edward");
greet2("Leo", "Nar");

//Example 4 
//prompt("What is your age");


/*

function sayMyName(){
    let name2 = prompt("What is your name?");
    let age2 = prompt("what is your age");

    console.log(`Your name is ${name2} and you are ${age2} years old`);
}

sayMyName();

//example 5 with the numbers
function add(num1=0, num2=0){
    console.log(`the addition between ${num1} and ${num2} = ${num1+num2}`);
    document.write(`the addition between ${num1} and ${num2} = ${num1+num2} <br>`);
}

add(10,2);
add(57.66, 790.66);
add(1000, 5648);


add(55);
add();



function doubleNumber(num){
  console.log(`The double of ${num} is ${num*2}`);
}

doubleNumber(8);
doubleNumber(4); // Should print: 8
doubleNumber(10); // Should print: 20


// Button click event
function login(){
  alert("You have successfully logged in!");
  console.log("executing login function");
}

/* challenge */
function doubleNumber(num1){
    console.log(`the double number of   = ${num1 + num1}`);
}

doubleNumber(4)
doubleNumber(10)

function combineNames(firstName = "unknown", lastName = "unknown"){
    console.log(`${firstName} ${lastName}`);
}

combineNames("nar", "rasaily")


var message = "in global";
    console.log("global: message = " + message);

var a = function(){
    var message = "inside a";
    console.log("a: message = " + message);

}

function b () {
    console.log("b: message = " + message);
    
}
b();

a();


function doubleNumber(num){
    console.log(`The double of ${num} is ${num*2}`)
}

doubleNumber(5);
doubleNumber(4);
>>>>>>> f64c45bcf76cbadcf2471e6a2cbd88f045990d13
doubleNumber(34);