export default StatusBadge;

function StatusBadge({isActive}:{isActive:boolean}){
        if(isActive===true){
            return `I am monjulika`
        }else{
            return `I am anjulika`
        } 
}