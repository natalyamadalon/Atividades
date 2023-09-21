const prompt = require("prompt-sync")()

let reiniciar = true //variavel lógica que guarda a opção de reiniciar ou não
let opcao // variavel que guarda a opção de operador escolhida
let fator1 // variavel que guarda o fator de operação 1
let fator2 // variavel que guarda o fator de operação 2
let result // variavel que guarda o resultado

while (reiniciar){

console.log("Conversor de temperaturas\n")
console.log("\nEscolha a operação:\n")
console.log("1 - Celsius para Fahrenheit\n")
console.log("2 - Fahrenheit para Celsius\n")
opcao = prompt("\nOperação escolhida:")
console.clear() // limpa tudo do console escrito antes dele

    if (opcao == 1) {
    console.log("\nDigite o valor em Celsius que deseja converter:\t\n")
    console.log("valor:")
    fator1 = parseFloat (prompt())
    result = fator1 * 1.8 + 32
    console.log("\nO resultado é:\t", result, "°F\n")
    }

    if (opcao == 2) {
    console.log("\nDigite o valor em Fahrenheit que deseja converter:\t\n")
    console.log("valor:")
    fator2 = parseFloat (prompt())
    result = (fator2-32)/1.8 
    console.log("\nO resultado é:\t", result, "°C\n")
    }

console.log("\nDeseja converter novamente? digite 'true' para sim e 'false' para não:\n")
console.log("Resposta:\t")
reiniciar = prompt() //variavel lógica que guarda a opção de reiniciar ou não a calculadora

}