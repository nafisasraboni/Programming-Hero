export default shoppingCart;

function shoppingCart(){

    let counter = 0;

    function handleCart(){
        counter++;
    } 
    
    return(
        <>
        <h2>Shopping Cart</h2>
        <p>Total count : {counter}</p>
        <button onClick={handleCart}>Add</button>
        </>
    )
}