import entradaDados from "readline-sync";

console.log("Aplicação de juros:\n\n");

//Valor da divida + que 0 continua, caso contrario encerra
let valor_divida = entradaDados.question("Informe o valor devido: R$ ");
valor_divida = Number(valor_divida);

if (valor_divida === 0) {
  console.log("Você não deve nenhuma quantia, aplicação encerrada.");
  process.exit();
}
//------------------------------------------------------------------

//Se houver mais de 15 dias de atraso = 15%, caso contrario = 5%
let dias = entradaDados.question(
  "Informe quantos dias se passaram desde o vencimento do boleto: "
);
dias = Number(dias);

let taxa;
let valorFinal;

if (dias > 15) {
  valorFinal = valor_divida + valor_divida * 0.1;
  taxa = 10;
} else {
  valorFinal = valor_divida + valor_divida * 0.05;
  taxa = 5;
}
//------------------------------------------------------------------

console.log("\n\nValor original da dívida: " + valor_divida);
console.log("Dias atrasados: " + dias);
console.log("Taxa de juros:" + taxa + "%");
console.log("Valor final: " + valorFinal.toFixed(2));
