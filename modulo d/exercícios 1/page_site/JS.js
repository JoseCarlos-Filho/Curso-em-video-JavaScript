function carregar() {
    var mensagem = window.document.querySelector(".msgHora");
    var imagem = window.document.querySelector(".imgFoto");
    var data = new Date();
    // var hora = data.getHours();
    var hora = 19

    mensagem.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        
        imagem.src = './Imagens/bomdia-redondo-removebg-preview.png';
        document.body.style.background = '#e2cd9f'


    }else if (hora >= 12 && hora < 18) {
        
        imagem.src = './Imagens/boatarde-redondo-removebg-preview.png';
        document.body.style.background = '#b9846f'

    }else {

        imagem.src = './Imagens/boanoite-redondo-removebg-preview.png'
        document.body.style.background = '#515154'
    }
}
