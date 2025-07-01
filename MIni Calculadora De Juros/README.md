# 💰 Mini Calculadora de Juros - JavaScript

Este é um projeto simples em Node.js que simula a aplicação de juros sobre uma dívida, com base no número de dias de atraso informados pelo usuário.

## 🧠 Lógica aplicada

- Se o valor da dívida for `0` ou inválido, a aplicação é encerrada.
- Se o atraso for **até 15 dias**, aplica-se **5% de juros**.
- Se o atraso for **superior a 15 dias**, aplica-se **10% de juros**.

## 🚀 Como executar

1. Certifique-se de ter o [Node.js](https://nodejs.org/) instalado na sua máquina.
2. Instale a dependência `readline-sync`:

```bash
npm install readline-sync

Execute o script:

bash
Copiar
Editar
node "Mini Calculadora De Juros.js"
📝 Exemplo de uso
yaml
Copiar
Editar
Informe o valor devido: R$ 100
Informe quantos dias se passaram desde o vencimento do boleto: 20

Valor original da dívida: R$ 100.00
Dias atrasados: 20
Taxa de juros: 10%
Valor final com juros: R$ 110.00
📁 Estrutura do projeto
pgsql
Copiar
Editar
Mini Calculadora De Juros/
├── Mini Calculadora De Juros.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md

👨‍💻 Autor
Feito por Matheus Costa Caldeira ✌️