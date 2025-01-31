function convertTemperature(){
    let temperature = prompt("Enter Temperature in Celsius:");
    let fahrenheit = (temperature * 9/5 + 32);

    console.log(`The conversion of celsius ${temperature} ° C is ${fahrenheit} ° F `);
    document.getElementById("result").innerHTML=`The conversion of celsius ${temperature} ° C is ${fahrenheit} ° F `

}

