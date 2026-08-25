function getSignalStatus(strength: number): string {
    return strength>=0 && strength<=20? "Weak" :
           strength>=21 && strength<=50? "Fair" :
           strength>=51 && strength<=80? "Good" :
           strength>=81 && strength<=100? "Excellent" :
           "Invalid"
}
console.log(getSignalStatus(20))
console.log(getSignalStatus(21))
console.log(getSignalStatus(80))
console.log(getSignalStatus(81))