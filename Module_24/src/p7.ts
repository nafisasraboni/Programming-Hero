type Product = {
    name: string,
    price: number,
    category: string
}

type ResultProductName={
    name:string
}

function findProducts(products: Product[], category: string):ResultProductName[]{

    let getIndividualProducts = products.filter(item=>{
        return category === item.category
    })
    let findCategory = getIndividualProducts.map(value => {
        return {
            name : value.name
        }
    })
    return findCategory
}
const products = [
    { name: "iPhone 15", price: 90000, category: "phone" },
    { name: "Galaxy S24", price: 85000, category: "phone" },
    { name: "MacBook Air", price: 120000, category: "laptop" },
    { name: "Dell XPS", price: 110000, category: "laptop" }
];

console.log(findProducts(products, "phone"))