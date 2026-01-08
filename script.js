const  roleta = document.getElementById("roleta");
const  itens = document.querySelectorAll(".item");
const  tableBody = document.getElementById("tableBody");


//---------------------------Popula-tabela---------------------------//
itens.forEach((item, i)=>{
  const tr = document.createElement("tr");

  const tdnome= document.createElement("td");
  tdnome.textContent = item.querySelector(".texto-item").textContent;


  const tdbutton= document.createElement("td");
  const btnExcluir = document.createElement("button");
  btnExcluir.textContent = "Excluir";
  btnExcluir.classList.add("btnExcluir");
  tdbutton.appendChild(btnExcluir);
  tdbutton.classList.add("tdExcluir");

  tr.appendChild(tdnome);
  tr.appendChild(tdbutton);
  tableBody.appendChild(tr);
})



//-------------------------Posiciona-Comidas-------------------------//
itens.forEach((item, i) => {
  console.log(i);
  const total = itens.length;
  const angulo = 360 / total;
  const texto = item.querySelector(".texto-item");
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

