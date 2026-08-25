type Tier = "free" | "pro" | "premium";
 
function canAccessOfflineMode(tier: Tier): boolean {
    return tier==="free"? false: tier==="pro"? true :
    tier==="premium"? true:false
}
console.log(canAccessOfflineMode("free"))
console.log(canAccessOfflineMode("pro"))
console.log(canAccessOfflineMode("premium"))