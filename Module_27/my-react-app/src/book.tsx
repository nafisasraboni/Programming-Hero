export default Book;

interface BookProps{
    name:string
}
function Book({name}:BookProps){
    return <li>Book Name : {name}</li>
}