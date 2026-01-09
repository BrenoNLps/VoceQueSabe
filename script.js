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
      texto.style.transform = `rotate(49deg)  translateY(10%) skewX(7deg)`;
    }else if (total === 4) {
      texto.style.transform = `rotate(45deg)  translateY(-20%)`;

    }else if (total === 5) {

      texto.style.transform = `rotate(45deg)  translateY(-40%)`;

    }else if (total === 6) {

      texto.style.transform = `rotate(45deg)  translateY(-20%) skewX(4deg)`;

    }else if (total === 7) {
      texto.style.transform = `rotate(49deg)  translateY(30%) skewX(9deg)`;

    }else if (total === 8) {
      texto.style.marginTop = '0px';
      texto.style.marginLeft = '-50px';
      texto.style.transform = `rotate(50deg)  translateY(-30%) skewX(17deg)`;
    }
  })
}
posicionaFatias();


//----------------------------Roda-Roleta----------------------------//
function girarRoleta() {
  const {itens,total,angulo} = getComidaDados();

  const ajustaAnguloParaCentroDaFatia = 26;
  const rotacoes = 5;
  const indiceComidaSorteada = Math.floor(Math.random() * total);
  const anguloFatia = indiceComidaSorteada* angulo; 
  const rotacao = (360 * rotacoes) + (180 - anguloFatia) + ajustaAnguloParaCentroDaFatia;  


  const resultTexto =document.getElementById("result");
  resultTexto.style.visibility="hidden";

   //força o navegador a volta para posição inicial antes de iniciar a nova animação
  roleta.style.transition = "none";
  roleta.style.transform = `rotate(0deg)`;
  void roleta.offsetWidth; 


  roleta.style.transition = "transform 4s ease-out";
  roleta.style.transform = `rotate(${rotacao}deg)`;
  setTimeout(() => {

    resultTexto.style.visibility="visible"
    resultTexto.textContent ="Você sabe: " + itens[indiceComidaSorteada].innerText;
  }, 4000);
}

//-------------------------Adicionar-Comida--------------------------//
function adicionarComida(event) {
  event.preventDefault();
  const {total} = getComidaDados();  
  if( total===8){
    alert("Número máximo atingio!")
  }else{
      const input = document.getElementById("txtComida");
    const valor = input.value.trim();

    
    if (valor === "") {
      alert("Digite uma comida!");
      return;
    }

    // cria novo <li class="item">
    const novoItem = document.createElement("li");
    novoItem.classList.add("item");

    const textoItem = document.createElement("span");
    textoItem.classList.add("texto-item");
    textoItem.textContent = valor;
    novoItem.appendChild(textoItem);
    roleta.appendChild(novoItem);


    criarLinhaTabela(novoItem, valor);
    posicionaFatias();
    input.value = "";
  }
}


//-------------------------------------------------------------------//

function visibilidadeFormulario(){
  const body = document.body;
  const container1  = document.getElementById("container_1")
  const container2 = document.getElementById("container_2");
  const flexDirection = window.getComputedStyle(body).flexDirection;


  if(flexDirection=="column"){
      container2.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
  }else{
    if(container1.style.width=="50%" ){
      container2.style.visibility = "hidden";
      container2.style.display = "none";

      container1.style.width="100%";

    }else{
      container2.style.visibility = "visible";
      container2.style.display = "flex";

      container1.style.width="50%";
    }
  }
}