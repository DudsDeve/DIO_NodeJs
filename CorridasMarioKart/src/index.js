const player1 = {
    NOME: "MARIO",
    VELOCIDADE: "4",
    MANOBRABILIDADE: "3",
    PODER: "3",
    PONTOS: "0",
}
const player2 = {
    NOME: "LUIGI",
    VELOCIDADE: "3",
    MANOBRABILIDADE: "4",
    PODER: "4",
    PONTOS: "0",
}

async function rollDice(){
   return Math.floor(Math.random() * 6) + 1;
}

async function getRandomBlock(){
    let random = Math.random();
    let result

    random < 0.33 ? result = "RETA" : random < 0.66 ? result = "CURVA" : result = "CONFRONTO"

}

async function logRollResult()
async function playRaceEngine(character1, character2){
for ( let round = 1; round <= 5; round++){
    console.log(`Rodada ${round} começando`)

    let block = await getRandomBlock()
    console.log(`Bloco: ${block}`)

    let diceResult1 = await rollDice()
    let diceResult2 = await rollDice()

    let totalTestSkill1 = 0;
    let totalTestSkill2 = 0;
    if (block === "RETA"){
        totalTestSkill1 = diceResult1 + character1.VELOCIDADE
        totalTestSkill2 = diceResult2 + character2.VELOCIDADE
        console.log(`O ${player1.NOME} rolou um dado de ${block}${diceResult1}`)
        console.log(`O ${player2.NOME} rolou um dado de ${block}${diceResult2}`)

    }
    if (block === "CURVA"){
        totalTestSkill1 = diceResult1 + character1.MANOBRABILIDADE
        totalTestSkill2 = diceResult2 + character2.MANOBRABILIDADE

    }
    if (block === "CONFRONTO"){
        let powerResult1 = diceResult1 + character1.PODER
        let powerResult2 = diceResult2 + character2.PODER

    }

}
}
(async function main(){
    return console.log(`Corrida entre ${player1.NOME} e ${player2.NOME} começando`);
    
    await playRaceEngine(player1, player2)
})(); //função auto executável