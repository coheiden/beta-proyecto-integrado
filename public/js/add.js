

function formularioEventos(){

    let añadirEvento = document.getElementById("añadirEvento");
    let añadirAdmin = document.getElementById("añadirAdmin");
    let añadirAsistente = document.getElementById("añadirAsistente");


    añadirEvento.addEventListener("click", function(){
        
        formularioModal("Nuevo Evento");
        

    })


}



function formularioModal(source) {

    let modal = document.getElementById("detalleForm");

    let titulo = document.getElementById("formNombre");
    titulo.innerHTML = source

    let form = document.getElementById("formulario-modal");

    form.addEventListener("submit", function(e){
        
        e.preventDefault();
        
        enviarInfoForm(this);
        modal.style.display = "none";

    })


    botonCerrar2 = document.getElementById("botonCerrar2");


    botonCerrar2.addEventListener("click", function() {

        modal.style.display = "none";

        });


        modal.style.display = "block";
    

}


// PETICION ASINCRONA QUE ENVIA INFORMACION DEL FORMULARIO

function enviarInfoForm(formElement) {

    let formData = new FormData(formElement);
    const xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {

      if (this.readyState == 4 && this.status == 200) {

        // let respuesta = JSON.parse(this.responseText);
        // formularioEventos();

      }

    };

    xhttp.open("POST", "../src/añadirEvento.php", true);
    xhttp.send(formData);
}