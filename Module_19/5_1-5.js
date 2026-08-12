const convertTemperature=(value, converter)=>{
    
    return converter(value);
}
const celsiusToFahrenheit =(C)=>{
    let F = (C * 9/5) + 32
    return F
}
const fahrenheitToCelsius =(F)=>{
    let C = (F - 32) * 5/9
    return C
}
console.log(convertTemperature(30, celsiusToFahrenheit))
console.log(convertTemperature(86, fahrenheitToCelsius));