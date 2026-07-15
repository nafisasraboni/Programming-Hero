// Using a bmi variable, determine the category — Underweight, Normal, Overweight, Obese (use if-else if).

let bmi = 29.5;

if (bmi<18.5){
    console.log("Underweight")
}else if (bmi>18.5 && bmi<24.9){
    console.log("Normal weight")
}else if (bmi>25.0 && bmi<29.9){
    console.log("Normal weight")
}else {
    console.log("Obese")
}