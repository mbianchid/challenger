# challenger
Repositório destinado aos desafios realizados na página: https://7daysofcode.io/

## DESAFIO HTML ##

O escopo do projeto é o seguinte: uma empresa de TI quer desenvolver uma página destinada a novas contratações e contratou você para desenvolvê-la.
Figma: https://www.figma.com/file/mm3MLozvUDGhDRTxSLlGL5/7daysOfCode-HTML-CSS?node-id=0%3A1&mode=dev

### DESAFIOS DOS DIAS
1. Desenvolver o cabeçalho da aplicação;
2. Desenvolver a primeira seção da sua página, que também pode ser chamada de "cabeçalho";
3. Desenvolver uma parte bem legal e desafiadora: a seção de métricas e resultados da sua página;
4. Desenvolver a seção de "Estamos procurando por talentos", mas sem a parte de divulgação de vagas ainda, apenas até a imagem;
5. Desenvolver a seção de vagas;

## DESAFIOS JAVASCRIPT ###

### DAY 1
Reescrever o código abaixo de maneira que ele imprima as informações de maneira correta, que faça sentido e sem erros:
    let numeroUm = 1
    let stringUm = '1'
    let numeroTrinta = 30
    let stringTrinta = '30'
    let numeroDez = 10
    let stringDez = '10'

```
if (COMPARAR O numeroUm e a stringUm) {
  console.log('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes')
} else {
  console.log('As variáveis numeroUm e stringUm não tem o mesmo valor')
}
if (COMPARAR O numeroTrinta e a stringTrinta) {
  console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo')
} else {
  console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo')
}
if (COMPARAR O numeroDez e a stringDez) {
  console.log('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes')
} else {
  console.log('As variáveis numeroDez e stringDez não tem o mesmo valor')
}
```

### DAY 2 
Desenvolver um programa simulando um desses sites. Ele deve pedir para o usuário responder 3 perguntas:
- Qual o seu nome?
- Quantos anos você tem?
- Qual linguagem de programação você está estudando?

À medida que as perguntas forem sendo feitas, a pessoa que estiver usando o programa deve responder cada uma delas.
No final, o sistema vai exibir a mensagem:
"Olá [nome], você tem [idade] anos e já está aprendendo [linguagem]!"

Depois de exibir a mensagem anterior, o programa deve perguntar:
Você gosta de estudar [linguagem]? Responda com o número 1 para SIM ou 2 para NÃO.
Dependendo da resposta, ele deve mostrar uma das seguintes mensagens:
1. Muito bom! Continue estudando e você terá muito sucesso.
2. Ahh que pena... Já tentou aprender outras linguagens?

### DAY 3 
Criar os destinos possíveis de um jogo, em que o usuário consiga escolher:
1. Se quer seguir para área de Front-End ou seguir para a área de Back-End.
2. Caso esteja na área de Front-End, se quer aprender React ou aprender Vue. Caso esteja na área de Back-End, poderá aprender C# ou aprender Java.
3. Depois, independente das escolhas anteriores, o usuário poderá escolher entre seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack. Você deve exibir na tela uma mensagem específica para cada escolha.
4. Por fim, pergunte quais são as tecnologias nas quais a pessoa gostaria de se especializar ou de conhecer. Aqui, a pessoa pode responder N tecnologias, uma de cada vez. Então, enquanto ela continuar respondendo ok para a pergunta: “Tem mais alguma tecnologia que você gostaria de aprender?”, continue apresentando para ela o Prompt, para que ela complete o nome da tecnologia em questão. E, logo depois, apresente uma mensagem comentando algo sobre a linguagem inserida.

O importante é que a pessoa que estiver jogando possa sempre escolher qual decisão tomar para conseguir aprender e se desenvolver na área de programação.
Além disso, também é essencial que, ao final do jogo, ela possa inserir quantas tecnologias quiser na lista de aprendizado.

### DAY 4
Criar um programinha que comece com um valor específico pré-definido entre 0 a 10 para o número que você vai adivinhar (7, por exemplo).
Em seguida, o programa vai perguntar para você qual o valor que você deseja chutar e, caso você acerte, ele irá te parabenizar. 
Caso erre, ele vai te dar mais 2 tentativas.
No fim, caso você não acerte nenhuma vez, ele vai imprimir qual era o número inicial.

### DAY 5
1. Criar um programa em Javascript que perguntará se você deseja adicionar uma comida na sua lista de compras, e você deve poder responder com sim ou não.
2. Em seguida, ele perguntará qual comida você deseja inserir, e você digitará o nome dela, como por exemplo batata.
3. Depois, ele deverá perguntar em qual categoria essa comida se encaixa, com algumas opções já pré-definidas, como frutas, laticínios, congelados, doces e o que mais você achar interessante. Assim, você poderá separar tudo no seu devido grupo.
4. Por fim, caso você não queira mais adicionar nada na lista de compras e responder não na primeira pergunta, ele irá exibir uma lista com todos os itens agrupados, da seguinte forma:
Caso você adicione na sua lista:
banana, leite em pó, tomate, leite vegetal, chiclete, bala de ursinho, maçã, uva, abacate e leite de vaca

    O programa deverá imprimir, por exemplo:
    Lista de compras:
        Frutas: banana, tomate, maçã, uva, abacate
        Laticínios: leite vegetal, leite de vaca, leite em pó
        Congelados:
        Doces: chiclete e bala de ursinho

### DAY 6
Criar a opção de remover algum item da lista, que será exibida junto à pergunta de “você deseja adicionar uma comida na lista de compras”?
A partir daí, caso a pessoa escolha essa opção, o programa irá imprimir os elementos presentes na lista atual, e a pessoa deverá escrever qual deles deseja remover.
Depois disso, o programa irá remover o elemento da lista e imprimir a confirmação de que o item realmente não está mais lá.
Por fim, ele voltará para o ciclo inicial de perguntas.
Se, na hora de deletar o item, o mesmo não for encontrado na lista, você deverá exibir uma mensagem avisando isso.
Por exemplo: “Não foi possível encontrar o item dentro da lista!”
Lembre-se que a opção de remover um item só deverá estar disponível a partir do momento que existir ao menos um elemento dentro da lista de compras.

### DAY 7
Crie a sua própria calculadora, porém com um detalhe muito importante: cada operação deverá ser uma função diferente no seu código.
Primeiramente, a pessoa deverá escolher uma opção de operação impressa pelo programa na tela.
Depois, ela deverá inserir os dois valores que deseja utilizar, e o programa imprimirá o resultado da operação em questão.
As opções disponíveis deverão ser: 
    - soma;
    - subtração;
    - multiplicação;
    - divisão;
    - sair.
Nessa última, o programa deverá parar de ser executado, mostrando uma mensagem "Até a próxima".
