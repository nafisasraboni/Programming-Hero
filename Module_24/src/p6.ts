type Role = "admin"|"editor"|"viewer"

function canEdit(role:Role):boolean{
    if(role==="admin" || role==="editor"){
        return true
    }else{
        return false
    }
}
console.log(canEdit("admin"));
console.log(canEdit("editor"));
console.log(canEdit("viewer"));
//console.log(canEdit("guest"));
