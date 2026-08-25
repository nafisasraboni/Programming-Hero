interface MenuItem{
    name:string,
    price:number,
    tag:string
}

function findMenuItemsByTag(menu: MenuItem[], tag: string): MenuItem[] {

    if(menu.length===0){
        return []
    }

    let filteredItems = menu.filter(item=>{
        return tag===item.tag
    })
    return filteredItems;
}

const menu = [
    { name: "Veggie Bowl", price: 350, tag: "vegan" },
    { name: "Tofu Wrap", price: 300, tag: "vegan" },
    { name: "Chicken Wings", price: 450, tag: "spicy" },
    { name: "Beef Burger", price: 500, tag: "spicy" }
];

console.log(findMenuItemsByTag(menu,"vegan"))
