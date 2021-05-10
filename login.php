<?php
include_once "autoload.php";
$admin = new administrador;


if (count($_POST) > 0) {
    echo json_encode(["mensaje" => "1"]);
    exit;
    if($admin->comprobarDatosPost($_POST)){ // si comprobarDatosPost
    echo json_encode(["mensaje" => "1"]); // es true respuesta json de "1"
    }else {
        echo json_encode(["mensaje" => "0"]); // si es false respuesta json de "0"
    };
    

}else {
    echo json_encode(["mensaje" => null]); // si no hay post devuelve null
};



?>
