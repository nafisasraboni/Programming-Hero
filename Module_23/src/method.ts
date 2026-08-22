class Student{
    name:string 
    email:string 
    age:number 
    marks:number 

    // constructor ---> special method
    constructor(name:string, email:string ,age:number,marks:number){
        this.name=name;
        this.email=email;
        this.age=age;
        this.marks=marks;
    }

    //method
    getInfo(){
        return `Name:${this.name}\nEmail:${this.email}`
    }
}

//instantiate
//instance

const sra = new Student("Sraboni","s@gmail.com",23,100);
const payel = new Student("Poo","p@gmail.com",31,110);

console.log(sra.getInfo())
console.log(payel.getInfo())



class teaShop {
    title:string
    soldItems:any=[]

    constructor(title:string){
        this.title=title;
    }

    buy(name:string,price:number){
        this.soldItems.push({name,price})
        return this.soldItems
    }

    totalSold(){
        let total = this.soldItems.reduce((acc,item)=>{
            acc+=item.price
            return acc
        },0)
        return total
    } 
}



const shop1 = new teaShop("Mama tea Stall")

shop1.buy("tea",20)
shop1.buy("cigaretts",10)
shop1.buy("cake",15)

console.log(shop1.totalSold())




