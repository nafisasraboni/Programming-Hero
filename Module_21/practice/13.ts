/* একটি shopping cart object বানাও।
একটি function দিয়ে user login check করো।
array থেকে even numbers filter করো।
nested object থেকে country বের করো।
type-safe function দিয়ে total price calculate করো।
*/

function shoppingCart(shopping:{
    user: {
        name: string,
        country: {
            city: string,
            country: string
        },
        loggedIn: boolean
    },
    items: { name: string, price: number, quantity: number }[]}
) {


}

    const shopping = {
        user: {
            name: "Amina",
            country: {
                city: "Dhaka",
                country: "Bangladesh"
            },
            loggedIn: true
        },
        items: [
            { name: "Laptop", price: 45000, quantity: 1 },
            { name: "Mouse", price: 1000, quantity: 2 },
            { name: "Keyboard", price: 2500, quantity: 1 }
        ]
    };