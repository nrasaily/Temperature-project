<<<<<<< HEAD
let position = 175;
let character = document.getElementById("character");

function moveLeft(){
    if(position>0){
        position -= 25;
        character.style.left = position + "px"
    }
    console.log(position);
}

function moveRight(){
    if(position<350){
        position += 25;
        character.style.left = position + "px";
    }
    console.log(position);
}


=======
let position = 175;
let character = document.getElementById("character");

function moveLeft(){
    if(position>0){
        position -= 25;
        character.style.left = position + "px"
    }
    console.log(position);
}

function moveRight(){
    if(position<350){
        position += 25;
        character.style.left = position + "px";
    }
    console.log(position);
}


>>>>>>> f64c45bcf76cbadcf2471e6a2cbd88f045990d13
