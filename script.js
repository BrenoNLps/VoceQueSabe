const  roleta = document.getElementById("roleta");
const  itens = document.querySelectorAll(".item");
const  tableBody = document.getElementById("tableBody");


//--------------------------Renderiza-Itens--------------------------//
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
