function convert(){
    const inputvalue = parseFloat(document.getElementById("inputvalue").value)
    const form = document.getElementById("form").value
    const to = document.getElementById("to").value  
    
    let result;
    switch (form) {
        case 'Centimeters' :
            result = Centimeters(inputvalue,to);
            break;
        case 'Inchers' :
            result = Inchers(inputvalue,to);
            break;
        case 'Meter' :
            result = Meter(inputvalue,to);
            break;
        case 'Kilometer':
            result = Kilometer(inputvalue,to);
            break;
        default:
            result = 'Invalid Form';
    }  
    document.getElementById("result").value = result
} 
function Centimeters(value,to){
    const convert = {
        Centimeters : value,
        Inchers : value * 0.39370,
        Meter : value / 100,
        Kilometer : value * 0.00001
    };
    return convert [to];
}
function Inchers (value,to){
    const convert = {
        Inchers : value,
        Centimeters : value / 0.39370,
        Meter : value / 0.0254,
        Kilometer : value * 100000
    };
    return convert [to];
}
function Meter(value,to){
    const convert = {
        Meter : value,
        Centimeters : value / 0.010000,
        Inchers : value * 39.370,
        Kilometer : value * 1000.0
    };
    return convert [to];
}
function Kilometer(value,to){
    const convert = {
        Kilometer : value,
        Centimeters : value / 0.000010000,
        Inchers : value / 39370.08,
        Meter : value * 0.0010000
    };
    return convert [to];
}




