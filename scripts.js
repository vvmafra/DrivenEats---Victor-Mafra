function selecionarComida(botaoComida) {
    const botaoComidaAnt = document.querySelector('.comida .selecionado');
    if ( botaoComidaAnt !== null) {
        botaoComidaAnt.classList.remove('selecionado');
    }

    botaoComida.classList.add('selecionado');

    const comida = document.querySelector()
}


function selecionarBebida(botaoBebida) {
    const botaoBebidaAnt = document.querySelector('.bebida .selecionado');
    if ( botaoBebidaAnt !== null) {
        botaoBebidaAnt.classList.remove('selecionado');
    }
    
    botaoBebida.classList.add('selecionado');
}

function selecionarSobremesa(botaoSobremesa) {
    const botaoSobremesaAnt = document.querySelector('.sobremesa .selecionado');
    if ( botaoSobremesaAnt !== null) {
        botaoSobremesaAnt.classList.remove('selecionado');
    }
    
    botaoSobremesa.classList.add('selecionado');
}
