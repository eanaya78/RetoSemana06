let Panel = [];
let ingresoDatos = document.getElementById("contenido");
ingresoDatos.innerHTML = `<input type="texto" id ="txtTarea" placeholder="Ingrese una nueva tarea">
                          <button id="btnNew">Añadir</button>`;
// capturando input
let form = document.getElementById("txtTarea");

// capturando al elemento button
let btnAgregar= document.getElementById("btnNew");

    btnAgregar.addEventListener('click',function(){
        let ing = document.getElementById("txtTarea").value; 
        Panel.push(ing);
        console.log(Panel);
});