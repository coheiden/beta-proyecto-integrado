<?php


include_once "autoload.php";

$admin = new añadir();

var_dump($_POST);

if (!empty($_POST)) {

    var_dump($_POST);

    $id = $_POST["id_evento"];


    $admin->inscribir($id);
    
}








?>