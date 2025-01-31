// temperature conversion

const textBox = document.getElementById("texbox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelcius = document.getElementById("toCelcius")
const result = document.getElementById("result")

function convert(){
    if(toFahrenheit.checked){
        temp = Number(textBox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1)+ "°F";
    }

    else if(toCelcius.checked){
        temp = Number(textBox.value);
        temp = (temp  - 32) * (5/9);
        result.textContent = temp.toFixed(1)+ "°F";
    }
    else{
        result.textContent = "Select a Unit"
    }

}