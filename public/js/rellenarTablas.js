document.addEventListener("DOMContentLoaded", main);


function main() {

    cargarDatosEventos(0);
    cambiarTitulo();
    cargarDatosUser();

}

function cargarDatosEventos(pagina) {

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

    xhttp.open("GET", "eventos.php?pagina="+pagina, true);
    xhttp.send();

}


function crearTablaBody(infoEventos) {

    let tabla = document.getElementById("tablaBody");
    tabla.innerHTML = " ";

    for (value in infoEventos) {

        let fila = document.createElement("tr");


        for (valor in infoEventos[value]) {

            let campo = document.createElement("td");
            campo.innerHTML = infoEventos[value][valor];

            fila.appendChild(campo);
        }
        tabla.appendChild(fila);

    }
}

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


function cargarDatosAdmins(pagina) {

    const xhttp = new XMLHttpRequest();
    xhttp.addEventListener("readystatechange", function () {
        if (this.readyState == 4 && this.status == 200) {

            crearTablaHead(JSON.parse(this.responseText));
            crearTablaBody(JSON.parse(this.responseText));
            cargarTotalDatosAdmins()


        }else if (this.status == 403) {
            
            window.location.href = "./login.html";

        }
    });

    xhttp.open("GET", "admins.php?pagina="+pagina, true);
    xhttp.send();

}


function cargarDatosAsistentes(pagina) {

    const xhttp = new XMLHttpRequest();
    xhttp.addEventListener("readystatechange", function () {
        if (this.readyState == 4 && this.status == 200) {

            crearTablaHead(JSON.parse(this.responseText));
            crearTablaBody(JSON.parse(this.responseText));
            cargarTotalDatosAsistentes()


        }else if (this.status == 403) {
            
            window.location.href = "./login.html";

        }
    });

    xhttp.open("GET", "asistentes.php?pagina="+pagina, true);
    xhttp.send();

}



function cambiarTitulo(){

    let botonEvento = document.getElementById("botonEventos");
    let botonAdmins = document.getElementById("botonAdmins");
    let botonAsistentes = document.getElementById("botonAsistentes");

    botonEvento.addEventListener("click", function(){

        let titulo = document.getElementById("titulo")
        titulo.innerHTML = "Eventos"
        cargarDatosEventos(0);
    })

    botonAdmins.addEventListener("click", function(){

        let titulo = document.getElementById("titulo")
        titulo.innerHTML = "Admins"
        cargarDatosAdmins(0);
    })

    botonAsistentes.addEventListener("click", function(){
        let titulo = document.getElementById("titulo")
        titulo.innerHTML = "Asistentes"

        cargarDatosAsistentes(0);
    })
}



function cargarDatosUser() {

    const xhttp = new XMLHttpRequest();
    xhttp.addEventListener("readystatechange", function () {
        if (this.readyState == 4 && this.status == 200) {
            
            escribirUser(JSON.parse(this.responseText));

        }else if (this.status == 403) {
            
            window.location.href = "./login.html";

        }
    });

    xhttp.open("GET", "usuario.php", true);
    xhttp.send();

}


function escribirUser(valor){

    let usuario = document.getElementById("usuario");
    let span = document.createElement("span");

    span.innerHTML = valor["usuario"];

    usuario.appendChild(span);

}


