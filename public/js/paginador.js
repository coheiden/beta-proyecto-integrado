// LAS FUNCIONES QUE IMPLEMENTA ESTE JS SON EXCLUSIVAMENTE PARA EL PAGINADOR DE LAS TABLAS.


// PETICIONES ASINCRONAS QUE DEVUELVEN LA CANTIDAD DE REGISTROS QUE HAY POR CADA TABLA DE LA BBDD

// Estas peticiones simplemente devuelven el numero total de datos que hay en cada tabla
// Cada una de esas 3 funciones devuelve el valor con la cantidad de datos


function cargarTotalDatosEventos() {

    const xhttp = new XMLHttpRequest();
    xhttp.addEventListener("readystatechange", function () {
        if (this.readyState == 4 && this.status == 200) {
            
            botonesPaginadorEventos(JSON.parse(this.responseText));

        }else if (this.status == 403) {
            
            window.location.href = "login.html";

        }
    });

    xhttp.open("GET", "../src/total_eventos.php", true);
    xhttp.send();

}


function cargarTotalDatosAdmins() {

    const xhttp = new XMLHttpRequest();
    xhttp.addEventListener("readystatechange", function () {
        if (this.readyState == 4 && this.status == 200) {
            
            botonesPaginadorAdmin(JSON.parse(this.responseText));

        }else if (this.status == 403) {
            
            window.location.href = "login.html";

        }
    });

    xhttp.open("GET", "../src/total_admins.php", true);
    xhttp.send();

}



function cargarTotalDatosAsistentes() {

    const xhttp = new XMLHttpRequest();
    xhttp.addEventListener("readystatechange", function () {
        if (this.readyState == 4 && this.status == 200) {
            
            botonesPaginadorAsistentes(JSON.parse(this.responseText));

        }else if (this.status == 403) {
            
            window.location.href = "login.html";

        }
    });

    xhttp.open("GET", "../src/total_asistentes.php", true);
    xhttp.send();

}



// A PARTIR DE AQUI ES LA PARTE QUE HACE DE FRONTEND

// ESTAS 3 FUNCIONES SON LAS QUE PINTAN CADA UNO DE LOS 3 PAGINADORES DISTINTOS EN LA WEB. 1 PAGIADOR POR CADA 1 DE LAS TABLAS

// Dentro de cada una de las funciones llama a la funcion que pinta la tabla del rellenarTablas.js



function botonesPaginadorEventos(total){
    
    let ul = document.getElementById("ul-paginador");
    ul.innerHTML = " ";
    let li_inicio = document.createElement("li");
    li_inicio.className = "page-item click";

    ul.appendChild(li_inicio);

    let span_laquao = document.createElement("span");
    span_laquao.innerHTML = "&laquo;";

    let a_inicio = document.createElement("a");
    a_inicio.className = "page-link click";
    
    li_inicio.appendChild(a_inicio);

    a_inicio.appendChild(span_laquao);

    a_inicio.addEventListener("click", function(){
        
        cargarDatos(0,"eventos");
        

    })
    total = Math.ceil(total["COUNT(id_acto)"] / 10)

    for(let i = 0 ; i < total; i ++){
        let li_simple = document.createElement("li");
        li_simple.className = "page-item click";
        let a_simple = document.createElement("a");
        a_simple.className = "page-link click";
        a_simple.innerHTML = i+1;

        a_simple.addEventListener("click", function(){

            cargarDatos(i,"eventos");

        })

        li_simple.appendChild(a_simple)
        ul.appendChild(li_simple);

    }

    let li_final = document.createElement("li");
    li_final.className = "page-item click";

    let a_final = document.createElement("a");
    a_final.className = "page-link click";
    let span_laquao2 = document.createElement("span");
    span_laquao2.innerHTML = "&raquo;";

    li_final.appendChild(a_final);

    a_final.addEventListener("click", function(){

        cargarDatos(total - 1,"eventos");

    })
    a_final.appendChild(span_laquao2);
    ul.appendChild(li_final);

}   




function botonesPaginadorAdmin(total){
    
    let ul = document.getElementById("ul-paginador");
    ul.innerHTML = " ";
    let li_inicio = document.createElement("li");
    li_inicio.className = "page-item";

    ul.appendChild(li_inicio);

    let span_laquao = document.createElement("span");
    span_laquao.innerHTML = "&laquo; ";

    let a_inicio = document.createElement("a");
    a_inicio.className = "page-link click";
    
    li_inicio.appendChild(a_inicio);

    a_inicio.appendChild(span_laquao);

    a_inicio.addEventListener("click", function(){
        
        cargarDatos(0,"admins");
        

    })
    total = Math.ceil(total["COUNT(id_administrador)"] / 10)

    for(let i = 0 ; i < total; i ++){
        let li_simple = document.createElement("li");
        li_simple.className = "page-item";
        let a_simple = document.createElement("a");
        a_simple.className = "page-link click";
        a_simple.innerHTML = i+1;

        a_simple.addEventListener("click", function(){

            cargarDatos(i,"admins");

        })

        li_simple.appendChild(a_simple)
        ul.appendChild(li_simple);

    }

    let li_final = document.createElement("li");
    li_final.className = "page-item";

    let a_final = document.createElement("a");
    a_final.className = "page-link click";
    let span_laquao2 = document.createElement("span");
    span_laquao2.innerHTML = "&raquo;";

    li_final.appendChild(a_final);

    a_final.addEventListener("click", function(){

        cargarDatos(total - 1,"admins");

    })
    a_final.appendChild(span_laquao2);
    ul.appendChild(li_final);

}   




function botonesPaginadorAsistentes(total){
    

    total = Math.ceil(total["COUNT(id_asistente)"] / 10)

    
    let ul = document.getElementById("ul-paginador");
    ul.innerHTML = " ";

    let li_inicio = document.createElement("li");
    li_inicio.className = "page-item click";

    ul.appendChild(li_inicio);

    let span_laquao = document.createElement("span");
    span_laquao.innerHTML = "&laquo;";

    let a_inicio = document.createElement("a");
    a_inicio.className = "page-link click";
    
    li_inicio.appendChild(a_inicio);

    a_inicio.appendChild(span_laquao);

    a_inicio.addEventListener("click", function(){
        
        cargarDatos(0,"asistentes");
        

    })

    for(let i = 0 ; i < total; i ++){

        let li_simple = document.createElement("li");
        li_simple.className = "page-item";
        let a_simple = document.createElement("a");
        a_simple.className = "page-link click";
        a_simple.innerHTML = i+1;

        a_simple.addEventListener("click", function(){

            cargarDatos(i,"asistentes");

        })

        li_simple.appendChild(a_simple)
        ul.appendChild(li_simple);

    }

    let li_final = document.createElement("li");
    li_final.className = "page-item click";

    let a_final = document.createElement("a");
    a_final.className = "page-link click";
    let span_laquao2 = document.createElement("span");
    span_laquao2.innerHTML = "&raquo;";

    li_final.appendChild(a_final);

    a_final.addEventListener("click", function(){
        
        cargarDatos(total - 1,"asistentes");
        

    })

    a_final.appendChild(span_laquao2);
    ul.appendChild(li_final);


}  