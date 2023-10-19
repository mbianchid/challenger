const prompt = require('prompt-sync')()

let hortifruti = [];
let mercado = [];
let higiene = [];
let carnes = [];
let superfluo = [];
let congelados = [];
let comida = "";
let categoria = "";

let adicionarMais = "sim";
while(adicionarMais != "não"){
    adicionarMais = prompt("Você deseja adicionar uma comida na lista de compras? Responda 1- SIM ou 2- NÃO. ");
    while (adicionarMais != "1" && adicionarMais != "2") {
	console.log(`Operação não reconhecida!`);
        adicionarMais = prompt("Você deseja adicionar uma comida na lista de compras? Responda 1- SIM ou 2- NÃO. ");
    }
	
    if (adicionarMais === "2"){
        break;
    }
	
    comida = prompt("Qual comida você deseja inserir? ");
    categoria = prompt(`Em qual categoria essa comida se encaixa:  '1 - MERCADO',  '2 - HIGIENIE',  '3 - CARNES',  '4 - SUPÉRFLUO',  5 - CONGELADOS  ou  6 - HORTIFRUTI  `);
    if(categoria === '1'){
        mercado.push(comida);
    } else if (categoria === '2'){
        higiene.push(comida);
    } else if (categoria === '3'){
        carnes.push(comida);
    } else if (categoria === '4'){
        superfluo.push(comida);
    } else if (categoria === '5'){
        congelados.push(comida);
    } else if (categoria === '6'){
        hortifruti.push(comida);
    } else {
        console.log("Essa categoria não foi pré-definida. ")
    }
}
console.log(`Lista de compras:\n  Mercado: ${mercado}\n  Higiene: ${higiene}\n  Carnes: ${carnes}\n  Supérfluo: ${superfluo}\n  Congelados: ${congelados}\n  Hortifruti: ${hortifruti}`);
