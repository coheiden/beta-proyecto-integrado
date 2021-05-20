<?php


include_once "autoload.php";


$admin = new administrador();

$event = new añadir();

session_start();

echo json_encode($event->añadirEvento($admin->obtenerInfo($_SESSION["user_name"])));







?>