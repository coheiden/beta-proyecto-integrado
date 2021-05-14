document.addEventListener("DOMContentLoaded", main);


function main() {

    cambiarTitulo();
    cargarDatosEventos();



    function cargarDatosEventos() {

        const xhttp = new XMLHttpRequest();
        xhttp.addEventListener("readystatechange", function () {
            if (this.readyState == 4 && this.status == 200) {

                crearTablaEventos(JSON.parse(this.responseText));

            }
        });

        xhttp.open("GET", "eventos.php", true);
        xhttp.send();

    }


    function crearTablaEventos(infoEventos) {

        let tabla = document.getElementById("tabla");

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

                crearTablaAdmins(JSON.parse(this.responseText));

            }
        });

        xhttp.open("GET", "admins.php", true);
        xhttp.send();

    }


    
    function crearTablaAdmins(infoEventos) {

        let tabla = document.getElementById("tabla");

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






    function cargarDatosAsistentes() {

        const xhttp = new XMLHttpRequest();
        xhttp.addEventListener("readystatechange", function () {
            if (this.readyState == 4 && this.status == 200) {

                crearTablaAsistentes(JSON.parse(this.responseText));

            }
        });

        xhttp.open("GET", "asistentes.php", true);
        xhttp.send();

    }


    function crearTablaAsistentes(infoEventos) {

        let tabla = document.getElementById("tabla");

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



    function cambiarTitulo(){

        let botonEvento = document.getElementById("botonEventos");
        let botonAdmins = document.getElementById("botonAdmins");
        let botonAsistentes = document.getElementById("botonAsistentes");

        console.log(botonEventos)

        botonEventos.addEventListener("click", function(){

            cargarDatosEventos();
        })

        botonAdmins.addEventListener("click", function(){

            cargarDatosAdmins();
        })

        botonAsistentes.addEventListener("click", function(){

            cargarDatosAsistentes();
        })
    }
}