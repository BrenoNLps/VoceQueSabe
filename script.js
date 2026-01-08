const  roleta = document.getElementById("roleta");
const  formulario = document.getElementById("tableBody");



function getComidaDados() {
  const itens = document.querySelectorAll(".item"); 
const total = itens.length;
const angulo = 360 / total;
  return { itens, total, angulo };
}



function criarLinhaTabela(item, texto) {
  const tr = document.createElement("tr");

  const tdnome = document.createElement("td");
  tdnome.textContent = texto;
  tr.appendChild(tdnome);

  const tdbutton = document.createElement("td");
  const btnExcluir = document.createElement("button");
  btnExcluir.textContent = "Excluir";
  btnExcluir.classList.add("btnExcluir");

  btnExcluir.onclick = function () {
    const { total } = getComidaDados();
    if (total === 2) {
      alert("Número mínimo atingido");
    } else {
    tr.remove();
    item.remove();
      posicionaFatias();
    }
  };

  tdbutton.appendChild(btnExcluir);
  tdbutton.classList.add("tdExcluir");
  tr.appendChild(tdbutton);

  formulario.appendChild(tr);
}

//---------------------------Popula-tabela---------------------------//
function popularTabela(){
  const {itens} = getComidaDados();
  
  itens.forEach((item)=>{
    const texto = item.querySelector(".texto-item").textContent;
    criarLinhaTabela(item, texto);

  })
}
popularTabela();



//-------------------------Posiciona-Comidas-------------------------//
function posicionaFatias(){
  const {itens,total,angulo} = getComidaDados();

itens.forEach((item, i) => {
  const texto = item.querySelector(".texto-item");
  

  //reseta estilo para nao manter estilo do tamanho anterior
  item.style = "";
  texto.style = "";


  item.style.backgroundColor = `hsl(${i * angulo}, 60%, 70%)`;
  item.style.transform = `rotate(${i * angulo}deg) skewY(${90 - angulo}deg)`;
  if (total === 2) {
    item.style.top = '0';
    item.style.left = '0';
    item.style.width = '100%';
    item.style.height = '50%';
    texto.style.textAlign = 'center';
    item.style.transformOrigin = '50% 100%';
    item.style.transform = `rotate(${i * angulo}deg)`;


  }else if (total === 3) {
    texto.style.paddingLeft = '18px';
    texto.style.transform = `rotate(48deg)  translateY(87%) skewX(7deg)`;

    texto.style.fontSize = '28px';
  }else if (total === 4) {
    item.style.height = '50%';
    texto.style.transform = `skewY(${-(90 - angulo)}deg) rotate(${-i * angulo}deg) translateY(-10px)`;
    texto.style.paddingLeft = '16px';
    texto.style.transform = `rotate(40deg)  translateY(100%)`;

  }else if (total === 5) {
    item.style.height = '52.5%';
    texto.style.paddingLeft = '16px';
    texto.style.transform = `rotate(40deg)  translateY(100%)`;

  }else if (total === 6) {
    texto.style.paddingLeft = '5px';
    texto.style.transform = `rotate(45deg)  translateY(100%) skewX(4deg)`;

  }else if (total === 7) {
    texto.style.marginTop = '-20px';
    texto.style.marginLeft = '-60px';
    texto.style.fontSize = '20px';
    texto.style.transform = `rotate(70deg)  translateY(100%) skewX(28deg)`;

  }else if (total === 8) {
      texto.style.marginTop = '-40px';
    texto.style.marginLeft = '-90px';
    texto.style.transform = `rotate(57deg)  translateY(-10%) skewX(22deg)`;
  }
})
}
posicionaFatias();


//----------------------------Roda-Roleta----------------------------//
function girarRoleta() {
  const {itens,total,angulo} = getComidaDados();

  const ajustaAnguloParaCentroDaFatia = 23;
  const rotacoes = 5;
  const indiceComidaSorteada = Math.floor(Math.random() * total);
  const anguloFatia = indiceComidaSorteada* angulo; 
  const rotacao = (360 * rotacoes) + (180 - anguloFatia) + ajustaAnguloParaCentroDaFatia;  

  roleta.style.transition = "transform 4s ease-out";
  roleta.style.transform = `rotate(${rotacao}deg)`;
  setTimeout(() => {
    document.getElementById("result").textContent ="Você sabe: " + itens[indiceComidaSorteada].innerText;
  }, 4000);
}