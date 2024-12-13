//Quais ações meu carrinho pode fazer
/*
//Casos de uso
-Adicionar item
-Deletar item 
-Remover um item
-Calcular o total
*/

//adicionar item
export async function addItem(userCart, item){
return userCart.push(item);
}

//Calcular o total
export async function calculateTotal(userCart){
    const result = userCart.reduce((total,item) => total + item.subtotal(), 0)
return console.log(result)
}
//utilizamos o reduce para reduzir um array em um unico valor, como uma soma por exemplo
//ele percorre todo um array como se fosse o for e aplica a função
/*
exemplo:
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0); // O valor inicial do accumulator é 0
*/


//Deletar item
export async function deleteItem(userCart, name){
const index = userCart.findIndex((item) => item.name === name);
//aqui eu vou procurar a posição que está nome item e comparar pra ver se bate com o nome

//com o findIndex para achar a posição do arrau que está aquele item
/*
const numbers = [1, 2, 3, 4, 5];

const index = numbers.findIndex((element) => element === 3);

console.log(index);  // Saída: 2 (o número 3 está no índice 2)*/

index !== -1 ? userCart.splice(index, 1) : null

//o index !=== -1 serve para verificar se um item foi encontrado
//se ele foi encontrado 

} 

//Remove item 

export async function removeItemByIndex(userCart, index){

  //transforma o indicie que o usuario esta vendo, no indice do backend, porque ele tecnicamente começa no 0 e não no 1
  const deleteIndex = index - 1
  
index > 0 && index < userCart.length ? userCart.splice(deleteIndex, 1) : null
//verifico se é maior do que 0: porque se não, não tem porque remover
// verifico se é menor que o tamanho maximo do carrinho
}

export async function removeItem(userCart, item){
  //encontrar o index do item
  const indexFound = userCart.findIndex((p) => p.name === item.name);

  //verificar se o item foi encontrado
  indexFound === -1 ? console.log('Item não encontrado') : null

  // item > 1 subtrair um item, item = 1 deletar o item

  userCart[indexFound].quantity  > 1 ? userCart[indexFound].quantity  -= 1 : null
 // userCart[indexFound].quantity  === 1 ? userCart.splice(indexFound,1): null



 return console.log(`Item encontrado na posição: ${indexFound}`)

}
export async function displayCart(userCart){

 const result =  userCart.map((item, a, b) => `${item.name} ${a} ${b}` )
 //com o map consigo extrair e retornar: valor , o index e o array, nessa sequencia

const response = console.log(`Você tem esses itens no seu carrinho: ${result} `);
 return response  ;

 
}