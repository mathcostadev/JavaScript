import entradaDados from "readline-sync";

function formatarNumero(valor) {
  return valor.toFixed(2).toString().replace(".", ",");
}

console.log(`Escolha uma das alternativas:\n`);
console.log(`1 - Listar os salários mínimos de 2010 a 2020`);
console.log(`2 - Listar o índice IPCA de 2010 a 2020`);
console.log(`3 - Comparação entre o percentual de aumento salarial e o IPCA\n`);

let escolha = parseInt(
  entradaDados.question("Digite o número da sua escolha: ")
);

if (escolha === 1) {
  console.log("\n=== Salários Mínimos de 2010 a 2020 ===\n");

  const salarios = [
    { ano: 2010, valor: 510.0 },
    { ano: 2011, valor: 545.0 },
    { ano: 2012, valor: 622.0 },
    { ano: 2013, valor: 678.0 },
    { ano: 2014, valor: 724.0 },
    { ano: 2015, valor: 788.0 },
    { ano: 2016, valor: 880.0 },
    { ano: 2017, valor: 937.0 },
    { ano: 2018, valor: 954.0 },
    { ano: 2019, valor: 998.0 },
    { ano: 2020, valor: 1045.0 },
  ];

  let label_ano = "Ano: ";
  let label_salario = "Salário mínimo: ";

  for (let opcao1 of salarios) {
    console.log();
    console.log(label_ano.padEnd(25, ".") + opcao1.ano);
    console.log(
      label_salario.padEnd(25, ".") + "R$ " + formatarNumero(opcao1.valor)
    );
    console.log();
  }
} else if (escolha === 2) {
  console.log("\n=== Índice IPCA de 2010 a 2020 ===\n");

  const ipca_anual = [
    { ano: 2010, ipca: 5.91 },
    { ano: 2011, ipca: 6.5 },
    { ano: 2012, ipca: 5.84 },
    { ano: 2013, ipca: 5.91 },
    { ano: 2014, ipca: 6.41 },
    { ano: 2015, ipca: 10.67 },
    { ano: 2016, ipca: 6.29 },
    { ano: 2017, ipca: 2.95 },
    { ano: 2018, ipca: 3.75 },
    { ano: 2019, ipca: 4.31 },
    { ano: 2020, ipca: 4.52 },
  ];

  let label_ano = "Ano: ";
  let label_ipca = "Inflação IPCA: ";

  for (let opcao2 of ipca_anual) {
    console.log();
    console.log(label_ano.padEnd(25, ".") + opcao2.ano);
    console.log(label_ipca.padEnd(25, ".") + formatarNumero(opcao2.ipca) + "%");
    console.log();
  }
} else if (escolha === 3) {
  console.log(
    "\n=== Comparação entre Crescimento Salarial e IPCA (2010-2020) ===\n"
  );

  const todas_infos = [
    { ano: 2010, valor: 510.0, ipca: 5.91, crescimento: 9.68 },
    { ano: 2011, valor: 545.0, ipca: 6.5, crescimento: 6.86 },
    { ano: 2012, valor: 622.0, ipca: 5.84, crescimento: 14.13 },
    { ano: 2013, valor: 678.0, ipca: 5.91, crescimento: 9.0 },
    { ano: 2014, valor: 724.0, ipca: 6.41, crescimento: 6.78 },
    { ano: 2015, valor: 788.0, ipca: 10.67, crescimento: 8.84 },
    { ano: 2016, valor: 880.0, ipca: 6.29, crescimento: 11.68 },
    { ano: 2017, valor: 937.0, ipca: 2.95, crescimento: 6.48 },
    { ano: 2018, valor: 954.0, ipca: 3.75, crescimento: 1.81 },
    { ano: 2019, valor: 998.0, ipca: 4.31, crescimento: 4.61 },
    { ano: 2020, valor: 1045.0, ipca: 4.52, crescimento: 4.7 },
  ];

  let label_ano = "Ano: ";
  let label_ipca = "Inflação IPCA: ";
  let label_salario = "Salário mínimo: ";
  let label_crescimento = "Crescimento salarial: ";

  for (let opcao3 of todas_infos) {
    console.log();
    console.log(label_ano.padEnd(25, ".") + opcao3.ano);
    console.log(
      label_salario.padEnd(25, ".") + "R$ " + formatarNumero(opcao3.valor)
    );
    console.log(
      label_crescimento.padEnd(25, ".") +
        formatarNumero(opcao3.crescimento) +
        "%"
    );
    console.log(label_ipca.padEnd(25, ".") + formatarNumero(opcao3.ipca) + "%");
    console.log();
  }
} else {
  console.log("\nOpção inválida\n");
}
