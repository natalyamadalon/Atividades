
let opcao //variavel que guarda a opção de operador escolhida
let fator1 // variavel que guarda o fator de operação 1
let fator2 // variavel que guarda o fator de operação 2
let result // variavel que guarda o resultado
{ while (reiniciar = true ) 
    calcular()
    console.log("\nDeseja calcular novamente? digite 'verdadeiro' para sim e 'falso' para não:\n")
    console.log("Resposta:\t")
    leia(reiniciar) //variavel lógica que guarada a opção de reiniciar ou não a calculadora

    clear() // limpa tudo do console escrito antes dele
    console.log ("Calculadora de\t", tipoOperacao, "\n")
    console.log("\nDigite o primeiro fator:\t\n")
    console.log("resposta:\t")
    leia(fator1)
    console.log("\nDigite o segundo fator:\n")
    console.log("resposta:\t")
    leia(fator2)
    
    clear() // limpa tudo do console escrito antes dele
    console.log("Calculadora básica\n")
    console.log("\nEscolha a operação:\n")
    console.log("1 - Adição\n")
    console.log("2 - Subtração\n")
    console.log("3 - Multiplicação\n")
    console.log("4 - Divisão\n")
    console.log("\nresposta:\t")
    leia(opcao)
      if (opcao == 1) {
        operacao("Adição")
        result = fator1 + fator2
        console.log("\nO resultado é:\t", result, "\n")
      }
  
      if (opcao == 2) {
        operacao("Subtração")
        result = fator1 - fator2
        console.log("\nO resultado é:\t", result, "\n")
      }
    
      if (opcao == 3) {
        operacao("Multiplicação")
        result = fator1 * fator2
        console.log("\nO resultado é:\t", result, "\n")
      }
    
      if (opcao == 4) {
        operacao("Divisão")
        result = fator1 / fator2
        console.log("\nO resultado é:\t", result, "\n")
      }
    }