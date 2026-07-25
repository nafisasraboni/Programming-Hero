// 1. how to declare a function
function name(){

}

// 2. how to call a function
name();

// 3. how to deal with parameter
function add(num1,num2){
    const sum = num1+num2;
    console.log(sum);
} 
add(23,34);

// 4.How to deal with return
function marks(bangla,english,math){
    const result = bangla+english+math;
    return result;
}
const total = marks(87,94,100);
console.log("My result:",total);

// 5. call function with variable
const result2 =190;
marks(result,result2);