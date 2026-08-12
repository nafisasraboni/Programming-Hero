const calculateBMI = (weight,height) => {
    if(weight && height <= 0){
        return "Invalid"

    }else{
        let BMI = weight / (height * height);
        return BMI.toFixed(2);
    }
}
console.log(calculateBMI(60.234,2.4567))