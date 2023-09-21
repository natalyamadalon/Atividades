const prompt = require("prompt-sync")()

let reiniciar = true //variavel lógica que guarda a opção de reiniciar ou não
let opcao // variavel que guarda a opção de operador escolhida
let fator1 // variavel que guarda o fator de operação 1
let fator2 // variavel que guarda o fator de operação 2
let result // variavel que guarda o resultado

while (reiniciar){
  console.log("Calculadora básica\n")
  console.log("\nEscolha a operação:\n")
  console.log("1 - Adição\n")
  console.log("2 - Subtração\n")
  console.log("3 - Multiplicação\n")
  console.log("4 - Divisão\n")
  console.log("\nresposta:")
  opcao = prompt()
  console.clear() // limpa tudo do console escrito antes dele
    if (opcao == 1) {
      console.log("Adição")
      console.log("\nDigite o primeiro fator:\t\n")
      fator1 = parseFloat (prompt())
      console.log("\nDigite o segundo fator:\t\n")
      fator2 = parseFloat (prompt())
      result = fator1 + fator2
      console.log("\nO resultado é:\t", result, "\n")
    }
    if (opcao == 2) {
      console.log("Subtração")
      console.log("\nDigite o primeiro fator:\t\n")
      fator1 = parseFloat (prompt())
      console.log("\nDigite o segundo fator:\t\n")
      fator2 = parseFloat (prompt())
      result = fator1 - fator2
      console.log("\nO resultado é:\t", result, "\n")
    }
    if (opcao == 3) {
      console.log("Multiplicação")
      console.log("\nDigite o primeiro fator:\t\n")
      fator1 = parseFloat (prompt())
      console.log("\nDigite o segundo fator:\t\n")
      fator2 = parseFloat (prompt())
      result = fator1 * fator2
      console.log("\nO resultado é:\t", result, "\n")
    }
    if (opcao == 4) {
      console.log("Divisão")
      console.log("\nDigite o primeiro fator:\t\n")
      fator1 = parseFloat (prompt())
      console.log("\nDigite o segundo fator:\t\n")
      fator2 = parseFloat (prompt())
      result = fator1 / fator2
      console.log("\nO resultado é:\t", result, "\n")
    }
    console.log("\nDeseja calcular novamente? digite 'true' para sim e 'false' para não:\n")
    console.log("Resposta:\t")
    reiniciar = prompt() //variavel lógica que guarda a opção de reiniciar ou não a calculadora
  }