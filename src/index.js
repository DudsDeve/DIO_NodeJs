import {createItem} from "./services/item.js"
import * as cartService from "./services/cart.js"

const myCart = []
const myWishList = []

console.log('Welcome to the Shopee Cart')

//temos que colocar primeiro o await para que espere primeiro o item ser criado

const item1 = await createItem("hotwhells", 20.87, 1)
const item2 = await createItem("superman", 15.99, 2)


await cartService.addItem(myCart, item1)
await cartService.addItem(myCart, item2)
console.log(myCart)
await cartService.addItem(myWishList, item2)
await cartService.addItem(myWishList, item1)
await cartService.displayCart(myCart)

await cartService.removeItem(myWishList, item1)
await cartService.deleteItem(myCart, item1.name)
//puxei do meu carrinho, o item hotwhells e deletei ele




//porque se não, como o jscript é sincrono, ele vai chamar o subtotal sem que o item tenha sido criado

console.log('O valor do seu carrinho na shopee é:')
await cartService.calculateTotal(myCart)


console.log(myWishList[1].name) 
//aqui eu acesso o segundo array, e acesso o nome dele

console.log(myWishList[0].name) 
//aqui eu acesso o primeiro array, e acesso o nome dele

await cartService.removeItemByIndex(myWishList,1)
console.log(myWishList[0].name)
