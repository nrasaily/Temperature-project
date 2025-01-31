function convertTemperature(scale){
    let temperature = prompt("Enter Temperature in:")
    let celsius = (Fahrenheit * 9/5) + 32;
    let Fahrenheit = (celsius - 32) * 5/9;
    let resultElement = document.getElementById("result");

    if(scale == "C"){
        console.log("The conversion of " Fahrenheit + "°C is ")
        resultElement.classList.add("celsius")
    }else if( scale == "F"){
        console.log("The conversion of " celsius + "°C is ")
        document.getElementById("result").innerHTML=`The conversion of fahrenheit is ${} ° C is ${fahrenheit} ° F `
        resultElement.classList.add("fahrenheit")
    }else{
        resultElement.innerHTML = "Invalid scale. Please Enter 'C' of 'F'."; 
    }


}

