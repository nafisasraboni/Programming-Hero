const manageInventoryObject = (obj, action) => {
    let actions = ["keys","values","entries","delete:propName","seal","freeze"]
    if (obj === null &&
        typeof obj !== "object" &&
        !Array.isArray(obj) || !actions.includes(action)){
            return "Invalid"
        }else if(action==="keys"){
            return Object.keys(obj);
        }else if(action==="values"){
            return  Object.values(obj);
        }else if(action==="entries"){
            return Object.entries(obj);
        }else if(action==="delete"){
            return delete obj.actions;
        }else if(action==="seal"){
            return Object.seal(obj);
        }else if(action==="freeze"){
            return Object.freeze(obj);
        }
}
console.log(manageInventoryObject({a:1,b:2,c:3}, "delete:c"))