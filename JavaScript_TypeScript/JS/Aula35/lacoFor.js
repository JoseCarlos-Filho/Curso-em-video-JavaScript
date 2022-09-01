// Array de Objetos
const elementos = [
  { tag: "h4", texto: "Minha solução" },
  { tag: "p", texto: "Frase 1" },
  { tag: "div", texto: "Frase 2" },
  { tag: "footer", texto: "Frase 3" },
  { tag: "section", texto: "Frase 4" },
];

// Monta elementos do Array de Objeto.
function montarElementos(elementos) {
  const containerPage = document.querySelector(".container");

  for (let index = 0; index < elementos.length; index++) {
    const tag = document.createElement(elementos[index].tag);
    tag.innerText = elementos[index].texto;
    containerPage.appendChild(tag);
  }
}
novoElemento("h1", "numero");

// Adiciona novo elemento no Array de Objetos.
function novoElemento(tag, texto) {
  elementos.push({ tag, texto });
  console.log(elementos);
  return elementos;
  //return elementos.push({ tag, texto });
  // montarElementos(elementos);
}

montarElementos(elementos);
