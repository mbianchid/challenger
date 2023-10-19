const prompt = require('prompt-sync')()

let frutas = [];
let laticinios = [];
let doces = [];
let congelados = [];
let comida = "";
let categoria = "";
let remover = "";

let adicionarMais = "sim";
while(adicionarMais != "não"){
    if(frutas.length === 0 && laticinios.length === 0 && doces.length === 0 && congelados.length === 0){
        adicionarMais = prompt("Você deseja adicionar uma comida na lista de compras? Responda 'sim' ou 'não'. ");
    } else {
        adicionarMais = prompt("Você deseja adicionar uma comida na lista de compras? Responda 'sim', 'não' ou 'remover'. ");
    }
	
    while (adicionarMais != "sim" && adicionarMais != "não" && adicionarMais != "remover ") {
	console.log(`Operação não reconhecida!`);
        adicionarMais = prompt("Você deseja adicionar uma comida na lista de compras? Responda 'sim' ou 'não'. ");
    }
	
    if (adicionarMais === "não"){ 
	break;
    }
	
    if(adicionarMais === "sim"){
        comida = prompt("Qual comida você deseja inserir?");
        categoria = prompt("Em qual categoria essa comida se encaixa: 'frutas', 'laticínios', 'doces' ou 'congelados'? ");
        if(categoria === 'frutas'){
            frutas.push(comida);
        } else if (categoria === 'laticínios'){
            laticinios.push(comida);
        } else if (categoria === 'doces'){
            doces.push(comida);
        } else if (categoria === 'congelados'){
            congelados.push(comida);
        } else {
            console.log("Essa categoria não foi pré-definida.")
        }
    } else if(adicionarMais === "remover"){
	if(frutas.length === 0 && laticinios.length === 0 && doces.length === 0 && congelados.length === 0){
		console.log(`A lista está vazia!`);
	} else {
		remover = prompt(`Lista de compras:\n  Frutas: ${frutas}\n  Laticínios: ${laticinios}\n  Doces: ${doces}\n  Congelados: ${congelados}\n\nQual produto você deseja remover? `);
		if(frutas.indexOf(remover) != -1){
			frutas.splice(frutas.indexOf(remover), 1);
			console.log(`O item ${remover} foi removido com sucesso! `)
		} else if(laticinios.indexOf(remover) != -1){
			laticinios.splice(laticinios.indexOf(remover), 1);
			console.log(`O item ${remover} foi removido com sucesso! `)
		} else if (doces.indexOf(remover) != -1){
			doces.splice(doces.indexOf(remover), 1);
			console.log(`O item ${remover} foi removido com sucesso! `)
		} else if (congelados.indexOf(remover) != -1){
			congelados.splice(congelados.indexOf(remover), 1);
			console.log(`O item ${remover} foi removido com sucesso! `)
		} else {
			console.log(`Não foi possível encontrar o item dentro da lista! `)
		}
	}
    }
}
console.log(`Lista de compras:\n  Frutas: ${frutas}\n  Laticínios: ${laticinios}\n  Doces: ${doces}\n  Congelados: ${congelados}`);