document.addEventListener("DOMContentLoaded", main);


function main() {

    cargarDatosEventos();
    cambiarTitulo();



    function cargarDatosEventos() {

        const xhttp = new XMLHttpRequest();
        xhttp.addEventListener("readystatechange", function () {
            if (this.readyState == 4 && this.status == 200) {
                crearTablaHead(JSON.parse(this.responseText));
                crearTablaBody(JSON.parse(this.responseText));

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

        botonEvento.addEventListener("click", function(){

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




    function mostrarDetalle(id) {

        console.log(id);

        divDetalle = document.getElementById("detalle");
        botonCerrar = document.getElementById("botonCerrar");

        botonCerrar.addEventListener("click", function () {
        divDetalle.style.display = "none";
        });


        divDetalle.style.display = "block";
      }
}