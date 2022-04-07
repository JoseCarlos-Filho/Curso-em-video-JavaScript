function verificar() {
    var data= new Date()
    const ano = data.getFullYear()
    var fano = document.getElementById('anoTexto');
    var res = document.querySelector('div#res');
    
    // console.log(ano)
    // console.log(fano.value)
    // console.log(res)
    

    if (fano.value.length == 0 || fano.value > ano) {
        
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    
    } else {

        var fsex = document.getElementsByName('radioSexo')
        var idade = ano - fano.value
        var genero = ''

        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', './Imagens/bebe-homem.png')
                displayImage(img)
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', './Imagens/homem-jovem.png')
                displayImage(img)
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', './Imagens/homem-meiaidade.png')
                displayImage(img)
                
            } else {
                // Idoso
                img.setAttribute('src', './Imagens/homem-velho.png')
                displayImage(img)
            }

        } else if (fsex[1].checked) {
            genero = 'Mulher'

            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', './Imagens/bebe-mulher.png')
                displayImage(img)
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', './Imagens/mulher-jovem.png')
                displayImage(img)
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', './Imagens/mulher-meiaidade.png')
                displayImage(img)
            } else {
                // Idoso
                img.setAttribute('src', './Imagens/senhora.png')
                displayImage(img)
            }
        }

        function displayImage(img) {
            img.style.display = 'flex';
            img.style.justifyContent = 'center';
            img.style.alignItems = 'center';
        }

        // res.style.textAlign = 'center'
        
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.style.marginTop = '-100px'
        res.style.paddingBottom = '20px'
        // res.appendChild(img)
        // res.append(img)
        res.before(img)      
        
    }
}