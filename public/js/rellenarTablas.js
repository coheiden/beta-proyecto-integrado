document.addEventListener("DOMContentLoaded", main);


function main() {

// Estas 3 funciones deben ejecutarse si o si para que la aplicacion funcione correctamente en la primera carga.
    cargarDatos(0,"eventos");
    cambiarTitulo();
    cargarDatosUsuario();
    formularioEventos();



}

// La 1º funcion que pinta la tabla, esta se encarga de pintar el body de la tabla, la parte principal con los datos que reciben de la base de datos

function crearTablaBody(infoEventos, source) {

    let tabla = document.getElementById("tablaBody");
    tabla.innerHTML = " ";

    for (value in infoEventos) {

        let fila = document.createElement("tr");


            if (source == "eventos") {

                let id = (infoEventos[value]["id_acto"]);

                fila.addEventListener("click", function (e) {

                    fila = e.target.parentNode;

                    mostrarDetalle(id);
                    
                  });
                
            }

        for (valor in infoEventos[value]) {

            let campo = document.createElement("td");
            campo.className = "click";
            campo.innerHTML = infoEventos[value][valor];


            fila.appendChild(campo);
        }


        if (source == "eventos") {

            let campo = document.createElement("td");
            campo.className = "click"
            campo.innerHTML = "añadir";
            if (infoEventos[value]["plazas_libres"] == 0) {
                campo.classList.add("disabled");

            }
            campo.addEventListener("click", function (e) {
                e.cancelBubble = true;
                fila = e.target.parentNode;
                //fila.parentNode.removeChild(tr);
                id = infoEventos[0]["id_acto"];
                inscribirAsistente(id);

            });

            fila.appendChild(campo);
            //console.log(infoEventos[value]["plazas_libres"]);
        }
        tabla.appendChild(fila);

}
}

// La 2º funcion que pinta la tabla , en concreto esta se encarga de pintar el header de la tabla

function crearTablaHead(infoEventos, source) {
    let tabla = document.getElementById("tablaHead");
    tabla.innerHTML = " ";
    if (infoEventos.length > 0) {

        let fila = document.createElement("tr");
        let i = 0
        for (value in infoEventos[0]) {
                let campo = document.createElement("th");
                campo.innerHTML = value;
                console.log(i);
              

                // Ordena de forma ascendente o descendente segun el campo NOT WORKING //solo ordena por id
                if (i < 4) {
                    campo.className = "click";
                    campo.setAttribute("onclick", "sortTable("+i+")")
                    i++;
                }
               

    
                fila.appendChild(campo);
            
            tabla.appendChild(fila);
    
        }
    
        if (source == "eventos") {
            let campo = document.createElement("th");
            campo.innerHTML = "inscribir";
    
            fila.appendChild(campo);
    
        tabla.appendChild(fila);
    
        }

        crearTablaBody(infoEventos,source);

        }else {

            tabla.innerHTML = " <h2>SIN DATOS</h2>";
    } 

 
}


//Esta funcion se encarga de añadir al menu de la izquierda los respectivos addeventlisteners para que pinte la tabla correspondiente a lo que se ha seleccionado 

function cambiarTitulo(){
    cargarTotalDatosEventos();


    let botonEvento = document.getElementById("botonEventos");
    let botonAdmins = document.getElementById("botonAdmins");
    let botonAsistentes = document.getElementById("botonAsistentes");

    // Segun el addeventlistener que se pulsa, carga una o otra de las funciones para pintar la tabla

    botonEvento.addEventListener("click", function(){

        let titulo = document.getElementById("titulo")
        titulo.innerHTML = "Eventos"
        cargarDatos(0,"eventos");
        cargarTotalDatosEventos();
    })

    botonAdmins.addEventListener("click", function(){

        let titulo = document.getElementById("titulo")
        titulo.innerHTML = "Admins"
        cargarDatos(0,"admins");
        cargarTotalDatosAdmins();

        
    })

    botonAsistentes.addEventListener("click", function(){
        let titulo = document.getElementById("titulo")
        titulo.innerHTML = "Asistentes"

        cargarDatos(0,"asistentes");
        cargarTotalDatosAsistentes();

    })
}



// Funcion que pinta en la pantalla en el nav principal el nombre del usuari logeado en ese momento.

function escribirUser(valor){

    let usuario = document.getElementById("usuario");
    let span = document.createElement("span");

    span.innerHTML = valor["usuario"];

    usuario.appendChild(span);

}

// Funcion que genera el modal para ver los datos del evento o administrador

        function dibujarDetalle(datos) {

            detalleBody = document.getElementById("detalleBody");
            detalleNombre = document.getElementById("detalleNombre");
            detalleDescripcion = document.getElementById("detalleDescripcion");
            detalleBody.innerHTML = "";
            detalleNombre.innerHTML = datos["nombre"];
            detalleDescripcion.innerHTML = datos["descripcion"];

                let fila = document.createElement("tr");
        
                for (valor in datos) {
                    //console.log(valor);

                    if (valor != "nombre" && valor != "descripcion") {
                        let campo = document.createElement("td");
                        campo.innerHTML = datos[valor];
            
                        fila.appendChild(campo);
                    }
                }
                detalleBody.appendChild(fila);
        
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
                crearTablaHead(JSON.parse(this.responseText), source);

                // cargarTotalDatosEventos()    
    
    
            }else if (this.status == 403) {
                
                window.location.href = "./login.html";
    
            }
        });
    
        xhttp.open("GET", "../src/"+source+".php?pagina="+pagina, true);
        xhttp.send();
    
    }

// Peticion para cargar la informacion detallada de los eventos
    function mostrarDetalle(id) {

        const xhttp = new XMLHttpRequest();
        xhttp.addEventListener("readystatechange", function () {
            if (this.readyState == 4 && this.status == 200) {
                
                dibujarDetalle(JSON.parse(this.responseText));

            }else if (this.status == 403) {
                
                window.location.href = "../login.html";

            }
        });

        xhttp.open("GET", "../src/eventosDetalle.php?id="+id, true);
        xhttp.send();
    
    }