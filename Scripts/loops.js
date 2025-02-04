<<<<<<< HEAD
/*for (let i=0; i<4; i++){
    document.write("My for is working")
//}

for (let i=0; i<=10; i++){
    document.write("My for is working")
}

for (let i=0; i<21; i+=3){
    document.write("My for is working")
}



    for(let i=1; i<30; i++){
        document.write(`<h2> 2 x  ${i} = ${i*2} </h2>`)
    }


    function multTable(){
        let num = prompt("Enter thr number");
        let result = 0;
        for(let i=1; i<30; i++){
            document.write(`<h2> 2 x  ${i} = ${i*2} </h2>`)
            result = num*i
            console.log(`${num} x ${i} = ${result}`)
        }
    
    }
    *
    function multTable(){
        let num = prompt("Enter thr number");
        let result = 0;
        document.write(`<h3> table of ${num} </h3>`);
        for(let i=1; i<30; i++){
            
            result = num*i
            document.write(`<li> ${num} x ${i} = ${result}`);

        }
    
    }


function challenge(){
    let number=0
    for (let i=0; i<100; i++);
    if(number==50){
        "i found it"
    }

    document.write(`${number}`)
}
*
for (let i=0; i<=100; i++){
    console.log(i);
}
*/
function challenge(){
    for (let i=0; i<=100; i++)
    if(i==50){//ifyes
        console.log('i found it')
    }else{//if no
    console.log(i);
    }
}

//Array

let myArray = [3,2,5,6,9];
let myArray2 = ["samantha", true, 10.6,7];

console.log(myArray[3]);//5
console.table(myArray2);

myArray2[0] = "james";
console.table(myArray2);

let students = ["james", "Cassius", "Ed", "Joseph", "Gabrial", "Robert", "Justin", "Kyle", "Koiree"];
let age = [ 34, 56, 57, 35, 65, 89, 43, 12, 56, 66]


for(let i=0; i<students.length; i++){
    document.getElementById("studentList").innerHTML+=`
    <div class="student">
        <p>${students[i]}</p>
        <p>${age[i]}</p>
    </div>
    `;
    
}



=======
/*for (let i=0; i<4; i++){
    document.write("My for is working")
//}

for (let i=0; i<=10; i++){
    document.write("My for is working")
}

for (let i=0; i<21; i+=3){
    document.write("My for is working")
}



    for(let i=1; i<30; i++){
        document.write(`<h2> 2 x  ${i} = ${i*2} </h2>`)
    }


    function multTable(){
        let num = prompt("Enter thr number");
        let result = 0;
        for(let i=1; i<30; i++){
            document.write(`<h2> 2 x  ${i} = ${i*2} </h2>`)
            result = num*i
            console.log(`${num} x ${i} = ${result}`)
        }
    
    }
    *
    function multTable(){
        let num = prompt("Enter thr number");
        let result = 0;
        document.write(`<h3> table of ${num} </h3>`);
        for(let i=1; i<30; i++){
            
            result = num*i
            document.write(`<li> ${num} x ${i} = ${result}`);

        }
    
    }


function challenge(){
    let number=0
    for (let i=0; i<100; i++);
    if(number==50){
        "i found it"
    }

    document.write(`${number}`)
}
*
for (let i=0; i<=100; i++){
    console.log(i);
}
*/
function challenge(){
    for (let i=0; i<=100; i++)
    if(i==50){//ifyes
        console.log('i found it')
    }else{//if no
    console.log(i);
    }
}

//Array

let myArray = [3,2,5,6,9];
let myArray2 = ["samantha", true, 10.6,7];

console.log(myArray[3]);//5
console.table(myArray2);

myArray2[0] = "james";
console.table(myArray2);

let students = ["james", "Cassius", "Ed", "Joseph", "Gabrial", "Robert", "Justin", "Kyle", "Koiree"];
let age = [ 34, 56, 57, 35, 65, 89, 43, 12, 56, 66]


for(let i=0; i<students.length; i++){
    document.getElementById("studentList").innerHTML+=`
    <div class="student">
        <p>${students[i]}</p>
        <p>${age[i]}</p>
    </div>
    `;
    
}



>>>>>>> f64c45bcf76cbadcf2471e6a2cbd88f045990d13
