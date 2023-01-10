let tPrato, tBebida, tSobremesa;
let pPrato, pBebida, pSobremesa;

let total = 0;

function fazerPedido() {
    tPrato = document.querySelector('.comida .selecionado .titulo').innerHTML;
    pPrato = document.querySelector('.comida .selecionado .preco').innerHTML;

    tBebida = document.querySelector('.bebida .selecionado .titulo').innerHTML;
    pBebida = document.querySelector('.bebida .selecionado .preco').innerHTML;

    tSobremesa = document.querySelector('.sobremesa .selecionado .titulo').innerHTML;
    pSobremesa = document.querySelector('.sobremesa .selecionado .preco').innerHTML;
   
    pPrato = pPrato.replace('R$','');
    pPrato = pPrato.replace(',','.');
    pPrato = Number(pPrato);

    pBebida = pBebida.replace('R$','');
    pBebida = pBebida.replace(',','.');
    pBebida = Number(pBebida);

    pSobremesa = pSobremesa.replace('R$','');
    pSobremesa = pSobremesa.replace(',','.');
    pSobremesa = Number(pSobremesa);

    total = pPrato + pBebida + pSobremesa;

    const msg = `
    Olá, gostaria de fazer o pedido:
        - Prato: ${tPrato}
        - Bebida: ${tBebida}
        - Sobremesa: ${tSobremesa}
        Total: R$ ${total.toFixed(2).replace('.',',')}
    `;

    const msgWP = encodeURIComponent(msg);

    const linkWP = `https://wa.me/5547999854359?text=${msgWP}`;

    window.location = linkWP;

}

function habilitarSelecaoPedido(){

    if (tPrato !== undefined && tBebida !== undefined && tSobremesa !== undefined){
        const botao = document.querySelector('.selecao');
        botao.classList.add('ativado');
        botao.innerHTML = "Fechar Pedido";
        botao.removeAttribute('disabled');
    }
}

function selecionarComida(botaoComida) {
    const botaoComidaAnt = document.querySelector('.comida .selecionado');
    if ( botaoComidaAnt !== null) {
        botaoComidaAnt.classList.remove('selecionado');
    }

    botaoComida.classList.add('selecionado');

    tPrato = botaoComida.querySelector('.titulo').innerHTML;

    habilitarSelecaoPedido()
}


function selecionarBebida(botaoBebida) {
    const botaoBebidaAnt = document.querySelector('.bebida .selecionado');
    if ( botaoBebidaAnt !== null) {
        botaoBebidaAnt.classList.remove('selecionado');
    }
    
    botaoBebida.classList.add('selecionado');

    tBebida = botaoBebida.querySelector('.titulo').innerHTML;

    habilitarSelecaoPedido()
}

function selecionarSobremesa(botaoSobremesa) {
    const botaoSobremesaAnt = document.querySelector('.sobremesa .selecionado');
    if ( botaoSobremesaAnt !== null) {
        botaoSobremesaAnt.classList.remove('selecionado');
    }
    
    botaoSobremesa.classList.add('selecionado');

    tSobremesa = botaoSobremesa.querySelector('.titulo').innerHTML;

    habilitarSelecaoPedido()
}