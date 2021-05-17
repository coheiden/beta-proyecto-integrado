document.addEventListener("DOMContentLoaded", main);


function main() {

// Estas 3 funciones deben ejecutarse si o si para que la aplicacion funcione correctamente en la primera carga.
    cargarDatos(0,"eventos");
    cambiarTitulo();
    cargarDatosUsuario();

}

// La 1º funcion que pinta la tabla, esta se encarga de pintar el body de la tabla, la parte principal con los datos que reciben de la base de datos

function crearTablaBody(infoEventos) {

    let tabla = document.getElementById("tablaBody");
    tabla.innerHTML = " ";

    for (value in infoEventos) {

        let fila = document.createElement("tr");

            let id = (infoEventos[value]["id_acto"]);

            fila.addEventListener("click", function (e) {
                //e.cancelBubble = true;
                fila = e.target.parentNode;
                //fila.parentNode.removeChild(tr);
                mostrarDetalle(id);
                
              });

        for (valor in infoEventos[value]) {

            let campo = document.createElement("td");
            campo.innerHTML = infoEventos[value][valor];

            fila.appendChild(campo);
        }
        tabla.appendChild(fila);

}
}

// La 2º funcion que pinta la tabla , en concreto esta se encarga de pintar el header de la tabla

function crearTablaHead(infoEventos) {

    let tabla = document.getElementById("tablaHead");
    tabla.innerHTML = " ";
    let fila = document.createElement("tr");
    for (value in infoEventos[0]) {
            let campo = document.createElement("th");
            campo.innerHTML = value;

            fila.appendChild(campo);
        
        tabla.appendChild(fila);

    }
}



//Esta funcion se encarga de añadir al menu de la izquierda los respectivos addeventlisteners para que pinte la tabla correspondiente a lo que se ha seleccionado 

function cambiarTitulo(){

    let botonEvento = document.getElementById("botonEventos");
    let botonAdmins = document.getElementById("botonAdmins");
    let botonAsistentes = document.getElementById("botonAsistentes");

    // Segun el addeventlistener que se pulsa, carga una o otra de las funciones para pintar la tabla

    botonEvento.addEventListener("click", function(){

        let titulo = document.getElementById("titulo")
        titulo.innerHTML = "Eventos"
        cargarDatos(0,"eventos");
    })

    botonAdmins.addEventListener("click", function(){

        let titulo = document.getElementById("titulo")
        titulo.innerHTML = "Admins"
        cargarDatos(0,"admins");
    })

    botonAsistentes.addEventListener("click", function(){
        let titulo = document.getElementById("titulo")
        titulo.innerHTML = "Asistentes"

        cargarDatos(0,"asistentes");
    })
}



// Funcion que pinta en la pantalla en el nav principal el nombre del usuari logeado en ese momento.

function escribirUser(valor){

    let usuario = document.getElementById("usuario");
    let span = document.createElement("span");

    span.innerHTML = valor["usuario"];

    usuario.appendChild(span);

}

    function mostrarDetalle(id) {

        console.log(id);

        divDetalle = document.getElementById("detalle");
        botonCerrar = document.getElementById("botonCerrar");

        botonCerrar.addEventListener("click", function () {
        divDetalle.style.display = "none";
        });


        divDetalle.style.display = "block";
      }




    //   PETICIONES ASINCRONAS PARA CONSEGUIR LA INFORMACIÓN NECESARIA 



// Peticion para conseguir informacino sobre los datos del usuario logeado para mostrarlo en la sesion

    function cargarDatosUsuario(){

        const xhttp = new XMLHttpRequest();
        xhttp.addEventListener("readystatechange", function () {
            if (this.readyState == 4 && this.status == 200) {
                
                escribirUser(JSON.parse(this.responseText));

            }else if (this.status == 403) {
                
                window.location.href = "../login.html";

            }
        });

        xhttp.open("GET", "../src/usuario.php", true);
        xhttp.send();

    }

// Peticion que recibe los datos de las tablas en la bbdd, "admins", "eventos" y "asistentes"

    function cargarDatos(pagina,source) {

        const xhttp = new XMLHttpRequest();
        xhttp.addEventListener("readystatechange", function () {
            if (this.readyState == 4 && this.status == 200) {
                crearTablaHead(JSON.parse(this.responseText));
                crearTablaBody(JSON.parse(this.responseText), );
                cargarTotalDatosEventos()
    
    
            }else if (this.status == 403) {
                
                window.location.href = "./login.html";
    
            }
        });
    
        xhttp.open("GET", "../src/"+source+".php?pagina="+pagina, true);
        xhttp.send();
    
    }