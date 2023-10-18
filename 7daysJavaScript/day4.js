const prompt = require('prompt-sync')()

const numeroAdivinhacao = Math.floor(Math.random() * (10 - 0 + 1) + 0);
let chute = "";
let acertou = false;

for(let contador = 0; contador < 3; contador++){    
    chute = prompt("Tente adivinhar o número de 0 a 10:");
    if(chute == numeroAdivinhacao){
        console.log(`Parabéns, você acertou! O número era ${numeroAdivinhacao}.`);
        acertou = true;
        break;
    }
    console.log("Errado!");
}
if(!acertou){
    console.log(`Infelizmente, você não acertou. O número era ${numeroAdivinhacao}!`);
};
