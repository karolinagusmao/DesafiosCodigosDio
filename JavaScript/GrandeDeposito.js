// Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output), pulando linha.

while (true) {
    const valor = parseFloat(gets());
  
    if (valor > 0) {
      const saldoAtual = 0; // Supondo que o saldo inicial é 1000
      const novoSaldo = saldoAtual + valor;
      print("Deposito realizado com sucesso!");
      print("Saldo atual: R$ " + novoSaldo.toFixed(2))
      break; // Sai do loop após um valor válido ser informado.
    } else if (valor < 0) {
      print("Valor invalido! Digite um valor maior que zero.");
      break;
    } else {
      print("Encerrando o programa...");
      break; // Sai do loop quando o usuário digita zero ou valor negativo.
    }
  }
  




// Desafio
// Você foi contratado por um banco para desenvolver um programa que auxilie seus clientes a realizar depósitos em suas contas. O programa deve solicitar ao cliente o valor do depósito e verificar se o valor é válido. Se o valor for maior do que zero, o programa deve adicionar o valor ao saldo da conta. Caso contrário, o programa deve exibir uma mensagem de erro. O programa deve soliticar apenas uma vez o valor de depósito.

// Entrada
// O programa deve utilizar o Scanner para receber o valor de depósito digitado pelo cliente. Os valor pode ser decimal, representando valor em reais.

// Saída
// O programa deve exibir uma mensagem de sucesso quando um valor de depósito válido for informado e o saldo da conta for atualizado. Se o valor for "0", deverá imprimir uma mensagem encerrando o programa. Caso um valor inválido seja digitado, o programa deve exibir uma mensagem de erro solicitando um novo valor.

// Exemplos
// A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis.

// Entrada	Saída
// 500.50

 

// -100


// 0

// Deposito realizado com sucesso!
// Saldo atual: R$ 500.50

// Valor invalido! Digite um valor maior que zero.


// Encerrando o programa...