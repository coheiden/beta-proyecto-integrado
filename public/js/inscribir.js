

// Funcion que inscribe a los asistentes, falta crear el modal que envie la informacion
function inscribirAsistente(id){

  
  let formulario_añadir = document.getElementById("formulario_añadir")
  updateAsistente(formulario_añadir)

  let boton_guardar = document.getElementById("guardar");

  boton_guardar.addEventListener("click", reload(), false);

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