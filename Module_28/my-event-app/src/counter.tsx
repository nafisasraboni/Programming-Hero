export default counter;

const [value,setValue]= useState(0);

function counter(){
    return(
        <div>
            <h2>Counter</h2>
            <p>Current Value: </p>
            <button>Increase</button>
        </div>
    )
}