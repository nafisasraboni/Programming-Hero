export default Product;


//destructuring
// function Product({name,price}:{name:string,price:number}){
//     return(
//         <div>
//             <h2>Product Name:{name}</h2>
//             <h2>Product Price:{price}</h2>
//         </div>
//     )
// }

//with props
// function Product(props:{name:string,price:number}){
//     return(
//         <div>
//             <h2>Product Name:{props.name}</h2>
//             <h2>Product Price:{props.price}</h2>
//         </div>
//     )
// }

function Product(props:{name:string,price:number,inStock:boolean}){
    return(
        <div>
            <h2>Product Name:{props.name}</h2>
            <h2>Product Price:{props.price}</h2>
            <h2>Product availability: {props.inStock===true?  "Available" : "Out of stock"}</h2>
        </div>
    )
}

