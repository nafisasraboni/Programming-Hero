let a=10;



function one(){
    //let a = 60; // creation phase hoina let,const er jonno
    var a = 50; //creation phase : var a; initialize or declare holo
    console.log(a)
    two(); // creation phase e memory te reference joma hobe; excecution phase ; excecute
    console.log("Function one")
}
function two(){
    three();
    console.log("Function two")
}
function three(){
    console.log("Function three")
}


let b=20;

one();


//execution stack / call stack

//execution of function three
//execution of function two
//execution of function one
//global excecution context