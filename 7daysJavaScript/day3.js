const prompt = require('prompt-sync')()

prompt('Qual o seu nome? ');
const code = prompt('Qual área de desenvolvimento você quer ir? 1- Frontend ou 2 - Backend: ');

if(code == 1){
    console.log('\nFrontend você pode escolher estudar 1- React ou 2 - Vue. Ambos são ótimos frameworks!');
} else {
    console.log('\nBackend existe váris opções, entre elas temos 1- C# ou 2 - Java que são as mais utilizadas atualmente: ');
}

const linguagemEspecializacao =  prompt(`O que você quer fazer agora: 1 - Especialização ou 2 - Virar FullStack? `);

if (linguagemEspecializacao == 1 ) {
    console.log('Continua se especializando e de preferência para um dos frameworks citados. Terá muito sucesso!');
} else if (linguagemEspecializacao == 2) {
    console.log('FullStack é uma ótima carreira!');
}

let opcao = prompt('Tem mais alguma outra linguagem ou tecnologia que deseja aprender? 1 - Sim ou 2 -Não ');
while (opcao != 2) {
    const resp = prompt('Qual tecnologia? ');
    console.log(`${resp} é uma ótima tecnologia, parabéns pela escolha!`);
    opcao = prompt('Alguma outra linguagem ou tecnologia que deseja aprender? 1 - Sim ou 2 -Não ');
    break
};
