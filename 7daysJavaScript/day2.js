const prompt = require('prompt-sync')()

const nome = prompt('Qual o seu nome? ');
const idade = prompt('Quantos anos você tem? ');
const code = prompt('Qual linguagem de programação você está estudando? ');

const msg = `Olá ${nome}, você tem ${idade} anos e já está aprendendo ${code}!`;
console.log(msg + '\n');

const pergunta = prompt(`Você gosta de estudar ${code}? Responda com o número 1 - SIM ou 2 - NÃO. `);

if(pergunta == 1){
    console.log('\nMuito bom! Continue estudando e você terá muito sucesso. ');
} else {
    console.log('\nAhh que pena... Já tentou aprender outras linguagens?');
    const opcoes = prompt('Responda com o número 1 para SIM ou 2 para NÃO. ');
    if(opcoes == 1){
        console.log('\nMuito bom! Continue estudando e você terá muito sucesso. ');
    } else {
        console.log('\nAhh que pena... Desejo boa sorte para você na próxima! ');
    }
};
