console.log("103/Assignment-3");

function convertTemperature(){
    let TempDegree = prompt("Enter 'C' for Celcius or 'F' for Fahrenheit, to convert vice-versa");
    console.log("user entered", TempDegree)

    if(TempDegree === "C"){ 
        console.log("You Selected", TempDegree);

        let celsius = prompt("Enter C to Convert Celcius to Fahrenheit");

        let fahrenheitResult = (celsius * 9/5) +32;

        console.log("result = ", fahrenheitResult)

        document.getElementById("result").innerHTML = `${celsius}°C = ${fahrenheitResult}°F`;

    }if(TempDegree === "F"){
        console.log("User entered", TempDegree);

        let fahrenheit = prompt("Enter F to convert Fahrenheit to Celsius");

        let celsiusResult = (fahrenheit - 32) * 5/9;

        console.log("result = ", celsiusResult);

    }
}
