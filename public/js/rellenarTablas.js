document.addEventListener("DOMContentLoaded", main);


function main() {

    cargarDatosEventos();
    cambiarTitulo();
    cargarDatosUser();



    function cargarDatosEventos() {

        const xhttp = new XMLHttpRequest();
        xhttp.addEventListener("readystatechange", function () {
            if (this.readyState == 4 && this.status == 200) {
                crearTablaHead(JSON.parse(this.responseText));
                crearTablaBody(JSON.parse(this.responseText), );

            }else if (this.status == 403) {
                
                window.location.href = "./login.html";

            }
        });

        xhttp.open("GET", "eventos.php", true);
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


    function cargarDatosAdmins() {

        const xhttp = new XMLHttpRequest();
        xhttp.addEventListener("readystatechange", function () {
            if (this.readyState == 4 && this.status == 200) {

                crearTablaHead(JSON.parse(this.responseText));
                crearTablaBody(JSON.parse(this.responseText));

            }else if (this.status == 403) {
                
                window.location.href = "./login.html";

            }
        });

        xhttp.open("GET", "admins.php", true);
        xhttp.send();

    }







    function cargarDatosAsistentes() {

        const xhttp = new XMLHttpRequest();
        xhttp.addEventListener("readystatechange", function () {
            if (this.readyState == 4 && this.status == 200) {

                crearTablaHead(JSON.parse(this.responseText));
                crearTablaBody(JSON.parse(this.responseText));
            }else if (this.status == 403) {
                
                window.location.href = "./login.html";

            }
        });

        xhttp.open("GET", "asistentes.php", true);
        xhttp.send();

    }



    function cambiarTitulo(){

        let botonEvento = document.getElementById("botonEventos");
        let botonAdmins = document.getElementById("botonAdmins");
        let botonAsistentes = document.getElementById("botonAsistentes");


        console.log(botonEventos);

        botonEventos.addEventListener("click", function(){

            let titulo = document.getElementById("titulo")
            titulo.innerHTML = "Eventos"
            cargarDatosEventos();
        })

        botonAdmins.addEventListener("click", function(){

            let titulo = document.getElementById("titulo")
            titulo.innerHTML = "Admins"
            cargarDatosAdmins();
        })

        botonAsistentes.addEventListener("click", function(){
            let titulo = document.getElementById("titulo")
            titulo.innerHTML = "Asistentes"

            cargarDatosAsistentes();
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
}