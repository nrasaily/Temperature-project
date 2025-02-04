<<<<<<< HEAD
console.log("Conditionals");

// if-statement
//if(condition){ // yes/ no question?
//code to be executed if the condition is true
//}

if(3<5){
    console.log("This is true");
}

let student1 = 45;
let student2 = 45;

if(student1==student2){
    console.log("The vaues are the same");
}

// if-else statement
// if (condition){// yes/ no question?
//code to be executed if the condition is true
//}
//else{ code to be executed if the condition is false
//}
let isTrue = true;

if(isTrue){
    console.log("yes")
}else{
    console.log("No")
}


//challege 1:
//check if the age is greater than 21
//T: display "you are an adult"
//F: display "you are an underage"

let age = 50

if(age>=21){
    console.log("you are an adult");
}else{
    console.log("you are an underage");
}

//if-else if else statement
// if (condition){// yes/ no question?
//code to be executed if the condition is true
//}else id (Condition2){ code to be executed if the condition 2 is true//}
//else{ code to be executed if the condition is false
//}

/*6
age = prompt("Enter Your age")

if(age<13){
    console.log("you are a child");
}else if( age<21){
    console.log("you are a teenager");
}else if(age<64){
    console.log("you are an adult");
}else{
    console.log("you are a senior")
}


// movie ticket calculaterage

/*
if(age<12){
    console.log("The Ticket cost is $5 ")
}else if(age<18){
    console.log("the ticket cost is $8")
}else{
    console.log("your ticket price is $8")
}

// or Garbriel note
function ticket(){
    let age = prompt("Enter your age")
    if(age<12){
        console.log("The Ticket price is $5 ")
    }else if(age<18){
        console.log("the ticket price is $8")
    }else{
        console.log("your ticket price is $8")
    }18
}

ticket();

function ticketCalculator(){
    let age = prompt("Enter the age");
    let price = 0;
    if(age<12){
        price=5;
    }else if(age<18){
        price=8
    }else{
        price=10;
    }
    return "Your ticket is: $" + price;
}


function ticketCalculator(){
//your code should be here
    let age = prompt("Enter the age");
    let price=0;
    if(age<12){
        price=5;
    }else if(age<18){
        price=8;
    }else{
        price=10;
    }
    document.getElementById("result").innerHTML="Your ticket price is: $" + price;
}

function ticketCalculator(){
//your code should be here
    let age = prompt("Enter the age");
    let price=0;
    if(age<12){
        price=5;
    }else if(age<18){
        price=8;
    }else{
        price=10;
    }
    return "Your ticket price is: $" + price;
}

function ticketCalculator(){
//your code should be here
    let age = prompt("Enter the age");
    let price=0;
    if(age<12){
        price=5;
    }else if(age<18){
        price=8;
    }else{
        price=10;
    }
    console.log("Your ticket price is:  $" + price);
}
*/
function weatherOutfit(){
    let tmp = prompt("Enter the temperature");
    let outfit;
    let p = document.getElementById("weather")
    p.classList.remove("hot", "cold", "normal");
    if(tmp<15){
        p.classList.add("cold")
        outfit = "jacket";
    }else if(tmp<25){
        p.classList.add("normal")
        outfit = "Sweater";
    }else{
        outfit = "T-shirt";
        p.classList.add("hot")
    }

    p.innerHTML="You should wear : " + outfit;
=======
console.log("Conditionals");

// if-statement
//if(condition){ // yes/ no question?
//code to be executed if the condition is true
//}

if(3<5){
    console.log("This is true");
}

let student1 = 45;
let student2 = 45;

if(student1==student2){
    console.log("The vaues are the same");
}

// if-else statement
// if (condition){// yes/ no question?
//code to be executed if the condition is true
//}
//else{ code to be executed if the condition is false
//}
let isTrue = true;

if(isTrue){
    console.log("yes")
}else{
    console.log("No")
}


//challege 1:
//check if the age is greater than 21
//T: display "you are an adult"
//F: display "you are an underage"

let age = 50

if(age>=21){
    console.log("you are an adult");
}else{
    console.log("you are an underage");
}

//if-else if else statement
// if (condition){// yes/ no question?
//code to be executed if the condition is true
//}else id (Condition2){ code to be executed if the condition 2 is true//}
//else{ code to be executed if the condition is false
//}

/*6
age = prompt("Enter Your age")

if(age<13){
    console.log("you are a child");
}else if( age<21){
    console.log("you are a teenager");
}else if(age<64){
    console.log("you are an adult");
}else{
    console.log("you are a senior")
}


// movie ticket calculaterage

/*
if(age<12){
    console.log("The Ticket cost is $5 ")
}else if(age<18){
    console.log("the ticket cost is $8")
}else{
    console.log("your ticket price is $8")
}

// or Garbriel note
function ticket(){
    let age = prompt("Enter your age")
    if(age<12){
        console.log("The Ticket price is $5 ")
    }else if(age<18){
        console.log("the ticket price is $8")
    }else{
        console.log("your ticket price is $8")
    }18
}

ticket();

function ticketCalculator(){
    let age = prompt("Enter the age");
    let price = 0;
    if(age<12){
        price=5;
    }else if(age<18){
        price=8
    }else{
        price=10;
    }
    return "Your ticket is: $" + price;
}


function ticketCalculator(){
//your code should be here
    let age = prompt("Enter the age");
    let price=0;
    if(age<12){
        price=5;
    }else if(age<18){
        price=8;
    }else{
        price=10;
    }
    document.getElementById("result").innerHTML="Your ticket price is: $" + price;
}

function ticketCalculator(){
//your code should be here
    let age = prompt("Enter the age");
    let price=0;
    if(age<12){
        price=5;
    }else if(age<18){
        price=8;
    }else{
        price=10;
    }
    return "Your ticket price is: $" + price;
}

function ticketCalculator(){
//your code should be here
    let age = prompt("Enter the age");
    let price=0;
    if(age<12){
        price=5;
    }else if(age<18){
        price=8;
    }else{
        price=10;
    }
    console.log("Your ticket price is:  $" + price);
}
*/
function weatherOutfit(){
    let tmp = prompt("Enter the temperature");
    let outfit;
    let p = document.getElementById("weather")
    p.classList.remove("hot", "cold", "normal");
    if(tmp<15){
        p.classList.add("cold")
        outfit = "jacket";
    }else if(tmp<25){
        p.classList.add("normal")
        outfit = "Sweater";
    }else{
        outfit = "T-shirt";
        p.classList.add("hot")
    }

    p.innerHTML="You should wear : " + outfit;
>>>>>>> f64c45bcf76cbadcf2471e6a2cbd88f045990d13
}