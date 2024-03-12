function toCelsius(fahrenheit){
    let value = (fahrenheit -32)*5 / 9
    return value.toFixed(2) + "C";  
}
function display (elementId,value){
    document.getElementById(elementId).innerHTML = value
}
function toFahrenheit(celsius){
    let value = (9/5)*celsius + 32
    return value.toFixed(2) + "f";  
}
function toCelsiusprogram(value){
    alert(toCelsius(value))
}
function toFahrenheitprogram(value){
    alert(toFahrenheit(value))
}

