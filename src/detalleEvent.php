<?php

include_once "autoload.php";


$evento = new detalleEvento();
echo json_encode($evento->DetalleEvento($_GET["id"]));







?>