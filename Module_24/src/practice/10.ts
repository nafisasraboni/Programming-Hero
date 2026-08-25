type VehicleType = "scooter" | "ebike" | "moped";
 
function calculateRentalFee(vehicle: VehicleType, minutes: number): number|undefined {
    if(vehicle==="scooter"){
        let finalFee = 10+(minutes*2)
        return finalFee;
    }else if (vehicle==="ebike"){
        let finalFee = 15+(minutes*3)
        return finalFee;
    }else if(vehicle==="moped"){
        let finalFee=25+(minutes*5)
        return finalFee
    }
}
console.log(calculateRentalFee("moped", 0))
