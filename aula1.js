// 1. Declaração de Variáveis
let nome = "Henrique";
let idade = 25;
const empresa = "Automatizze";

// 2. Operadores Aritméticos
let soma = 10 + 5;
let multiplicacao = 10 * 5;

// 3. Condicionais
let nota = 85;
let resultadoCondicional;
if (nota >= 90) {
    resultadoCondicional = "Excelente";
} else if (nota >= 70) {
    resultadoCondicional = "Aprovado";
} else {
    resultadoCondicional = "Reprovado";
}

// 4. Funções
function saudacao(nome) {
    return `Olá, ${nome}!`;
}

// 5. Laço de Repetição
let listaNumeros = [];
for (let i = 0; i < 5; i++) {
    listaNumeros.push(i);  // Adiciona números de 0 a 4 no array
}

// 6. Manipulação de Arrays
let habilidades = ["JavaScript", "HTML", "CSS"];
habilidades.push("React");

// 7. Manipulação do DOM
document.getElementById("meuBotao").addEventListener("click", function() {
    alert("Botão clicado!");
});

// 8. Manipulação de Objetos
let pessoa = {
    nome: "Henrique",
    idade: 25,
    cidade: "São Paulo"
};

// Exibição dos Resultados na Página
let conteudo = document.getElementById("conteudo");

conteudo.innerHTML = `
    <strong>Nome:</strong> ${nome}<br>
    <strong>Idade:</strong> ${idade}<br>
    <strong>Empresa:</strong> ${empresa}<br><br>
    <strong>Operação de Soma (10 + 5):</strong> ${soma}<br>
    <strong>Operação de Multiplicação (10 * 5):</strong> ${multiplicacao}<br><br>
    <strong>Resultado da Condição (nota 85):</strong> ${resultadoCondicional}<br><br>
    <strong>Saudação:</strong> ${saudacao(nome)}<br><br>
    <strong>Números Gerados pelo Laço:</strong> ${listaNumeros.join(', ')}<br><br>
    <strong>Habilidades (Array):</strong> ${habilidades.join(', ')}<br><br>
    <strong>Dados da Pessoa (Objeto):</strong> Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Cidade: ${pessoa.cidade}
`;
