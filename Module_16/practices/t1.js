const describeDeclaration = (string) =>{
    if (string==="var"){
        return "Can redeclare, can reassign";
    }else if(string==="let"){
        return "Cannot redeclare, can reassign"
    }else if (string==="const"){
        return "Cannot redeclare, cannot reassign";
    }else{
        return "Invalid"
    }
}
console.log(describeDeclaration("int"))