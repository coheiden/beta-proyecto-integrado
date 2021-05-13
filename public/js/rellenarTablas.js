document.addEventListener("DOMContentLoaded", main());


function main(){

    cargarDatosEventos();
    

    function cargarDatosEventos(){

        const xhttp = new XMLHttpRequest();
        xhttp.addEventListener("readystatechange", function(){
            if(this.readyState == 4 && this.status == 200){

                crearTablaEventos(JSON.parse(this.responseText));

            }
        });

        xhttp.open("GET","eventos.php", true);
        xhttp.send();

    }


    function crearTablaEventos(infoEventos){

        let tabla = document.getElementById("tabla");

        for(value in infoEventos){

            let fila = document.createElement("tr");
            

            for(valor in infoEventos[value]){

                let campo = document.createElement("td");
                campo.innerHTML = infoEventos[value][valor];

                fila.appendChild(campo);
            }
            tabla.appendChild(fila);

        }
    } 

}