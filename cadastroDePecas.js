// Se a peça possuir um peso superior a 100gramas, pode cadastrar.
// Dada a capacidade de cada caixa, caso a lista de peças seja superior a 10, imprima uma mensagem informando não ter capacidade suficiente.
// Caso a peça tenha um nome com quantidade inferior a 3 caracteres, informe uma mensagem de erro.

window.alert('Você poderá cadastrar até 10 peças. Vamos começar.');
let listaDePecas = ['']
for (let i = 1; i <= 100; i++) {
    let peca = window.prompt('Digite o nome da peça.');
    let pesoDaPeca = window.prompt('Digite o peso da peça, em gramas.');
    if (peca.length == 0) {
    
    } else
    if (peca.length < 3) {
        window.alert('Erro! A peça deve conter pelo menos 3 caracteres. Você não poderá adicionar sua pá, por exemplo!')
    } else if (pesoDaPeca <= 100) {
    
    } else if (listaDePecas.length == 10) {
        console.log('Erro! A caixa não tem capacidade suficiente para armazenar mais uma peça.')
        window.alert('Erro! A caixa não tem capacidade suficiente para armazenar mais uma peça.')
        break;
    } else {
        listaDePecas.push(peca)
    }
    if (i = 100) {
        i = 1;
    }
}

window.alert('Peças cadastradas: ' + listaDePecas);
