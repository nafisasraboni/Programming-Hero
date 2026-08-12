// Using a month number (1-12), determine which season that month falls in (Winter, Summer, Monsoon, etc.).

let monthNum = 11;

if (monthNum>=1 && monthNum<=5){
    console.log("Summer");
}else if(monthNum>=6 && monthNum<=9){
    console.log("Monsoon");
}else{
    console.log("Winter")
}