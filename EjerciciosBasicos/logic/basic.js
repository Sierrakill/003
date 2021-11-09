const contenedor = document.getElementById("contenedor");
const textoNuevaEntrada = document.getElementById("textoNuevaEntrada");
const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  agregarLi();
  editarLi();
});



const agregarLi = () => {
  if(!textoNuevaEntrada.value.trim()){
    alert("Agregue un valor valido al input");
    return;
  }else{
  const nuevoLi =  document.createElement("li");
  nuevoLi.innerText = textoNuevaEntrada.value;

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "X";
  deleteButton.addEventListener("click", () => {eliminarLi(nuevoLi)});
  const editButton = document.createElement("button");
  editButton.innerText = "Editar";
  editButton.addEventListener("click", () => {
    editarLi(nuevoLi);
  });
 
  nuevoLi.appendChild (deleteButton);
  nuevoLi.appendChild (editButton);
  contenedor.appendChild(nuevoLi);

  textoNuevaEntrada.value = "";
  }
}

const eliminarLi=(element)=>{
  element.remove();

}
const editarLi=(element)=>{
  const nuevaEntrada = prompt("Ingrese el texto");
  element.innerText = nuevaEntrada;
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "X";
  deleteButton.addEventListener("click", () => {eliminarLi(element)});
  const editButton = document.createElement("button");
  editButton.innerText = "Editar";
  editButton.addEventListener("click", () => {
    editarLi(element);
  });
  
  element.appendChild (deleteButton);
  element.appendChild (editButton);
} 

 btnAgregar.onclick=agregarLi;
 const edicionLi=(liListItem)=>{
   const edicionInput =document.createElement("input");
  const span = liListItem.li.querySelector("span");
   span.innerHTML = "";
   span.appendChild("input");
 }

