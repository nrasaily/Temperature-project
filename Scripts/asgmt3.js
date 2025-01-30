function convertTemperature(temperature, scale){
    let convertTemp;
    let resultElement = document.getElementById("result");

    if(scale === "C" || scale === "c"){
        // convert cencius to fahrenheit
        convertTemp = (temperature * 9/5) + 32;
        resultElement.innerHTML = `The conversion of ${temperature} ° C is ${convertTemp.toFixed(2)} ° F`;
        console.log("The conversion of " + temperature + "° C is ")
        resultElement.classList.add("celsius")
    }else if( scale === "F" || scale === "F"){
        // convert Fahrenheit 
        convertTemp = (temperature - 32) * 5/9;
        resultElement.innerHTML = `The conversion of ${temperature} ° F is ${convertTemp.toFixed(2)} ° C`;
        resultElement.classList.add("fahrenheit")
    }else{
        resultElement.innerHTML = "Invalid scale. Please Enter 'C' of 'F'."; 
    }


}

convertTemperature();