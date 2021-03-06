

function formularioEventos(){

    let añadirEvento = document.getElementById("añadirEvento");
    let añadirAdmin = document.getElementById("añadirAdmin");
    let añadirAsistente = document.getElementById("añadirAsistente");


    añadirEvento.addEventListener("click", function(){
        
        formularioModal();
        

    })

    añadirAdmin.addEventListener("click", function(){
        
        formularioModalAdmin();

    })

    añadirAsistente.addEventListener("click", function(){
        
        formularioModalAsistente();
        

    })

}

function formularioModal() {

    console.log("evento")

    let modal = document.getElementById("detalleForm");


    let titulo = document.getElementById("formNombre");
    titulo.innerHTML = "Nuevo Evento"

    let form = document.getElementById("formulario-modal");


    form.addEventListener("submit", function(e){
        
        e.preventDefault();
        
        menu_lateral.className = " container-fluid m-2";
        
        enviarInfoForm(this);



        let boton = document.getElementById("enviar");

        boton.addEventListener("click", reload(), false);

    })

    botonCerrar = document.getElementById("botonCerrar2");


    botonCerrar.addEventListener("click", function() {

        menu_lateral.className = " container-fluid m-2";

        modal.style.display = "none";

        });


        modal.style.display = "block";
    

        if (modal.style.display == "block") {
        

            menu_lateral.className = " container-fluid m-2 disabled_menu";
    
        }
}


function formularioModalAdmin() {

    let modal = document.getElementById("detalleFormAdmins");


    let titulo = document.getElementById("formNombreAdmin");
    titulo.innerHTML = "Nuevo Administrador"

    let form = document.getElementById("formulario-modalAdmin");

    form.addEventListener("submit", function(e){
        
        e.preventDefault();
        console.log(this)
        menu_lateral.className = " container-fluid m-2 ";
        
        enviarInfoFormAdmin(this);
        modal.style.display = "none";

        let boton = document.getElementById("enviarAdmin");

        boton.addEventListener("click", reload(), false);
    })



    botonCerrar2 = document.getElementById("botonCerrarAdmin");


    botonCerrar2.addEventListener("click", function() {

        menu_lateral.className = " container-fluid m-2 ";

        modal.style.display = "none";


        });


        modal.style.display = "block";
    
        if (modal.style.display == "block") {
        

            menu_lateral.className = " container-fluid m-2 disabled_menu";
    
        }
}


function formularioModalAsistente() {


    let menu_lateral = document.getElementById("menu_lateral");

    let modal = document.getElementById("detalleFormAsistente");


    let titulo = document.getElementById("formNombreAsistente");
    titulo.innerHTML = "Nuevo Asistente"

    let form = document.getElementById("formulario-modalAsistente");

    form.addEventListener("submit", function(e){
        
        e.preventDefault();

        menu_lateral.className = " container-fluid m-2 ";

        
        enviarInfoFormAsistente(this);
        modal.style.display = "none";

        let boton = document.getElementById("enviarAsistente");

        boton.addEventListener("click", reload(), false);


    })



    botonCerrar2 = document.getElementById("botonCerrarAsistente");


    botonCerrar2.addEventListener("click", function() {

        modal.style.display = "none";

        menu_lateral.className = " container-fluid m-2 ";


        });


    modal.style.display = "block";
    
    if (modal.style.display == "block") {
        

        menu_lateral.className = " container-fluid m-2 disabled_menu";

    }
    

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

// Envio datos formulario ADMINISTRADOR

function enviarInfoFormAdmin(formElement) {

    let formData = new FormData(formElement);
    const xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {

      if (this.readyState == 4 && this.status == 200) {

      } 

    };

    xhttp.open("POST", "../src/añadirAdmin.php", true);
    xhttp.send(formData);
}


function enviarInfoFormAsistente(formElement) {

    let formData = new FormData(formElement);
    const xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {

      if (this.readyState == 4 && this.status == 200) {


      }

    };

    xhttp.open("POST", "../src/añadirAsistente.php", true);
    xhttp.send(formData);
}

// Funcion que recargar la pagina
function reload(){
    reload = location.reload();
}