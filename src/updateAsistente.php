<?php


include_once "autoload.php";

$admin = new añadir();

if (!empty($_POST)) {

    $admin->inscribir($_GET["id"]);
    
}








?>