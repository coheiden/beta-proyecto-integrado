document.addEventListener("DOMContentLoaded", main());


function main() {

    // crearMenu();
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



    // function cambiarTitulo(){

    //     let menu = document.getElementsByTagName("li")
    //     console.log(menu)

    //     let titulo = document.getElementById("titulo");

    //     let botonEvento = document.getElementById("botonEventos");
    //     let botonAdmins = document.getElementById("botonAdmins");
    //     let botonAsistentes = document.getElementById("botonAsistentes");

    //     console.log(botonEvento)

    //     // botonEvento.addEventListener("click", function(){

    //     //     console.log("vculo")
    //     //     cargarDatosEventos();
    //     // })
    // }





    // function crearMenu() {
        
    //     evento = "Eventos";
    //     admin = "Admins";
    //     asistente = "Asistentes"

    //     let array = [];

    //     array.push(array, evento, admin, asistente);


    //     let container = document.getElementById('contenedor')

    //     console.log(container)

    //     let cabecera = document.createElement("div");
    //     cabecera.setAttribute = "card bg-seconday p-3";
    //     cabecera.style = "width: 15rem";

    //     let menuCabecera = document.createElement("div");
    //     menuCabecera.setAttribute = "card-header fs-4 fst-italic border border-primary rounded text-center"
    //     menuCabecera.innerHTML = "Menu";

    //     cabecera.appendChild(menuCabecera);

    //     let ul = document.createElement("ul");
    //     ul.setAttribute = "list-group list-group-flush ";

    //     cabecera.appendChild(ul)

    //     for(i = 0 ; i <= 3; i++){

    //         let liPrincipal = document.createElement("li");
    //         liPrincipal.setAttribute = "list-group-item fs-5";
    //         liPrincipal.innerHTML = array[i]

    //             liPrincipal.addEventListener("click", function(){

    //                 if(liPrincipal.innerHTML == "Eventos"){
    //                     cargarDatosEventos();

    //                 }else if(liPrincipal == "Admins"){

    //                     console.log("tabla Admisn")

    //                 }else if(liPrincipal == "Asistentes"){

    //                     console.log("tabla Asistentes")

    //                 }

    //             })

    //         ul.appendChild(liPrincipal)

    //         let liInferior = document.createElement("li");

    //         liInferior.setAttribute = "list-group-item fs-6 font-monospace border-bottom border-dark"
            
    //         ul.appendChild(liInferior)

    //     }

        // container.appendChild(cabecera)
    // }
}