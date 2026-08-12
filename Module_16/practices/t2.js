const bookTicket = (movie, seats=1 , ticket =300)=>{
    if(typeof movie ==="string" || seats && ticket <0){
        return `${movie}: ${seats} seat(s), Total ৳ ${seats*ticket}`
    }else{
        return "Invalid"
    }     
}
console.log(bookTicket(123, 2))