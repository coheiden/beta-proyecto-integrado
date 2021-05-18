<?php


include_once "autoload.php";


$admin = new administrador();

$event = new añadir();

session_start();
$event->añadirEvento($admin->obtenerInfo($_SESSION["user_name"]));







?>