let listaDeNumeroSorteado = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female',{rate:1.2});// adicionamos o Responseive com velocidade 1.2
}


function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jodo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value; // nessa linha o input vai receber o valor digitado e adicionar na variavel chute.

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'; // nesta linha criamos uma variavel para fazer um operador ternario em string para um variavel em INT. lembrando javascript nao e tipada e por isso conseguimos.
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`

        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled'); // Nesta linha habilitamos o 2 botao como o primeiro e o chute usamos o getElementyId para buscar pelo id e removemos o atributo desabilitado tornando abilitado. assim que acertarmos !

    } else if (chute > numeroSecreto) {
        exibirTextoNaTela('P', 'o número secreto é menor!');
    } else {
        exibirTextoNaTela('p', 'o número secreto é maior!')
    }
    tentativas++;
    limparCampo();
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite  + 1);
    let quantidadeDeElementosNaLista = listaDeNumeroSorteado.length;
    if (quantidadeDeElementosNaLista == numeroLimite ){
        listaDeNumeroSorteado = [];
    }

    if (listaDeNumeroSorteado.includes(numeroEscolhido)){ // metodo includes verifica se o item esta na array.
        return gerarNumeroAleatorio(); // a re-funçao e para gerar um novo numero caso o if for verdadeiro.
    } else {
        listaDeNumeroSorteado.push(numeroEscolhido); // Senao Adicione o numero escolhido na lista. e retorne ela.
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}



function reiniciarJogo() {
    limparCampo();
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true); // deixamos true o disable para sempre que o jogo começar o botao reiniciar nao fique disponivel.

} // criamos a funçao de reiniciar com tudo que queremos que ela faça por etapas!.