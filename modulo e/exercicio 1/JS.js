
function contar() {

    let first = Number(document.querySelector(".firstN").value);
    let second = Number(document.querySelector(".firstS").value);
    let passo = Number(document.querySelector(".firstP").value);
    let res = document.querySelector('div#res');

    // console.log(first);
    // console.log(second);
    // console.log(passo);
    // if ( first.value.lenght == 0 || second.value.lenght == 0 || passo.value.lenght == 0)

    if ( first == 0 || second == 0 || passo == 0) {
        // alert('[ERRO] Faltando dados!')
        res.innerHTML = 'Impossivel contar!'
    }else {
        // let inicio = Number(first.value);
        // let fim = Number(second.value);
        // let passos = Number(passo.value);

        res.innerHTML = 'Contando: ';
        if (first < second) {
            // contagem crescente
            for (let i = first; i <= second; i += passo) {
                // descrição unicode emoji em javascript exemplo : \u{1F449}
                res.innerHTML += ` ${i} \u{1F449}`;
                // res.innerHTML = `1F449`;    
            }        
        
        // contagem regressiva
        }else 
            {
            
                for ( let i = first; i >= second; i -= passo) {
                
                    res.innerHTML += ` ${i} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`;
    }

    

}
