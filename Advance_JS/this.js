// (function(exports,require,module,__filename,__dirname){
//     console.log(this===module.exports)
// })

// console.log(module)

// this in function

//"use strict" => undefined

// function myfunc(){
//     console.log(this)
// }
// myfunc(); // without strict => refer global object

// this in object

const person={
    name : "sraboni",
    age:23,
    showName : function(){
        console.log(this)
        console.log(this.name+"=>"+this.age)
        //solution 1
        //const self = this;
        setTimeout(()=>{ //solution 3 => arrow function
            //console.log(self)
            //console.log(self.name+"=>"+self.age)
        //},bind(this),2000) //solution 2
        },2000)
    }
}
person.showName()

// this in event
function clickMe(param){
    console.log(param)
}