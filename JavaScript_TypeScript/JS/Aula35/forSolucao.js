const elements = [
  { tag: "h4", texto: "For solução Prof." },
  { tag: "p", texto: "Frase 1" },
  { tag: "div", texto: "Frase 2" },
  { tag: "footer", texto: "Frase 3" },
  { tag: "section", texto: "Frase 4" },
];

const container = document.querySelector(".container");
const div = document.createElement("div");

for (let i = 0; i < elements.length; i++) {
  console.log(elements[i]);
  let { tag, texto } = elements[i];
  let criaTag = document.createElement(tag);
  criaTag.innerHTML = texto;
  div.appendChild(criaTag);
}

container.appendChild(div);
