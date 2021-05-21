

// Funcion que inscribe a los asistentes, falta crear el modal que envie la informacion
function inscribirAsistente(asistentes, id){

  let div_modal = document.getElementById("detalleFormAñadir");
  div_modal.style.display = "block"
  let select = document.getElementById("select");
  select.innerHTML = "";
  let form = document.getElementById("formulario_añadir")

  botonCerrar = document.getElementById("botonCerrar3");
  menu_lateral.className = " container-fluid m-2 disabled_menu";

  let inputId = document.getElementById("mostrarId");
  inputId.value = id
  inputId.placeholder = id;

  for(value in asistentes){

    let option = document.createElement("option");  
    option.value = asistentes[value]["id_asistente"];
    option.innerHTML = "Asistente "+asistentes[value]["id_asistente"]+" nombre "+asistentes[value]["nombre"];

    select.appendChild(option)


  }


    form.addEventListener("submit", function(e){
          
      e.preventDefault();
      
      menu_lateral.className = " container-fluid m-2";
      
      updateAsistenteActo(this)
      console.log(this)
      updateAsistente(this);



      let boton = document.getElementById("añadirAsistente");

      boton.addEventListener("click", reload(), false);

  })


  botonCerrar.addEventListener("click", function() {

      menu_lateral.className = " container-fluid m-2";

      div_modal.style.display = "none";

      });

}



// Peticion asincrona que envia por post la informacion al update updateAsistente.php que cambia los datos en la BBDD

function updateAsistente(formElement) {

    let formData = new FormData(formElement);
    const xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {

      if (this.readyState == 4 && this.status == 200) {


      }

    };

    xhttp.open("POST", "../src/updateAsistente.php", true);
    xhttp.send(formData);
}


function obtenerAsistente(id) {

  const xhttp = new XMLHttpRequest();
  xhttp.addEventListener("readystatechange", function () {
      if (this.readyState == 4 && this.status == 200) {
          
          inscribirAsistente(JSON.parse(this.responseText), id);

      }
  });

  xhttp.open("GET", "../src/todosAsistentes.php", true);
  xhttp.send();

}


function updateAsistenteActo(formElement) {

  let formData = new FormData(formElement);
  const xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {

    if (this.readyState == 4 && this.status == 200) {


    }

  };

  xhttp.open("POST", "../src/updateAsistenteActo.php", true);
  xhttp.send(formData);
}