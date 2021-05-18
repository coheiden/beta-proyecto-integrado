<?php
// Autoloader que carga tanto clases como interfaces 



function cargadorClases($clase){
    $fichero = "clases/{$clase}.php";
    if(file_exists($fichero)){
        require_once($fichero);
    }
}

function cargadorInterfaces($interfaz){
    $fichero = "interfaces/{$interfaz}.php";
    if(file_exists($fichero)){
        require_once($fichero);
    }
}

spl_autoload_register("cargadorClases");
spl_autoload_register("cargadorInterfaces");





?>