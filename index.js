const prompt = require("prompt-sync")()
let reiniciar = true //variavel lógica que guarda a opção de reiniciar ou não
let opcao // variavel que guarda a opção de operador escolhida
let fator1 // variavel que guarda o fator de operação 1
let fator2 // variavel que guarda o fator de operação 2
let result // variavel que guarda o resultado

opcao = prompt()

while (reiniciar){
  console.clear() // limpa tudo do console escrito antes dele
  console.log("Calculadora básica\n")
  console.log("\nEscolha a operação:\n")
  console.log("1 - Adição\n")
  console.log("2 - Subtração\n")
  console.log("3 - Multiplicação\n")
  console.log("4 - Divisão\n")
  console.log("\nresposta:")
  opcao = prompt()
  console.log (opcao)
    if (opcao == 1) {
      console.log("Adição")
      console.log("\nDigite o primeiro fator:\t\n")
      prompt
      console.log("\nDigite o segundo fator:\t\n")
      prompt
      result = fator1 + fator2
      console.log("\nO resultado é:\t", result, "\n")
    }
  
    if (opcao == 2) {
      console.log("Subtração")
      result = fator1 - fator2
      console.log("\nO resultado é:\t", result, "\n")
    }
    
    if (opcao == 3) {
      console.log("Multiplicação")
      result = fator1 * fator2
      console.log("\nO resultado é:\t", result, "\n")
    }
    
    if (opcao == 4) {
      console.log("Divisão")
      result = fator1 / fator2
      console.log("\nO resultado é:\t", result, "\n")
        
      console.log("\nDeseja calcular novamente? digite 'verdadeiro' para sim e 'falso' para não:\n")
      console.log("Resposta:\t")
      prompt(reiniciar) //variavel lógica que guarda a opção de reiniciar ou não a calculadora
    }
  }