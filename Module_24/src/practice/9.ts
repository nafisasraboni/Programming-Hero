interface UploadAction{
    type:"upload"
    sizeMB:number
}
interface DeleteAction{
    type:"delete"
    sizeMB:number
}
 
function updateStorageUsage(currentUsageMB: number, action: UploadAction | DeleteAction): number|undefined {
    let finalUseageMB = 0;
    if(action.type==="upload"){
        return finalUseageMB=currentUsageMB+action.sizeMB
    }else if(action.type==="delete"){
        if(action.sizeMB<0){
            return 0
        }else if(action.sizeMB>0 && currentUsageMB<action.sizeMB){
            return 0
        }else if(action.sizeMB>0 && currentUsageMB>action.sizeMB){
            return finalUseageMB=currentUsageMB-action.sizeMB
        }
    }
}
console.log(updateStorageUsage(300, { type: "delete", sizeMB: 1000 }))