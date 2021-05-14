document.addEventListener("DOMContentLoaded", main);


function main() {

    cargarDatosEventos();
    cambiarTitulo();



    function cargarDatosEventos() {

        const xhttp = new XMLHttpRequest();
        xhttp.addEventListener("readystatechange", function () {
            if (this.readyState == 4 && this.status == 200) {

                crearTabla(JSON.parse(this.responseText));

            }else if (this.status == 403) {
                
                window.location.href = "./login.html";

            }
        });

        xhttp.open("GET", "eventos.php", true);
        xhttp.send();

    }


    function crearTabla(infoEventos) {

        let tabla = document.getElementById("tabla");
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



    function cargarDatosAdmins() {

        const xhttp = new XMLHttpRequest();
        xhttp.addEventListener("readystatechange", function () {
            if (this.readyState == 4 && this.status == 200) {

                crearTabla(JSON.parse(this.responseText));

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

                crearTabla(JSON.parse(this.responseText));

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

<<<<<<< HEAD
        console.log(botonEventos);

        botonEventos.addEventListener("click", function(){
=======
        botonEvento.addEventListener("click", function(){
>>>>>>> 53127b3f1476090687c23c9f5c85946c7b1ec9f4

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
}